import sequelize from "../../data/database";
import { ExerciseModel } from "./models/exercises.model";
import { ExerciseItem } from "./models/exerciseItem.model";
import { OptionsMultiple } from "./models/optionsMultiple.model";
import { OptionsTrueOrFalse } from "./models/optionsTrueOrFalse.model";
import { ThemeExercise } from "./models/themesExercise.model";
import { ObjectiveExercise } from "./models/objetivesExercise.model";
import { CustomError } from "../../erros/CustomError";
import { Op } from "sequelize";
import {
  ExercisesRequest,
  ExercisesResponse,
  patchExercises,
  patchExercisesResponse,
  patchExerciseItem,
  patchExerciseItemResponse,
  patchThemeExercises,
  patchThemeExercisesResponse,
  patchObjectivesExercises,
  patchObjectivesExercisesResponse,
  patchMultipleOptions,
  patchMultipleOptionsResponse,
  patchTrueOrFalseOptions,
  patchTrueOrFalseOptionsResponse,
} from "./exercise.interface";

export class ExerciseRepository {
  public createExercise = async (
    request: ExercisesRequest,
    id_user: string
  ): Promise<ExercisesResponse | null> => {
    return await sequelize.transaction(
      { logging: false },
      async (transaction) => {
        const exercise = await ExerciseModel.create(
          {
            id_user,
            subjectExercises: request.subject_exercises,
            descriptionExercises: request.description_exercises,
            gradeLevelExercises: request.grade_level_exercises,
            complexityLevelExercises: request.complexity_level_exercises,
            durationMinutesExercises: request.duration_minutes_exercises,
          },
          { transaction }
        );

        const id_exercise = exercise.id_exercise;
        const promises: Promise<any>[] = [];

        if (request.exercises?.length) {
          for (const item of request.exercises) {
            const exerciseItem = await ExerciseItem.create(
              {
                id_exercise,
                type_exercise: item.type_exercise,
                title_exercise: item.title_exercise,
                content_exercise: item.content_exercise,
                correct_answer_exercise: item.correct_answer_exercise,
                explanation_exercise: item.explanation_exercise,
                bloom_level_exercise: item.bloom_level,
              },
              { transaction }
            );

            const id_exercise_item = exerciseItem.id_exercise_item;
            const subPromises: Promise<any>[] = [];

            if (
              item.type_exercise === "multipla-escolha" &&
              item.options_exercise_multipla_escolha?.length
            ) {
              subPromises.push(
                OptionsMultiple.bulkCreate(
                  item.options_exercise_multipla_escolha.map((opt) => ({
                    id_exercise_item,
                    option: opt.option,
                    content_option: opt.content_option,
                  })),
                  { transaction }
                )
              );
            }

            if (
              item.type_exercise === "verdadeiro-falso" &&
              item.options_exercise_verdadeiro_falso?.length
            ) {
              subPromises.push(
                OptionsTrueOrFalse.bulkCreate(
                  item.options_exercise_verdadeiro_falso.map((opt) => ({
                    id_exercise_item,
                    option: opt.option,
                    content_option: opt.content_option,
                  })),
                  { transaction }
                )
              );
            }

            await Promise.all(subPromises);
          }
        }

        if (request.themes_exercises?.length) {
          promises.push(
            ThemeExercise.bulkCreate(
              request.themes_exercises.map((theme) => ({
                id_exercise,
                titleThemeExercises: theme.titleThemeExercises,
                contentThemeExercises: theme.contentThemeExercises,
              })),
              { transaction }
            )
          );
        }

        if (request.objectives_exercises?.length) {
          promises.push(
            ObjectiveExercise.bulkCreate(
              request.objectives_exercises.map((objective) => ({
                id_exercise,
                titleObjectiveExercises: objective.titleObjectiveExercises,
                contentObjectiveExercises: objective.contentObjectiveExercises,
              })),
              { transaction }
            )
          );
        }

        await Promise.all(promises);

        const fullExercise = await ExerciseModel.findByPk(id_exercise, {
          include: [
            {
              model: ExerciseItem,
              as: "execiseItems",
              include: [
                { model: OptionsMultiple, as: "optionsMultiple" },
                { model: OptionsTrueOrFalse, as: "optionsTrueOrFalse" },
              ],
            },
            { model: ThemeExercise, as: "themeExercises" },
            { model: ObjectiveExercise, as: "objectiveExercises" },
          ],
          transaction,
        });

        return fullExercise;
      }
    );
  };

  public getExercises = async (
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    if (limit > 100) {
      throw new CustomError("Limite de itens excedido", 400);
    }

    const offset = (page - 1) * limit;

    if (search) search = search.toLowerCase().trim();

    const whereClause = search
      ? {
          [Op.or]: [
            { subjectExercises: { [Op.like]: `%${search}%` } },
            { descriptionExercises: { [Op.like]: `%${search}%` } },
          ],
        }
      : undefined;

    const { rows: exercises, count: total } =
      await ExerciseModel.findAndCountAll({
        limit,
        offset,
        distinct: true,
        include: [
          {
            model: ExerciseItem,
            as: "execiseItems",
            include: [
              { model: OptionsMultiple, as: "optionsMultiple" },
              { model: OptionsTrueOrFalse, as: "optionsTrueOrFalse" },
            ],
          },
          { model: ThemeExercise, as: "themeExercises" },
          { model: ObjectiveExercise, as: "objectiveExercises" },
        ],
        where: whereClause,
        order: [["createdAt", "DESC"]],
      });

    const totalPages = Math.ceil(total / limit);

    return {
      total,
      totalPages,
      currentPage: page,
      data: exercises,
    };
  };

  public getExercisesByUser = async (
    id_user: string,
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    if (limit > 100) {
      throw new CustomError("Limite de itens excedido", 400);
    }

    const offset = (page - 1) * limit;

    if (search) search = search.toLowerCase().trim();

    const whereClause = search
      ? {
          [Op.or]: [
            { subjectExercises: { [Op.like]: `%${search}%` } },
            { descriptionExercises: { [Op.like]: `%${search}%` } },
          ],
        }
      : undefined;

    const { rows: exercises, count: total } =
      await ExerciseModel.findAndCountAll({
        limit,
        offset,
        distinct: true,
        include: [
          {
            model: ExerciseItem,
            as: "execiseItems",
            include: [
              { model: OptionsMultiple, as: "optionsMultiple" },
              { model: OptionsTrueOrFalse, as: "optionsTrueOrFalse" },
            ],
          },
          { model: ThemeExercise, as: "themeExercises" },
          { model: ObjectiveExercise, as: "objectiveExercises" },
        ],
        where: {
          id_user,
          ...whereClause,
        },
        order: [["createdAt", "DESC"]],
      });

    const totalPages = Math.ceil(total / limit);

    return {
      total,
      totalPages,
      currentPage: page,
      data: exercises,
    };
  };

  public getExerciseById = async (id_exercise: string, id_user: string) => {
    const exercise = await ExerciseModel.findByPk(id_exercise, {
      include: [
        {
          model: ExerciseItem,
          as: "execiseItems",
          include: [
            { model: OptionsMultiple, as: "optionsMultiple" },
            { model: OptionsTrueOrFalse, as: "optionsTrueOrFalse" },
          ],
        },
        { model: ThemeExercise, as: "themeExercises" },
        { model: ObjectiveExercise, as: "objectiveExercises" },
      ],
    });
    if (exercise?.id_user !== id_user) {
      throw new CustomError("Exercicio não pertence ao usuario", 404);
    }
    return exercise;
  };

  public updateExercise = async (
    id_exercise: string,
    id_user: string,
    patch: patchExercises
  ): Promise<patchExercisesResponse> => {
    const exercise = await ExerciseModel.findByPk(id_exercise);
    if (!exercise) throw new CustomError("Exercício não encontrado", 404);
    if (exercise.id_user !== id_user)
      throw new CustomError("Exercício não pertence ao usuário", 403);

    await exercise.update(patch);
    return exercise;
  };

  public updateExerciseItem = async (
    id_exercise_item: string,
    id_user: string,
    patch: patchExerciseItem
  ): Promise<patchExerciseItemResponse> => {
    const item = await ExerciseItem.findOne({
      where: { id_exercise_item },
      include: [{ model: ExerciseModel, as: "exercise" }],
    });

    if (!item) throw new CustomError("Item de exercício não encontrado", 404);
    if (item.exercise?.id_user !== id_user)
      throw new CustomError("Item não pertence ao usuário", 403);

    await item.update(patch);
    return item;
  };

  public updateThemeExercise = async (
    id_theme_exercise: string,
    id_user: string,
    patch: patchThemeExercises
  ): Promise<patchThemeExercisesResponse> => {
    const theme = await ThemeExercise.findOne({
      where: { id_theme_exercise },
      include: [{ model: ExerciseModel, as: "exercise" }],
    });

    if (!theme) throw new CustomError("Tema não encontrado", 404);
    if (theme.exercise?.id_user !== id_user)
      throw new CustomError("Tema não pertence ao usuário", 403);

    await theme.update(patch);
    return theme;
  };

  public updateObjectiveExercise = async (
    id_objective_exercise: string,
    id_user: string,
    patch: patchObjectivesExercises
  ): Promise<patchObjectivesExercisesResponse> => {
    const obj = await ObjectiveExercise.findOne({
      where: { id_objective_exercise },
      include: [{ model: ExerciseModel, as: "exercise" }],
    });

    if (!obj) throw new CustomError("Objetivo não encontrado", 404);
    if (obj.exercise?.id_user !== id_user)
      throw new CustomError("Objetivo não pertence ao usuário", 403);

    await obj.update(patch);
    return obj;
  };

  public updateOptionMultiple = async (
    id_optionsMultiple: string,
    id_user: string,
    patch: patchMultipleOptions
  ): Promise<patchMultipleOptionsResponse> => {
    const option = await OptionsMultiple.findOne({
      where: { id_optionsMultiple },
      include: [
        {
          model: ExerciseItem,
          as: "exerciseItem",
          include: [{ model: ExerciseModel, as: "exercise" }],
        },
      ],
    });

    if (!option) throw new CustomError("Opção múltipla não encontrada", 404);
    if (option.exerciseItem?.exercise?.id_user !== id_user)
      throw new CustomError("Opção não pertence ao usuário", 403);

    await option.update(patch);
    return option;
  };

  public updateOptionTrueOrFalse = async (
    id_optionsTrueOrFalse: string,
    id_user: string,
    patch: patchTrueOrFalseOptions
  ): Promise<patchTrueOrFalseOptionsResponse> => {
    const option = await OptionsTrueOrFalse.findOne({
      where: { id_optionsTrueOrFalse },
      include: [
        {
          model: ExerciseItem,
          as: "exerciseItem",
          include: [{ model: ExerciseModel, as: "exercise" }],
        },
      ],
    });

    if (!option) throw new CustomError("Opção V/F não encontrada", 404);
    if (option.exerciseItem?.exercise?.id_user !== id_user)
      throw new CustomError("Opção não pertence ao usuário", 403);

    await option.update(patch);
    return option;
  };
}
