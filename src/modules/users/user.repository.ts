import sequelize from "../../data/database";
import { UserRequest, UserResponse, UserPatch } from "./user.interface";
import { User } from "./users.model";

export class UserRepository {
  public createUser = async (
    newUser: UserRequest
  ): Promise<UserResponse | null> => {
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

  public getUsers = async (): Promise<UserResponse[]> => {
    return User.findAll({
      attributes: [
        "id_user",
        "name_user",
        "email_user",
        "cpf_user",
        "role_user",
      ],
    });
  };

  public patchUser = async (
    id_user: string,
    userPatch: UserPatch
  ): Promise<UserResponse | null> => {
    const fieldsPatch: UserPatch = {};

    if (userPatch.name_user) fieldsPatch.name_user = userPatch.name_user;
    if (userPatch.email_user) fieldsPatch.email_user = userPatch.email_user;
    if (userPatch.cpf_user) fieldsPatch.cpf_user = userPatch.cpf_user;
    if (userPatch.password_user)
      fieldsPatch.password_user = userPatch.password_user;
    if (userPatch.role_user) fieldsPatch.role_user = userPatch.role_user;

    await User.update(fieldsPatch, {
      where: { id_user },
      returning: true,
    });

    const updatedUser = await User.findByPk(id_user, {
      attributes: [
        "id_user",
        "name_user",
        "email_user",
        "cpf_user",
        "role_user",
      ],
    });

    return updatedUser ? updatedUser.get({ plain: true }) : null;
  };
}
