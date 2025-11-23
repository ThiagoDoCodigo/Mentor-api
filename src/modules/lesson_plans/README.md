# 📝 Módulo de Planos de Aula (Lesson Plans API)

Este módulo gerencia o ciclo de vida completo dos planos de aula. Devido à natureza pedagógica, a estrutura de dados é **profundamente aninhada** (Aula possui Tópicos, que possuem Atividades/Exemplos, etc.). A API oferece rotas para criação em lote e rotas específicas (`PATCH`) para atualizar cada fragmento individualmente.

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** Token Bearer (Obrigatório em todas as rotas)

### ℹ️ Padrão de Resposta

- **Sucesso (`200/201`):** Retorna `sucess: true` e o objeto criado/atualizado.
- **Listagem:** Retorna metadados de paginação (`total`, `totalPages`, `currentPage`) e o array `data`.
- **Erro:** Retorna `sucess: false` e a mensagem de erro.

---

## 🚀 Endpoints Principais

### 1\. Criar Plano de Aula Completo (`Add Lesson Plan`)

Cria um plano de aula com toda a sua árvore de dependências (objetivos, temas, tópicos, atividades, etc.) em uma única requisição.

- **Método:** `POST`
- **Rota:** `/lesson-plans/create-lesson-plan`
- **Autenticação:** Bearer Token

#### 📥 Body (JSON)

| Campo                       | Tipo   | Obrigatório | Descrição                                     |
| :-------------------------- | :----- | :---------: | :-------------------------------------------- |
| `subjectLessonPlan`         | String |     Sim     | Disciplina da aula.                           |
| `descriptionLessonPlan`     | String |     Sim     | Descrição/Resumo da aula.                     |
| `gradeLevelLessonPlan`      | String |     Sim     | Nível de ensino (ex: "Ensino Superior").      |
| `complexityLevelLessonPlan` | String |     Sim     | Nível de dificuldade (ex: "Avançado").        |
| `durationMinutesLessonPlan` | Number |     Sim     | Duração em minutos.                           |
| `generalObjective`          | String |     Sim     | Objetivo geral da aula.                       |
| `specificObjectives`        | Array  |     Sim     | Lista de objetivos específicos.               |
| `competencies`              | Array  |     Sim     | Lista de competências.                        |
| `themes`                    | Array  |     Sim     | Temas abordados.                              |
| `teachingMethodologies`     | Array  |     Sim     | Metodologias de ensino.                       |
| `topics`                    | Array  |     Sim     | Lista de tópicos com sub-itens (ver exemplo). |
| `homework`                  | Object |     Sim     | Dados da tarefa de casa.                      |
| `inclusiveAdaptation`       | Object |     Sim     | Adaptações inclusivas.                        |
| `references`                | Array  |     Sim     | Referências bibliográficas.                   |
| `closure`                   | Object |     Sim     | Fechamento da aula.                           |

**Exemplo de Request:**

```json
{
  "subjectLessonPlan": "Estrutura de Dados em Java",
  "descriptionLessonPlan": "Aula sobre listas duplamente encadeadas.",
  "gradeLevelLessonPlan": "Ensino Superior",
  "complexityLevelLessonPlan": "Avançado",
  "durationMinutesLessonPlan": 120,
  "generalObjective": "Capacitar os alunos a compreender e implementar listas...",
  "specificObjectives": [
    {
      "titleObjetivesLessonPlan": "Compreender o conceito",
      "contentObjetivesLessonPlan": "Entender a estrutura e nós."
    }
  ],
  "competencies": [
    { "contentCompetenciesLessonPlan": "Desenvolver raciocínio lógico." }
  ],
  "themes": [
    {
      "titleThemesLessonPlan": "Introdução",
      "contentThemesLessonPlan": "Diferenças entre listas."
    }
  ],
  "teachingMethodologies": [
    {
      "titleMethodologyLessonPlan": "Metodologia ativa",
      "contentMethodologyLessonPlan": "Prática de código."
    }
  ],
  "topics": [
    {
      "titleTopicsLessonPlan": "Introdução às Listas",
      "contentTopicsLessonPlan": "Conceitos básicos...",
      "detailed_explanation_topic_lesson_plan": "Explicação detalhada...",
      "examplesTopicLessonPlan": [
        {
          "titleExamplesTopicLessonPlan": "Navegador Web",
          "contentExamplesTopicLessonPlan": "Histórico..."
        }
      ],
      "activitiesTopicLessonPlan": [
        {
          "titleActivitiesTopicLessonPlan": "Comparação",
          "contentActivitiesTopicLessonPlan": "Comparar listas...",
          "explicationActivitiesTopicLessonPlan": "Promove análise."
        }
      ],
      "connectionsTopicLessonPlan": [
        {
          "titleConnectionsTopics": "Sistemas Operacionais",
          "contentConnectionsTopics": "Gerenciamento de processos."
        }
      ]
    }
  ],
  "homework": {
    "description": "Implementar lista genérica...",
    "objective": "Consolidar conhecimento."
  },
  "inclusiveAdaptation": {
    "visualImpairment": "Materiais acessíveis...",
    "learningDifficulties": "Etapas menores...",
    "highAbilities": "Desafios extras..."
  },
  "references": [
    { "contentReferencesLessonPlan": "Goodrich, M. T. (2014)..." }
  ],
  "closure": {
    "summary": "Revisão dos conceitos...",
    "reflection": "Discussão sobre importância...",
    "nextSteps": "Introdução a árvores..."
  }
}
```

#### 📤 Response (Sucesso)

```json
{
    "message": "Plano de aula criado com sucesso.",
    "sucess": true,
    "createdLessonPlan": {
        "id_lesson_plan": "ccd71d66-e8ca-4c99-b302-69a40b655638",
        "subjectLessonPlan": "Estrutura de Dados em Java",
        "objetives_lesson_plan": [ ... ],
        "topics_lesson_plan": [ ... ]
        // ...restante da estrutura com IDs gerados
    }
}
```

---

### 2\. Listar Planos - Admin (`Get by Admin`)

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/admin`
- **Query Params:** `page=1`, `limit=10`

#### 📤 Response

```json
{
    "total": 8,
    "totalPages": 8,
    "currentPage": 2,
    "data": [ { ... } ] // Array de planos de aula
}
```

---

### 3\. Listar Planos - Usuário (`Get by User`)

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/user`
- **Query Params:** `page=1`, `limit=10`

#### 📤 Response

```json
{
    "total": 8,
    "totalPages": 8,
    "currentPage": 1,
    "data": [ { ... } ] // Array de planos do usuário logado
}
```

---

### 4\. Obter Plano por ID (`Get by ID`)

Retorna a estrutura completa e aninhada de um plano específico.

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/id/:id`

#### 📤 Response

```json
{
    "id_lesson_plan": "ccd71d66-e8ca-4c99-b302-69a40b655638",
    "subjectLessonPlan": "Estrutura de Dados em Java",
    "topics_lesson_plan": [
        {
            "id_topics_lesson_plan": "...",
            "titleTopicsLessonPlan": "...",
            "examples_topics": [ ... ],
            "activities_topics": [ ... ]
        }
    ]
    // ... Objeto completo
}
```

---

## 🛠️ Endpoints de Atualização (Granular)

Estas rotas permitem alterar partes específicas do plano sem reenviar todo o conteúdo.

### 5\. Atualizar Dados Gerais (`Patch Lesson`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/lesson-plan/:id`
- **Body:**

<!-- end list -->

```json
{ "subjectLessonPlan": "Estrutura de Dados em Java novo" }
```

### 6\. Atualizar Objetivo Específico (`Patch Objetives`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/objetives/:id_objective`
- **Body:**

<!-- end list -->

```json
{
  "titleObjetivesLessonPlan": "Compreender o conceito de lista duplamente encadeada"
}
```

### 7\. Atualizar Competência (`Patch Competencies`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/competencies/:id_competency`
- **Body:**

<!-- end list -->

```json
{ "contentCompetenciesLessonPlan": "Desenvolver a capacidade de abstração..." }
```

### 8\. Atualizar Tema (`Patch Themes`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/themes/:id_theme`
- **Body:**

<!-- end list -->

```json
{ "titleThemesLessonPlan": "Introdução às listas duplamente encadeadas2" }
```

### 9\. Atualizar Metodologia (`Patch Methodology`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/methodology/:id_methodology`
- **Body:**

<!-- end list -->

```json
{ "titleMethodologyLessonPlan": "Introdução às listas duplamente encadeadas" }
```

### 10\. Atualizar Tópico Principal (`Patch Topics`)

Atualiza título ou conteúdo do tópico (não os sub-itens).

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/topics/:id_topic`
- **Body:**

<!-- end list -->

```json
{ "titleTopicsLessonPlan": "Introdução às Listas Encadeadas e suas Variações" }
```

### 11\. Atualizar Exemplo do Tópico (`Patch Topics Examples`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/examples-topics/:id_example`
- **Body:**

<!-- end list -->

```json
{ "titleExamplesTopicLessonPlan": "Editor de texto" }
```

### 12\. Atualizar Atividade do Tópico (`Patch Topics Activities`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/Activities-topics/:id_activity`
- **Body:**

<!-- end list -->

```json
{ "titleActivitiesTopicLessonPlan": "Discussão em Grupo" }
```

### 13\. Atualizar Conexão do Tópico (`Patch Topics Connections`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/connections-topics/:id_connection`
- **Body:**

<!-- end list -->

```json
{ "titleConnectionsTopics": "Editores de Texto" }
```

### 14\. Atualizar Adaptação Inclusiva (`Patch Inclusive Adaptation`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/inclusive-adaptation/:id_adaptation`
- **Body:**

<!-- end list -->

```json
{
  "visualImpairment": "Disponibilizar o material didático em formato acessível..."
}
```

### 15\. Atualizar Referências (`Patch References`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/references/:id_reference`
- **Body:**

<!-- end list -->

```json
{ "contentReferencesLessonPlan": "Goodrich, M. T. (2014). Data Structures..." }
```

### 16\. Atualizar Fechamento (`Patch Closure`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/closure/:id_closure`
- **Body:**

<!-- end list -->

```json
{ "reflection": "Incentivar os alunos a refletir..." }
```

### 17\. Atualizar Tarefa de Casa (`Patch Homework`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/homeworks/:id_homework`
- **Body:**

<!-- end list -->

```json
{ "description": "Implementar uma lista duplamente encadeada genérica..." }
```

---

## 🗑️ Endpoints de Remoção

### 18\. Deletar Plano de Aula (`Delete Lesson`)

Remove um plano de aula pertencente ao usuário.

- **Método:** `DELETE`
- **Rota:** `/lesson-plans/delete-lesson-plan/:id`
- **Autenticação:** Bearer Token

### 19\. Deletar Plano de Aula - Admin (`Delete Lesson Adm`)

Rota administrativa para remoção de qualquer plano.

- **Método:** `DELETE`
- **Rota:** `/lesson-plans/delete-lesson-plan-admin/:id`
- **Autenticação:** Bearer Token (Admin)

#### 📤 Response (Ambos)

```json
{
  "message": "Plano de aula deletado com sucesso.",
  "sucess": true
}
```
