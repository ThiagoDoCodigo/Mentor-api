import bcrypt from "bcrypt";
import { AuthRepository } from "./auth.repository";
import type { FastifyInstance } from "fastify";
import { CustomError } from "../../erros/CustomError";
import { UserLogin, UserResponse } from "../users/user.interface";
import { tokensResponse, refreshTokenResponse } from "./auth.interface";

export class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async login(
    userLogin: UserLogin
  ): Promise<{ tokens: tokensResponse; user: UserResponse }> {
    try {
      const user = await this.authRepository.findUserByEmail(
        userLogin.email_user
      );

      if (!user) {
        throw new CustomError("Usuário não encontrado", 404);
      }

      const passwordMatch = await bcrypt.compare(
        userLogin.password_user,
        user.password_user
      );

      if (!passwordMatch) {
        throw new CustomError("Senha incorreta", 401);
      }

      const tokens = await this.authRepository.generateAcessToken("10h", "2d", {
        id_user: user.id_user,
        role: user.role_user,
      });

      return {
        tokens: {
          accessToken: tokens.acessToken,
          refreshToken: tokens.refreshToken,
        },
        user: {
          id_user: user.id_user,
          name_user: user.name_user,
          email_user: user.email_user,
          cpf_user: user.cpf_user,
          role_user: user.role_user,
        },
      };
    } catch (err) {
      if (err instanceof CustomError) {
        throw err;
      }

      throw new CustomError("Erro ao fazer login", 500);
    }
  }

  public async refreshToken(
    fastify: FastifyInstance,
    refreshToken: refreshTokenResponse
  ): Promise<{
    tokens: tokensResponse;
    user: { id_user: string; role_user: string };
  }> {
    try {
      let decodedToken: { id_user: string; role: string } | null = null;

      decodedToken = (await fastify.jwt.verify(refreshToken.refreshToken)) as {
        id_user: string;
        role: string;
      };

      if (!decodedToken) {
        throw new CustomError("Token inválido", 401);
      }

      const tokens = await this.authRepository.generateAcessToken("10h", "2d", {
        id_user: decodedToken.id_user,
        role: decodedToken.role,
      });

      return {
        tokens: {
          accessToken: tokens.acessToken,
          refreshToken: tokens.refreshToken,
        },
        user: {
          id_user: decodedToken.id_user,
          role_user: decodedToken.role,
        },
      };
    } catch (err) {
      if (err instanceof CustomError) {
        throw err;
      }
      throw new CustomError("Erro ao atualizar token", 500);
    }
  }
}
