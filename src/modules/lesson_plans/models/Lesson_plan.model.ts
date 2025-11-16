import { DataTypes, Model, Sequelize } from "sequelize";
import { Objetives_lesson_planModel } from "./Objetives_lesson_plan.model";
import { Competencies_lesson_planModel } from "./Competencies_lesson_plan.model";
import { Themes_lesson_planModel } from "./Themes_lesson_plan.model";
import { Methodology_lesson_planModel } from "./Methodology_lesson_plan.model";
import { Topics_lesson_planModel } from "./Topics_lesson_plan.model";
import { References_lesson_planModel } from "./References_lesson_plan.model";
import { Closure_lesson_planModel } from "./Closure_lesson_plan.model";
import { Homework_lesson_planModel } from "./Homework_lesson_plan.model";
import { InclusiveAdaptation_lesson_planModel } from "./InclusiveAdaptation_lesson_plan.model";

export class Lesson_planModel extends Model {
  public id_lesson_plan!: string;
  public id_user!: string;
  public subjectLessonPlan!: string;
  public descriptionLessonPlan!: string;
  public gradeLevelLessonPlan!: string;
  public complexityLevelLessonPlan!: string;
  public durationMinutesLessonPlan!: number;
  public generalObjective!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly objetives_lesson_plan?: Objetives_lesson_planModel[];
  public readonly competencies_lesson_plan?: Competencies_lesson_planModel[];
  public readonly themes_lesson_plan?: Themes_lesson_planModel[];
  public readonly methodology_lesson_plan?: Methodology_lesson_planModel[];
  public readonly topics_lesson_plan?: Topics_lesson_planModel[];
  public readonly homework_lesson_plan?: Homework_lesson_planModel;
  public readonly inclusive_adaptation_lesson_plan?: InclusiveAdaptation_lesson_planModel;
  public readonly references_lesson_plan?: References_lesson_planModel[];
  public readonly closure_lesson_plan?: Closure_lesson_planModel;
}

export function initLessonPlan(sequelize: Sequelize) {
  Lesson_planModel.init(
    {
      id_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subjectLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gradeLevelLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      complexityLevelLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      durationMinutesLessonPlan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      generalObjective: {
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
      tableName: "lesson_plans",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
