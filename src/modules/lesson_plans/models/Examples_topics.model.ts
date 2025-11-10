import { DataTypes, Model, Sequelize } from "sequelize";
import { Topics_lesson_planModel } from "./Topics_lesson_plan.model";

export class Examples_topicsModel extends Model {
  public id_examples_topics!: string;
  public id_topics_lesson_plan!: string;
  public titleExamplesTopicLessonPlan!: string;
  public contentExamplesTopicLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly topics_lesson_plan?: Topics_lesson_planModel;
}

export function initExamples_topicsModel(sequelize: Sequelize) {
  Examples_topicsModel.init(
    {
      id_examples_topics: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_topics_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleExamplesTopicLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentExamplesTopicLessonPlan: {
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
      tableName: "examples_topics",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
