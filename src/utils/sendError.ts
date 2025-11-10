import { FastifyReply } from "fastify";
import { CustomError } from "../erros/CustomError";

export function sendError(reply: FastifyReply, err: any) {
  if (err instanceof CustomError) {
    return reply
      .code(err.statusCode)
      .send({ message: err.message, sucess: false });
  }
  return reply
    .code(500)
    .send({ message: "Erro interno no servidor.", sucess: false });
}
