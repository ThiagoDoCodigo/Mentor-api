import { LessonPlanRepository } from "./lesson_plans.repository";
import { LessonPlanService } from "./lesson_plan.service";
import { LessonPlanController } from "./lesson_plan.controller";

export const lessonPlanRepository = new LessonPlanRepository();
export const lessonPlanService = new LessonPlanService(lessonPlanRepository);
export const lessonPlanController = new LessonPlanController(lessonPlanService);

export default lessonPlanController;
