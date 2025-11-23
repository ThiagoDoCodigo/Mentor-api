import Fastify from "fastify";
import dotenv from "dotenv";
import { fastifyCors } from "@fastify/cors";
import AjvErrors from "ajv-errors";
import Routes from "./routes/Routes";
import sequelizeFK from "./plugins/sequelizeFK";
import { AuthJWT } from "./plugins/AuthJWT";
import { AuthToken } from "./plugins/AuthToken";
import { AuthRole } from "./plugins/AuthRole";
import { AuthOwner } from "./plugins/AuthOwner";

dotenv.config();

export const app = Fastify({
  logger: false,
  ajv: {
    customOptions: {
      coerceTypes: true,
      useDefaults: true,
      allErrors: true,
      removeAdditional: false,
      strict: true,
    },
    plugins: [AjvErrors],
  },
});

app.setErrorHandler((err, request, reply) => {
  if (err.validation) {
    const message = err.validation[0].message;
    return reply
      .status(400)
      .send({ statusCode: 400, error: "Bad Request", message });
  }
  return reply.send(err);
});

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflight: true,
});

export const setupApp = async () => {
  app.register(sequelizeFK);
  await AuthJWT.getInstance().initialize(app);
  AuthToken(app);
  AuthRole(app);
  AuthOwner(app);
  app.register(Routes);
  return app;
};
