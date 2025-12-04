import request from "supertest";
import { app, setupApp } from "../../app";
import sequelize from "../../data/database";

import {
  inputCreateLessonPlan,
  inputCreateExercises,
} from "../integration/gemini/gemini.mock";

import { UserRequest } from "../../modules/users/user.interface";

let accessToken: string;

const user: UserRequest = {
  name_user: "UsuarioE2E",
  email_user: "e2e@email.com",
  password_user: "123456",
  cpf_user: "36245448026",
  role_user: "admin",
};

describe("E2E - Fluxo completo do sistema", () => {
  beforeAll(async () => {
    process.env.NODE_ENV = "test";

    await setupApp();
    await app.ready();
    await sequelize.sync({ force: true });
  }, 30000);

  it("Deve registrar o usuário com sucesso", async () => {
    const res = await request(app.server).post("/users/create").send(user);

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Usuário criado com sucesso.");
    expect(res.body.createdUser).toHaveProperty("id_user");
  });

  it("Deve fazer login e retornar tokens", async () => {
    const res = await request(app.server).post("/auth/login").send({
      email_user: user.email_user,
      password_user: user.password_user,
    });

    expect(res.status).toBe(200);
    expect(res.body.tokens).toHaveProperty("accessToken");
    expect(res.body.tokens).toHaveProperty("refreshToken");

    accessToken = res.body.tokens.accessToken;
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
    expect(res.body.sucess).toBe(true);
    expect(Array.isArray(res.body.users)).toBe(true);
  });

  it("Deve criar um plano de aula usando Gemini", async () => {
    const res = await request(app.server)
      .post("/lesson-plans/create-lesson-plan")
      .send(inputCreateLessonPlan)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Plano de aula criado com sucesso.");
    expect(res.body.createdLessonPlan).toHaveProperty("id_lesson_plan");
  });

  it("Deve criar exercícios usando Gemini", async () => {
    const res = await request(app.server)
      .post("/exercises/create-exercises")
      .send(inputCreateExercises)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Exercício criado com sucesso.");
    expect(res.body.createdExercise).toHaveProperty("id_exercise");
  });
});
