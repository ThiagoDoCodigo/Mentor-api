import { UserService } from "../../modules/users/user.service";
import {
  UserPatch,
  UserRequest,
  UserResponse,
} from "../../modules/users/user.interface";
import bcrypt from "bcrypt";
import { CustomError } from "../../erros/CustomError";

describe("UserService - createUser", () => {
  const mockCreateUser = jest.fn<Promise<UserResponse | null>, [UserRequest]>();
  const mockRepository = {
    createUser: mockCreateUser,
  };
  const service = new UserService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Deve criar um usuário com sucesso", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };

    const createdUser: UserResponse = {
      id_user: "e11dab6f-b0db-41a9-bc44-7c9755e77411",
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      role_user: "admin",
    };

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockResolvedValue(createdUser);

    const result = await service.createUser({ ...input });

    expect(result).toMatchObject({ ...createdUser });

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });

  it("Deve falhar ao criar um usuário com CPF inválido", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "25415874125",
      password_user: "senha123",
      role_user: "admin",
    };

    mockCreateUser.mockRejectedValue(new CustomError("CPF inválido!", 400));

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "CPF inválido!"
    );

    expect(mockCreateUser).not.toHaveBeenCalled();
  });

  it("Deve falhar ao criar um usuário com erro genérico", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockRejectedValue(
      new CustomError("Erro interno", 400, "GenericError")
    );

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "Erro interno"
    );

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });

  it("deve lançar erro se retorno do DB for vazio", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockResolvedValue(null);

    mockCreateUser.mockRejectedValue(
      new CustomError("Erro ao criar usuário", 400, "GenericError")
    );

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "Erro ao criar usuário"
    );

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });

  it("Deve lançar erro se email já estiver em uso (code 23505, constraint users_email_user_key)", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockRejectedValue(
      new CustomError(
        "Este email já está sendo utilizado por outro usuário!",
        409
      )
    );

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "Este email já está sendo utilizado por outro usuário!"
    );

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });

  it("Deve lançar erro se CPF já estiver em uso (code 23505, constraint users_cpf_user_key)", async () => {
    const input: UserRequest = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockCreateUser.mockRejectedValue(
      new CustomError(
        "Este cpf já está sendo utilizado por outro usuário!",
        409
      )
    );

    await expect(service.createUser({ ...input })).rejects.toThrow(
      "Este cpf já está sendo utilizado por outro usuário!"
    );

    expect(mockCreateUser).toHaveBeenCalledWith({ ...input });
  });
});

describe("UserService - patchUser", () => {
  const mockPatchUser = jest.fn<
    Promise<UserResponse | null>,
    [string],
    [UserPatch]
  >();
  const mockRepository = {
    patchUser: mockPatchUser,
  };

  const service = new UserService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Deve atualizar um usuário", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };

    const response: UserResponse = {
      id_user: "92261020-0381-49e3-8e82-e623eade192a",
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockPatchUser.mockResolvedValue(response);

    const result = await service.patchUser(id_user, input);

    expect(result).toEqual(response);
    expect(mockPatchUser).toHaveBeenCalledWith(id_user, input);
  });

  it("deve lançar erro se retorno do DB for vazio", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockPatchUser.mockResolvedValue(null);

    mockPatchUser.mockRejectedValue(
      new CustomError("Erro ao atualizar usuário", 400, "GenericError")
    );

    await expect(service.patchUser(id_user, input)).rejects.toThrow(
      "Erro ao atualizar usuário"
    );

    expect(mockPatchUser).toHaveBeenCalledWith(id_user, input);
  });

  it("Deve falhar ao atualizar um usuário com CPF inválido", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "25415874125",
      password_user: "senha123",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    mockPatchUser.mockRejectedValue(new CustomError("CPF inválido!", 400));

    await expect(service.patchUser(id_user, input)).rejects.toThrow(
      "CPF inválido!"
    );

    expect(mockPatchUser).not.toHaveBeenCalled();
  });

  it("Deve falhar ao atualizar um usuário com erro genérico", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockPatchUser.mockRejectedValue(
      new CustomError("Erro interno", 400, "GenericError")
    );

    await expect(service.patchUser(id_user, input)).rejects.toThrow(
      "Erro interno"
    );

    expect(mockPatchUser).toHaveBeenCalledWith(id_user, input);
  });

  it("Deve lançar erro se email já estiver em uso (code 23505, constraint users_email_user_key)", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockPatchUser.mockRejectedValue(
      new CustomError(
        "Este email já está sendo utilizado por outro usuário!",
        409
      )
    );

    await expect(service.patchUser(id_user, input)).rejects.toThrow(
      "Este email já está sendo utilizado por outro usuário!"
    );

    expect(mockPatchUser).toHaveBeenCalledWith(id_user, input);
  });

  it("Deve lançar erro se CPF já estiver em uso (code 23505, constraint users_cpf_user_key)", async () => {
    const input: UserPatch = {
      name_user: "João",
      email_user: "joao@example.com",
      cpf_user: "07455315040",
      password_user: "senha123",
      role_user: "admin",
    };
    const id_user = "92261020-0381-49e3-8e82-e623eade192a";

    jest.spyOn(bcrypt, "hash").mockImplementation(async () => "senha123");

    mockPatchUser.mockRejectedValue(
      new CustomError(
        "Este cpf já está sendo utilizado por outro usuário!",
        409
      )
    );

    await expect(service.patchUser(id_user, input)).rejects.toThrow(
      "Este cpf já está sendo utilizado por outro usuário!"
    );

    expect(mockPatchUser).toHaveBeenCalledWith(id_user, input);
  });
});
