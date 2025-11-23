import { ValidationError, DatabaseError, EagerLoadingError } from "sequelize";
import { CustomError } from "../../../erros/CustomError";

export function handleSequelizeUserError(err: any): never {
  if (
    err.original?.code === "23505" &&
    err.original?.constraint === "users_email_user_key"
  ) {
    throw new CustomError(
      "Este email já está sendo utilizado por outro usuário!",
      409
    );
  }

  if (
    err.original?.code === "23505" &&
    err.original?.constraint === "users_cpf_user_key"
  ) {
    throw new CustomError(
      "Este cpf já está sendo utilizado por outro usuário!",
      409
    );
  }

  if (err instanceof ValidationError) {
    const messages = err.errors.map((e) => e.message).join("; ");
    throw new CustomError(messages, 400, "ValidationError");
  }

  if (err instanceof DatabaseError) {
    throw new CustomError("Erro de banco de dados", 500, "DatabaseError");
  }

  if (err instanceof EagerLoadingError) {
    throw new CustomError(
      "Erro ao carregar associações",
      500,
      "EagerLoadingError"
    );
  }

  if (err instanceof CustomError) {
    throw err;
  }

  const msg = err instanceof Error ? err.message : "Erro interno inesperado.";
  throw new CustomError(
    `Ocorreu um erro ao processar a requisição: ${msg}`,
    500,
    "GenericError"
  );
}
