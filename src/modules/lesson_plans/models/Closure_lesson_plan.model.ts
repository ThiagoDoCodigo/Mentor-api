import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Closure_lesson_planModel extends Model {
  public id_closure_lesson_plan!: string;
  public id_lesson_plan!: string;
  public summary!: string;
  public reflection!: string;
  public nextSteps!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initClosure_lesson_planModel(sequelize: Sequelize) {
  Closure_lesson_planModel.init(
    {
      id_closure_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reflection: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nextSteps: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "closure_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
