import { FastifyRequest, FastifyReply } from "fastify";
import {
  LessonPlanRequestGemini,
  ExercisesRequestGemini,
} from "./gemini.interface";
import { CustomError } from "../../erros/CustomError";
import { GeminiService } from "./gemini.service";
import { sendError } from "../../utils/sendError";

export class GeminiController {
  private geminiService: GeminiService;

  constructor(geminiService: GeminiService) {
    this.geminiService = geminiService;
  }

  public async createLessonPlan(
    request: FastifyRequest<{ Body: LessonPlanRequestGemini }>,
    reply: FastifyReply
  ) {
    try {
      const lessonPlanRequest = request.body as LessonPlanRequestGemini;
      const response = await this.geminiService.createLessonPlan(
        lessonPlanRequest
      );
      return reply.code(200).send(response);
    } catch (err) {
      return sendError(reply, err);
    }
  }

  public async createExercises(
    request: FastifyRequest<{ Body: ExercisesRequestGemini }>,
    reply: FastifyReply
  ) {
    try {
      const exercisesRequest = request.body as ExercisesRequestGemini;
      const response = await this.geminiService.createExercises(
        exercisesRequest
      );
      return reply.code(200).send(response);
    } catch (err) {
      return sendError(reply, err);
    }
  }
}
