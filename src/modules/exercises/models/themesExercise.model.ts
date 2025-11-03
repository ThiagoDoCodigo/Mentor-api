import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { ExerciseModel } from "./exercises.model";

export class ThemeExercise extends Model {
  public id_theme_exercise!: string;
  public id_exercise!: string;
  public titleThemeExercises!: string;
  public contentThemeExercises!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exercise?: ExerciseModel;
}

export function initThemeExercise(sequelize: Sequelize) {
  ThemeExercise.init(
    {
      id_theme_exercise: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_exercise: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleThemeExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentThemeExercises: {
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
      tableName: "theme_exercises",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
