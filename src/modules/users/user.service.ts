import { UserPatch, UserRequest, UserResponse } from "./user.interface";
import { UserRepository } from "./user.repository";
import { handleSequelizeUserError } from "./util/handleSequelizeUserError";
import bcrypt from "bcrypt";
import { CustomError } from "../../erros/CustomError";
import { validateCPF } from "../../utils/validadeCPF";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public createUser = async (
    newUser: UserRequest
  ): Promise<UserResponse | null> => {
    try {
      if (!validateCPF(newUser.cpf_user)) {
        throw new CustomError("CPF inválido!", 400);
      }

      const userToCreate = {
        ...newUser,
        password_user: await bcrypt.hash(newUser.password_user, 10),
      };

      const createdUser = await this.userRepository.createUser(userToCreate);

      if (!createdUser) {
        throw new CustomError("Erro ao criar usuário", 400, "GenericError");
      }

      return createdUser;
    } catch (err: any) {
      handleSequelizeUserError(err);
    }
  };

  public getUsers = async (): Promise<UserResponse[]> => {
    try {
      const users = await this.userRepository.getUsers();

      if (!users) {
        throw new CustomError("Erro ao buscar usuários", 400, "GenericError");
      }

      return users;
    } catch (err: any) {
      handleSequelizeUserError(err);
    }
  };

  public patchUser = async (
    id_user: string,
    userPatch: UserPatch
  ): Promise<UserResponse> => {
    try {
      if (userPatch.cpf_user && !validateCPF(userPatch.cpf_user)) {
        throw new CustomError("CPF inválido!", 400);
      }

      if (Object.keys(userPatch).length === 0) {
        throw new CustomError("Nenhum atributo para atualizar", 400);
      }

      if (userPatch.password_user) {
        userPatch.password_user = await bcrypt.hash(
          userPatch.password_user,
          10
        );
      }

      const updatedUser = await this.userRepository.patchUser(
        id_user,
        userPatch
      );

      if (!updatedUser) {
        throw new CustomError("Erro ao atualizar usuário", 400, "GenericError");
      }

      return updatedUser;
    } catch (err: any) {
      handleSequelizeUserError(err);
    }
  };
}
