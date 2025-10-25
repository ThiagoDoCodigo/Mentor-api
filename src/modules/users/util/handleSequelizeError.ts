import {
  UniqueConstraintError,
  ValidationError,
  DatabaseError,
  EagerLoadingError,
} from "sequelize";
import { CustomError } from "../../../erros/CustomError";

export function handleSequelizeError(err: unknown): never {
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

  const msg = err instanceof Error ? err.message : "Erro interno";
  throw new CustomError(msg, 500, "GenericError");
}
