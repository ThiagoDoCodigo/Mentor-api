import { FastifySchema } from "fastify";

export const userLoginSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["email_user", "password_user"],
    properties: {
      email_user: {
        type: "string",
        format: "email",
        errorMessage: {
          type: "O email deve ser uma string",
          format: "O email deve ser um email valido",
        },
      },
      password_user: {
        type: "string",
        errorMessage: {
          type: "A senha deve ser uma string",
        },
      },
    },
    errorMessage: {
      required: {
        email_user: "O email é obrigatorio",
        password_user: "A senha é obrigatorio",
      },
    },
  },
};

export const userRereshTokenSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["refresh_token"],
    properties: {
      refresh_token: {
        type: "string",
        errorMessage: {
          type: "O refresh token deve ser uma string",
        },
      },
    },
    errorMessage: {
      required: {
        refresh_token: "O refresh token é obrigatorio",
      },
    },
  },
};
