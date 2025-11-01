import { FastifySchema } from "fastify";

export const createLessonPlanSchema: FastifySchema = {
  body: {
    type: "object",
    required: [
      "subject_lesson_plan",
      "description_lesson_plan",
      "grade_level_lesson_plan",
      "complexity_level_lesson_plan",
      "duration_minutes_lesson_plan",
      "objectives",
      "teaching_methodologies",
      "themes",
    ],
    properties: {
      subject_lesson_plan: {
        type: "string",
        errorMessage: {
          type: "O assunto deve ser uma string",
        },
      },
      description_lesson_plan: {
        type: "string",
        errorMessage: {
          type: "A descricao deve ser uma string",
        },
      },
      grade_level_lesson_plan: {
        type: "string",
        errorMessage: {
          type: "O nivel de ensino deve ser uma string",
        },
      },
      complexity_level_lesson_plan: {
        type: "string",
        errorMessage: {
          type: "A complexidade do ensino deve ser uma string",
        },
      },
      duration_minutes_lesson_plan: {
        type: "number",
        errorMessage: {
          type: "A duracao deve ser um numero",
        },
      },
      objectives: {
        type: "array",
        items: {
          type: "object",
          required: ["title_objective_lesson_plan"],
          properties: {
            title_objective_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O titulo do objetivo deve ser uma string",
              },
            },
            content_objective_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O conteudo do objetivo deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              title_objective_lesson_plan: "O titulo do objetivo é obrigatorio",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos",
          },
        },
      },
      teaching_methodologies: {
        type: "array",
        items: {
          type: "object",
          required: ["title_teaching_methodology_lesson_plan"],
          properties: {
            title_teaching_methodology_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O titulo da metodologia deve ser uma string",
              },
            },
            content_teaching_methodology_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O conteudo da metodologia deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              title_teaching_methodology_lesson_plan:
                "O titulo da metodologia é obrigatorio",
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
          required: ["title_theme_lesson_plan"],
          properties: {
            title_theme_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O titulo do tema deve ser uma string",
              },
            },
            content_theme_lesson_plan: {
              type: "string",
              errorMessage: {
                type: "O conteudo do tema deve ser uma string",
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              title_theme_lesson_plan: "O titulo do tema é obrigatorio",
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
        subject_lesson_plan: "O assunto é obrigatorio",
        description_lesson_plan: "A descricao é obrigatorio",
        grade_level_lesson_plan: "O nivel de ensino é obrigatorio",
        complexity_level_lesson_plan: "A complexidade do ensino é obrigatorio",
        duration_second_lesson_plan: "A duracao é obrigatorio",
        objectives: "Os objetivos é obrigatorio",
        teaching_methodologies: "As metodologias de ensino é obrigatorio",
        themes: "Os temas é obrigatorio",
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
