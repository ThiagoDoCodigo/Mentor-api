import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { ExerciseModel } from "./exercises.model";

export class ObjectiveExercise extends Model {
  public id_objective_exercises!: string;
  public id_exercise!: string;
  public titleObjectiveExercises!: string;
  public contentObjectiveExercises!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exercise?: ExerciseModel;
}

export function initObjectiveExercise(sequelize: Sequelize) {
  ObjectiveExercise.init(
    {
      id_objective_exercises: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_exercise: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      titleObjectiveExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentObjectiveExercises: {
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
      tableName: "objective_exercises",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
}
