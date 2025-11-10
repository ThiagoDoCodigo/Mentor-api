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
      "objectives",
      "teachingMethodologies",
      "themes",
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
          type: "A complexidade do ensino deve ser uma string",
        },
      },
      durationMinutesLessonPlan: {
        type: "number",
        errorMessage: {
          type: "A duração deve ser um número",
        },
      },
      objectives: {
        type: "array",
        items: {
          type: "object",
          required: ["titleObjetivesLessonPlan"],
          properties: {
            titleObjetivesLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O título do objetivo deve ser uma string",
              },
            },
            contentObjetivesLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O conteúdo do objetivo deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleObjetivesLessonPlan: "O título do objetivo é obrigatório",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
      teachingMethodologies: {
        type: "array",
        items: {
          type: "object",
          required: ["titleMethodologyLessonPlan"],
          properties: {
            titleMethodologyLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O título da metodologia deve ser uma string",
              },
            },
            contentMethodologyLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O conteúdo da metodologia deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleMethodologyLessonPlan:
                "O título da metodologia é obrigatório",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
      themes: {
        type: "array",
        items: {
          type: "object",
          required: ["titleThemesLessonPlan"],
          properties: {
            titleThemesLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O título do tema deve ser uma string",
              },
            },
            contentThemesLessonPlan: {
              type: "string",
              errorMessage: {
                type: "O conteúdo do tema deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleThemesLessonPlan: "O título do tema é obrigatório",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
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
        complexityLevelLessonPlan: "A complexidade do ensino é obrigatória",
        durationMinutesLessonPlan: "A duração é obrigatória",
        objectives: "Os objetivos são obrigatórios",
        teachingMethodologies: "As metodologias de ensino são obrigatórias",
        themes: "Os temas são obrigatórios",
      },
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos",
    },
  },
};

export const createExercisesSchema: FastifySchema = {
  body: {
    type: "object",
    required: [
      "subject_exercises",
      "description_exercises",
      "grade_level_exercises",
      "complexity_level_exercises",
      "duration_minutes_exercises",
      "objectives_exercises",
      "themes_exercises",
      "exercises",
    ],
    properties: {
      subject_exercises: {
        type: "string",
        errorMessage: {
          type: "O assunto deve ser uma string",
        },
      },
      description_exercises: {
        type: "string",
        errorMessage: {
          type: "A descricao deve ser uma string",
        },
      },
      grade_level_exercises: {
        type: "string",
        errorMessage: {
          type: "O nivel de ensino deve ser uma string",
        },
      },
      complexity_level_exercises: {
        type: "string",
        errorMessage: {
          type: "A complexidade do ensino deve ser uma string",
        },
      },
      duration_minutes_exercises: {
        type: "number",
        errorMessage: {
          type: "A duracao deve ser um numero",
        },
      },
      objectives_exercises: {
        type: "array",
        items: {
          type: "object",
          required: ["titleObjectiveExercises"],
          properties: {
            titleObjectiveExercises: {
              type: "string",
              errorMessage: {
                type: "O titulo do objetivo deve ser uma string",
              },
            },
            contentObjectiveExercises: {
              type: "string",
              errorMessage: {
                type: "O conteudo do objetivo deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleObjectiveExercises: "O titulo do objetivo é obrigatorio",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
      themes_exercises: {
        type: "array",
        items: {
          type: "object",
          required: ["titleThemeExercises"],
          properties: {
            titleThemeExercises: {
              type: "string",
              errorMessage: {
                type: "O titulo do tema deve ser uma string",
              },
            },
            contentThemeExercises: {
              type: "string",
              errorMessage: {
                type: "O conteudo do tema deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              titleThemeExercises: "O titulo do tema é obrigatorio",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
      exercises: {
        type: "array",
        items: {
          type: "object",
          required: ["type_exercise", "bloom_level"],
          properties: {
            type_exercise: {
              type: "string",
              errorMessage: {
                type: "O tipo de exercicio deve ser uma string",
              },
            },
            bloom_level: {
              type: "string",
              errorMessage: {
                type: "O bloom level deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              type_exercise: "O tipo de exercicio é obrigatorio",
              bloom_level: "O bloom level é obrigatorio",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      required: {
        subject_exercises: "O assunto é obrigatorio",
        description_exercises: "A descricao é obrigatorio",
        grade_level_exercises: "O nivel de ensino é obrigatorio",
        complexity_level_exercises: "A complexidade do ensino é obrigatorio",
        duration_minutes_exercises: "A duracao é obrigatorio",
        objectives_exercises: "Os objetivos é obrigatorio",
        themes_exercises: "Os temas é obrigatorio",
        exercises: "Os exercicios é obrigatorio",
      },
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos",
    },
  },
};
