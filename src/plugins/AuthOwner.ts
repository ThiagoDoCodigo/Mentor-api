import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    verifyOwner(
      idSource?: "query" | "params" | "body",
      key?: string
    ): (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

export function AuthOwner(app: FastifyInstance) {
  app.decorate(
    "verifyOwner",
    function (idSource: "query" | "params" | "body" = "query", key = "id") {
      return async function (request: FastifyRequest, reply: FastifyReply) {
        const user = request.authUser;

        if (!user) {
          return reply.code(401).send({ message: "Usuário não autenticado" });
        }

        // pega o id do lugar definido
        let idToCheck: string | undefined;

        if (idSource === "query") idToCheck = (request.query as any)[key];
        else if (idSource === "params")
          idToCheck = (request.params as any)[key];
        else if (idSource === "body") idToCheck = (request.body as any)[key];

        if (!idToCheck) {
          return reply
            .code(400)
            .send({ message: `Parâmetro '${key}' não fornecido` });
        }

        if (user.id_user !== idToCheck) {
          return reply.code(403).send({
            message:
              "Acesso negado: você só pode visualizar e alterar seu próprio recurso",
          });
        }
      };
    }
  );
}
