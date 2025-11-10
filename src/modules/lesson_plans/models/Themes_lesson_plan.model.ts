import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Themes_lesson_planModel extends Model {
  public id_themes_lesson_plan!: string;
  public id_lesson_plan!: string;
  public titleThemesLessonPlan!: string;
  public contentThemesLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initThemes_lesson_plan(sequelize: Sequelize) {
  Themes_lesson_planModel.init(
    {
      id_themes_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleThemesLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentThemesLessonPlan: {
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
      tableName: "themes_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
