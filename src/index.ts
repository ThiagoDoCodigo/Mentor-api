// src/index.ts
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastifySocket from "fastify-socket.io";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT || 3000);

const app = fastify({
  logger: true,
});

// plugins
app.register(cors, { origin: true });
app.register(jwt, { secret: process.env.JWT_SECRET || "dev-secret" });
app.register(fastifySocket, {}); // opções do socket.io aqui se quiser

// // decorates / helpers
// app.register(authPlugin);

// // registrar rotas de módulos
// app.register(userRoutes, { prefix: "/users" });

// rota raiz
app.get("/", async (request, reply) => {
  return { message: "Servidor rodando com Fastify, JWT e Socket.IO!" };
});

// configurar socket.io (após ready)
app.addHook("onReady", async () => {
  // @ts-ignore - fastify-socket.io adiciona `io` ao fastify
  const io = (app as any).io;
  if (!io) return;
  io.on("connection", (socket: any) => {
    app.log.info(`Socket conectado: ${socket.id}`);

    socket.on("hello", (payload: any) => {
      app.log.info("hello recebido", payload);
      socket.emit("hello:ack", { ok: true, received: payload });
    });

    socket.on("disconnect", () => {
      app.log.info(`Socket desconectado: ${socket.id}`);
    });
  });
});

// iniciar
const start = async () => {
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

// export para testes
export default app;
