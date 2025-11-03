import { FastifyInstance } from "fastify";
import {
  LessonPlanRequestGemini,
  ExercisesRequestGemini,
} from "./gemini.interface";
import geminiController from "./gemini.container";
import { createLessonPlanSchema, createExercisesSchema } from "./gemini.schema";

export default async function geminiRoutes(fastify: FastifyInstance) {
  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuthToken);

    instance.post<{ Body: LessonPlanRequestGemini }>(
      "/create-lesson-plan",
      { schema: createLessonPlanSchema },
      geminiController.createLessonPlan.bind(geminiController)
    );

    instance.post<{ Body: ExercisesRequestGemini }>(
      "/create-exercises",
      { schema: createExercisesSchema },
      geminiController.createExercises.bind(geminiController)
    );
  });
}
