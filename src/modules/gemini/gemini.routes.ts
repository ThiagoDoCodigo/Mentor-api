import { FastifyInstance } from "fastify";
import {
  LessonPlanRequestGemini,
  ExercisesRequestGemini,
} from "./gemini.interface";
import lessonPlanController from "./gemini.container";
import { createLessonPlanSchema, createExercisesSchema } from "./gemini.schema";

export default async function geminiRoutes(fastify: FastifyInstance) {
  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuthToken);

    instance.post<{ Body: LessonPlanRequestGemini }>(
      "/create-lesson-plan",
      { schema: createLessonPlanSchema },
      lessonPlanController.createLessonPlan.bind(lessonPlanController)
    );

    instance.post<{ Body: ExercisesRequestGemini }>(
      "/create-exercises",
      { schema: createExercisesSchema },
      lessonPlanController.createExercises.bind(lessonPlanController)
    );
  });
}
