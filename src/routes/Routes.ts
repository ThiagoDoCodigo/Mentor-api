import { FastifyInstance } from "fastify";
import userModule from "../modules/users/user.module";
import authModule from "../modules/auth/auth.module";
import geminiModule from "../modules/gemini/gemini.module";

export default async function Routes(fastify: FastifyInstance) {
  await userModule(fastify);
  await authModule(fastify);
  await geminiModule(fastify);
}
