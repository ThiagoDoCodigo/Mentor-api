import { DataTypes, Model, Sequelize } from "sequelize";
import { Lesson_planModel } from "./Lesson_plan.model";

export class InclusiveAdaptation_lesson_planModel extends Model {
  public id_inclusive_adaptation_lesson_plan!: string;
  public id_lesson_plan!: string;
  public visualImpairment!: string;
  public learningDifficulties!: string;
  public highAbilities!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public readonly lesson_plan?: Lesson_planModel;
}

export function initInclusiveAdaptation_lesson_plan(sequelize: Sequelize) {
  InclusiveAdaptation_lesson_planModel.init(
    {
      id_inclusive_adaptation_lesson_plan: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_lesson_plan: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      visualImpairment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      learningDifficulties: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      highAbilities: {
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
      sequelize,
      tableName: "inclusive_adaptation_lesson_plan",
    }
  );
}
