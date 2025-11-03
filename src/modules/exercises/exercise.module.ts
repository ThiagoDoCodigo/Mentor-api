import { FastifyInstance } from "fastify";
import exerciseRoutes from "./exercise.routes";

export default async function exerciseModule(fastify: FastifyInstance) {
  fastify.register(exerciseRoutes, { prefix: "/exercises" });
}
