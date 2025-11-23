import request from "supertest";
import { app, setupApp } from "../../../app";
import sequelize from "../../../data/database";
import { UserRequest } from "../../../modules/users/user.interface";

let accessToken: string;
let acessToken2: string;
let idUser: string;
let idUser2: string;
const createUserLogin: UserRequest = {
  name_user: "João2",
  email_user: "joao22@email.com",
  password_user: "123456",
  cpf_user: "47985482008",
  role_user: "admin",
};

const createUser: UserRequest = {
  name_user: "João",
  email_user: "joao@email.com",
  password_user: "123456",
  cpf_user: "85515909011",
  role_user: "student",
};

const createUser2: UserRequest = {
  name_user: "João",
  email_user: "joao@email.com",
  password_user: "123456",
  cpf_user: "41567680070",
  role_user: "admin",
};

const createUser3: UserRequest = {
  name_user: "João",
  email_user: "joao2@email.com",
  password_user: "123456",
  cpf_user: "85515909011",
  role_user: "admin",
};

const createUserErrado = {
  name_user: "João",
  email_user: "joao2@email.com",
  password_user: "123456",
  role_user: "admin",
};

const createUserErrado2 = {
  name_user: "João2",
  email_user: "joao22@email.com",
  password_user: "123456",
  cpf_user: "479854820",
  role_user: "admin",
};

const createUserInvalideCpf: UserRequest = {
  name_user: "João2",
  email_user: "joao22@email.com",
  password_user: "123456",
  cpf_user: "02030100619",
  role_user: "admin",
};

describe("USER Integration", () => {
  beforeAll(async () => {
    process.env.NODE_ENV = "test";

    await setupApp();
    await app.ready();
    await sequelize.sync({ force: true });

    await request(app.server).post("/users/create").send(createUserLogin);

    const login = await request(app.server).post("/auth/login").send({
      email_user: "joao22@email.com",
      password_user: "123456",
    });

    accessToken = login.body.tokens.accessToken;
    idUser = login.body.user.id_user;
  }, 30000);

  it("Deve criar um novo usuário", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUser);

    idUser2 = res.body.createdUser.id_user;

    const res2 = await request(app.server).post("/auth/login").send({
      email_user: "joao@email.com",
      password_user: "123456",
    });
    acessToken2 = res2.body.tokens.accessToken;

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Usuário criado com sucesso.");
    expect(res.body.createdUser).toHaveProperty("id_user");
  });

  it("Não deve permitir email duplicado", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUser2);

    expect(res.status).toBe(409);
    expect(res.body.sucess).toBe(false);
    expect(res.body.message).toBe(
      "Este email já está sendo utilizado por outro usuário!"
    );
  });

  it("Não deve permitir cpf duplicado", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUser3);

    expect(res.status).toBe(409);
    expect(res.body.sucess).toBe(false);
    expect(res.body.message).toBe(
      "Este cpf já está sendo utilizado por outro usuário!"
    );
  });

  it("Deve retornar um erro de schema com campo faltando", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUserErrado);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("O CPF é obrigatorio");
  });

  it("Deve retornar um erro de schema se algum campo estiver fora do padrão", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUserErrado2);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("O CPF deve ter 11 caracteres");
  });

  it("Deve retornar um erro com CPF inválido", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUserInvalideCpf);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("CPF inválido!");
  });

  it("Deve atualizar o usuário com sucesso", async () => {
    const res = await request(app.server)
      .patch(`/users/patch/${idUser}`)
      .send({ name_user: "João felipe" })
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Usuário atualizado com sucesso.");
  });

  it("Deve retornar um erro ao tentar atualizar um recurso que não te pertence", async () => {
    const res = await request(app.server)
      .patch(`/users/patch/${idUser2}`)
      .send({ name_user: "João felipe" })
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(403);
    expect(res.body.message).toBe(
      "Acesso negado: você só pode visualizar e alterar seu próprio recurso"
    );
  });

  it("Deve lista todos os usuários se for admin", async () => {
    const res = await request(app.server)
      .get("/users/get-all")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(res.body.sucess).toBe(true);
  });

  it("Deve retornar um erro ao tentar listar todos os usuários se não for admin", async () => {
    const res = await request(app.server)
      .get("/users/get-all")
      .set("Authorization", `Bearer ${acessToken2}`);

    expect(res.status).toBe(403);
    expect(res.body.message).toBe("Acesso negado: permissão insuficiente");
  });
});
