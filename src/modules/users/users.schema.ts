import { FastifySchema } from "fastify";

export const createUserSchema: FastifySchema = {
  body: {
    type: "object",
    required: [
      "name_user",
      "email_user",
      "cpf_user",
      "password_user",
      "role_user",
    ],
    properties: {
      name_user: {
        type: "string",
        minLength: 3,
        maxLength: 250,
        errorMessage: {
          type: "O nome deve ser uma string",
          minLength: "O nome deve ter pelo menos 3 caracteres",
          maxLength: "O nome deve ter no máximo 250 caracteres",
        },
      },
      email_user: {
        type: "string",
        format: "email",
        minLength: 6,
        errorMessage: {
          type: "O email deve ser uma string",
          format: "O email deve ser um email valido",
          minLength: "O email deve ter pelo menos 6 caracteres",
        },
      },
      cpf_user: {
        type: "string",
        minLength: 11,
        maxLength: 11,
        errorMessage: {
          type: "O CPF deve ser uma string",
          minLength: "O CPF deve ter 11 caracteres",
          maxLength: "O CPF deve ter 11 caracteres",
        },
      },
      password_user: {
        type: "string",
        minLength: 6,
        errorMessage: {
          type: "A senha deve ser uma string",
          minLength: "A senha deve ter pelo menos 6 caracteres",
        },
      },
      role_user: {
        type: "string",
        enum: ["admin", "teacher", "student"],
        errorMessage: {
          type: "O role deve ser uma string",
          enum: "O role deve ser admin, teacher ou student",
        },
      },
    },
    errorMessage: {
      required: {
        name_user: "O nome é obrigatorio",
        email_user: "O email é obrigatorio",
        cpf_user: "O CPF é obrigatorio",
        password_user: "A senha é obrigatorio",
        role_user: "O role é obrigatorio",
      },
    },
  },
};

export const patchUserSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      name_user: {
        type: "string",
        minLength: 3,
        maxLength: 250,
        errorMessage: {
          type: "O nome deve ser uma string",
          minLength: "O nome deve ter pelo menos 3 caracteres",
          maxLength: "O nome deve ter no máximo 250 caracteres",
        },
      },
      email_user: {
        type: "string",
        format: "email",
        minLength: 6,
        errorMessage: {
          type: "O email deve ser uma string",
          format: "O email deve ser um email valido",
          minLength: "O email deve ter pelo menos 6 caracteres",
        },
      },
      cpf_user: {
        type: "string",
        minLength: 11,
        maxLength: 11,
        errorMessage: {
          type: "O CPF deve ser uma string",
          minLength: "O CPF deve ter 11 caracteres",
          maxLength: "O CPF deve ter 11 caracteres",
        },
      },
      password_user: {
        type: "string",
        minLength: 6,
        errorMessage: {
          type: "A senha deve ser uma string",
          minLength: "A senha deve ter pelo menos 6 caracteres",
        },
      },
      role_user: {
        type: "string",
        enum: ["admin", "teacher", "student"],
        errorMessage: {
          type: "O role deve ser uma string",
          enum: "O role deve ser admin, teacher ou student",
        },
      },
    },
    errorMessage: {
      required: {
        name_user: "O nome é obrigatorio",
        email_user: "O email é obrigatorio",
        cpf_user: "O CPF é obrigatorio",
        password_user: "A senha é obrigatorio",
        role_user: "O role é obrigatorio",
      },
    },
  },
};
