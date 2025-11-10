import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Skills_lesson_planModel extends Model {
  public id_skills_lesson_plan!: string;
  public id_lesson_plan!: string;
  public contentSkillsLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initSkills_lesson_plan(sequelize: Sequelize) {
  Skills_lesson_planModel.init(
    {
      id_skills_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      contentSkillsLessonPlan: {
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
      tableName: "skills_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
