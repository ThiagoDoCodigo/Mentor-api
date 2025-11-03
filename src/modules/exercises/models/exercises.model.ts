import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { ExerciseItem } from "./exerciseItem.model";
import { ThemeExercise } from "./themesExercise.model";
import { ObjectiveExercise } from "./objetivesExercise.model";

export class ExerciseModel extends Model {
  public id_exercise!: string;
  public id_user!: string;
  public subjectExercises!: string;
  public descriptionExercises!: string;
  public gradeLevelExercises!: string;
  public complexityLevelExercises!: string;
  public durationMinutesExercises!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly execiseItems?: ExerciseItem[];
  public readonly themesExercises?: ThemeExercise[];
  public readonly objectivesExercises?: ObjectiveExercise[];
}

export function initExercises(sequelize: Sequelize) {
  ExerciseModel.init(
    {
      id_exercise: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subjectExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gradeLevelExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      complexityLevelExercises: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      durationMinutesExercises: {
        type: DataTypes.INTEGER,
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
      tableName: "exercises",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      sequelize,
    }
  );
}
