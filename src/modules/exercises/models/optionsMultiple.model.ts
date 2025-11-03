import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { ExerciseItem } from "./exerciseItem.model";

export class OptionsMultiple extends Model {
  public id_optionsMultiple!: string;
  public id_exercise_item!: string;
  public option!: "A" | "B" | "C" | "D" | "E";
  public content_option!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exerciseItem?: ExerciseItem;
}

export function initOptionsMultiple(sequelize: Sequelize) {
  OptionsMultiple.init(
    {
      id_optionsMultiple: {
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
        values: ["A", "B", "C", "D", "E"],
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
      tableName: "optionsMultiple",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
