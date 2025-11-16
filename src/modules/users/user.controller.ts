import { FastifyRequest, FastifyReply } from "fastify";
import { CustomError } from "../../erros/CustomError";
import { UserService } from "./user.service";
import { UserPatch, UserRequest } from "./user.interface";
import { sendError } from "../../utils/sendError";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
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
      return sendError(reply, err);
    }
  };

  public getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const users = await this.userService.getUsers();
      return reply.code(200).send({ users: users, sucess: true });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public patchUser = async (
    request: FastifyRequest<{ Body: UserPatch; Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const userId = request.params.id;

      if (!userId) {
        return reply
          .code(400)
          .send({ message: "ID do usuário obrigatório.", sucess: false });
      }

      const userPatch = request.body as UserPatch;
      const updatedUser = await this.userService.patchUser(userId, userPatch);
      return reply.code(200).send({
        message: "Usuário atualizado com sucesso.",
        sucess: true,
        updatedUser: updatedUser,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };

  public deleteUser = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const userId = request.params.id;
      if (!userId) {
        return reply
          .code(400)
          .send({ message: "ID do usuário obrigatório.", sucess: false });
      }
      const deletedUser = await this.userService.deleteUser(userId);
      return reply.code(200).send({
        message: "Usuário excluido com sucesso.",
        sucess: true,
        deletedUser: deletedUser,
      });
    } catch (err) {
      return sendError(reply, err);
    }
  };
}
