# ✨ Módulo IA Generativa (Gemini API)

Este módulo atua como uma interface para a geração automática de conteúdo pedagógico. Através destes endpoints, é possível criar planos de aula detalhados e listas de exercícios completas com base em parâmetros iniciais fornecidos pelo usuário.

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** Token Bearer (Obrigatório)
- **Característica:** Processamento assíncrono ou de longa duração (devido à geração via IA).

### ℹ️ Padrão de Respostas

Todas as respostas da API seguem um padrão JSON.

- **Sucesso:** `sucess: true` com os dados solicitados.
- **Erro:** `sucess: false` (ou status HTTP de erro) com uma mensagem descritiva no campo `message`.

---

## 🚀 Endpoints

### 1\. Gerar Plano de Aula (`Create Lesson`)

Gera um plano de aula completo, estruturado e detalhado, incluindo objetivos, competências, tópicos, atividades, metodologias e adaptações inclusivas, com base no tema e diretrizes fornecidas.

- **Método:** `POST`
- **Rota:** `/gemini/create-lesson-plan`
- **Autenticação:** Bearer Token

#### 📥 Body (JSON)

O corpo da requisição define o escopo e o direcionamento para a IA gerar o conteúdo.

| Campo                       | Tipo   | Obrigatório | Descrição                                         |
| :-------------------------- | :----- | :---------: | :------------------------------------------------ |
| `subjectLessonPlan`         | String |     Sim     | Matéria ou disciplina (ex: "Estrutura de Dados"). |
| `descriptionLessonPlan`     | String |     Sim     | Descrição do tópico da aula.                      |
| `gradeLevelLessonPlan`      | String |     Sim     | Nível de ensino (ex: "Ensino Superior").          |
| `complexityLevelLessonPlan` | String |     Sim     | Nível de profundidade (ex: "Avançado").           |
| `durationMinutesLessonPlan` | Number |     Sim     | Duração da aula em minutos.                       |
| `objectives`                | Array  |     Sim     | Lista de objetivos gerais desejados.              |
| `teachingMethodologies`     | Array  |     Sim     | Metodologias que devem ser aplicadas.             |
| `themes`                    | Array  |     Sim     | Temas/Tópicos principais a serem abordados.       |

**Estrutura dos Objetos do Array:**

- **Objectives:** `{ "titleObjetivesLessonPlan": "...", "contentObjetivesLessonPlan": "..." }`
- **Methodologies:** `{ "titleMethodologyLessonPlan": "...", "contentMethodologyLessonPlan": "..." }`
- **Themes:** `{ "titleThemesLessonPlan": "...", "contentThemesLessonPlan": "..." }`

**Exemplo de Request:**

```json
{
  "subjectLessonPlan": "Estrutura de Dados em Java",
  "descriptionLessonPlan": "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
  "gradeLevelLessonPlan": "Ensino Superior",
  "complexityLevelLessonPlan": "Avançado",
  "durationMinutesLessonPlan": 120,
  "objectives": [
    {
      "titleObjetivesLessonPlan": "Compreender o conceito de lista duplamente encadeada",
      "contentObjetivesLessonPlan": "Entender a estrutura, os nós e os ponteiros anterior e próximo."
    }
  ],
  "teachingMethodologies": [
    {
      "titleMethodologyLessonPlan": "Metodologia ativa com prática de código",
      "contentMethodologyLessonPlan": "Implementação prática em IDE."
    }
  ],
  "themes": [
    {
      "titleThemesLessonPlan": "Introdução às listas duplamente encadeadas",
      "contentThemesLessonPlan": "Diferenças entre listas simples e duplas."
    }
  ]
}
```

#### 📤 Response (Sucesso)

Retorna um objeto JSON massivo contendo o plano de aula totalmente desenvolvido, incluindo explicações detalhadas, exemplos de código (se aplicável), conexões interdisciplinares e adaptações para inclusão.

```json
{
  "subjectLessonPlan": "Estrutura de Dados em Java",
  "descriptionLessonPlan": "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
  "gradeLevelLessonPlan": "Ensino Superior",
  "complexityLevelLessonPlan": "Avançado",
  "durationMinutesLessonPlan": 120,
  "generalObjective": "Capacitar os alunos a compreender, implementar e aplicar listas duplamente encadeadas em Java...",
  "specificObjectives": [
    {
      "titleObjetivesLessonPlan": "Compreender o conceito de lista duplamente encadeada",
      "contentObjetivesLessonPlan": "Entender a estrutura, os nós e os ponteiros anterior e próximo..."
    }
  ],
  "competencies": [
    {
      "contentCompetenciesLessonPlan": "Desenvolver habilidades de abstração para modelar estruturas de dados complexas."
    }
  ],
  "themes": [
    {
      "titleThemesLessonPlan": "Introdução às listas duplamente encadeadas",
      "contentThemesLessonPlan": "Diferenças entre listas simples e duplas; estrutura de nós..."
    }
  ],
  "teachingMethodologies": [
    {
      "titleMethodologyLessonPlan": "Metodologia ativa com prática de código",
      "contentMethodologyLessonPlan": "O professor apresentará os conceitos teóricos..."
    }
  ],
  "topics": [
    {
      "titleTopicsLessonPlan": "Fundamentos das Listas Duplamente Encadeadas",
      "contentTopicsLessonPlan": "Exploração detalhada da estrutura...",
      "detailed_explanation_topic_lesson_plan": "Uma lista duplamente encadeada é uma estrutura de dados linear...",
      "examplesTopicLessonPlan": [
        {
          "titleExamplesTopicLessonPlan": "Representação visual",
          "contentExamplesTopicLessonPlan": "Diagrama mostrando a estrutura de nós..."
        }
      ],
      "activitiesTopicLessonPlan": [
        {
          "titleActivitiesTopicLessonPlan": "Desenho da estrutura",
          "contentActivitiesTopicLessonPlan": "Desenhar diagramas de listas duplamente encadeadas..."
        }
      ],
      "connectionsTopicLessonPlan": [
        {
          "titleConnectionsTopics": "Sistemas de navegação",
          "contentConnectionsTopics": "Analogia com sistemas de navegação..."
        }
      ]
    }
  ],
  "homework": {
    "description": "Implementar uma lista duplamente encadeada em Java...",
    "objective": "Consolidar o conhecimento sobre listas..."
  },
  "inclusiveAdaptation": {
    "visualImpairment": "Disponibilizar materiais em formato acessível...",
    "learningDifficulties": "Oferecer atividades de reforço...",
    "highAbilities": "Propor desafios extras..."
  },
  "references": [
    {
      "contentReferencesLessonPlan": "Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014)..."
    }
  ],
  "closure": {
    "summary": "Revisão dos principais conceitos abordados...",
    "reflection": "Incentivar os alunos a refletir...",
    "nextSteps": "Apresentar os próximos tópicos..."
  }
}
```

---

### 2\. Gerar Lista de Exercícios (`Create Exercises`)

Gera uma lista de exercícios completa, preenchendo o conteúdo das questões (enunciado, opções, gabarito e explicação) com base nos parâmetros e na estrutura solicitada.

- **Método:** `POST`
- **Rota:** `/gemini/create-exercises`
- **Autenticação:** Bearer Token

#### 📥 Body (JSON)

No array `exercises` da requisição, você define apenas o **tipo** e o **nível cognitivo (Bloom)** desejado. A IA preencherá o conteúdo.

| Campo                        | Tipo   | Obrigatório | Descrição                                     |
| :--------------------------- | :----- | :---------: | :-------------------------------------------- |
| `subject_exercises`          | String |     Sim     | Disciplina (ex: "Parasitologia").             |
| `description_exercises`      | String |     Sim     | Contexto para a geração das questões.         |
| `grade_level_exercises`      | String |     Sim     | Nível de ensino.                              |
| `complexity_level_exercises` | String |     Sim     | Dificuldade desejada.                         |
| `duration_minutes_exercises` | Number |     Sim     | Tempo estimado para resolução.                |
| `objectives_exercises`       | Array  |     Sim     | Objetivos de aprendizagem a serem testados.   |
| `themes_exercises`           | Array  |     Sim     | Temas que devem estar presentes nas questões. |
| `exercises`                  | Array  |     Sim     | **Esqueleto** das questões a serem geradas.   |

**Exemplo de Request:**
Observe que o array `exercises` contém apenas a definição estrutural.

```json
{
  "subject_exercises": "Parasitologia",
  "description_exercises": "Exercícios para revisão de ectoparasitas...",
  "grade_level_exercises": "Ensino Superior",
  "complexity_level_exercises": "Avançado",
  "duration_minutes_exercises": 90,
  "objectives_exercises": [
    {
      "titleObjectiveExercises": "Identificar ectoparasitas",
      "contentObjectiveExercises": "O aluno deverá reconhecer características..."
    }
  ],
  "themes_exercises": [
    {
      "titleThemeExercises": "Pulgas",
      "contentThemeExercises": "Estudo do ciclo de vida..."
    }
  ],
  "exercises": [
    {
      "type_exercise": "multipla-escolha",
      "bloom_level": "analisar"
    },
    {
      "type_exercise": "discursiva",
      "bloom_level": "avaliar"
    },
    {
      "type_exercise": "verdadeiro-falso",
      "bloom_level": "lembrar"
    }
  ]
}
```

#### 📤 Response (Sucesso)

Retorna a lista preenchida. O array `exercises` agora contém os enunciados gerados, as alternativas (para múltipla escolha e V/F), a resposta correta e o feedback explicativo.

```json
{
    "subject_exercises": "Parasitologia",
    "description_exercises": "Exercícios para revisão de ectoparasitas...",
    "grade_level_exercises": "Ensino Superior",
    "complexity_level_exercises": "Avançado",
    "duration_minutes_exercises": 90,
    "objectives_exercises": [ ... ],
    "themes_exercises": [ ... ],
    "exercises": [
        {
            "type_exercise": "multipla-escolha",
            "title_exercise": "Questão 1: Identificação de Infestações por Pulgas",
            "content_exercise": "A Ctenocephalides felis é uma espécie comum de pulga...",
            "options_exercise_multipla_escolha": [
                {
                    "option": "A",
                    "content_option": "O pronoto é caracteristicamente mais curto..."
                },
                {
                    "option": "E",
                    "content_option": "A presença de espinhos na tíbia traseira..."
                }
            ],
            "correct_answer_exercise": "E",
            "explanation_exercise": "A presença de espinhos na tíbia traseira...",
            "bloom_level": "analisar"
        },
        {
            "type_exercise": "discursiva",
            "title_exercise": "Questão 2: Avaliação de Estratégias de Controle",
            "content_exercise": "Em uma fazenda com alta infestação por Rhipicephalus microplus...",
            "options_exercise_multipla_escolha": [],
            "correct_answer_exercise": "Resposta aberta",
            "explanation_exercise": "Espera-se que o aluno avalie os prós e contras...",
            "bloom_level": "avaliar"
        },
        {
            "type_exercise": "verdadeiro-falso",
            "title_exercise": "Questão 3: Ciclo de Vida e Transmissão",
            "content_exercise": "Analise as seguintes afirmações sobre piolhos...",
            "options_exercise_verdadeiro_falso": [
                {
                    "option": "V",
                    "content_option": "Os piolhos passam por metamorfose completa..."
                },
                {
                    "option": "F",
                    "content_option": "Os piolhos passam por metamorfose incompleta..."
                }
            ],
            "correct_answer_exercise": "F, V, V",
            "explanation_exercise": "Piolhos passam por metamorfose incompleta...",
            "bloom_level": "lembrar"
        }
    ]
}
```
