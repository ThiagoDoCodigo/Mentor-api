import { FastifySchema } from "fastify";

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
          required: [
            "type_exercise",
            "bloom_level",
            "title_exercise",
            "content_exercise",
          ],
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
            title_exercise: {
              type: "string",
              errorMessage: {
                type: "O titulo do exercicio deve ser uma string",
              },
            },
            content_exercise: {
              type: "string",
              errorMessage: {
                type: "O conteudo do exercicio deve ser uma string",
              },
            },
            correct_answer_exercise: {
              type: ["string", "null"],
              errorMessage: {
                type: "A resposta correta deve ser uma string ou null",
              },
            },
            explanation_exercise: {
              type: "string",
              errorMessage: {
                type: "A explicacao do exercicio deve ser uma string",
              },
            },
            options_exercise_multipla_escolha: {
              type: "array",
              items: {
                type: "object",
                required: ["option", "content_option"],
                properties: {
                  option: { type: "string" },
                  content_option: { type: "string" },
                },
                additionalProperties: false,
                errorMessage: {
                  required: {
                    option: "A opcao deve ser informada",
                    content_option: "O conteudo da opcao deve ser informado",
                  },
                  additionalProperties:
                    "Atributos extras não são permitidos em cada opção",
                },
              },
            },
            options_exercise_verdadeiro_falso: {
              type: "array",
              items: {
                type: "object",
                required: ["option", "content_option"],
                properties: {
                  option: { type: "string" },
                  content_option: { type: "string" },
                },
                additionalProperties: false,
                errorMessage: {
                  required: {
                    option: "A opcao deve ser informada",
                    content_option: "O conteudo da opcao deve ser informado",
                  },
                  additionalProperties:
                    "Atributos extras não são permitidos em cada opção",
                },
              },
            },
          },
          additionalProperties: false,
          errorMessage: {
            required: {
              type_exercise: "O tipo de exercicio é obrigatorio",
              bloom_level: "O bloom level é obrigatorio",
              title_exercise: "O titulo do exercicio é obrigatorio",
              content_exercise: "O conteudo do exercicio é obrigatorio",
            },
            additionalProperties:
              "Atributos extras ou fora do padrão não são permitidos no exercicio",
          },
        },
        errorMessage: {
          type: "Exercicios deve ser um array",
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

export const updateExerciseSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      subjectExercises: {
        type: "string",
        errorMessage: {
          type: "O assunto deve ser uma string",
        },
      },
      descriptionExercises: {
        type: "string",
        errorMessage: {
          type: "A descrição deve ser uma string",
        },
      },
      gradeLevelExercises: {
        type: "string",
        errorMessage: {
          type: "O nível de ensino deve ser uma string",
        },
      },
      complexityLevelExercises: {
        type: "string",
        errorMessage: {
          type: "A complexidade do ensino deve ser uma string",
        },
      },
      durationMinutesExercises: {
        type: "number",
        errorMessage: {
          type: "A duração deve ser um número",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos",
      minProperties: "Envie ao menos um campo para atualizar o exercício",
    },
  },
};

export const updateObjectivesExerciseSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      titleObjectiveExercises: {
        type: "string",
        errorMessage: {
          type: "O título do objetivo deve ser uma string",
        },
      },
      contentObjectiveExercises: {
        type: "string",
        errorMessage: {
          type: "O conteúdo do objetivo deve ser uma string",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "Atributos extras não são permitidos no objetivo",
      minProperties: "Envie ao menos um campo para atualizar o objetivo",
    },
  },
};

export const updateThemesExerciseSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      titleThemeExercises: {
        type: "string",
        errorMessage: {
          type: "O título do tema deve ser uma string",
        },
      },
      contentThemeExercises: {
        type: "string",
        errorMessage: {
          type: "O conteúdo do tema deve ser uma string",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "Atributos extras não são permitidos no tema",
      minProperties: "Envie ao menos um campo para atualizar o tema",
    },
  },
};

export const updateExercisesItemSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      type_exercise: {
        type: "string",
        errorMessage: {
          type: "O tipo de exercício deve ser uma string",
        },
      },
      bloom_level: {
        type: "string",
        errorMessage: {
          type: "O nível Bloom deve ser uma string",
        },
      },
      title_exercise: {
        type: "string",
        errorMessage: {
          type: "O título do exercício deve ser uma string",
        },
      },
      content_exercise: {
        type: "string",
        errorMessage: {
          type: "O conteúdo do exercício deve ser uma string",
        },
      },
      correct_answer_exercise: {
        type: ["string", "null"],
        errorMessage: {
          type: "A resposta correta deve ser uma string ou null",
        },
      },
      explanation_exercise: {
        type: "string",
        errorMessage: {
          type: "A explicação deve ser uma string",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties:
        "Atributos extras ou fora do padrão não são permitidos no exercício",
      minProperties: "Envie ao menos um campo para atualizar o exercício",
    },
  },
};

export const updateOptionsMultipleSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      option: {
        type: "string",
        errorMessage: {
          type: "A opção deve ser uma string",
        },
      },
      content_option: {
        type: "string",
        errorMessage: {
          type: "O conteúdo da opção deve ser uma string",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties:
        "Atributos extras não são permitidos em opções de múltipla escolha",
      minProperties: "Envie ao menos um campo para atualizar a opção",
    },
  },
};

export const updateOptionsTrueFalseSchema: FastifySchema = {
  body: {
    type: "object",
    minProperties: 1,
    properties: {
      option: {
        type: "string",
        errorMessage: {
          type: "A opção deve ser uma string",
        },
      },
      content_option: {
        type: "string",
        errorMessage: {
          type: "O conteúdo da opção deve ser uma string",
        },
      },
    },
    additionalProperties: false,
    errorMessage: {
      additionalProperties:
        "Atributos extras não são permitidos em opções de verdadeiro/falso",
      minProperties: "Envie ao menos um campo para atualizar a opção",
    },
  },
};
