import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../data/database";
import { ExerciseModel } from "../exercises/models/exercises.model";

export class User extends Model {
  public id_user!: string;
  public name_user!: string;
  public email_user!: string;
  public cpf_user!: string;
  public password_user!: string;
  public role_user!: "admin" | "teacher" | "student";
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exercises?: ExerciseModel[];
}

export function initUser(sequelize: Sequelize) {
  User.init(
    {
      id_user: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name_user: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      email_user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      cpf_user: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
      },
      password_user: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role_user: {
        type: DataTypes.ENUM("admin", "teacher", "student"),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      timestamps: true,
    }
  );
}
