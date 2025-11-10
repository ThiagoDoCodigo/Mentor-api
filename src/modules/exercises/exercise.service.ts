import { handleSequelizeError } from "../../utils/handleSequelizeError";
import { CustomError } from "../../erros/CustomError";
import { ExerciseRepository } from "./exercise.repository";
import { ExercisesRequest } from "./exercise.interface";
import { ExerciseModel } from "./models/exercises.model";
import { ExerciseItem } from "./models/exerciseItem.model";
import { OptionsMultiple } from "./models/optionsMultiple.model";
import { OptionsTrueOrFalse } from "./models/optionsTrueOrFalse.model";
import { ThemeExercise } from "./models/themesExercise.model";
import { ObjectiveExercise } from "./models/objetivesExercise.model";

export class ExerciseService {
  private exerciseRepository: ExerciseRepository;

  constructor(exerciseRepository: ExerciseRepository) {
    this.exerciseRepository = exerciseRepository;
  }

  public createExercise = async (
    request: ExercisesRequest,
    id_user: string
  ) => {
    try {
      const exercise = await this.exerciseRepository.createExercise(
        request,
        id_user
      );

      if (!exercise) {
        throw new CustomError("Erro ao criar exercício", 400, "GenericError");
      }

      return exercise;
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public getExercises = async (
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    try {
      return await this.exerciseRepository.getExercises(page, limit, search);
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public getExercisesByUser = async (
    id_user: string,
    page: number,
    limit: number,
    search?: string
  ) => {
    try {
      return await this.exerciseRepository.getExercisesByUser(
        id_user,
        page,
        limit,
        search
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public getExerciseById = async (id_exercise: string, id_user: string) => {
    try {
      const exercise = await this.exerciseRepository.getExerciseById(
        id_exercise,
        id_user
      );

      if (!exercise) {
        throw new CustomError("Exercício nao encontrado", 404);
      }

      return exercise;
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateExercise = async (
    id_exercise: string,
    id_user: string,
    patch: Partial<ExerciseModel>
  ) => {
    try {
      return await this.exerciseRepository.updateExercise(
        id_exercise,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateExerciseItem = async (
    id_exercise_item: string,
    id_user: string,
    patch: Partial<ExerciseItem>
  ) => {
    try {
      return await this.exerciseRepository.updateExerciseItem(
        id_exercise_item,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateThemeExercise = async (
    id_theme_exercise: string,
    id_user: string,
    patch: Partial<ThemeExercise>
  ) => {
    try {
      return await this.exerciseRepository.updateThemeExercise(
        id_theme_exercise,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateObjectiveExercise = async (
    id_objective_exercises: string,
    id_user: string,
    patch: Partial<ObjectiveExercise>
  ) => {
    try {
      return await this.exerciseRepository.updateObjectiveExercise(
        id_objective_exercises,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateOptionMultiple = async (
    id_optionsMultiple: string,
    id_user: string,
    patch: Partial<OptionsMultiple>
  ) => {
    try {
      return await this.exerciseRepository.updateOptionMultiple(
        id_optionsMultiple,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };

  public updateOptionTrueOrFalse = async (
    id_optionsTrueOrFalse: string,
    id_user: string,
    patch: Partial<OptionsTrueOrFalse>
  ) => {
    try {
      return await this.exerciseRepository.updateOptionTrueOrFalse(
        id_optionsTrueOrFalse,
        id_user,
        patch
      );
    } catch (err: any) {
      handleSequelizeError(err, "Exercício");
    }
  };
}
