import { DataTypes, Model, Sequelize } from "sequelize";
import { Topics_lesson_planModel } from "./Topics_lesson_plan.model";

export class Activities_topicsModel extends Model {
  public id_activities_topics!: string;
  public id_topics_lesson_plan!: string;
  public titleActivitiesTopicLessonPlan!: string;
  public contentActivitiesTopicLessonPlan!: string;
  public explicationActivitiesTopicLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly topics_lesson_plan?: Topics_lesson_planModel;
}

export function initActivities_topicsModel(sequelize: Sequelize) {
  Activities_topicsModel.init(
    {
      id_activities_topics: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_topics_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleActivitiesTopicLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentActivitiesTopicLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      explicationActivitiesTopicLessonPlan: {
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
      tableName: "activities_topics",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
