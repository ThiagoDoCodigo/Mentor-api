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

import {
  Lesson_planModel,
  initLessonPlan,
} from "../modules/lesson_plans/models/Lesson_plan.model";

import {
  Themes_lesson_planModel,
  initThemes_lesson_plan,
} from "../modules/lesson_plans/models/Themes_lesson_plan.model";

import {
  Objetives_lesson_planModel,
  initObjetives_lesson_plan,
} from "../modules/lesson_plans/models/Objetives_lesson_plan.model";

import {
  Competencies_lesson_planModel,
  initCompetencies_lesson_plan,
} from "../modules/lesson_plans/models/Competencies_lesson_plan.model";

import {
  Skills_lesson_planModel,
  initSkills_lesson_plan,
} from "../modules/lesson_plans/models/Skills_lesson_plan.model";

import {
  Methodology_lesson_planModel,
  initMethodology_lesson_planModel,
} from "../modules/lesson_plans/models/Methodology_lesson_plan.model";

import {
  Resources_lesson_planModel,
  initResources_lesson_planModel,
} from "../modules/lesson_plans/models/Resources_lesson_plan.model";

import {
  Topics_lesson_planModel,
  initTopics_lesson_planModel,
} from "../modules/lesson_plans/models/Topics_lesson_plan.model";

import {
  Examples_topicsModel,
  initExamples_topicsModel,
} from "../modules/lesson_plans/models/Examples_topics.model";

import {
  Activities_topicsModel,
  initActivities_topicsModel,
} from "../modules/lesson_plans/models/Activities_topics.model";

import {
  Connections_topicsModel,
  initConnections_topicsModel,
} from "../modules/lesson_plans/models/Connections_topics.model";

import {
  References_lesson_planModel,
  initReferences_lesson_planModel,
} from "../modules/lesson_plans/models/References_lesson_plan.model";

import {
  Closure_lesson_planModel,
  initClosure_lesson_planModel,
} from "../modules/lesson_plans/models/Closure_lesson_plan.model";

import {
  Evaluation_lesson_planModel,
  initEvaluation_lesson_plan,
} from "../modules/lesson_plans/models/Evaluation_lesson_plan.model";

import {
  Homework_lesson_planModel,
  initHomework_lesson_plan,
} from "../modules/lesson_plans/models/Homework_lesson_plan.model";

import {
  InclusiveAdaptation_lesson_planModel,
  initInclusiveAdaptation_lesson_plan,
} from "../modules/lesson_plans/models/InclusiveAdaptation_lesson_plan.model";

export default async function sequelizeFK(fastify: FastifyInstance) {
  // Inicializa todos os modelos antes de sincronizar
  initUser(sequelize);
  initExercises(sequelize);
  initExercise(sequelize);
  initOptionsMultiple(sequelize);
  initOptionsTrueOrFalse(sequelize);
  initThemeExercise(sequelize);
  initObjectiveExercise(sequelize);

  initLessonPlan(sequelize);
  initThemes_lesson_plan(sequelize);
  initObjetives_lesson_plan(sequelize);
  initCompetencies_lesson_plan(sequelize);
  initSkills_lesson_plan(sequelize);
  initMethodology_lesson_planModel(sequelize);
  initResources_lesson_planModel(sequelize);
  initTopics_lesson_planModel(sequelize);
  initExamples_topicsModel(sequelize);
  initEvaluation_lesson_plan(sequelize);
  initHomework_lesson_plan(sequelize);
  initInclusiveAdaptation_lesson_plan(sequelize);
  initActivities_topicsModel(sequelize);
  initConnections_topicsModel(sequelize);
  initReferences_lesson_planModel(sequelize);
  initClosure_lesson_planModel(sequelize);

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

  // ===========================
  // 👤 User <-> 🧩 LessonPlan
  // ===========================
  User.hasMany(Lesson_planModel, {
    foreignKey: "id_user",
    as: "lessonPlans",
  });
  Lesson_planModel.belongsTo(User, {
    foreignKey: "id_user",
    as: "user",
  });

  // ===========================================
  // 🧩 LessonPlan <-> 🎯 Objetives_lesson_plan
  // ===========================================
  Lesson_planModel.hasMany(Objetives_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "objetives_lesson_plan",
  });
  Objetives_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Competencies
  // ===============================
  Lesson_planModel.hasMany(Competencies_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "competencies_lesson_plan",
  });
  Competencies_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Skills
  // ===============================
  Lesson_planModel.hasMany(Skills_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "skills_lesson_plan",
  });
  Skills_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // =========================================
  // 🧩 LessonPlan <-> 🎨 Themes_lesson_plan
  // =========================================
  Lesson_planModel.hasMany(Themes_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "themes_lesson_plan",
  });
  Themes_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Methodology
  // ===============================
  Lesson_planModel.hasMany(Methodology_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "methodology_lesson_plan",
  });
  Methodology_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Resources
  // ===============================
  Lesson_planModel.hasMany(Resources_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "resources_lesson_plan",
  });
  Resources_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Topics
  // ===============================
  Lesson_planModel.hasMany(Topics_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "topics_lesson_plan",
  });
  Topics_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> evoluation
  // ===============================
  Lesson_planModel.hasOne(Evaluation_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "evaluation_lesson_plan",
  });
  Evaluation_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Homework
  // ===============================
  Lesson_planModel.hasOne(Homework_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "homework_lesson_plan",
  });
  Homework_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> InclusiveAdaptation
  // ===============================
  Lesson_planModel.hasOne(InclusiveAdaptation_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "inclusive_adaptation_lesson_plan",
  });
  InclusiveAdaptation_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> References
  // ===============================
  Lesson_planModel.hasMany(References_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "references_lesson_plan",
  });
  References_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // ===============================
  // 🧩 LessonPlan <-> Closure
  // ===============================
  Lesson_planModel.hasOne(Closure_lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "closure_lesson_plan",
  });
  Closure_lesson_planModel.belongsTo(Lesson_planModel, {
    foreignKey: "id_lesson_plan",
    as: "lessonPlan",
  });

  // =======================
  // 🧩 Topics <-> examples
  // =======================
  Topics_lesson_planModel.hasMany(Examples_topicsModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "examples_topics",
  });
  Examples_topicsModel.belongsTo(Topics_lesson_planModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "topics",
  });

  // =========================
  // 🧩 Topics <-> activities
  // =========================
  Topics_lesson_planModel.hasMany(Activities_topicsModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "activities_topics",
  });
  Activities_topicsModel.belongsTo(Topics_lesson_planModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "topics",
  });

  // ==========================
  // 🧩 Topics <-> connections
  // ==========================
  Topics_lesson_planModel.hasMany(Connections_topicsModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "connections_topics",
  });
  Connections_topicsModel.belongsTo(Topics_lesson_planModel, {
    foreignKey: "id_topics_lesson_plan",
    as: "topics",
  });
}
