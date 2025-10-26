import { FastifyInstance } from "fastify";
import AuthRoutes from "./auth.routes";

export default async function authModule(fastify: FastifyInstance) {
  fastify.register(AuthRoutes, { prefix: "/auth" });
}
