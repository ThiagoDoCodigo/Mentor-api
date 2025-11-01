import { FastifyInstance } from "fastify";
import geminiRoutes from "./gemini.routes";

export default async function geminiModule(fastify: FastifyInstance) {
  fastify.register(geminiRoutes, { prefix: "/gemini" });
}
