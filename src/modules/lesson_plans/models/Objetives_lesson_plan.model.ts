import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Objetives_lesson_planModel extends Model {
  public id_objetives_lesson_plan!: string;
  public id_lesson_plan!: string;
  public titleObjetivesLessonPlan!: string;
  public contentObjetivesLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initObjetives_lesson_plan(sequelize: Sequelize) {
  Objetives_lesson_planModel.init(
    {
      id_objetives_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleObjetivesLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentObjetivesLessonPlan: {
        type: DataTypes.TEXT,
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
      tableName: "objetives_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
