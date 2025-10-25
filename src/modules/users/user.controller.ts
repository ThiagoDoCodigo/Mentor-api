import { FastifyRequest, FastifyReply } from "fastify";
import { CustomError } from "../../erros/CustomError";
import { UserService } from "./user.service";
import { UserRequest, UserResponse } from "./user.interface";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  private sendError(reply: FastifyReply, err: any) {
    if (err instanceof CustomError) {
      return reply
        .code(err.statusCode)
        .send({ message: err.message, sucess: false });
    }
    return reply
      .code(500)
      .send({ message: "Erro interno no servidor.", sucess: false });
  }

  public createUser = async (
    request: FastifyRequest<{ Body: UserRequest }>,
    reply: FastifyReply
  ) => {
    try {
      const newUser = request.body as UserRequest;
      const createdUser = await this.userService.createUser(newUser);
      return reply.code(201).send({
        message: "Usuário criado com sucesso.",
        sucess: true,
        createdUser: createdUser,
      });
    } catch (err) {
      return this.sendError(reply, err);
    }
  };
}
