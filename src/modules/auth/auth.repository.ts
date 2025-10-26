import { AuthJWT } from "../../plugins/AuthJWT";
import { User } from "../users/users.model";

export class AuthRepository {
  public async findUserByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email_user: email } });
  }

  public async generateAcessToken(
    _limitAcess: string,
    _limitRefresh: string,
    payload: { id_user: string; role: string }
  ): Promise<{ acessToken: string; refreshToken: string }> {
    const jwt = AuthJWT.getInstance();

    const acessToken = await jwt.sign(payload);
    const refreshToken = await jwt.sign(payload);

    return { acessToken, refreshToken };
  }
}
