import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Methodology_lesson_planModel extends Model {
  public id_methodology_lesson_plan!: string;
  public id_lesson_plan!: string;
  public titleMethodologyLessonPlan!: string;
  public contentMethodologyLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initMethodology_lesson_planModel(sequelize: Sequelize) {
  Methodology_lesson_planModel.init(
    {
      id_methodology_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleMethodologyLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentMethodologyLessonPlan: {
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
      tableName: "methodology_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
