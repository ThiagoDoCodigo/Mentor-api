//Request:
export interface ObjectiveRequest {
  titleObjetivesLessonPlan: string;
  contentObjetivesLessonPlan: string;
}

export interface ThemeRequest {
  titleThemesLessonPlan: string;
  contentThemesLessonPlan: string;
}

export interface TeachingMethodologyRequest {
  titleMethodologyLessonPlan: string;
  contentMethodologyLessonPlan: string;
}

export interface examplesTopicLessonPlanRequest {
  titleExamplesTopicLessonPlan: string;
  contentExamplesTopicLessonPlan: string;
}

export interface activitiesTopicLessonPlanRequest {
  titleActivitiesTopicLessonPlan: string;
  contentActivitiesTopicLessonPlan: string;
  explicationActivitiesTopicLessonPlan: string;
}

export interface connectionsTopicLessonPlanRequest {
  titleConnectionsTopics: string;
  contentConnectionsTopics: string;
}

export interface TopicRequest {
  titleTopicsLessonPlan: string;
  contentTopicsLessonPlan: string;
  detailed_explanation_topic_lesson_plan: string;
  examplesTopicLessonPlan: examplesTopicLessonPlanRequest[];
  activitiesTopicLessonPlan: activitiesTopicLessonPlanRequest[];
  connectionsTopicLessonPlan: connectionsTopicLessonPlanRequest[];
}

export interface HomeworkRequest {
  description: string;
  objective: string;
}

export interface InclusiveAdaptationRequest {
  visualImpairment: string;
  learningDifficulties: string;
  highAbilities: string;
}

export interface ClosureRequest {
  summary: string;
  reflection: string;
  nextSteps: string;
}

export interface CompetenciesRequest {
  contentCompetenciesLessonPlan: string;
}

export interface ReferencesRequest {
  contentReferencesLessonPlan: string;
}

export interface LessonPlanRequest {
  subjectLessonPlan: string;
  descriptionLessonPlan: string;
  gradeLevelLessonPlan: string;
  complexityLevelLessonPlan: string;
  durationMinutesLessonPlan: number;

  generalObjective: string;
  specificObjectives: ObjectiveRequest[];

  competencies: CompetenciesRequest[];
  themes: ThemeRequest[];
  teachingMethodologies: TeachingMethodologyRequest[];
  topics: TopicRequest[];

  homework: HomeworkRequest;
  inclusiveAdaptation: InclusiveAdaptationRequest;
  references: ReferencesRequest[];
  closure: ClosureRequest;
}

//Response:
export interface ObjectiveResponse {
  id_objetives_lesson_plan: string;
  id_lesson_plan: string;
  titleObjetivesLessonPlan: string;
  contentObjetivesLessonPlan: string;
}

export interface ThemeResponse {
  id_themes_lesson_plan: string;
  id_lesson_plan: string;
  titleThemesLessonPlan: string;
  contentThemesLessonPlan: string;
}

export interface TeachingMethodologyResponse {
  id_methodology_lesson_plan: string;
  id_lesson_plan: string;
  titleMethodologyLessonPlan: string;
  contentMethodologyLessonPlan: string;
}

export interface examplesTopicLessonPlanResponse {
  id_examples_topics: string;
  id_topics_lesson_plan: string;
  titleExamplesTopicLessonPlan: string;
  contentExamplesTopicLessonPlan: string;
}

export interface activitiesTopicLessonPlanResponse {
  id_activities_topics: string;
  id_topics_lesson_plan: string;
  titleActivitiesTopicLessonPlan: string;
  contentActivitiesTopicLessonPlan: string;
  explicationActivitiesTopicLessonPlan: string;
}

export interface connectionsTopicLessonPlanResponse {
  id_connections_topics: string;
  id_topics_lesson_plan: string;
  titleConnectionsTopics: string;
  contentConnectionsTopics: string;
}

export interface TopicResponse {
  id_topics_lesson_plan: string;
  id_lesson_plan: string;
  titleTopicsLessonPlan: string;
  contentTopicsLessonPlan: string;
  detailed_explanation_topic_lesson_plan: string;
  examplesTopicLessonPlan: examplesTopicLessonPlanResponse[];
  activitiesTopicLessonPlan: activitiesTopicLessonPlanResponse[];
  connectionsTopicLessonPlan: connectionsTopicLessonPlanResponse[];
}

export interface HomeworkResponse {
  id_homework_lesson_plan: string;
  id_lesson_plan: string;
  description: string;
  objective: string;
}

export interface InclusiveAdaptationResponse {
  id_inclusive_adaptation_lesson_plan: string;
  id_lesson_plan: string;
  visualImpairment: string;
  learningDifficulties: string;
  highAbilities: string;
}

export interface ClosureResponse {
  id_closure_lesson_plan: string;
  id_lesson_plan: string;
  summary: string;
  reflection: string;
  nextSteps: string;
}

export interface CompetenciesResponse {
  id_competencies_lesson_plan: string;
  id_lesson_plan: string;
  contentCompetenciesLessonPlan: string;
}

export interface ReferencesResponse {
  id_references_lesson_plan: string;
  id_lesson_plan: string;
  contentReferencesLessonPlan: string;
}

export interface LessonPlanResponse {
  id_lesson_plan: string;
  id_user: string;
  subjectLessonPlan: string;
  descriptionLessonPlan: string;
  gradeLevelLessonPlan: string;
  complexityLevelLessonPlan: string;
  durationMinutesLessonPlan: number;

  generalObjective: string;
  specificObjectives: ObjectiveResponse[];

  competencies: CompetenciesResponse[];
  themes: ThemeResponse[];
  teachingMethodologies: TeachingMethodologyResponse[];
  topics: TopicResponse[];

  homework: HomeworkResponse;
  inclusiveAdaptation: InclusiveAdaptationResponse;
  references: ReferencesResponse[];
  closure: ClosureResponse;
}
