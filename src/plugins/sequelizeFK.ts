import sequelize from "../data/database";
import { FastifyInstance } from "fastify";
import { User, initUser } from "../modules/users/users.model";
import {
  ExerciseItem,
  initExercise,
} from "../modules/exercises/models/exerciseItem.model";
import {
  ExerciseModel,
  initExercises,
} from "../modules/exercises/models/exercises.model";
import {
  OptionsMultiple,
  initOptionsMultiple,
} from "../modules/exercises/models/optionsMultiple.model";
import {
  OptionsTrueOrFalse,
  initOptionsTrueOrFalse,
} from "../modules/exercises/models/optionsTrueOrFalse.model";
import {
  ThemeExercise,
  initThemeExercise,
} from "../modules/exercises/models/themesExercise.model";
import {
  ObjectiveExercise,
  initObjectiveExercise,
} from "../modules/exercises/models/objetivesExercise.model";

export default async function sequelizeFK(fastify: FastifyInstance) {
  // Inicializa todos os modelos antes de sincronizar
  initUser(sequelize);
  initExercises(sequelize);
  initExercise(sequelize);
  initOptionsMultiple(sequelize);
  initOptionsTrueOrFalse(sequelize);
  initThemeExercise(sequelize);
  initObjectiveExercise(sequelize);

  // ===============================
  // 👤 User <-> 🧩 ExerciseModel
  // ===============================
  User.hasMany(ExerciseModel, {
    foreignKey: "id_user",
    as: "exercises",
  });
  ExerciseModel.belongsTo(User, {
    foreignKey: "id_user",
    as: "user",
  });

  // ===============================
  // 🧩 ExerciseModel <-> 🧠 ExerciseItem
  // ===============================
  ExerciseModel.hasMany(ExerciseItem, {
    foreignKey: "id_exercise",
    as: "exerciseItems",
  });
  ExerciseItem.belongsTo(ExerciseModel, {
    foreignKey: "id_exercise",
    as: "exercise",
  });

  // ===============================
  // 🧠 ExerciseItem <-> 🎯 OptionsMultiple
  // ===============================
  ExerciseItem.hasMany(OptionsMultiple, {
    foreignKey: "id_exercise_item",
    as: "optionsMultiples",
  });
  OptionsMultiple.belongsTo(ExerciseItem, {
    foreignKey: "id_exercise_item",
    as: "exerciseItem",
  });

  // ===============================
  // 🧠 ExerciseItem <-> ⚖️ OptionsTrueOrFalse
  // ===============================
  ExerciseItem.hasMany(OptionsTrueOrFalse, {
    foreignKey: "id_exercise_item",
    as: "optionsTrueOrFalses",
  });
  OptionsTrueOrFalse.belongsTo(ExerciseItem, {
    foreignKey: "id_exercise_item",
    as: "exerciseItem",
  });

  // ===============================
  // 🧩 ExerciseModel <-> 🧱 ThemeExercise
  // ===============================
  ExerciseModel.hasMany(ThemeExercise, {
    foreignKey: "id_exercise",
    as: "themeExercises",
  });
  ThemeExercise.belongsTo(ExerciseModel, {
    foreignKey: "id_exercise",
    as: "exercise",
  });

  // ===============================
  // 🧩 ExerciseModel <-> 🎓 ObjectiveExercise
  // ===============================
  ExerciseModel.hasMany(ObjectiveExercise, {
    foreignKey: "id_exercise",
    as: "objectiveExercises",
  });
  ObjectiveExercise.belongsTo(ExerciseModel, {
    foreignKey: "id_exercise",
    as: "exercise",
  });
}
