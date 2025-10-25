import { UserRequest, UserResponse } from "./user.interface";
import { UserRepository } from "./user.repository";
import { handleSequelizeError } from "./util/handleSequelizeError";
import bcrypt from "bcrypt";
import { CustomError } from "../../erros/CustomError";
import { validateCPF } from "../../utils/validadeCPF";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public createUser = async (newUser: UserRequest): Promise<UserResponse> => {
    try {
      const userToCreate = {
        ...newUser,
        password_user: await bcrypt.hash(newUser.password_user, 10),
      };

      if (!validateCPF(newUser.cpf_user)) {
        throw new CustomError("CPF inválido!", 400);
      }

      const createdUser = await this.userRepository.createUser(userToCreate);

      if (!createdUser) {
        throw new CustomError("Erro ao criar usuário", 400, "GenericError");
      }

      return createdUser;
    } catch (err: any) {
      if (
        err.original?.code === "23505" &&
        err.original?.constraint === "users_email_user_key"
      ) {
        throw new CustomError(
          "Este email já está sendo utilizado por outro usuário!",
          409
        );
      }
      if (
        err.original?.code === "23505" &&
        err.original?.constraint === "users_cpf_user_key"
      ) {
        throw new CustomError(
          "Este cpf já está sendo utilizado por outro usuário!",
          409
        );
      }
      handleSequelizeError(err);
    }
  };
}
