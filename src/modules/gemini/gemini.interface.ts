//=======CREATE LESSON PLAN GEMINI=======

//Request:
export interface objectivesGemini {
  titleObjectiveLessonPlan: string;
  contentObjectiveLessonPlan: string;
}

export interface teaching_methodologiesGemini {
  titleTeachingMethodologyLessonPlan: string;
  contentTeachingMethodologyLessonPlan: string;
}

export interface themesGemini {
  titleThemeLessonPlan: string;
  contentThemeLessonPlan: string;
}

export interface LessonPlanRequestGemini {
  subject_lesson_plan: string;
  description_lesson_plan: string;
  grade_level_lesson_plan: string;
  complexity_level_lesson_plan: string;
  duration_minutes_lesson_plan: number;
  objectives: objectivesGemini[];
  teaching_methodologies: teaching_methodologiesGemini[];
  themes: themesGemini[];
}

//Response:
export interface ObjectiveGemini {
  titleObjectiveLessonPlan: string;
  contentObjectiveLessonPlan: string;
}

export interface ThemeGemini {
  titleThemeLessonPlan: string;
  contentThemeLessonPlan: string;
}

export interface TeachingMethodologyGemini {
  titleTeachingMethodologyLessonPlan: string;
  contentTeachingMethodologyLessonPlan: string;
}

export interface examplesTopicLessonPlan {
  titleExamplesTopicLessonPlan: string;
  contentExamplesTopicLessonPlan: string;
}

export interface activitiesTopicLessonPlan {
  titleActivitiesTopicLessonPlan: string;
  contentActivitiesTopicLessonPlan: string;
  explicationActivitiesTopicLessonPlan: string;
}

export interface connectionsTopicLessonPlan {
  titleConnectionsTopicLessonPlan: string;
  contentConnectionsTopicLessonPlan: string;
}

export interface TopicGemini {
  titleTopicLessonPlan: string;
  contentTopicLessonPlan: string;
  detailed_explanation_topic_lesson_plan: string;
  examplesTopicLessonPlan: examplesTopicLessonPlan[];
  activitiesTopicLessonPlan: activitiesTopicLessonPlan[];
  connectionsTopicLessonPlan: connectionsTopicLessonPlan[];
}

export interface EvaluationGemini {
  diagnostic: string;
  formative: string;
  summative: string;
}

export interface HomeworkGemini {
  description: string;
  objective: string;
}

export interface InclusiveAdaptationGemini {
  visualImpairment: string;
  learningDifficulties: string;
  highAbilities: string;
}

export interface ClosureGemini {
  summary: string;
  reflection: string;
  nextSteps: string;
}

export interface LessonPlanResponseGemini {
  subjectLessonPlan: string;
  descriptionLessonPlan: string;
  gradeLevelLessonPlan: string;
  complexityLevelLessonPlan: string;
  durationMinutesLessonPlan: number;

  generalObjective: string;
  specificObjectives: ObjectiveGemini[];

  competencies: string[];
  skills: string[];
  themes: ThemeGemini[];
  teachingMethodologies: TeachingMethodologyGemini[];
  resources: string[];
  topics: TopicGemini[];

  evaluation: EvaluationGemini;
  homework: HomeworkGemini;
  inclusiveAdaptation: InclusiveAdaptationGemini;
  references: string[];
  closure: ClosureGemini;
}

//=======CREATE EXERCISES GEMINI=======

export interface ExercisesRequestGemini {
  subject_exercises: string;
  description_exercises: string;
  grade_level_exercises: string;
  complexity_level_exercises: string;
  duration_minutes_exercises: number;
  objectives_exercises: objectives_exercises[];
  themes_exercises: themes_exercises[];
  exercises: ExeciseItemRequest[];
}

export interface objectives_exercises {
  titleObjectiveExercises: string;
  contentObjectiveExercises?: string;
}

export interface themes_exercises {
  titleThemeExercises: string;
  contentThemeExercises?: string;
}

export interface ExeciseItemRequest {
  type_exercise: "multipla-escolha" | "discursiva" | "verdadeiro-falso";
  bloom_level:
    | "lembrar"
    | "compreender"
    | "aplicar"
    | "analisar"
    | "avaliar"
    | "criar";
}

export interface ExeciseItemRespose {
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

export interface ExercisesResponseGemini {
  subjectExercises: string;
  descriptionExercises: string;
  gradeLevelExercises: string;
  complexityLevelExercises: string;
  durationMinutesExercises: number;
  objectivesExercises: objectives_exercises[];
  themesExercises: themes_exercises[];
  exercises: ExeciseItemRespose[];
}
