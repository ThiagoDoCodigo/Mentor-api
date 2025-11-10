import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class Resources_lesson_planModel extends Model {
  public id_resources_lesson_plan!: string;
  public id_lesson_plan!: string;
  public contentResourcesLessonPlan!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly lesson_plan?: Lesson_planModel;
}

export function initResources_lesson_planModel(sequelize: Sequelize) {
  Resources_lesson_planModel.init(
    {
      id_resources_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      contentResourcesLessonPlan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "resources_lesson_plan",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
