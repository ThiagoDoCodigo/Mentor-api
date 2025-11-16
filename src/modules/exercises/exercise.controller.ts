import { FastifyRequest, FastifyReply } from "fastify";
import { ExerciseService } from "./exercise.service";
import {
  ExercisesRequest,
  patchExercises,
  patchExerciseItem,
  patchThemeExercises,
  patchObjectivesExercises,
  patchMultipleOptions,
  patchTrueOrFalseOptions,
} from "./exercise.interface";
import { sendError } from "../../utils/sendError";

export class ExerciseController {
  private exerciseService: ExerciseService;
  constructor(exerciseService: ExerciseService) {
    this.exerciseService = exerciseService;
  }

  public createExercise = async (
    request: FastifyRequest<{ Body: ExercisesRequest }>,
    reply: FastifyReply
  ) => {
    try {
      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as ExercisesRequest;
      const createdExercise = await this.exerciseService.createExercise(
        exercise,
        id_user
      );
      return reply.code(201).send({
        message: "Exercício criado com sucesso.",
        sucess: true,
        createdExercise: createdExercise,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getExercises = async (
    request: FastifyRequest<{
      Querystring: { page?: string; limit?: string; search?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const page = request.query.page ? parseInt(request.query.page) : 1;
      const limit = request.query.limit ? parseInt(request.query.limit) : 10;
      const search = request.query.search;

      const response = await this.exerciseService.getExercises(
        page,
        limit,
        search
      );

      return reply.code(200).send(response);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getExercisesByUser = async (
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

      const response = await this.exerciseService.getExercisesByUser(
        id_user,
        page,
        limit,
        search
      );
      return reply.code(200).send(response);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public getExerciseById = async (
    request: FastifyRequest<{ Params: { id_exercise: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_exercise = request.params.id_exercise;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const response = await this.exerciseService.getExerciseById(
        id_exercise,
        id_user
      );
      return reply.code(200).send(response);
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateExercise = async (
    request: FastifyRequest<{
      Body: patchExercises;
      Params: { id_exercise: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_exercise = request.params.id_exercise;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchExercises;
      const response = await this.exerciseService.updateExercise(
        id_exercise,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateExerciseItem = async (
    request: FastifyRequest<{
      Body: patchExerciseItem;
      Params: { id_exercise_item: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_exercise_item = request.params.id_exercise_item;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchExerciseItem;
      const response = await this.exerciseService.updateExerciseItem(
        id_exercise_item,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateThemeExercise = async (
    request: FastifyRequest<{
      Body: patchThemeExercises;
      Params: { id_theme_exercises: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_theme_exercises = request.params.id_theme_exercises;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchThemeExercises;
      const response = await this.exerciseService.updateThemeExercise(
        id_theme_exercises,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateObjectiveExercise = async (
    request: FastifyRequest<{
      Body: patchObjectivesExercises;
      Params: { id_objective_exercises: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_objective_exercises = request.params.id_objective_exercises;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchObjectivesExercises;
      const response = await this.exerciseService.updateObjectiveExercise(
        id_objective_exercises,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateOptionMultipleExercise = async (
    request: FastifyRequest<{
      Body: patchMultipleOptions;
      Params: { id_optionsMultiple: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_optionsMultiple = request.params.id_optionsMultiple;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchMultipleOptions;
      const response = await this.exerciseService.updateOptionMultiple(
        id_optionsMultiple,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public updateOptionTrueOrFalseExercise = async (
    request: FastifyRequest<{
      Body: patchTrueOrFalseOptions;
      Params: { id_optionsTrueOrFalse: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const id_optionsTrueOrFalse = request.params.id_optionsTrueOrFalse;

      const user = request.authUser as any;
      const id_user = user.id_user;

      const exercise = request.body as patchTrueOrFalseOptions;
      const response = await this.exerciseService.updateOptionTrueOrFalse(
        id_optionsTrueOrFalse,
        id_user,
        exercise
      );
      return reply.code(200).send({
        updatedExercise: response,
        message: "Exercício atualizado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public deleteExercise = async (
    request: FastifyRequest<{ Params: { id_exercise: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_exercises = request.params.id_exercise;
      const user = request.authUser as any;
      const id_user = user.id_user;
      const response = await this.exerciseService.deleteExercise(
        id_exercises,
        id_user
      );
      return reply.code(200).send({
        deletedExercise: response,
        message: "Exercício deletado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public deleteExerciseAdmin = async (
    request: FastifyRequest<{ Params: { id_exercise: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const id_exercises = request.params.id_exercise;
      const response = await this.exerciseService.deleteExerciseAdmin(
        id_exercises
      );
      return reply.code(200).send({
        deletedExercise: response,
        message: "Exercício deletado com sucesso.",
        sucess: true,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };
}
