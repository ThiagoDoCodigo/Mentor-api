import lessonPlanController from "./lesson_plan.container";
import { FastifyInstance } from "fastify";
import { LessonPlanRequest } from "./lesson_plan.interface";
import {
  createLessonPlanSchema,
  updateLessonPlanSchema,
  updateObjectiveSchema,
  updateThemeSchema,
  updateTeachingMethodologySchema,
  updateCompetenciesSchema,
  updateReferencesSchema,
  updateTopicSchema,
  updateExamplesTopicLessonPlanSchema,
  updateActivitiesTopicLessonPlanSchema,
  updateConnectionsTopicLessonPlanSchema,
  updateHomeworkSchema,
  updateInclusiveAdaptationSchema,
  updateClosureSchema,
} from "./lesson_plan.schema";

export default async function lessonPlanRoutes(fastify: FastifyInstance) {
  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuthToken);

    instance.post<{ Body: LessonPlanRequest }>(
      "/create-lesson-plan",
      { schema: createLessonPlanSchema },
      lessonPlanController.createLessonPlan.bind(lessonPlanController)
    );

    instance.get(
      "/get-lesson-plans/admin",
      { preHandler: instance.verifyRole("admin") },
      lessonPlanController.getLessonPlans.bind(lessonPlanController) as any
    );

    instance.get(
      "/get-lesson-plans/user",
      lessonPlanController.getLessonPlansByUser.bind(lessonPlanController)
    );

    instance.get(
      "/get-lesson-plans/id/:id_lesson_plan",
      lessonPlanController.getLessonPlanById.bind(lessonPlanController)
    );

    instance.patch(
      "/update/lesson-plan/:id_lesson_plan",
      { schema: updateLessonPlanSchema },
      lessonPlanController.updateLessonPlan.bind(lessonPlanController)
    );

    instance.patch(
      "/update/objetives/:id_objetives_lesson_plan",
      { schema: updateObjectiveSchema },
      lessonPlanController.updateObjetivesLessonPlan.bind(lessonPlanController)
    );

    instance.patch(
      "/update/competencies/:id_competencies_lesson_plan",
      { schema: updateCompetenciesSchema },
      lessonPlanController.updateCompetenciesLessonPlan.bind(
        lessonPlanController
      )
    );

    instance.patch(
      "/update/themes/:id_themes_lesson_plan",
      { schema: updateThemeSchema },
      lessonPlanController.updateThemesLessonPlan.bind(lessonPlanController)
    );

    instance.patch(
      "/update/methodology/:id_methodology_lesson_plan",
      { schema: updateTeachingMethodologySchema },
      lessonPlanController.updateMethodologyLessonPlan.bind(
        lessonPlanController
      )
    );

    instance.patch(
      "/update/topics/:id_topics_lesson_plan",
      { schema: updateTopicSchema },
      lessonPlanController.updateTopicsLessonPlan.bind(lessonPlanController)
    );
    instance.patch(
      "/update/examples-topics/:id_examples_topics",
      { schema: updateExamplesTopicLessonPlanSchema },
      lessonPlanController.updateExamplesTopics.bind(lessonPlanController)
    );

    instance.patch(
      "/update/Activities-topics/:id_activities_topics",
      { schema: updateActivitiesTopicLessonPlanSchema },
      lessonPlanController.updateActivitiesTopics.bind(lessonPlanController)
    );

    instance.patch(
      "/update/connections-topics/:id_connections_topics",
      { schema: updateConnectionsTopicLessonPlanSchema },
      lessonPlanController.updateConnectionsTopics.bind(lessonPlanController)
    );

    instance.patch(
      "/update/homeworks/:id_homework_lesson_plan",
      { schema: updateHomeworkSchema },
      lessonPlanController.updateHomeworkLessonPlan.bind(lessonPlanController)
    );

    instance.patch(
      "/update/inclusive-adaptation/:id_inclusive_adaptation_lesson_plan",
      { schema: updateInclusiveAdaptationSchema },
      lessonPlanController.updateInclusiveAdaptationLessonPlan.bind(
        lessonPlanController
      )
    );

    instance.patch(
      "/update/references/:id_references_lesson_plan",
      { schema: updateReferencesSchema },
      lessonPlanController.updateReferencesLessonPlan.bind(lessonPlanController)
    );

    instance.patch(
      "/update/closure/:id_closure_lesson_plan",
      { schema: updateClosureSchema },
      lessonPlanController.updateClosureLessonPlan.bind(lessonPlanController)
    );

    instance.delete(
      "/delete-lesson-plan/:id_lesson_plan",
      lessonPlanController.deleteLessonPlan.bind(lessonPlanController)
    );

    instance.delete(
      "/delete-lesson-plan-admin/:id_lesson_plan",
      { preHandler: instance.verifyRole("admin") },
      lessonPlanController.deleteLessonPlan.bind(lessonPlanController) as any
    );
  });
}
