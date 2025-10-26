import Fastify from "fastify";
import dotenv from "dotenv";
import { fastifyCors } from "@fastify/cors";
import AjvErrors from "ajv-errors";
import Routes from "./routes/Routes";
//import PluginSequelize from './plugins/PluginSequelize';
import { AuthJWT } from "./plugins/AuthJWT";
import { AuthToken } from "./plugins/AuthToken";
import { AuthRole } from "./plugins/AuthRole";
import { AuthOwner } from "./plugins/AuthOwner";

dotenv.config();

const app = Fastify({
  logger: true,
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

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflight: true,
});

const start = async () => {
  try {
    //plugins para o fastify
    //app.register(PluginSequelize);
    await AuthJWT.getInstance().initialize(app);
    AuthToken(app);
    AuthRole(app);
    AuthOwner(app);
    app.register(Routes);

    await app.listen({ port: PORT, host: HOST });
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export default app;
