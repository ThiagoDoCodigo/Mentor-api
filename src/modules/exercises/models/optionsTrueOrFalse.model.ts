import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { ExerciseItem } from "./exerciseItem.model";

export class OptionsTrueOrFalse extends Model {
  public id_optionsTrueOrFalse!: string;
  public id_exercise_item!: string;
  public option!: "V" | "F";
  public content_option!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exerciseItem?: ExerciseItem;
}

export function initOptionsTrueOrFalse(sequelize: Sequelize) {
  OptionsTrueOrFalse.init(
    {
      id_optionsTrueOrFalse: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_exercise_item: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      option: {
        type: DataTypes.ENUM,
        values: ["V", "F"],
        allowNull: false,
      },
      content_option: {
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
      sequelize,
      tableName: "optionsTrueOrFalse",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
