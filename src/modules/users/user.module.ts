import { FastifyInstance } from "fastify";
import UserRoutes from "./user.routes";

export default async function userModule(fastify: FastifyInstance) {
  fastify.register(UserRoutes, { prefix: "/users" });
}
