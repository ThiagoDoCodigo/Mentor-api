# 📝 Módulo de Planos de Aula (Lesson Plans API)

Este módulo é responsável pelo gerenciamento completo do ciclo de vida dos Planos de Aula. Devido à complexidade pedagógica, este recurso possui uma estrutura profundamente aninhada (Aula -\> Tópicos -\> Atividades/Exemplos/Conexões).

A API permite criar o plano completo em uma única requisição, mas oferece endpoints específicos (`PATCH`) para atualizar cada fragmento do plano individualmente (granularidade fina).

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** Token Bearer (Obrigatório)

### ℹ️ Padrão de Resposta

- **Sucesso (`200/201`):** Retorna `sucess: true` e o objeto manipulado.
- **Paginação:** Endpoints de listagem retornam `total`, `totalPages`, `currentPage` e `data`.
- **Erro:** Retorna `sucess: false` e a descrição no campo `message`.

---

## 🚀 Endpoints de Criação e Leitura

### 1\. Criar Plano de Aula Completo (`Add Lesson Plan`)

Cria um plano de aula com toda a sua árvore de dependências: objetivos, competências, temas, metodologias, tópicos detalhados (com exemplos, atividades e conexões), dever de casa, adaptações e referências.

- **Método:** `POST`
- **Rota:** `/lesson-plans/create-lesson-plan`
- **Autenticação:** Bearer Token

#### 📥 Body (JSON) - Estrutura Principal

| Campo                       | Tipo   | Obrigatório | Descrição                                |
| :-------------------------- | :----- | :---------: | :--------------------------------------- |
| `subjectLessonPlan`         | String |     Sim     | Disciplina ou Matéria.                   |
| `descriptionLessonPlan`     | String |     Sim     | Resumo do conteúdo da aula.              |
| `gradeLevelLessonPlan`      | String |     Sim     | Nível de ensino (ex: "Ensino Superior"). |
| `complexityLevelLessonPlan` | String |     Sim     | Nível de dificuldade.                    |
| `durationMinutesLessonPlan` | Number |     Sim     | Duração total em minutos.                |
| `generalObjective`          | String |     Sim     | Objetivo geral da aula.                  |
| `objectives`                | Array  |     Sim     | Lista de objetivos específicos.          |
| `competencies`              | Array  |     Sim     | Lista de competências a desenvolver.     |
| `themes`                    | Array  |     Sim     | Temas abordados.                         |
| `teachingMethodologies`     | Array  |     Sim     | Metodologias de ensino aplicadas.        |
| `topics`                    | Array  |     Sim     | Lista complexa de tópicos (ver abaixo).  |
| `homework`                  | Object |     Sim     | Objeto descrevendo a tarefa de casa.     |
| `inclusiveAdaptation`       | Object |     Sim     | Adaptações para inclusão.                |
| `references`                | Array  |     Sim     | Referências bibliográficas.              |
| `closure`                   | Object |     Sim     | Fechamento e reflexão da aula.           |

#### 🏗️ Estruturas Aninhadas (Arrays e Objetos)

**Objetivos, Competências, Temas e Metodologias:**

```json
"objectives": [{ "titleObjetivesLessonPlan": "...", "contentObjetivesLessonPlan": "..." }],
"competencies": [{ "contentCompetenciesLessonPlan": "..." }],
"themes": [{ "titleThemesLessonPlan": "...", "contentThemesLessonPlan": "..." }],
"teachingMethodologies": [{ "titleMethodologyLessonPlan": "...", "contentMethodologyLessonPlan": "..." }]
```

**Tópicos (`topics`) - Estrutura Complexa:**
Cada tópico contém seus próprios sub-arrays de Exemplos, Atividades e Conexões.

```json
{
  "titleTopicsLessonPlan": "Título do Tópico",
  "contentTopicsLessonPlan": "Conteúdo resumido",
  "detailed_explanation_topic_lesson_plan": "Explicação detalhada",
  "examplesTopicLessonPlan": [
    {
      "titleExamplesTopicLessonPlan": "...",
      "contentExamplesTopicLessonPlan": "..."
    }
  ],
  "activitiesTopicLessonPlan": [
    {
      "titleActivitiesTopicLessonPlan": "...",
      "contentActivitiesTopicLessonPlan": "...",
      "explicationActivitiesTopicLessonPlan": "..."
    }
  ],
  "connectionsTopicLessonPlan": [
    { "titleConnectionsTopics": "...", "contentConnectionsTopics": "..." }
  ]
}
```

**Exemplo de Request completo:**

```json
{
  "subjectLessonPlan": "Estrutura de Dados em Java",
  "descriptionLessonPlan": "Aula sobre listas duplamente encadeadas...",
  "gradeLevelLessonPlan": "Ensino Superior",
  "complexityLevelLessonPlan": "Avançado",
  "durationMinutesLessonPlan": 120,
  "generalObjective": "Capacitar os alunos...",
  "objectives": [
    {
      "titleObjetivesLessonPlan": "Compreender conceitos",
      "contentObjetivesLessonPlan": "..."
    }
  ],
  "topics": [
    {
      "titleTopicsLessonPlan": "Introdução",
      "contentTopicsLessonPlan": "Conceitos básicos",
      "examplesTopicLessonPlan": [
        {
          "titleExamplesTopicLessonPlan": "Exemplo 1",
          "contentExamplesTopicLessonPlan": "..."
        }
      ]
    }
  ],
  "homework": {
    "description": "Implementar lista...",
    "objective": "Consolidar prática."
  },
  "inclusiveAdaptation": {
    "visualImpairment": "Materiais acessíveis...",
    "learningDifficulties": "Etapas menores...",
    "highAbilities": "Desafios extras..."
  },
  "closure": {
    "summary": "Revisão...",
    "reflection": "Discussão...",
    "nextSteps": "Próximos passos..."
  }
}
```

#### 📤 Response (Sucesso)

Retorna o objeto criado com todos os IDs (UUIDs) gerados para cada sub-item.

---

### 2\. Listar Planos - Admin (`Get by Admin`)

Retorna todos os planos de aula cadastrados no sistema.

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/admin`
- **Autenticação:** Bearer Token

#### ⚙️ Query Params

| Parâmetro | Tipo | Padrão | Descrição         |
| :-------- | :--- | :----- | :---------------- |
| `page`    | Int  | 1      | Número da página. |
| `limit`   | Int  | 10     | Itens por página. |

---

### 3\. Listar Planos - Usuário (`Get by User`)

Retorna apenas os planos de aula pertencentes ao usuário autenticado.

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/user`
- **Autenticação:** Bearer Token

#### ⚙️ Query Params

| Parâmetro | Tipo | Padrão | Descrição         |
| :-------- | :--- | :----- | :---------------- |
| `page`    | Int  | 1      | Número da página. |
| `limit`   | Int  | 10     | Itens por página. |

---

### 4\. Obter Plano por ID (`Get by ID`)

Retorna a árvore completa de dados de um plano específico.

- **Método:** `GET`
- **Rota:** `/lesson-plans/get-lesson-plans/id/:id`
- **Parâmetro:** `:id` (UUID do plano de aula)

---

## ✏️ Endpoints de Atualização (Granular)

O sistema permite atualizar partes específicas do plano de aula sem reenviar o objeto inteiro. Cada componente tem sua própria rota.

### 5\. Atualizar Dados Gerais (`Patch Lesson`)

Atualiza metadados principais do plano.

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/lesson-plan/:id`

#### 📥 Body (JSON)

```json
{
  "subjectLessonPlan": "Estrutura de Dados em Java novo"
}
```

### 6\. Atualizar Objetivos (`Patch Objetives`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/objetives/:id_objective`

#### 📥 Body (JSON)

```json
{
  "titleObjetivesLessonPlan": "Compreender o conceito de lista..."
}
```

### 7\. Atualizar Competências (`Patch Competencies`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/competencies/:id_competency`

#### 📥 Body (JSON)

```json
{
  "contentCompetenciesLessonPlan": "Desenvolver a capacidade de abstração..."
}
```

### 8\. Atualizar Temas (`Patch Themes`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/themes/:id_theme`

#### 📥 Body (JSON)

```json
{
  "titleThemesLessonPlan": "Introdução às listas atualizada"
}
```

### 9\. Atualizar Metodologia (`Patch Methodology`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/methodology/:id_methodology`

#### 📥 Body (JSON)

```json
{
  "titleMethodologyLessonPlan": "Metodologia Ativa Revisada"
}
```

### 10\. Atualizar Tópicos (`Patch Topics`)

Atualiza o título ou conteúdo principal de um tópico (não seus sub-itens).

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/topics/:id_topic`

#### 📥 Body (JSON)

```json
{
  "titleTopicsLessonPlan": "Introdução às Listas Encadeadas e suas Variações"
}
```

### 11\. Atualizar Exemplos de Tópicos (`Patch Topics Examples`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/examples-topics/:id_example`

#### 📥 Body (JSON)

```json
{
  "titleExamplesTopicLessonPlan": "Editor de texto (Exemplo Prático)"
}
```

### 12\. Atualizar Atividades de Tópicos (`Patch Topics Activities`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/Activities-topics/:id_activity`

#### 📥 Body (JSON)

```json
{
  "titleActivitiesTopicLessonPlan": "Discussão em Grupo (Revisada)"
}
```

### 13\. Atualizar Conexões de Tópicos (`Patch Topics Connections`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/connections-topics/:id_connection`

#### 📥 Body (JSON)

```json
{
  "titleConnectionsTopics": "Editores de Texto Modernos"
}
```

### 14\. Atualizar Adaptação Inclusiva (`Patch Inclusive Adaptation`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/inclusive-adaptation/:id_adaptation`

#### 📥 Body (JSON)

```json
{
  "visualImpairment": "Disponibilizar o material didático em formato acessível (HTML, PDF)..."
}
```

### 15\. Atualizar Referências (`Patch References`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/references/:id_reference`

#### 📥 Body (JSON)

```json
{
  "contentReferencesLessonPlan": "Goodrich, M. T. (2014). Data Structures... (Edição Revisada)"
}
```

### 16\. Atualizar Fechamento (`Patch Closure`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/closure/:id_closure`

#### 📥 Body (JSON)

```json
{
  "reflection": "Incentivar os alunos a refletir sobre a importância..."
}
```

### 17\. Atualizar Dever de Casa (`Patch Homework`)

- **Método:** `PATCH`
- **Rota:** `/lesson-plans/update/homeworks/:id_homework`

#### 📥 Body (JSON)

```json
{
  "description": "Implementar uma lista genérica com testes unitários."
}
```

---

## 🗑️ Endpoints de Remoção

### 18\. Deletar Plano de Aula (`Delete Lesson`)

Remove um plano de aula criado pelo usuário.

- **Método:** `DELETE`
- **Rota:** `/lesson-plans/delete-lesson-plan/:id`
- **Autenticação:** Bearer Token

### 19\. Deletar Plano de Aula - Admin (`Delete Lesson Adm`)

Rota administrativa para remoção forçada de planos de aula.

- **Método:** `DELETE`
- **Rota:** `/lesson-plans/delete-lesson-plan-admin/:id`
- **Autenticação:** Bearer Token (Admin)

#### 📤 Response (Padrão)

```json
{
  "message": "Plano de aula deletado com sucesso.",
  "sucess": true
}
```
