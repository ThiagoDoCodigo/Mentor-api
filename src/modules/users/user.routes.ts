import { UserRequest, UserResponse } from "./user.interface";
import userController from "./user.container";
import { FastifyInstance } from "fastify";
import { createUserSchema } from "./users.schema";

export default async function UserRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: UserRequest }>(
    "/",
    { schema: createUserSchema },
    userController.createUser.bind(userController)
  );

  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuth);
  });
}
