import { UserService } from "../../modules/users/user.service";
import { UserRequest, UserResponse } from "../../modules/users/user.interface";
import bcrypt from "bcrypt";

describe("UserBusiness - createUser", () => {
  const mockCreateUser = jest.fn<Promise<UserResponse>, [UserRequest]>();
  const mockService = {
    createUser: mockCreateUser,
  };
  const service = new UserService(mockService as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Must create a user successfully", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "02030100609",
      password_user: "senha123",
      role_user: "admin",
    };

    const createdUser: UserResponse = {
      id_user: "e11dab6f-b0db-41a9-bc44-7c9755e77411",
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "02030100609",
      role_user: "admin",
    };

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockResolvedValue(createdUser);

    const result = await service.createUser({ ...input });

    expect(result).toMatchObject({ ...createdUser });

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });

  it("Should throw an error if the CPF is invalid", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "02030100619",
      password_user: "senha123",
      role_user: "admin",
    };
    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockRejectedValue(new Error("CPF inválido!"));

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "CPF inválido!"
    );

    expect(mockCreateUser).not.toHaveBeenCalled();
  });
});
