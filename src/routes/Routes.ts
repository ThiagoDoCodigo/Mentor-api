import { FastifyInstance } from "fastify";
import userModule from "../modules/users/user.module";

export default async function Routes(fastify: FastifyInstance) {
  await userModule(fastify);
}
