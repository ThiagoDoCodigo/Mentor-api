import { handleSequelizeError } from "../../utils/handleSequelizeError";
import { CustomError } from "../../erros/CustomError";
import {
  LessonPlanRequest,
  LessonPlanResponse,
  patchLessonPlan,
  patchLessonPlanResponse,
  patchObjective,
  patchObjectiveResponse,
  patchCompetencies,
  patchCompetenciesResponse,
  patchTheme,
  patchThemeResponse,
  patchTeachingMethodology,
  patchTeachingMethodologyResponse,
  patchTopic,
  patchTopicResponse,
  patchHomework,
  patchHomeworkResponse,
  patchInclusiveAdaptation,
  patchInclusiveAdaptationResponse,
  patchReferences,
  patchReferencesResponse,
  patchClosure,
  patchClosureResponse,
  patchExamplesTopics,
  patchExamplesTopicsResponse,
  patchActivitiesTopics,
  patchActivitiesTopicsResponse,
  patchConnectionsTopics,
  patchConnectionsTopicsResponse,
} from "./lesson_plan.interface";
import { LessonPlanRepository } from "./lesson_plans.repository";

export class LessonPlanService {
  private lessonPlanRepository: LessonPlanRepository;

  constructor(lessonPlanRepository: LessonPlanRepository) {
    this.lessonPlanRepository = lessonPlanRepository;
  }

  public createLessonPlan = async (
    request: LessonPlanRequest,
    id_user: string
  ): Promise<LessonPlanResponse> => {
    try {
      const lessonPlan = await this.lessonPlanRepository.createLessonPlan(
        request,
        id_user
      );

      if (!lessonPlan) {
        throw new CustomError(
          "Erro ao criar plano de aula",
          400,
          "GenericError"
        );
      }

      return lessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Plano de aula");
    }
  };

  public getLessonPlans = async (
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    try {
      const lessonPlans = await this.lessonPlanRepository.getLessonPlans(
        page,
        limit,
        search
      );
      return lessonPlans;
    } catch (err: any) {
      handleSequelizeError(err, "Plano de aula");
    }
  };

  public getLessonPlansByUser = async (
    id_user: string,
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    try {
      const lessonPlans = await this.lessonPlanRepository.getLessonPlansByUser(
        id_user,
        page,
        limit,
        search
      );
      return lessonPlans;
    } catch (err: any) {
      handleSequelizeError(err, "Plano de aula");
    }
  };

  public getLessonPlanById = async (
    id_lesson_plan: string,
    id_user: string
  ) => {
    try {
      const lessonPlan = await this.lessonPlanRepository.getLessonPlanById(
        id_lesson_plan,
        id_user
      );
      return lessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Plano de aula");
    }
  };

  public updateLessonPlan = async (
    id_lesson_plan: string,
    id_user: string,
    patch: patchLessonPlan
  ): Promise<patchLessonPlanResponse> => {
    try {
      const lessonPlan = await this.lessonPlanRepository.updateLessonPlan(
        id_lesson_plan,
        id_user,
        patch
      );
      return lessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Plano de aula");
    }
  };

  public updateObjetivesLessonPlan = async (
    id_objetives_lesson_plan: string,
    id_user: string,
    patch: patchObjective
  ): Promise<patchObjectiveResponse> => {
    try {
      const objetivesLessonPlan =
        await this.lessonPlanRepository.updateObjetivesLessonPlan(
          id_objetives_lesson_plan,
          id_user,
          patch
        );
      return objetivesLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Objetivos do plano de aula");
    }
  };

  public updateCompetenciesLessonPlan = async (
    id_competencies_lesson_plan: string,
    id_user: string,
    patch: patchCompetencies
  ): Promise<patchCompetenciesResponse> => {
    try {
      const competenciesLessonPlan =
        await this.lessonPlanRepository.updateCompetenciesLessonPlan(
          id_competencies_lesson_plan,
          id_user,
          patch
        );
      return competenciesLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Competências do plano de aula");
    }
  };

  public updateThemesLessonPlan = async (
    id_themes_lesson_plan: string,
    id_user: string,
    patch: patchTheme
  ): Promise<patchThemeResponse> => {
    try {
      const themesLessonPlan =
        await this.lessonPlanRepository.updateThemesLessonPlan(
          id_themes_lesson_plan,
          id_user,
          patch
        );
      return themesLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Temas do plano de aula");
    }
  };

  public updateMethodologyLessonPlan = async (
    id_methodology_lesson_plan: string,
    id_user: string,
    patch: patchTeachingMethodology
  ): Promise<patchTeachingMethodologyResponse> => {
    try {
      const methodologyLessonPlan =
        await this.lessonPlanRepository.updateMethodologyLessonPlan(
          id_methodology_lesson_plan,
          id_user,
          patch
        );
      return methodologyLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Metodologia do plano de aula");
    }
  };

  public updateTopicsLessonPlan = async (
    id_topics_lesson_plan: string,
    id_user: string,
    patch: patchTopic
  ): Promise<patchTopicResponse> => {
    try {
      const topicsLessonPlan =
        await this.lessonPlanRepository.updateTopicsLessonPlan(
          id_topics_lesson_plan,
          id_user,
          patch
        );
      return topicsLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Tópicos do plano de aula");
    }
  };

  public updateExamplesTopics = async (
    id_examples_topics: string,
    id_user: string,
    patch: patchExamplesTopics
  ): Promise<patchExamplesTopicsResponse> => {
    try {
      const examplesTopics =
        await this.lessonPlanRepository.updateExamplesTopics(
          id_examples_topics,
          id_user,
          patch
        );
      return examplesTopics;
    } catch (err: any) {
      handleSequelizeError(err, "Exemplos do plano de aula");
    }
  };

  public updateActivitiesTopics = async (
    id_activities_topics: string,
    id_user: string,
    patch: patchActivitiesTopics
  ): Promise<patchActivitiesTopicsResponse> => {
    try {
      const activitiesTopics =
        await this.lessonPlanRepository.updateActivitiesTopics(
          id_activities_topics,
          id_user,
          patch
        );
      return activitiesTopics;
    } catch (err: any) {
      handleSequelizeError(err, "Atividades do plano de aula");
    }
  };

  public updateConnectionsTopics = async (
    id_connections_topics: string,
    id_user: string,
    patch: patchConnectionsTopics
  ): Promise<patchConnectionsTopicsResponse> => {
    try {
      const connectionsTopics =
        await this.lessonPlanRepository.updateConnectionsTopics(
          id_connections_topics,
          id_user,
          patch
        );
      return connectionsTopics;
    } catch (err: any) {
      handleSequelizeError(err, "Conexões do plano de aula");
    }
  };

  public updateHomeworkLessonPlan = async (
    id_homework_lesson_plan: string,
    id_user: string,
    patch: patchHomework
  ): Promise<patchHomeworkResponse> => {
    try {
      const homeworkLessonPlan =
        await this.lessonPlanRepository.updateHomeworkLessonPlan(
          id_homework_lesson_plan,
          id_user,
          patch
        );
      return homeworkLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Trabalho do plano de aula");
    }
  };

  public updateInclusiveAdaptationLessonPlan = async (
    id_inclusive_adaptation_lesson_plan: string,
    id_user: string,
    patch: patchInclusiveAdaptation
  ): Promise<patchInclusiveAdaptationResponse> => {
    try {
      const inclusiveAdaptationLessonPlan =
        await this.lessonPlanRepository.updateInclusiveAdaptationLessonPlan(
          id_inclusive_adaptation_lesson_plan,
          id_user,
          patch
        );
      return inclusiveAdaptationLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Adaptação inclusiva do plano de aula");
    }
  };

  public updateReferencesLessonPlan = async (
    id_references_lesson_plan: string,
    id_user: string,
    patch: patchReferences
  ): Promise<patchReferencesResponse> => {
    try {
      const referencesLessonPlan =
        await this.lessonPlanRepository.updateReferencesLessonPlan(
          id_references_lesson_plan,
          id_user,
          patch
        );
      return referencesLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Referências do plano de aula");
    }
  };

  public updateClosureLessonPlan = async (
    id_closure_lesson_plan: string,
    id_user: string,
    patch: patchClosure
  ): Promise<patchClosureResponse> => {
    try {
      const closureLessonPlan =
        await this.lessonPlanRepository.updateClosureLessonPlan(
          id_closure_lesson_plan,
          id_user,
          patch
        );
      return closureLessonPlan;
    } catch (err: any) {
      handleSequelizeError(err, "Fechamento do plano de aula");
    }
  };
}
