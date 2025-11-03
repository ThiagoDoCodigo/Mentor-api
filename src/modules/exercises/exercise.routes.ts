import { ExercisesRequest } from "./exercise.interface";
import exerciseController from "./exercise.container";
import { FastifyInstance } from "fastify";
import { createExercisesSchema } from "./exercise.schema";

export default async function exerciseRoutes(fastify: FastifyInstance) {
  fastify.register(async (instance) => {
    instance.addHook("preHandler", instance.verifyAuthToken);

    instance.post<{ Body: ExercisesRequest }>(
      "/create-exercises",
      { schema: createExercisesSchema },
      exerciseController.createExercise.bind(exerciseController)
    );

    instance.get(
      "/get-exercises/admin",
      {
        preHandler: instance.verifyRole("admin"),
      },
      exerciseController.getExercises.bind(exerciseController) as any
    );

    instance.get(
      "/get-exercises/user",
      exerciseController.getExercisesByUser.bind(exerciseController)
    );

    instance.get(
      "/get-exercises/exercise/:id_exercise",
      exerciseController.getExerciseById.bind(exerciseController)
    );

    instance.patch(
      "/update/exercise/:id_exercise",
      exerciseController.updateExercise.bind(exerciseController)
    );

    instance.patch(
      "/update/exercise-item/:id_exercise_item",
      exerciseController.updateExerciseItem.bind(exerciseController)
    );

    instance.patch(
      "/update/theme/:id_theme_exercises",
      exerciseController.updateThemeExercise.bind(exerciseController)
    );

    instance.patch(
      "/update/objective/:id_objective_exercises",
      exerciseController.updateObjectiveExercise.bind(exerciseController)
    );

    instance.patch(
      "/update/option-multiple/:id_optionsMultiple",
      exerciseController.updateOptionMultipleExercise.bind(exerciseController)
    );

    instance.patch(
      "/update/option-true-or-false/:id_optionsTrueOrFalse",
      exerciseController.updateOptionTrueOrFalseExercise.bind(
        exerciseController
      )
    );
  });
}
