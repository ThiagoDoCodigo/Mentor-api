import sequelize from "../../data/database";
import { UserRequest, UserResponse } from "./user.interface";
import { User } from "./users.model";

export class UserRepository {
  public createUser = async (newUser: UserRequest): Promise<UserResponse> => {
    return sequelize.transaction(async (transaction) => {
      const createdUser = await User.create(
        {
          name_user: newUser.name_user,
          email_user: newUser.email_user,
          cpf_user: newUser.cpf_user,
          password_user: newUser.password_user,
          role_user: newUser.role_user,
        },
        { transaction }
      );

      const { id_user, name_user, email_user, cpf_user, role_user } =
        createdUser.get({ plain: true });

      return { id_user, name_user, email_user, cpf_user, role_user };
    });
  };
}
