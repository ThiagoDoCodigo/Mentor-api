import { userLoginSchema } from "./auth.schema";
import authController from "./auth.container";
import { FastifyInstance } from "fastify";
import { UserLogin } from "../users/user.interface";
import { refreshTokenRequest } from "./auth.interface";

export default async function AuthRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: UserLogin }>(
    "/login",
    { schema: userLoginSchema },
    authController.login.bind(authController)
  );

  fastify.post<{
    Body: refreshTokenRequest;
  }>("/refresh-token", authController.refreshToken.bind(authController));
}
