import { DataTypes, Model, Sequelize } from "sequelize";
import { Topics_lesson_planModel } from "./Topics_lesson_plan.model";

export class Connections_topicsModel extends Model {
  public id_connections_topics!: string;
  public id_topics_lesson_plan!: string;
  public titleConnectionsTopics!: string;
  public contentConnectionsTopics!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly topics_lesson_plan?: Topics_lesson_planModel;
}

export function initConnections_topicsModel(sequelize: Sequelize) {
  Connections_topicsModel.init(
    {
      id_connections_topics: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_topics_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleConnectionsTopics: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentConnectionsTopics: {
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
      tableName: "connections_topics",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
