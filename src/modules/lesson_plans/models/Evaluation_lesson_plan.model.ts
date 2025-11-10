import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Evaluation_lesson_planModel extends Model {
  public id_evaluation_lesson_plan!: string;
  public id_lesson_plan!: string;
  public diagnostic!: string;
  public formative!: string;
  public summative!: string;

  public readonly lesson_plan?: Lesson_planModel;
}
export function initEvaluation_lesson_plan(sequelize: Sequelize) {
  Evaluation_lesson_planModel.init(
    {
      id_evaluation_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      diagnostic: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      formative: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      summative: {
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
      tableName: "evaluation_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
