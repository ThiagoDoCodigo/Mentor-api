import { handleSequelizeError } from "../../utils/handleSequelizeError";
import { CustomError } from "../../erros/CustomError";
import { LessonPlanRequest } from "./lesson_plan.interface";
import { LessonPlanRepository } from "./lesson_plans.repository";
import { Lesson_planModel } from "./models/Lesson_plan.model";
import { Objetives_lesson_planModel } from "./models/Objetives_lesson_plan.model";
import { Competencies_lesson_planModel } from "./models/Competencies_lesson_plan.model";
import { Themes_lesson_planModel } from "./models/Themes_lesson_plan.model";
import { Methodology_lesson_planModel } from "./models/Methodology_lesson_plan.model";
import { Topics_lesson_planModel } from "./models/Topics_lesson_plan.model";
import { Homework_lesson_planModel } from "./models/Homework_lesson_plan.model";
import { InclusiveAdaptation_lesson_planModel } from "./models/InclusiveAdaptation_lesson_plan.model";
import { Examples_topicsModel } from "./models/Examples_topics.model";
import { Activities_topicsModel } from "./models/Activities_topics.model";
import { Connections_topicsModel } from "./models/Connections_topics.model";
import { References_lesson_planModel } from "./models/References_lesson_plan.model";
import { Closure_lesson_planModel } from "./models/Closure_lesson_plan.model";

export class LessonPlanService {
  private lessonPlanRepository: LessonPlanRepository;

  constructor(lessonPlanRepository: LessonPlanRepository) {
    this.lessonPlanRepository = lessonPlanRepository;
  }

  public createLessonPlan = async (
    request: LessonPlanRequest,
    id_user: string
  ) => {
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
    patch: Partial<Lesson_planModel>
  ) => {
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
    patch: Partial<Objetives_lesson_planModel>
  ) => {
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
    patch: Partial<Competencies_lesson_planModel>
  ) => {
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
    patch: Partial<Themes_lesson_planModel>
  ) => {
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
    patch: Partial<Methodology_lesson_planModel>
  ) => {
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
    patch: Partial<Topics_lesson_planModel>
  ) => {
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
    patch: Partial<Examples_topicsModel>
  ) => {
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
    patch: Partial<Activities_topicsModel>
  ) => {
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
    patch: Partial<Connections_topicsModel>
  ) => {
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
    patch: Partial<Homework_lesson_planModel>
  ) => {
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
    patch: Partial<InclusiveAdaptation_lesson_planModel>
  ) => {
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
    patch: Partial<References_lesson_planModel>
  ) => {
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
    patch: Partial<Closure_lesson_planModel>
  ) => {
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
