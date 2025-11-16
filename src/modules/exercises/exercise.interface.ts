export interface ExercisesRequest {
  subject_exercises: string;
  description_exercises: string;
  grade_level_exercises: string;
  complexity_level_exercises: string;
  duration_minutes_exercises: number;
  objectives_exercises: objectives_exercises[];
  themes_exercises: themes_exercises[];
  exercises: ExeciseItem[];
}

export interface objectives_exercises {
  titleObjectiveExercises: string;
  contentObjectiveExercises?: string;
}

export interface themes_exercises {
  titleThemeExercises: string;
  contentThemeExercises?: string;
}

export interface ExeciseItem {
  type_exercise: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  title_exercise: string;
  content_exercise: string;
  options_exercise_multipla_escolha?: options_multipla_escolha_exercise[];
  options_exercise_verdadeiro_falso?: options_verdadeiro_falso_exercise[];
  correct_answer_exercise: string;
  explanation_exercise: string;
  bloom_level:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
}

export interface options_multipla_escolha_exercise {
  option: "A" | "B" | "C" | "D" | "E";
  content_option: string;
}

export interface options_verdadeiro_falso_exercise {
  option: "V" | "F";
  content_option: string;
}

export interface ExercisesResponse {
  id_exercise: string;
  id_user: string;
  subjectExercises: string;
  descriptionExercises: string;
  gradeLevelExercises: string;
  complexityLevelExercises: string;
  durationMinutesExercises: number;
  createdAt?: Date;
  updatedAt?: Date;

  execiseItems?: ExeciseItemResponse[];
  themesExercises?: themes_exercisesResponse[];
  objectivesExercises?: objectives_exercisesResponse[];
}

export interface objectives_exercisesResponse {
  id_objective_exercises: string;
  id_exercise: string;
  titleObjectiveExercises: string;
  contentObjectiveExercises?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface themes_exercisesResponse {
  id_theme_exercise: string;
  id_exercise: string;
  titleThemeExercises: string;
  contentThemeExercises?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExeciseItemResponse {
  id_exercise_item: string;
  id_exercise: string;
  type_exercise: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  title_exercise: string;
  content_exercise: string;
  correct_answer_exercise: string;
  explanation_exercise: string;
  bloom_level_exercise:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
  createdAt?: Date;
  updatedAt?: Date;

  optionsMultiple?: options_multipla_escolha_exerciseResponse[];
  optionsTrueOrFalse?: options_verdadeiro_falso_exercisResponse[];
}

export interface options_multipla_escolha_exerciseResponse {
  id_optionsMultiple: string;
  id_exercise_item: string;
  option: "A" | "B" | "C" | "D" | "E";
  content_option: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface options_verdadeiro_falso_exercisResponse {
  id_optionsTrueOrFalse: string;
  id_exercise_item: string;
  option: "V" | "F";
  content_option: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface patchExercises {
  subjectExercises?: string;
  descriptionExercises?: string;
  gradeLevelExercises?: string;
  complexityLevelExercises?: string;
  durationMinutesExercises?: number;
}

export interface patchExercisesResponse {
  id_exercise: string;
  id_user: string;
  subjectExercises: string;
  descriptionExercises: string;
  gradeLevelExercises: string;
  complexityLevelExercises: string;
  durationMinutesExercises: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface patchExerciseItem {
  type_exercise?: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  title_exercise?: string;
  content_exercise?: string;
  correct_answer_exercise?: string;
  explanation_exercise?:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
}

export interface patchExerciseItemResponse {
  id_exercise_item: string;
  id_exercise: string;
  type_exercise: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  title_exercise: string;
  content_exercise: string;
  correct_answer_exercise: string;
  explanation_exercise: string;
  bloom_level_exercise:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
  createdAt?: Date;
  updatedAt?: Date;
  exercise?: patchExercisesResponse;
}

export interface patchThemeExercises {
  titleThemeExercises?: string;
  contentThemeExercises?: string;
}

export interface patchThemeExercisesResponse {
  id_theme_exercise: string;
  id_exercise: string;
  titleThemeExercises: string;
  contentThemeExercises: string;
  createdAt?: Date;
  updatedAt?: Date;
  exercise?: patchExercisesResponse;
}

export interface patchObjectivesExercises {
  titleObjectiveExercises?: string;
  contentObjectiveExercises?: string;
}

export interface patchObjectivesExercisesResponse {
  id_objective_exercises: string;
  id_exercise: string;
  titleObjectiveExercises: string;
  contentObjectiveExercises: string;
  createdAt?: Date;
  updatedAt?: Date;
  exercise?: patchExercisesResponse;
}

export interface patchMultipleOptions {
  option?: "A" | "B" | "C" | "D" | "E";
  content_option?: string;
}

export interface patchMultipleOptionsResponse {
  id_optionsMultiple: string;
  id_exercise_item: string;
  option: "A" | "B" | "C" | "D" | "E";
  content_option: string;
  exerciseItem?: patchExerciseItemResponse;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface patchTrueOrFalseOptions {
  option?: "V" | "F";
  content_option?: string;
}

export interface patchTrueOrFalseOptionsResponse {
  id_optionsTrueOrFalse: string;
  id_exercise_item: string;
  option: "V" | "F";
  content_option: string;
  exerciseItem?: patchExerciseItemResponse;
  createdAt?: Date;
  updatedAt?: Date;
}
