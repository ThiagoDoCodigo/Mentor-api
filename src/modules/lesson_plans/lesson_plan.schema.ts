import { FastifySchema } from "fastify";

export const createLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    required: [
      "subjectLessonPlan",
      "descriptionLessonPlan",
      "gradeLevelLessonPlan",
      "complexityLevelLessonPlan",
      "durationMinutesLessonPlan",
      "generalObjective",
      "specificObjectives",
      "competencies",
      "themes",
      "teachingMethodologies",
      "topics",
      "homework",
      "inclusiveAdaptation",
      "references",
      "closure",
    ],
    properties: {
      subjectLessonPlan: {
        type: "string",
        errorMessage: {
          type: "O assunto deve ser uma string",
        },
      },
      descriptionLessonPlan: {
        type: "string",
        errorMessage: {
          type: "A descrição deve ser uma string",
        },
      },
      gradeLevelLessonPlan: {
        type: "string",
        errorMessage: {
          type: "O nível de ensino deve ser uma string",
        },
      },
      complexityLevelLessonPlan: {
        type: "string",
        errorMessage: {
          type: "O nível de complexidade deve ser uma string",
        },
      },
      durationMinutesLessonPlan: {
        type: "number",
        errorMessage: {
          type: "A duração deve ser um número",
        },
      },
      generalObjective: {
        type: "string",
        errorMessage: {
          type: "O objetivo geral deve ser uma string",
        },
      },
      specificObjectives: {
        type: "array",
        items: {
          type: "object",
          required: ["titleObjetivesLessonPlan"],
          properties: {
            titleObjetivesLessonPlan: { type: "string" },
            contentObjetivesLessonPlan: { type: "string" },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleObjetivesLessonPlan: "O título do objetivo é obrigatório",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos nos objetivos",
          },
        },
        errorMessage: {
          type: "Os objetivos específicos devem ser um array",
        },
      },
      competencies: {
        type: "array",
        items: {
          type: "object",
          required: ["contentCompetenciesLessonPlan"],
          properties: {
            contentCompetenciesLessonPlan: { type: "string" },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              contentCompetenciesLessonPlan:
                "O conteúdo da competência é obrigatório",
            },
            additionalProperties:
              "Atributos extras não são permitidos nas competências",
          },
        },
      },
      themes: {
        type: "array",
        items: {
          type: "object",
          required: ["titleThemesLessonPlan"],
          properties: {
            titleThemesLessonPlan: { type: "string" },
            contentThemesLessonPlan: { type: "string" },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleThemesLessonPlan: "O título do tema é obrigatório",
            },
            additionalProperties:
              "Atributos extras não são permitidos nos temas",
          },
        },
      },
      teachingMethodologies: {
        type: "array",
        items: {
          type: "object",
          required: ["titleMethodologyLessonPlan"],
          properties: {
            titleMethodologyLessonPlan: { type: "string" },
            contentMethodologyLessonPlan: { type: "string" },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleMethodologyLessonPlan:
                "O título da metodologia é obrigatório",
            },
            additionalProperties:
              "Atributos extras não são permitidos nas metodologias de ensino",
          },
        },
      },
      topics: {
        type: "array",
        items: {
          type: "object",
          required: [
            "titleTopicsLessonPlan",
            "contentTopicsLessonPlan",
            "detailed_explanation_topic_lesson_plan",
          ],
          properties: {
            titleTopicsLessonPlan: { type: "string" },
            contentTopicsLessonPlan: { type: "string" },
            detailed_explanation_topic_lesson_plan: { type: "string" },
            examplesTopicLessonPlan: {
              type: "array",
              items: {
                type: "object",
                required: ["titleExamplesTopicLessonPlan"],
                properties: {
                  titleExamplesTopicLessonPlan: { type: "string" },
                  contentExamplesTopicLessonPlan: { type: "string" },
                },
                additionalProperties: false,
                errorMessage: {
                  required: {
                    titleExamplesTopicLessonPlan:
                      "O título do exemplo é obrigatório",
                  },
                  additionalProperties:
                    "Atributos extras não são permitidos nos exemplos",
                },
              },
            },
            activitiesTopicLessonPlan: {
              type: "array",
              items: {
                type: "object",
                required: [
                  "titleActivitiesTopicLessonPlan",
                  "contentActivitiesTopicLessonPlan",
                ],
                properties: {
                  titleActivitiesTopicLessonPlan: { type: "string" },
                  contentActivitiesTopicLessonPlan: { type: "string" },
                  explicationActivitiesTopicLessonPlan: { type: "string" },
                },
                additionalProperties: false,
                errorMessage: {
                  required: {
                    titleActivitiesTopicLessonPlan:
                      "O título da atividade é obrigatório",
                    contentActivitiesTopicLessonPlan:
                      "O conteúdo da atividade é obrigatório",
                  },
                  additionalProperties:
                    "Atributos extras não são permitidos nas atividades",
                },
              },
            },
            connectionsTopicLessonPlan: {
              type: "array",
              items: {
                type: "object",
                required: ["titleConnectionsTopics"],
                properties: {
                  titleConnectionsTopics: { type: "string" },
                  contentConnectionsTopics: { type: "string" },
                },
                additionalProperties: false,
                errorMessage: {
                  required: {
                    titleConnectionsTopics: "O título da conexão é obrigatório",
                  },
                  additionalProperties:
                    "Atributos extras não são permitidos nas conexões",
                },
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleTopicsLessonPlan: "O título do tópico é obrigatório",
              contentTopicsLessonPlan: "O conteúdo do tópico é obrigatório",
              detailed_explanation_topic_lesson_plan:
                "A explicação detalhada é obrigatória",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos no tópico",
          },
        },
      },
      homework: {
        type: "object",
        required: ["description", "objective"],
        properties: {
          description: { type: "string" },
          objective: { type: "string" },
        },
        additionalProperties: false,
        errorMessage: {
          required: {
            description: "A descrição da tarefa é obrigatória",
            objective: "O objetivo da tarefa é obrigatório",
          },
        },
      },
      inclusiveAdaptation: {
        type: "object",
        required: ["visualImpairment", "learningDifficulties", "highAbilities"],
        properties: {
          visualImpairment: { type: "string" },
          learningDifficulties: { type: "string" },
          highAbilities: { type: "string" },
        },
        additionalProperties: false,
        errorMessage: {
          required: {
            visualImpairment:
              "A adaptação para deficiência visual é obrigatória",
            learningDifficulties:
              "A adaptação para dificuldades de aprendizagem é obrigatória",
            highAbilities: "A adaptação para altas habilidades é obrigatória",
          },
        },
      },
      references: {
        type: "array",
        items: {
          type: "object",
          required: ["contentReferencesLessonPlan"],
          properties: {
            contentReferencesLessonPlan: { type: "string" },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              contentReferencesLessonPlan:
                "O conteúdo da referência é obrigatório",
            },
          },
        },
      },
      closure: {
        type: "object",
        required: ["summary", "reflection", "nextSteps"],
        properties: {
          summary: { type: "string" },
          reflection: { type: "string" },
          nextSteps: { type: "string" },
        },
        additionalProperties: false,
        errorMessage: {
          required: {
            summary: "O resumo é obrigatório",
            reflection: "A reflexão é obrigatória",
            nextSteps: "Os próximos passos são obrigatórios",
          },
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      required: {
        subjectLessonPlan: "O assunto é obrigatório",
        descriptionLessonPlan: "A descrição é obrigatória",
        gradeLevelLessonPlan: "O nível de ensino é obrigatório",
        complexityLevelLessonPlan: "A complexidade é obrigatória",
        durationMinutesLessonPlan: "A duração é obrigatória",
        generalObjective: "O objetivo geral é obrigatório",
        specificObjectives: "Os objetivos específicos são obrigatórios",
        competencies: "As competências são obrigatórias",
        themes: "Os temas são obrigatórios",
        teachingMethodologies: "As metodologias de ensino são obrigatórias",
        topics: "Os tópicos são obrigatórios",
        homework: "A tarefa de casa é obrigatória",
        inclusiveAdaptation: "As adaptações inclusivas são obrigatórias",
        references: "As referências são obrigatórias",
        closure: "O encerramento é obrigatório",
      },
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos no plano de aula",
    },
  },
};

export const updateLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      subjectLessonPlan: {
        type: "string",
        errorMessage: { type: "O assunto deve ser uma string" },
      },
      descriptionLessonPlan: {
        type: "string",
        errorMessage: { type: "A descrição deve ser uma string" },
      },
      gradeLevelLessonPlan: {
        type: "string",
        errorMessage: { type: "O nível de ensino deve ser uma string" },
      },
      complexityLevelLessonPlan: {
        type: "string",
        errorMessage: { type: "A complexidade do ensino deve ser uma string" },
      },
      durationMinutesLessonPlan: {
        type: "number",
        errorMessage: { type: "A duração deve ser um número" },
      },
      generalObjective: {
        type: "string",
        errorMessage: { type: "O objetivo geral deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties:
        "É necessário informar pelo menos um campo para atualização",
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos no plano de aula",
    },
  },
};

export const updateObjectiveSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleObjetivesLessonPlan: {
        type: "string",
        errorMessage: { type: "O título do objetivo deve ser uma string" },
      },
      contentObjetivesLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo do objetivo deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar o objetivo",
      additionalProperties: "Atributos extras não são permitidos nos objetivos",
    },
  },
};

export const updateThemeSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleThemesLessonPlan: {
        type: "string",
        errorMessage: { type: "O título do tema deve ser uma string" },
      },
      contentThemesLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo do tema deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar o tema",
      additionalProperties: "Atributos extras não são permitidos nos temas",
    },
  },
};

export const updateTeachingMethodologySchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleMethodologyLessonPlan: {
        type: "string",
        errorMessage: {
          type: "O título da metodologia de ensino deve ser uma string",
        },
      },
      contentMethodologyLessonPlan: {
        type: "string",
        errorMessage: {
          type: "O conteúdo da metodologia de ensino deve ser uma string",
        },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties:
        "Informe ao menos um campo para atualizar a metodologia de ensino",
      additionalProperties:
        "Atributos extras não são permitidos nas metodologias de ensino",
    },
  },
};

export const updateCompetenciesSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      contentCompetenciesLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo da competência deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar a competência",
      additionalProperties:
        "Atributos extras não são permitidos nas competências",
    },
  },
};

export const updateReferencesSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      contentReferencesLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo da referência deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar a referência",
      additionalProperties:
        "Atributos extras não são permitidos nas referências",
    },
  },
};

export const updateTopicSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleTopicsLessonPlan: {
        type: "string",
        errorMessage: { type: "O título do tópico deve ser uma string" },
      },
      contentTopicsLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo do tópico deve ser uma string" },
      },
      detailed_explanation_topic_lesson_plan: {
        type: "string",
        errorMessage: {
          type: "A explicação detalhada do tópico deve ser uma string",
        },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar o tópico",
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos no tópico",
    },
  },
};

export const updateExamplesTopicLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleExamplesTopicLessonPlan: {
        type: "string",
        errorMessage: { type: "O título do exemplo deve ser uma string" },
      },
      contentExamplesTopicLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo do exemplo deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar o exemplo",
      additionalProperties: "Atributos extras não são permitidos nos exemplos",
    },
  },
};

export const updateActivitiesTopicLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleActivitiesTopicLessonPlan: {
        type: "string",
        errorMessage: { type: "O título da atividade deve ser uma string" },
      },
      contentActivitiesTopicLessonPlan: {
        type: "string",
        errorMessage: { type: "O conteúdo da atividade deve ser uma string" },
      },
      explicationActivitiesTopicLessonPlan: {
        type: "string",
        errorMessage: { type: "A explicação da atividade deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar a atividade",
      additionalProperties:
        "Atributos extras não são permitidos nas atividades",
    },
  },
};

export const updateConnectionsTopicLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      titleConnectionsTopics: {
        type: "string",
        errorMessage: { type: "O título da conexão deve ser uma string" },
      },
      contentConnectionsTopics: {
        type: "string",
        errorMessage: { type: "O conteúdo da conexão deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar a conexão",
      additionalProperties:
        "Atributos extras não são permitidos nas conexões do tópico",
    },
  },
};

export const updateHomeworkSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      description: {
        type: "string",
        errorMessage: { type: "A descrição deve ser uma string" },
      },
      objective: {
        type: "string",
        errorMessage: { type: "O objetivo deve ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar a tarefa",
      additionalProperties:
        "Atributos extras não são permitidos na tarefa de casa",
    },
  },
};

export const updateInclusiveAdaptationSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      visualImpairment: {
        type: "string",
        errorMessage: {
          type: "A adaptação para deficiência visual deve ser uma string",
        },
      },
      learningDifficulties: {
        type: "string",
        errorMessage: {
          type: "A adaptação para dificuldades de aprendizagem deve ser uma string",
        },
      },
      highAbilities: {
        type: "string",
        errorMessage: {
          type: "A adaptação para altas habilidades deve ser uma string",
        },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties:
        "Informe ao menos um campo para atualizar as adaptações inclusivas",
      additionalProperties:
        "Atributos extras não são permitidos nas adaptações inclusivas",
    },
  },
};

export const updateClosureSchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      summary: {
        type: "string",
        errorMessage: { type: "O resumo deve ser uma string" },
      },
      reflection: {
        type: "string",
        errorMessage: { type: "A reflexão deve ser uma string" },
      },
      nextSteps: {
        type: "string",
        errorMessage: { type: "Os próximos passos devem ser uma string" },
      },
    },
    minProperties: 1,
    additionalProperties: false,
    errorMessage: {
      minProperties: "Informe ao menos um campo para atualizar o encerramento",
      additionalProperties:
        "Atributos extras não são permitidos no encerramento",
    },
  },
};
