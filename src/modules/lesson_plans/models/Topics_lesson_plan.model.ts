import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";
import { Examples_topicsModel } from "./Examples_topics.model";
import { Activities_topicsModel } from "./Activities_topics.model";
import { Connections_topicsModel } from "./Connections_topics.model";

export class Topics_lesson_planModel extends Model {
  public id_topics_lesson_plan!: string;
  public id_lesson_plan!: string;
  public titleTopicsLessonPlan!: string;
  public contentTopicsLessonPlan!: string;
  public detailed_explanation_topic_lesson_plan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
  public readonly examples_topics?: Examples_topicsModel[];
  public readonly activities_topics?: Activities_topicsModel[];
  public readonly connections_topics?: Connections_topicsModel[];
}

export function initTopics_lesson_planModel(sequelize: Sequelize) {
  Topics_lesson_planModel.init(
    {
      id_topics_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleTopicsLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentTopicsLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      detailed_explanation_topic_lesson_plan: {
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
      tableName: "topics_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
