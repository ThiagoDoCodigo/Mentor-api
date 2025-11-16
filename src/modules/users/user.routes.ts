import { UserPatch, UserRequest } from "./user.interface";
import userController from "./user.container";
import { FastifyInstance } from "fastify";
import { createUserSchema, patchUserSchema } from "./users.schema";

export default async function UserRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: UserRequest }>(
    "/create",
    { schema: createUserSchema },
    userController.createUser.bind(userController)
  );

  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuthToken);

    instance.get<{ Body: UserRequest }>(
      "/get-all",
      { preHandler: instance.verifyRole("admin") },
      userController.getUsers.bind(userController)
    );

    instance.patch<{ Body: UserPatch; Params: { id: string } }>(
      "/patch/:id",
      {
        schema: patchUserSchema,
        preHandler: instance.verifyOwner("params", "id"),
      },
      userController.patchUser.bind(userController)
    );

    instance.patch<{ Body: UserPatch; Params: { id: string } }>(
      "/patchAdmin/:id",
      {
        schema: patchUserSchema,
        preHandler: instance.verifyRole("admin"),
      },
      userController.patchUser.bind(userController)
    );

    instance.delete<{ Params: { id: string } }>(
      "/delete/:id",
      {
        preHandler: instance.verifyOwner("params", "id"),
      },
      userController.deleteUser.bind(userController)
    );

    instance.delete<{ Params: { id: string } }>(
      "/deleteAdmin/:id",
      {
        preHandler: instance.verifyRole("admin"),
      },
      userController.deleteUser.bind(userController)
    );
  });
}
