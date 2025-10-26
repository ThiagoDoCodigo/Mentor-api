import { AuthService } from "./auth.service";
import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { CustomError } from "../../erros/CustomError";
import { UserLogin } from "../users/user.interface";
import { refreshTokenRequest } from "./auth.interface";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
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

  public login = async (
    request: FastifyRequest<{ Body: UserLogin }>,
    reply: FastifyReply
  ) => {
    try {
      const userLogin = request.body as UserLogin;
      const response = await this.authService.login(userLogin);
      return reply.code(200).send(response);
    } catch (err) {
      return this.sendError(reply, err);
    }
  };

  public refreshToken = async (
    request: FastifyRequest<{ Body: refreshTokenRequest }>,
    reply: FastifyReply
  ) => {
    try {
      const refreshToken = request.body as refreshTokenRequest;
      const response = await this.authService.refreshToken(
        request.server,
        refreshToken
      );
      return reply.code(200).send(response);
    } catch (err) {
      return this.sendError(reply, err);
    }
  };
}
