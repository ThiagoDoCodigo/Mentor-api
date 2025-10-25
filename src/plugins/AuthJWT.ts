import type { FastifyInstance } from "fastify";
import jwt from "@fastify/jwt";
import dotenv from "dotenv";

dotenv.config();

const JWT_PASSWORD = process.env.JWT_PASSWORD!;
const JWT_LIMIT_ACESS = process.env.JWT_LIMIT_ACESS!;

export class AuthJWT {
  private static instance: AuthJWT;
  private fastify: FastifyInstance;

  private constructor(fastify: FastifyInstance) {
    this.fastify = fastify;
  }

  public static getInstance(fastify: FastifyInstance): AuthJWT {
    if (!AuthJWT.instance) {
      AuthJWT.instance = new AuthJWT(fastify);
    }
    return AuthJWT.instance;
  }

  public async initialize(): Promise<void> {
    this.fastify.register(jwt, {
      secret: JWT_PASSWORD,
      sign: {
        expiresIn: JWT_LIMIT_ACESS,
      },
    });
  }

  public async sign(payload: object): Promise<string> {
    return this.fastify.jwt.sign(payload);
  }

  public async verify(token: string): Promise<object | null | string> {
    try {
      return this.fastify.jwt.verify(token);
    } catch {
      return null;
    }
  }

  public async decode(token: string): Promise<object | null> {
    try {
      return this.fastify.jwt.decode(token);
    } catch {
      return null;
    }
  }
}
