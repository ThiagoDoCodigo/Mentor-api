import { ExerciseRepository } from "./exercise.repository";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";

export const exerciseRepository = new ExerciseRepository();
export const exerciseService = new ExerciseService(exerciseRepository);
export const exerciseController = new ExerciseController(exerciseService);

export default exerciseController;
