// plugins/AuthRole.ts
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    verifyRole(
      role: string
    ): (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

export function AuthRole(app: FastifyInstance) {
  app.decorate("verifyRole", function (requiredRole: string) {
    return async function (request: FastifyRequest, reply: FastifyReply) {
      const user = request.authUser;

      if (!user) {
        return reply.code(401).send({ error: "Usuário não autenticado" });
      }

      if (user.role !== requiredRole) {
        return reply
          .code(403)
          .send({ error: "Acesso negado: permissão insuficiente" });
      }
    };
  });
}
