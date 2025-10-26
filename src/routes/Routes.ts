import { FastifyInstance } from "fastify";
import userModule from "../modules/users/user.module";
import authModule from "../modules/auth/auth.module";

export default async function Routes(fastify: FastifyInstance) {
  await userModule(fastify);
  await authModule(fastify);
}
