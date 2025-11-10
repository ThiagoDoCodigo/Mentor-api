import axios from "axios";
import {
  LessonPlanRequestGemini,
  LessonPlanResponseGemini,
  ExercisesRequestGemini,
  ExercisesResponseGemini,
} from "./gemini.interface";
import { CustomError } from "../../erros/CustomError";

export class GeminiService {
  public createLessonPlan = async (
    request: LessonPlanRequestGemini
  ): Promise<LessonPlanResponseGemini> => {
    try {
      const prompt = this.buildPromptLessonPlan(request);

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.GEMINI_API_KEY,
          },
          timeout: 100000,
        }
      );

      let text =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

      text = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      if (!text.startsWith("{")) {
        throw new CustomError(
          "A IA não retornou um JSON válido.",
          502,
          "InvalidResponseFormat"
        );
      }

      let resultado;
      try {
        resultado = JSON.parse(text);
      } catch (error) {
        console.error("Erro ao parsear JSON da IA:", text);
        throw new CustomError(
          "Erro ao interpretar resposta da IA",
          500,
          "JSONParseError"
        );
      }

      if (!resultado?.topics?.length) {
        throw new CustomError(
          "Plano de aula incompleto (sem tópicos gerados).",
          422,
          "IncompleteLessonPlan"
        );
      }

      return resultado as LessonPlanResponseGemini;
    } catch (error: any) {
      console.error("[GeminiService] Erro:", error.response?.data ?? error);
      throw new CustomError(
        "Erro ao gerar plano de aula",
        500,
        "GeminiAPIError"
      );
    }
  };

  private buildPromptLessonPlan(request: LessonPlanRequestGemini): string {
    return `
      Você é um **gerador pedagógico especializado** em criar planos de aula **completos, detalhados e organizados** em **português**, adequados ao nível e complexidade informados.

      Gere um **plano de aula coerente, realista, aplicável e de alta qualidade didática**, com linguagem **clara, formal e acessível** a professores e alunos.

      ---

      ### Dados recebidos:
      - Assunto: ${request.subjectLessonPlan}
      - Descrição: ${request.descriptionLessonPlan}
      - Nível de ensino: ${request.gradeLevelLessonPlan}
      - Complexidade: ${request.complexityLevelLessonPlan}
      - Duração (minutos): ${request.durationMinutesLessonPlan}
      - Objetivos: ${JSON.stringify(request.objectives, null, 2)}
      - Temas: ${JSON.stringify(request.themes, null, 2)}
      - Metodologias de ensino: ${JSON.stringify(
        request.teachingMethodologies,
        null,
        2
      )}

      ---

      ### Estrutura esperada (retorne **somente JSON válido**, sem markdown, sem comentários, sem texto fora do JSON):

      {
        "subjectLessonPlan": "string",
        "descriptionLessonPlan": "string",
        "gradeLevelLessonPlan": "string",
        "complexityLevelLessonPlan": "string",
        "durationMinutesLessonPlan": number,

        "generalObjective": "string",
        "specificObjectives": [
          {
            "titleObjetivesLessonPlan": "string",
            "contentObjetivesLessonPlan": "string"
          }
        ],

        "competencies": [
          {
            "contentCompetenciesLessonPlan": "string"
          }
        ],
        "skills": [
          {
            "contentSkillsLessonPlan": "string"
          }
        ],

        "themes": [
          {
            "titleThemesLessonPlan": "string",
            "contentThemesLessonPlan": "string"
          }
        ],

        "teachingMethodologies": [
          {
            "titleMethodologyLessonPlan": "string",
            "contentMethodologyLessonPlan": "string"
          }
        ],

        "resources": [
          {
            "contentResourcesLessonPlan": "string"
          }
        ],

        "topics": [
          {
            "titleTopicsLessonPlan": "string",
            "contentTopicsLessonPlan": "string",
            "detailed_explanation_topic_lesson_plan": "string",
            "examplesTopicLessonPlan": [
              {
                "titleExamplesTopicLessonPlan": "string",
                "contentExamplesTopicLessonPlan": "string"
              }
            ],
            "activitiesTopicLessonPlan": [
              {
                "titleActivitiesTopicLessonPlan": "string",
                "contentActivitiesTopicLessonPlan": "string",
                "explicationActivitiesTopicLessonPlan": "string"
              }
            ],
            "connectionsTopicLessonPlan": [
              {
                "titleConnectionsTopics": "string",
                "contentConnectionsTopics": "string"
              }
            ]
          }
        ],

        "evaluation": {
          "diagnostic": "string",
          "formative": "string",
          "summative": "string"
        },

        "homework": {
          "description": "string",
          "objective": "string"
        },

        "inclusiveAdaptation": {
          "visualImpairment": "string",
          "learningDifficulties": "string",
          "highAbilities": "string"
        },

        "references": [
          {
            "contentReferencesLessonPlan": "string"
          }
        ],

        "closure": {
          "summary": "string",
          "reflection": "string",
          "nextSteps": "string"
        }
      }

      ---

      ### Instruções detalhadas de elaboração:

      1. **Os tópicos são a parte mais importante**:
        - Gere **no mínimo 4 a 6 tópicos** ordenados logicamente (introdução → desenvolvimento → aprofundamento → síntese).
        - Cada tópico deve conter:
          - Uma **explicação teórica detalhada e progressiva**.
          - Use um tom explicativo e descritivo no conteúdo de tópicos, exemplos e objetivos. 
          - Explique os conceitos de forma clara, detalhada e didática, evitando instruções imperativas. 
          - Mantenha o conteúdo técnico, mas foque em ensinar e esclarecer, não apenas em instruir ações.

          - **Exemplos práticos contextualizados** — gere **no mínimo 3 exemplos por tópico**, cada um com título e explicação curta.
          - **Atividades pedagógicas** — gere **no mínimo 3 atividades por tópico**, variadas em nível de dificuldade e baseadas na **Taxonomia de Bloom** (lembrar, compreender, aplicar, analisar, criar).  
            Inclua uma explicação do propósito de cada atividade.
          - **Conexões interdisciplinares ou cotidianas** — gere **no mínimo 3 conexões por tópico**, cada uma mostrando relação com outra disciplina, contexto real ou aplicação prática.

      2. **Preencha todos os campos textuais com coerência e relevância.**
      
      3. **As metodologias e recursos** devem ser condizentes com o nível de ensino informado.

      4. **A avaliação** deve incluir momentos diagnósticos, formativos e somativos, com coerência entre objetivo e avaliação.

      5. **As adaptações inclusivas** devem apresentar soluções concretas e aplicáveis para alunos com deficiências visuais, dificuldades de aprendizagem e altas habilidades.

      6. **O JSON deve começar com “{” e terminar com “}”**, sem qualquer texto adicional, markdown ou explicações.

      7. Gere um conteúdo **completo, didático, coerente e pronto para uso real em um sistema escolar.**

      8. - Use exatamente os temas, metodologias e objetivos enviados na requisição. Porém, caso venha apenas um tema, metodologia ou objetivo, adicione pelo menos 2 temas, metodologias ou objetivos.
      
      obs.: O plano de aula deve esta 100% alinhado com o nivel de ensino informado(grade_level).
      ---

      Gere agora o JSON final completo e válido.
      `;
  }

  public createExercises = async (
    request: ExercisesRequestGemini
  ): Promise<ExercisesResponseGemini> => {
    try {
      const prompt = this.buildPromptExercises(request);

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.GEMINI_API_KEY,
          },
          timeout: 100000,
        }
      );

      let text =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

      text = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      if (!text.startsWith("{")) {
        throw new CustomError(
          "A IA não retornou um JSON válido.",
          502,
          "InvalidResponseFormat"
        );
      }

      let resultado;
      try {
        resultado = JSON.parse(text);
      } catch (error) {
        console.error("Erro ao parsear JSON da IA:", text);
        throw new CustomError(
          "Erro ao interpretar resposta da IA",
          500,
          "JSONParseError"
        );
      }

      return resultado as ExercisesResponseGemini;
    } catch (error: any) {
      console.error("[GeminiService] Erro:", error.response?.data ?? error);
      throw new CustomError("Erro ao gerar exercícios.", 500, "GeminiAPIError");
    }
  };

  private buildPromptExercises(request: ExercisesRequestGemini): string {
    return `
    Você é um **gerador pedagógico especializado** em criar exercícios para alunos de ${
      request.grade_level_exercises
    }, com base nos temas, objetivos e no tipo de exercício e nível de Bloom fornecidos.

    Gere **exercícios coerentes, realistas, aplicáveis e de alta qualidade didática**, com linguagem **clara, formal e acessível** a professores e alunos.

    ---

    ### Dados recebidos:
    - Assunto: ${request.subject_exercises}
    - Descrição: ${request.description_exercises}
    - Nível de ensino: ${request.grade_level_exercises}
    - Complexidade: ${request.complexity_level_exercises}
    - Duração (minutos): ${request.duration_minutes_exercises}
    - Objetivos: ${JSON.stringify(request.objectives_exercises, null, 2)}
    - Temas: ${JSON.stringify(request.themes_exercises, null, 2)}
    - Exercícios solicitados: ${JSON.stringify(request.exercises, null, 2)}

    ---

    ### Estrutura esperada (retorne **somente JSON válido**, sem markdown, sem comentários, sem texto fora do JSON):

    {
      "subject_exercises": "string",
      "description_exercises": "string",
      "grade_level_exercises": "string",
      "complexity_level_exercises": "string",
      "duration_minutes_exercises": number,
      "objectives_exercises": [{"titleObjectiveExercises": "string", "contentObjectiveExercises": "string"}],
      "themes_exercises": [{"titleThemeExercises": "string", "contentThemeExercises": "string"}],
      "exercises": [
        {
          "type_exercise": "multipla-escolha" | "discursiva" | "verdadeiro-falso",
          "title_exercise": "string",
          "content_exercise": "string",
          "options_exercise_multipla_escolha": [
            {
              "option": "A" | "B" | "C" | "D" | "E",
              "content_option": "string"
            }
          ],
          "options_exercise_verdadeiro_falso": [
            {
              "option": "V" | "F",
              "content_option": "string"
            }
          ],
          "correct_answer_exercise": "string",
          "explanation_exercise": "string",
          "bloom_level": "lembrar" | "compreender" | "aplicar" | "analisar" | "avaliar" | "criar"
        }
      ]
    }

    ---

    ### Diretrizes detalhadas para elaboração:

    1. **Exercícios baseados no request**:
      - Para cada item do array \`exercises\` enviado, gere **um exercício correspondente**.
      - Use exatamente o \`type_exercise\` e \`bloom_level\` fornecidos.
      - Não crie exercícios extras fora do array enviado.

    2. **Questões de múltipla escolha (nível superior)**:
      - Crie **texto-base contextualizado** (máx. 50 palavras) com definição concisa e subtemas relevantes.
      - Delimite claramente o **comando da questão**, usando: "Considerando [contexto], assinale a opção correta."
      - Gere **cinco alternativas A-E**, com apenas uma correta.
      - Cada alternativa deve seguir formato: "[Termo técnico] é/representa [definição/função/características]".
      - Distratores devem ser plausíveis, coerentes e adaptados ao nível Bloom.

    3. **Questões Verdadeiro/Falso**:
      - Inclua enunciado, opção correta (V/F) e justificativa detalhada.
      - Coloque no mínimo 5 opções totais.

    4. **Questões Discursivas**:
      - Formule perguntas abertas com expectativa clara de resposta.
      - Explique o que se espera na resposta ideal.

    5. **Adequação ao domínio cognitivo**:
      - **Lembrar:** recordação de fatos, termos, classificações.
      - **Compreender:** interpretação e exemplificação.
      - **Aplicar:** execução ou implementação de procedimentos.
      - **Analisar:** diferenciação e organização de elementos.
      - **Avaliar:** verificação crítica com base em critérios.
      - **Criar:** geração ou planejamento de soluções.

    6. **Formato final**: - **O JSON deve começar com “{” e terminar com “}”**, sem qualquer texto adicional, markdown ou explicações.

    ---

    Gere agora o JSON final completo e válido, respeitando cada exercício do request.
    `;
  }
}
