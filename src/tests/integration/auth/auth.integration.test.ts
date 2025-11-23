import request from "supertest";
import { app, setupApp } from "../../../app";
import sequelize from "../../../data/database";
import { UserRequest } from "../../../modules/users/user.interface";

let accessToken: string;
let refreshToken: string;

const createUser: UserRequest = {
  name_user: "João",
  email_user: "joao@email.com",
  password_user: "123456",
  cpf_user: "85515909011",
  role_user: "admin",
};

describe("AUTH Integration", () => {
  beforeAll(async () => {
    process.env.NODE_ENV = "test";
    await setupApp();
    await app.ready();
    await sequelize.sync({ force: true });
  }, 30000);

  it("Deve registrar um novo usuário", async () => {
    const res = await request(app.server)
      .post("/users/create")
      .send(createUser);

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Usuário criado com sucesso.");
    expect(res.body.createdUser).toHaveProperty("id_user");
  });

  it("Deve realizar login e retornar tokens e dados do usuário", async () => {
    const res = await request(app.server).post("/auth/login").send({
      email_user: "joao@email.com",
      password_user: "123456",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("tokens");
    expect(res.body.tokens).toHaveProperty("accessToken");
    expect(res.body.tokens).toHaveProperty("refreshToken");
    expect(res.body).toHaveProperty("user");

    accessToken = res.body.tokens.accessToken;
    refreshToken = res.body.tokens.refreshToken;

    expect(typeof accessToken).toBe("string");
    expect(typeof refreshToken).toBe("string");
  });

  it("Deve negar acesso com email incorreto", async () => {
    const res = await request(app.server).post("/auth/login").send({
      email_user: "joaoerro@email.com",
      password_user: "123456",
    });

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Usuário não encontrado");
    expect(res.body.sucess).toBe(false);
  });

  it("Deve negar acesso com senha incorreta", async () => {
    const res = await request(app.server).post("/auth/login").send({
      email_user: "joao@email.com",
      password_user: "senha_errada",
    });

    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Senha incorreta");
    expect(res.body.sucess).toBe(false);
  });

  it("Deve negar acesso sem token", async () => {
    const res = await request(app.server).get("/users/get-all");
    expect(res.status).toBe(401);
  });

  it("Deve permitir acesso com token válido", async () => {
    const res = await request(app.server)
      .get("/users/get-all")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(res.body.sucess).toBe(true);
  });

  it("Deve retornar um erro de schema com campo faltando", async () => {
    const res = await request(app.server)
      .post("/auth/login")
      .send({ email_user: "joao@email.com" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("A senha é obrigatorio");
  });

  it("Deve retornar um erro de schema se algum campo estiver fora do padrão", async () => {
    const res = await request(app.server).post("/auth/login").send({
      email_user: "joaoemail.com",
      password_user: "123456",
    });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("O email deve ser um email valido");
  });
});
