import { app, setupApp } from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const start = async () => {
  await setupApp();
  await app.listen({ port: PORT, host: HOST });
  console.log(`Servidor rodando em http://localhost:${PORT}`);
};

start();
