import { FastifyRequest, FastifyReply } from "fastify";
import { LessonPlanService } from "./lesson_plan.service";
import {
  LessonPlanRequest,
  patchLessonPlan,
  patchObjective,
  patchCompetencies,
  patchTheme,
  patchTeachingMethodology,
  patchTopic,
  patchHomework,
  patchInclusiveAdaptation,
  patchReferences,
  patchClosure,
  patchExamplesTopics,
  patchActivitiesTopics,
  patchConnectionsTopics,
} from "./lesson_plan.interface";
import { sendError } from "../../utils/sendError";

export class LessonPlanController {
  private lessonPlanService: LessonPlanService;
  constructor(lessonPlanService: LessonPlanService) {
    this.lessonPlanService = lessonPlanService;
  }

  public createLessonPlan = async (
    request: FastifyRequest<{ Body: LessonPlanRequest }>,
    reply: FastifyReply
  ) => {
    try {
      const lessonPlanRequest = request.body as LessonPlanRequest;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const createdLessonPlan = await this.lessonPlanService.createLessonPlan(
        lessonPlanRequest,
        id_user
      );
      return reply.code(201).send({
        message: "Plano de aula criado com sucesso.",
        sucess: true,
        createdLessonPlan: createdLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getLessonPlans = async (
    request: FastifyRequest<{
      Querystring: { page?: string; limit?: string; search?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const page = request.query.page ? parseInt(request.query.page) : 1;
      const limit = request.query.limit ? parseInt(request.query.limit) : 10;
      const search = request.query.search;

      const lessonPlans = await this.lessonPlanService.getLessonPlans(
        page,
        limit,
        search
      );
      return reply.code(200).send(lessonPlans);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getLessonPlansByUser = async (
    request: FastifyRequest<{
      Querystring: { page?: string; limit?: string; search?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const user = request.authUser as any;
      const id_user = user.id_user;
      const page = request.query.page ? parseInt(request.query.page) : 1;
      const limit = request.query.limit ? parseInt(request.query.limit) : 10;
      const search = request.query.search;

      const lessonPlans = await this.lessonPlanService.getLessonPlansByUser(
        id_user,
        page,
        limit,
        search
      );
      return reply.code(200).send(lessonPlans);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getLessonPlanById = async (
    request: FastifyRequest<{ Params: { id_lesson_plan: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_lesson_plan = request.params.id_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = await this.lessonPlanService.getLessonPlanById(
        id_lesson_plan,
        id_user
      );
      return reply.code(200).send(lessonPlan);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateLessonPlan = async (
    request: FastifyRequest<{
      Body: patchLessonPlan;
      Params: { id_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_lesson_plan = request.params.id_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchLessonPlan;

      const updatedLessonPlan = await this.lessonPlanService.updateLessonPlan(
        id_lesson_plan,
        id_user,
        lessonPlan
      );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateObjetivesLessonPlan = async (
    request: FastifyRequest<{
      Body: patchObjective;
      Params: { id_objetives_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_objetives_lesson_plan = request.params.id_objetives_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchObjective;

      const updatedLessonPlan =
        await this.lessonPlanService.updateObjetivesLessonPlan(
          id_objetives_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateCompetenciesLessonPlan = async (
    request: FastifyRequest<{
      Body: patchCompetencies;
      Params: { id_competencies_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_competencies_lesson_plan =
        request.params.id_competencies_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchCompetencies;

      const updatedLessonPlan =
        await this.lessonPlanService.updateCompetenciesLessonPlan(
          id_competencies_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateThemesLessonPlan = async (
    request: FastifyRequest<{
      Body: patchTheme;
      Params: { id_themes_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_themes_lesson_plan = request.params.id_themes_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchTheme;

      const updatedLessonPlan =
        await this.lessonPlanService.updateThemesLessonPlan(
          id_themes_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateMethodologyLessonPlan = async (
    request: FastifyRequest<{
      Body: patchTeachingMethodology;
      Params: { id_methodology_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_methodology_lesson_plan =
        request.params.id_methodology_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchTeachingMethodology;

      const updatedLessonPlan =
        await this.lessonPlanService.updateMethodologyLessonPlan(
          id_methodology_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateTopicsLessonPlan = async (
    request: FastifyRequest<{
      Body: patchTopic;
      Params: { id_topics_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_topics_lesson_plan = request.params.id_topics_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchTopic;

      const updatedLessonPlan =
        await this.lessonPlanService.updateTopicsLessonPlan(
          id_topics_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateExamplesTopics = async (
    request: FastifyRequest<{
      Body: patchExamplesTopics;
      Params: { id_examples_topics: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_examples_topics = request.params.id_examples_topics;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchExamplesTopics;

      const updatedLessonPlan =
        await this.lessonPlanService.updateExamplesTopics(
          id_examples_topics,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateActivitiesTopics = async (
    request: FastifyRequest<{
      Body: patchActivitiesTopics;
      Params: { id_activities_topics: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_activities_topics = request.params.id_activities_topics;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchActivitiesTopics;

      const updatedLessonPlan =
        await this.lessonPlanService.updateActivitiesTopics(
          id_activities_topics,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateConnectionsTopics = async (
    request: FastifyRequest<{
      Body: patchConnectionsTopics;
      Params: { id_connections_topics: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_connections_topics = request.params.id_connections_topics;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchConnectionsTopics;

      const updatedLessonPlan =
        await this.lessonPlanService.updateConnectionsTopics(
          id_connections_topics,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateHomeworkLessonPlan = async (
    request: FastifyRequest<{
      Body: patchHomework;
      Params: { id_homework_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_homework_lesson_plan = request.params.id_homework_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchHomework;

      const updatedLessonPlan =
        await this.lessonPlanService.updateHomeworkLessonPlan(
          id_homework_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateInclusiveAdaptationLessonPlan = async (
    request: FastifyRequest<{
      Body: patchInclusiveAdaptation;
      Params: { id_inclusive_adaptation_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_inclusive_adaptation_lesson_plan =
        request.params.id_inclusive_adaptation_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchInclusiveAdaptation;

      const updatedLessonPlan =
        await this.lessonPlanService.updateInclusiveAdaptationLessonPlan(
          id_inclusive_adaptation_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateReferencesLessonPlan = async (
    request: FastifyRequest<{
      Body: patchReferences;
      Params: { id_references_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_references_lesson_plan =
        request.params.id_references_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchReferences;

      const updatedLessonPlan =
        await this.lessonPlanService.updateReferencesLessonPlan(
          id_references_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateClosureLessonPlan = async (
    request: FastifyRequest<{
      Body: patchClosure;
      Params: { id_closure_lesson_plan: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_closure_lesson_plan = request.params.id_closure_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const lessonPlan = request.body as patchClosure;

      const updatedLessonPlan =
        await this.lessonPlanService.updateClosureLessonPlan(
          id_closure_lesson_plan,
          id_user,
          lessonPlan
        );
      return reply.code(200).send({
        message: "Plano de aula atualizado com sucesso.",
        sucess: true,
        updatedLessonPlan: updatedLessonPlan,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public deleteLessonPlan = async (
    request: FastifyRequest<{ Params: { id_lesson_plan: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_lesson_plan = request.params.id_lesson_plan;

      const user = request.authUser as any;
      const id_user = user.id_user;

      await this.lessonPlanService.deleteLessonPlan(id_lesson_plan, id_user);
      return reply
        .code(200)
        .send({ message: "Plano de aula excluído com sucesso.", sucess: true });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public deleteLessonPlanAdmin = async (
    request: FastifyRequest<{ Params: { id_lesson_plan: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_lesson_plan = request.params.id_lesson_plan;

      await this.lessonPlanService.deleteLessonPlanAdmin(id_lesson_plan);
      return reply
        .code(200)
        .send({ message: "Plano de aula excluído com sucesso.", sucess: true });
    } catch (err) {
      return sendError(reply, err);
    }
  };
}
