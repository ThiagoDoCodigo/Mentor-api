import request from "supertest";
import { app, setupApp } from "../../../app";
import sequelize from "../../../data/database";
import { inputCreateLessonPlan, inputCreateExercises } from "./gemini.mock";
import { UserRequest } from "../../../modules/users/user.interface";

const createUserLogin: UserRequest = {
  name_user: "João2",
  email_user: "joao22@email.com",
  password_user: "123456",
  cpf_user: "47985482008",
  role_user: "admin",
};

let accessToken: string;

describe("Gemini Integration", () => {
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
  }, 30000);

  it("Deve criar um plano de aula", async () => {
    const res = await request(app.server)
      .post("/lesson-plans/create-lesson-plan")
      .send(inputCreateLessonPlan)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(201);
    expect(res.body.sucess).toBe(true);
    expect(res.body.message).toBe("Plano de aula criado com sucesso.");
    expect(res.body.createdLessonPlan).toHaveProperty("id_lesson_plan");
  });

  it("Deve criar exercícios", async () => {
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
