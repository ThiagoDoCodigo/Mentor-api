import { FastifyInstance } from "fastify";
import lessonPlanRoutes from "./lesson_plan.routes";

export default async function lessonPlanModule(fastify: FastifyInstance) {
  fastify.register(lessonPlanRoutes, { prefix: "/lesson-plans" });
}
