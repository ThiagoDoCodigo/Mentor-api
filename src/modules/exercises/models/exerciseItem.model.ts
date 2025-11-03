import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../../data/database";
import { OptionsMultiple } from "./optionsMultiple.model";
import { OptionsTrueOrFalse } from "./optionsTrueOrFalse.model";
import { ExerciseModel } from "./exercises.model";

export class ExerciseItem extends Model {
  public id_exercise_item!: string;
  public id_exercise!: string;
  public type_exercise!: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  public title_exercise!: string;
  public content_exercise!: string;
  public correct_answer_exercise!: string;
  public explanation_exercise!: string;
  public bloom_level_exercise!:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly exercise?: ExerciseModel;
  public readonly optionsMultiple?: OptionsMultiple[];
  public readonly optionsTrueOrFalse?: OptionsTrueOrFalse[];
}

export function initExercise(sequelize: Sequelize) {
  ExerciseItem.init(
    {
      id_exercise_item: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      id_exercise: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      type_exercise: {
        type: DataTypes.ENUM,
        values: ["multipla-escolha", "discursiva", "verdadeiro-falso"],
        allowNull: false,
      },
      title_exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content_exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      correct_answer_exercise: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      explanation_exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bloom_level_exercise: {
        type: DataTypes.ENUM,
        values: [
          "lembrar",
          "compreender",
          "aplicar",
          "analisar",
          "avaliar",
          "criar",
        ],
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
      tableName: "exercise_item",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      timestamps: true,
    }
  );
}
