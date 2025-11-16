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
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ThemeResponse {
  id_themes_lesson_plan: string;
  id_lesson_plan: string;
  titleThemesLessonPlan: string;
  contentThemesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeachingMethodologyResponse {
  id_methodology_lesson_plan: string;
  id_lesson_plan: string;
  titleMethodologyLessonPlan: string;
  contentMethodologyLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface examplesTopicLessonPlanResponse {
  id_examples_topics: string;
  id_topics_lesson_plan: string;
  titleExamplesTopicLessonPlan: string;
  contentExamplesTopicLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface activitiesTopicLessonPlanResponse {
  id_activities_topics: string;
  id_topics_lesson_plan: string;
  titleActivitiesTopicLessonPlan: string;
  contentActivitiesTopicLessonPlan: string;
  explicationActivitiesTopicLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface connectionsTopicLessonPlanResponse {
  id_connections_topics: string;
  id_topics_lesson_plan: string;
  titleConnectionsTopics: string;
  contentConnectionsTopics: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TopicResponse {
  id_topics_lesson_plan: string;
  id_lesson_plan: string;
  titleTopicsLessonPlan: string;
  contentTopicsLessonPlan: string;
  detailed_explanation_topic_lesson_plan: string;
  createdAt?: Date;
  updatedAt?: Date;

  examples_topics?: examplesTopicLessonPlanResponse[];
  activities_topics?: activitiesTopicLessonPlanResponse[];
  connections_topics?: connectionsTopicLessonPlanResponse[];
}

export interface HomeworkResponse {
  id_homework_lesson_plan: string;
  id_lesson_plan: string;
  description: string;
  objective: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InclusiveAdaptationResponse {
  id_inclusive_adaptation_lesson_plan: string;
  id_lesson_plan: string;
  visualImpairment: string;
  learningDifficulties: string;
  highAbilities: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ClosureResponse {
  id_closure_lesson_plan: string;
  id_lesson_plan: string;
  summary: string;
  reflection: string;
  nextSteps: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CompetenciesResponse {
  id_competencies_lesson_plan: string;
  id_lesson_plan: string;
  contentCompetenciesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReferencesResponse {
  id_references_lesson_plan: string;
  id_lesson_plan: string;
  contentReferencesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
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
  objetives_lesson_plan?: ObjectiveResponse[];

  competencies_lesson_plan?: CompetenciesResponse[];
  themes_lesson_plan?: ThemeResponse[];
  methodology_lesson_plan?: TeachingMethodologyResponse[];
  topics_lesson_plan?: TopicResponse[];

  homework_lesson_plan?: HomeworkResponse;
  inclusive_adaptation_lesson_plan?: InclusiveAdaptationResponse;
  references_lesson_plan?: ReferencesResponse[];
  closure_lesson_plan?: ClosureResponse;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface patchLessonPlan {
  subjectLessonPlan?: string;
  descriptionLessonPlan?: string;
  gradeLevelLessonPlan?: string;
  complexityLevelLessonPlan?: string;
  durationMinutesLessonPlan?: number;
  generalObjective?: string;
}

export interface patchLessonPlanResponse {
  id_lesson_plan: string;
  id_user: string;
  subjectLessonPlan: string;
  descriptionLessonPlan: string;
  gradeLevelLessonPlan: string;
  complexityLevelLessonPlan: string;
  durationMinutesLessonPlan: number;
  generalObjective: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface patchObjective {
  titleObjetivesLessonPlan?: string;
  contentObjetivesLessonPlan?: string;
}

export interface patchObjectiveResponse {
  id_objetives_lesson_plan: string;
  id_lesson_plan: string;
  titleObjetivesLessonPlan: string;
  contentObjetivesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchCompetencies {
  contentCompetenciesLessonPlan?: string;
}

export interface patchCompetenciesResponse {
  id_competencies_lesson_plan: string;
  id_lesson_plan: string;
  contentCompetenciesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchTheme {
  titleThemesLessonPlan?: string;
  contentThemesLessonPlan?: string;
}

export interface patchThemeResponse {
  id_themes_lesson_plan: string;
  id_lesson_plan: string;
  titleThemesLessonPlan: string;
  contentThemesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchTeachingMethodology {
  titleMethodologyLessonPlan?: string;
  contentMethodologyLessonPlan?: string;
}

export interface patchTeachingMethodologyResponse {
  id_methodology_lesson_plan: string;
  id_lesson_plan: string;
  titleMethodologyLessonPlan: string;
  contentMethodologyLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchTopic {
  titleTopicsLessonPlan?: string;
  contentTopicsLessonPlan?: string;
  detailed_explanation_topic_lesson_plan?: string;
}

export interface patchTopicResponse {
  id_topics_lesson_plan: string;
  id_lesson_plan: string;
  titleTopicsLessonPlan: string;
  contentTopicsLessonPlan: string;
  detailed_explanation_topic_lesson_plan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchHomework {
  description?: string;
  objective?: string;
}

export interface patchHomeworkResponse {
  id_homework_lesson_plan: string;
  id_lesson_plan: string;
  description: string;
  objective: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchInclusiveAdaptation {
  visualImpairment?: string;
  learningDifficulties?: string;
  highAbilities?: string;
}

export interface patchInclusiveAdaptationResponse {
  id_inclusive_adaptation_lesson_plan: string;
  id_lesson_plan: string;
  visualImpairment: string;
  learningDifficulties: string;
  highAbilities: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchReferences {
  contentReferencesLessonPlan?: string;
}

export interface patchReferencesResponse {
  id_references_lesson_plan: string;
  id_lesson_plan: string;
  contentReferencesLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchClosure {
  summary?: string;
  reflection?: string;
  nextSteps?: string;
}

export interface patchClosureResponse {
  id_closure_lesson_plan: string;
  id_lesson_plan: string;
  summary: string;
  reflection: string;
  nextSteps: string;
  createdAt?: Date;
  updatedAt?: Date;
  lesson_plan?: patchLessonPlanResponse;
}

export interface patchExamplesTopics {
  titleExamplesTopicLessonPlan?: string;
  contentExamplesTopicLessonPlan?: string;
}

export interface patchExamplesTopicsResponse {
  id_examples_topics: string;
  id_topics_lesson_plan: string;
  titleExamplesTopicLessonPlan: string;
  contentExamplesTopicLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  topics_lesson_plan?: patchTopicResponse;
}

export interface patchActivitiesTopics {
  titleActivitiesTopicLessonPlan?: string;
  contentActivitiesTopicLessonPlan?: string;
  explicationActivitiesTopicLessonPlan?: string;
}

export interface patchActivitiesTopicsResponse {
  id_activities_topics: string;
  id_topics_lesson_plan: string;
  titleActivitiesTopicLessonPlan: string;
  contentActivitiesTopicLessonPlan: string;
  explicationActivitiesTopicLessonPlan: string;
  createdAt?: Date;
  updatedAt?: Date;
  topics_lesson_plan?: patchTopicResponse;
}

export interface patchConnectionsTopics {
  titleConnectionsTopics?: string;
  contentConnectionsTopics?: string;
}

export interface patchConnectionsTopicsResponse {
  id_connections_topics: string;
  id_topics_lesson_plan: string;
  titleConnectionsTopics: string;
  contentConnectionsTopics: string;
  createdAt?: Date;
  updatedAt?: Date;
  topics_lesson_plan?: patchTopicResponse;
}
