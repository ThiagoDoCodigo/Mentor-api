import sequelize from "../../data/database";
import { Lesson_planModel } from "./models/Lesson_plan.model";
import { Objetives_lesson_planModel } from "./models/Objetives_lesson_plan.model";
import { Competencies_lesson_planModel } from "./models/Competencies_lesson_plan.model";
import { Skills_lesson_planModel } from "./models/Skills_lesson_plan.model";
import { Themes_lesson_planModel } from "./models/Themes_lesson_plan.model";
import { Methodology_lesson_planModel } from "./models/Methodology_lesson_plan.model";
import { Resources_lesson_planModel } from "./models/Resources_lesson_plan.model";
import { Topics_lesson_planModel } from "./models/Topics_lesson_plan.model";
import { Evaluation_lesson_planModel } from "./models/Evaluation_lesson_plan.model";
import { Homework_lesson_planModel } from "./models/Homework_lesson_plan.model";
import { InclusiveAdaptation_lesson_planModel } from "./models/InclusiveAdaptation_lesson_plan.model";
import { Examples_topicsModel } from "./models/Examples_topics.model";
import { Activities_topicsModel } from "./models/Activities_topics.model";
import { Connections_topicsModel } from "./models/Connections_topics.model";
import { References_lesson_planModel } from "./models/References_lesson_plan.model";
import { Closure_lesson_planModel } from "./models/Closure_lesson_plan.model";
import { CustomError } from "../../erros/CustomError";
import { LessonPlanRequest } from "./lesson_plan.interface";
import { Op } from "sequelize";

export class LessonPlanRepository {
  public createLessonPlan = async (
    request: LessonPlanRequest,
    id_user: string
  ) => {
    let lessonPlanCreated: InstanceType<typeof Lesson_planModel> | undefined;

    await sequelize.transaction({ logging: false }, async (transaction) => {
      const lessonPlan = await Lesson_planModel.create(
        {
          id_user,
          subjectLessonPlan: request.subjectLessonPlan,
          descriptionLessonPlan: request.descriptionLessonPlan,
          gradeLevelLessonPlan: request.gradeLevelLessonPlan,
          complexityLevelLessonPlan: request.complexityLevelLessonPlan,
          durationMinutesLessonPlan: request.durationMinutesLessonPlan,
          generalObjective: request.generalObjective,
        },
        { transaction }
      );

      const id_lesson_plan = lessonPlan.id_lesson_plan;

      const promises: Promise<any>[] = [];

      if (request.specificObjectives?.length) {
        promises.push(
          Objetives_lesson_planModel.bulkCreate(
            request.specificObjectives.map((item) => ({
              id_lesson_plan,
              titleObjetivesLessonPlan: item.titleObjetivesLessonPlan,
              contentObjetivesLessonPlan: item.contentObjetivesLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.competencies?.length) {
        promises.push(
          Competencies_lesson_planModel.bulkCreate(
            request.competencies.map((item) => ({
              id_lesson_plan,
              contentCompetenciesLessonPlan: item.contentCompetenciesLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.skills?.length) {
        promises.push(
          Skills_lesson_planModel.bulkCreate(
            request.skills.map((item) => ({
              id_lesson_plan,
              contentSkillsLessonPlan: item.contentSkillsLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.themes?.length) {
        promises.push(
          Themes_lesson_planModel.bulkCreate(
            request.themes.map((item) => ({
              id_lesson_plan,
              titleThemesLessonPlan: item.titleThemesLessonPlan,
              contentThemesLessonPlan: item.contentThemesLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.teachingMethodologies?.length) {
        promises.push(
          Methodology_lesson_planModel.bulkCreate(
            request.teachingMethodologies.map((item) => ({
              id_lesson_plan,
              titleMethodologyLessonPlan: item.titleMethodologyLessonPlan,
              contentMethodologyLessonPlan: item.contentMethodologyLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.resources?.length) {
        promises.push(
          Resources_lesson_planModel.bulkCreate(
            request.resources.map((item) => ({
              id_lesson_plan,
              contentResourcesLessonPlan: item.contentResourcesLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.evaluation) {
        promises.push(
          Evaluation_lesson_planModel.create(
            {
              id_lesson_plan,
              diagnostic: request.evaluation.diagnostic,
              formative: request.evaluation.formative,
              summative: request.evaluation.summative,
            },
            { transaction }
          )
        );
      }

      if (request.homework) {
        promises.push(
          Homework_lesson_planModel.create(
            {
              id_lesson_plan,
              description: request.homework.description,
              objective: request.homework.objective,
            },
            { transaction }
          )
        );
      }

      if (request.inclusiveAdaptation) {
        promises.push(
          InclusiveAdaptation_lesson_planModel.create(
            {
              id_lesson_plan,
              visualImpairment: request.inclusiveAdaptation.visualImpairment,
              learningDifficulties:
                request.inclusiveAdaptation.learningDifficulties,
              highAbilities: request.inclusiveAdaptation.highAbilities,
            },
            { transaction }
          )
        );
      }

      if (request.references?.length) {
        promises.push(
          References_lesson_planModel.bulkCreate(
            request.references.map((item) => ({
              id_lesson_plan,
              contentReferencesLessonPlan: item.contentReferencesLessonPlan,
            })),
            { transaction }
          )
        );
      }

      if (request.closure) {
        promises.push(
          Closure_lesson_planModel.create(
            {
              id_lesson_plan,
              summary: request.closure.summary,
              reflection: request.closure.reflection,
              nextSteps: request.closure.nextSteps,
            },
            { transaction }
          )
        );
      }

      if (request.topics?.length) {
        for (const topic of request.topics) {
          const createdTopic = await Topics_lesson_planModel.create(
            {
              id_lesson_plan,
              titleTopicsLessonPlan: topic.titleTopicsLessonPlan,
              contentTopicsLessonPlan: topic.contentTopicsLessonPlan,
              detailed_explanation_topic_lesson_plan:
                topic.detailed_explanation_topic_lesson_plan,
            },
            { transaction }
          );

          const id_topics_lesson_plan = createdTopic.id_topics_lesson_plan;
          const subPromises: Promise<any>[] = [];

          if (topic.examplesTopicLessonPlan?.length) {
            subPromises.push(
              Examples_topicsModel.bulkCreate(
                topic.examplesTopicLessonPlan.map((example) => ({
                  id_topics_lesson_plan,
                  titleExamplesTopicLessonPlan:
                    example.titleExamplesTopicLessonPlan,
                  contentExamplesTopicLessonPlan:
                    example.contentExamplesTopicLessonPlan,
                })),
                { transaction }
              )
            );
          }

          if (topic.activitiesTopicLessonPlan?.length) {
            subPromises.push(
              Activities_topicsModel.bulkCreate(
                topic.activitiesTopicLessonPlan.map((activity) => ({
                  id_topics_lesson_plan,
                  titleActivitiesTopicLessonPlan:
                    activity.titleActivitiesTopicLessonPlan,
                  contentActivitiesTopicLessonPlan:
                    activity.contentActivitiesTopicLessonPlan,
                  explicationActivitiesTopicLessonPlan:
                    activity.explicationActivitiesTopicLessonPlan,
                })),
                { transaction }
              )
            );
          }

          if (topic.connectionsTopicLessonPlan?.length) {
            subPromises.push(
              Connections_topicsModel.bulkCreate(
                topic.connectionsTopicLessonPlan.map((connection) => ({
                  id_topics_lesson_plan,
                  titleConnectionsTopics: connection.titleConnectionsTopics,
                  contentConnectionsTopics: connection.contentConnectionsTopics,
                })),
                { transaction }
              )
            );
          }

          await Promise.all(subPromises);
        }
      }

      await Promise.all(promises);

      lessonPlanCreated = lessonPlan;
    });

    if (!lessonPlanCreated) {
      throw new CustomError("Erro ao criar plano de aula", 400, "GenericError");
    }

    const fullLessonPlan = await Lesson_planModel.findByPk(
      lessonPlanCreated.id_lesson_plan,
      {
        include: [
          { model: Objetives_lesson_planModel, as: "objetives_lesson_plan" },
          {
            model: Competencies_lesson_planModel,
            as: "competencies_lesson_plan",
          },
          { model: Skills_lesson_planModel, as: "skills_lesson_plan" },
          { model: Themes_lesson_planModel, as: "themes_lesson_plan" },
          {
            model: Methodology_lesson_planModel,
            as: "methodology_lesson_plan",
          },
          { model: Resources_lesson_planModel, as: "resources_lesson_plan" },
          {
            model: Topics_lesson_planModel,
            as: "topics_lesson_plan",
            include: [
              { model: Examples_topicsModel, as: "examples_topics" },
              { model: Activities_topicsModel, as: "activities_topics" },
              { model: Connections_topicsModel, as: "connections_topics" },
            ],
          },
          { model: Evaluation_lesson_planModel, as: "evaluation_lesson_plan" },
          { model: Homework_lesson_planModel, as: "homework_lesson_plan" },
          {
            model: InclusiveAdaptation_lesson_planModel,
            as: "inclusive_adaptation_lesson_plan",
          },
          { model: References_lesson_planModel, as: "references_lesson_plan" },
          { model: Closure_lesson_planModel, as: "closure_lesson_plan" },
        ],
      }
    );

    return fullLessonPlan;
  };

  public getLessonPlans = async (
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    if (limit > 100) {
      throw new CustomError(
        "Limite de registros excedido",
        400,
        "GenericError"
      );
    }

    const offset = (page - 1) * limit;

    if (search) search = search.toLowerCase().trim();

    const whereClause = search
      ? {
          [Op.or]: [
            { subjectLessonPlan: { [Op.iLike]: `%${search}%` } },
            { descriptionLessonPlan: { [Op.iLike]: `%${search}%` } },
          ],
        }
      : undefined;

    const { rows: lessonPlans, count: total } =
      await Lesson_planModel.findAndCountAll({
        limit,
        offset,
        distinct: true,
        include: [
          { model: Objetives_lesson_planModel, as: "objetives_lesson_plan" },
          {
            model: Competencies_lesson_planModel,
            as: "competencies_lesson_plan",
          },
          { model: Skills_lesson_planModel, as: "skills_lesson_plan" },
          { model: Themes_lesson_planModel, as: "themes_lesson_plan" },
          {
            model: Methodology_lesson_planModel,
            as: "methodology_lesson_plan",
          },
          { model: Resources_lesson_planModel, as: "resources_lesson_plan" },
          {
            model: Topics_lesson_planModel,
            as: "topics_lesson_plan",
            include: [
              { model: Examples_topicsModel, as: "examples_topics" },
              { model: Activities_topicsModel, as: "activities_topics" },
              { model: Connections_topicsModel, as: "connections_topics" },
            ],
          },
          { model: Evaluation_lesson_planModel, as: "evaluation_lesson_plan" },
          { model: Homework_lesson_planModel, as: "homework_lesson_plan" },
          {
            model: InclusiveAdaptation_lesson_planModel,
            as: "inclusive_adaptation_lesson_plan",
          },
          { model: References_lesson_planModel, as: "references_lesson_plan" },
          { model: Closure_lesson_planModel, as: "closure_lesson_plan" },
        ],
        where: whereClause,
        order: [["createdAt", "DESC"]],
      });

    const totalPages = Math.ceil(total / limit);

    return {
      total,
      totalPages,
      currentPage: page,
      data: lessonPlans,
    };
  };

  public getLessonPlansByUser = async (
    id_user: string,
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    if (limit > 100) {
      throw new CustomError(
        "Limite de registros excedido",
        400,
        "GenericError"
      );
    }

    const offset = (page - 1) * limit;

    if (search) search = search.toLowerCase().trim();

    const whereClause = search
      ? {
          [Op.or]: [
            { subjectLessonPlan: { [Op.iLike]: `%${search}%` } },
            { descriptionLessonPlan: { [Op.iLike]: `%${search}%` } },
          ],
        }
      : undefined;

    const { rows: lessonPlans, count: total } =
      await Lesson_planModel.findAndCountAll({
        limit,
        offset,
        distinct: true,
        include: [
          { model: Objetives_lesson_planModel, as: "objetives_lesson_plan" },
          {
            model: Competencies_lesson_planModel,
            as: "competencies_lesson_plan",
          },
          { model: Skills_lesson_planModel, as: "skills_lesson_plan" },
          { model: Themes_lesson_planModel, as: "themes_lesson_plan" },
          {
            model: Methodology_lesson_planModel,
            as: "methodology_lesson_plan",
          },
          { model: Resources_lesson_planModel, as: "resources_lesson_plan" },
          {
            model: Topics_lesson_planModel,
            as: "topics_lesson_plan",
            include: [
              { model: Examples_topicsModel, as: "examples_topics" },
              { model: Activities_topicsModel, as: "activities_topics" },
              { model: Connections_topicsModel, as: "connections_topics" },
            ],
          },
          { model: Evaluation_lesson_planModel, as: "evaluation_lesson_plan" },
          { model: Homework_lesson_planModel, as: "homework_lesson_plan" },
          {
            model: InclusiveAdaptation_lesson_planModel,
            as: "inclusive_adaptation_lesson_plan",
          },
          { model: References_lesson_planModel, as: "references_lesson_plan" },
          { model: Closure_lesson_planModel, as: "closure_lesson_plan" },
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
      data: lessonPlans,
    };
  };

  public getLessonPlanById = async (
    id_lesson_plan: string,
    id_user: string
  ) => {
    const lessonPlan = await Lesson_planModel.findByPk(id_lesson_plan, {
      include: [
        { model: Objetives_lesson_planModel, as: "objetives_lesson_plan" },
        {
          model: Competencies_lesson_planModel,
          as: "competencies_lesson_plan",
        },
        { model: Skills_lesson_planModel, as: "skills_lesson_plan" },
        { model: Themes_lesson_planModel, as: "themes_lesson_plan" },
        {
          model: Methodology_lesson_planModel,
          as: "methodology_lesson_plan",
        },
        { model: Resources_lesson_planModel, as: "resources_lesson_plan" },
        {
          model: Topics_lesson_planModel,
          as: "topics_lesson_plan",
          include: [
            { model: Examples_topicsModel, as: "examples_topics" },
            { model: Activities_topicsModel, as: "activities_topics" },
            { model: Connections_topicsModel, as: "connections_topics" },
          ],
        },
        { model: Evaluation_lesson_planModel, as: "evaluation_lesson_plan" },
        { model: Homework_lesson_planModel, as: "homework_lesson_plan" },
        {
          model: InclusiveAdaptation_lesson_planModel,
          as: "inclusive_adaptation_lesson_plan",
        },
        { model: References_lesson_planModel, as: "references_lesson_plan" },
        { model: Closure_lesson_planModel, as: "closure_lesson_plan" },
      ],
    });

    if (lessonPlan?.id_user !== id_user) {
      throw new CustomError(
        "Plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    return lessonPlan;
  };

  public updateLessonPlan = async (
    id_lesson_plan: string,
    id_user: string,
    patch: Partial<Lesson_planModel>
  ) => {
    const lessonPlan = await Lesson_planModel.findByPk(id_lesson_plan);
    if (!lessonPlan) {
      throw new CustomError(
        "Plano de aula nao encontrado",
        404,
        "GenericError"
      );
    }

    if (lessonPlan.id_user !== id_user) {
      throw new CustomError(
        "Plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await lessonPlan.update(patch);
    return lessonPlan;
  };

  public updateObjetivesLessonPlan = async (
    id_objetives_lesson_plan: string,
    id_user: string,
    patch: Partial<Objetives_lesson_planModel>
  ) => {
    const objetivesLessonPlan = await Objetives_lesson_planModel.findOne({
      where: { id_objetives_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!objetivesLessonPlan) {
      throw new CustomError(
        "Objetivos do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (objetivesLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Objetivos do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await objetivesLessonPlan.update(patch);
    return objetivesLessonPlan;
  };

  public updateCompetenciesLessonPlan = async (
    id_competencies_lesson_plan: string,
    id_user: string,
    patch: Partial<Competencies_lesson_planModel>
  ) => {
    const competenciesLessonPlan = await Competencies_lesson_planModel.findOne({
      where: { id_competencies_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!competenciesLessonPlan) {
      throw new CustomError(
        "Competências do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (competenciesLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Competências do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await competenciesLessonPlan.update(patch);
    return competenciesLessonPlan;
  };

  public updateSkillsLessonPlan = async (
    id_skills_lesson_plan: string,
    id_user: string,
    patch: Partial<Skills_lesson_planModel>
  ) => {
    const skillsLessonPlan = await Skills_lesson_planModel.findOne({
      where: { id_skills_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!skillsLessonPlan) {
      throw new CustomError(
        "Habilidades do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (skillsLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Habilidades do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await skillsLessonPlan.update(patch);
    return skillsLessonPlan;
  };

  public updateThemesLessonPlan = async (
    id_themes_lesson_plan: string,
    id_user: string,
    patch: Partial<Themes_lesson_planModel>
  ) => {
    const themesLessonPlan = await Themes_lesson_planModel.findOne({
      where: { id_themes_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!themesLessonPlan) {
      throw new CustomError(
        "Temas do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (themesLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Temas do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await themesLessonPlan.update(patch);
    return themesLessonPlan;
  };

  public updateMethodologyLessonPlan = async (
    id_methodology_lesson_plan: string,
    id_user: string,
    patch: Partial<Methodology_lesson_planModel>
  ) => {
    const methodologyLessonPlan = await Methodology_lesson_planModel.findOne({
      where: { id_methodology_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!methodologyLessonPlan) {
      throw new CustomError(
        "Metodologia do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (methodologyLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Metodologia do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await methodologyLessonPlan.update(patch);
    return methodologyLessonPlan;
  };

  public updateResourcesLessonPlan = async (
    id_resources_lesson_plan: string,
    id_user: string,
    patch: Partial<Resources_lesson_planModel>
  ) => {
    const resourcesLessonPlan = await Resources_lesson_planModel.findOne({
      where: { id_resources_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!resourcesLessonPlan) {
      throw new CustomError(
        "Recursos do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (resourcesLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Recursos do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await resourcesLessonPlan.update(patch);
    return resourcesLessonPlan;
  };

  public updateTopicsLessonPlan = async (
    id_topics_lesson_plan: string,
    id_user: string,
    patch: Partial<Topics_lesson_planModel>
  ) => {
    const topicsLessonPlan = await Topics_lesson_planModel.findOne({
      where: { id_topics_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!topicsLessonPlan) {
      throw new CustomError(
        "Tópicos do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (topicsLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Tópicos do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await topicsLessonPlan.update(patch);
    return topicsLessonPlan;
  };

  public updateExamplesTopics = async (
    id_examples_topics: string,
    id_user: string,
    patch: Partial<Examples_topicsModel>
  ) => {
    const examplesTopics = await Examples_topicsModel.findOne({
      where: { id_examples_topics },
      include: [
        {
          model: Topics_lesson_planModel,
          as: "topics_lesson_plan",
          include: [{ model: Lesson_planModel, as: "lesson_plan" }],
        },
      ],
    });

    if (!examplesTopics) {
      throw new CustomError(
        "Exemplos do tópico do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (examplesTopics?.topics_lesson_plan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Exemplos do tópico do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await examplesTopics.update(patch);
    return examplesTopics;
  };

  public updateActivitiesTopics = async (
    id_activities_topics: string,
    id_user: string,
    patch: Partial<Activities_topicsModel>
  ) => {
    const activitiesTopics = await Activities_topicsModel.findOne({
      where: { id_activities_topics },
      include: [
        {
          model: Topics_lesson_planModel,
          as: "topics_lesson_plan",
          include: [{ model: Lesson_planModel, as: "lesson_plan" }],
        },
      ],
    });

    if (!activitiesTopics) {
      throw new CustomError(
        "Atividades do tópico do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (
      activitiesTopics?.topics_lesson_plan?.lesson_plan?.id_user !== id_user
    ) {
      throw new CustomError(
        "Atividades do tópico do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await activitiesTopics.update(patch);
    return activitiesTopics;
  };

  public updateConnectionsTopics = async (
    id_connections_topics: string,
    id_user: string,
    patch: Partial<Connections_topicsModel>
  ) => {
    const connectionsTopics = await Connections_topicsModel.findOne({
      where: { id_connections_topics },
      include: [
        {
          model: Topics_lesson_planModel,
          as: "topics_lesson_plan",
          include: [{ model: Lesson_planModel, as: "lesson_plan" }],
        },
      ],
    });

    if (!connectionsTopics) {
      throw new CustomError(
        "Conexões do tópico do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (
      connectionsTopics?.topics_lesson_plan?.lesson_plan?.id_user !== id_user
    ) {
      throw new CustomError(
        "Conexões do tópico do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await connectionsTopics.update(patch);
    return connectionsTopics;
  };

  public updateEvaluationLessonPlan = async (
    id_evaluation_lesson_plan: string,
    id_user: string,
    patch: Partial<Evaluation_lesson_planModel>
  ) => {
    const evaluationLessonPlan = await Evaluation_lesson_planModel.findOne({
      where: { id_evaluation_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!evaluationLessonPlan) {
      throw new CustomError(
        "Avaliação do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (evaluationLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Avaliação do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await evaluationLessonPlan.update(patch);
    return evaluationLessonPlan;
  };

  public updateHomeworkLessonPlan = async (
    id_homework_lesson_plan: string,
    id_user: string,
    patch: Partial<Homework_lesson_planModel>
  ) => {
    const homeworkLessonPlan = await Homework_lesson_planModel.findOne({
      where: { id_homework_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!homeworkLessonPlan) {
      throw new CustomError(
        "Trabalho do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (homeworkLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Trabalho do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await homeworkLessonPlan.update(patch);
    return homeworkLessonPlan;
  };

  public updateInclusiveAdaptationLessonPlan = async (
    id_inclusive_adaptation_lesson_plan: string,
    id_user: string,
    patch: Partial<InclusiveAdaptation_lesson_planModel>
  ) => {
    const inclusiveAdaptationLessonPlan =
      await InclusiveAdaptation_lesson_planModel.findOne({
        where: { id_inclusive_adaptation_lesson_plan },
        include: [{ model: Lesson_planModel, as: "lesson_plan" }],
      });

    if (!inclusiveAdaptationLessonPlan) {
      throw new CustomError(
        "Adaptação inclusiva do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (inclusiveAdaptationLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Adaptação inclusiva do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await inclusiveAdaptationLessonPlan.update(patch);
    return inclusiveAdaptationLessonPlan;
  };

  public updateReferencesLessonPlan = async (
    id_references_lesson_plan: string,
    id_user: string,
    patch: Partial<References_lesson_planModel>
  ) => {
    const referencesLessonPlan = await References_lesson_planModel.findOne({
      where: { id_references_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!referencesLessonPlan) {
      throw new CustomError(
        "Referências do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (referencesLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Referências do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await referencesLessonPlan.update(patch);
    return referencesLessonPlan;
  };

  public updateClosureLessonPlan = async (
    id_closure_lesson_plan: string,
    id_user: string,
    patch: Partial<Closure_lesson_planModel>
  ) => {
    const closureLessonPlan = await Closure_lesson_planModel.findOne({
      where: { id_closure_lesson_plan },
      include: [{ model: Lesson_planModel, as: "lesson_plan" }],
    });

    if (!closureLessonPlan) {
      throw new CustomError(
        "Fechamento do plano de aula não encontrado",
        404,
        "GenericError"
      );
    }

    if (closureLessonPlan?.lesson_plan?.id_user !== id_user) {
      throw new CustomError(
        "Fechamento do plano de aula nao pertence ao usuário",
        403,
        "GenericError"
      );
    }

    await closureLessonPlan.update(patch);
    return closureLessonPlan;
  };
}
