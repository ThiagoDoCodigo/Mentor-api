# 📚 Módulo de Exercícios (Exercises API)

Este documento detalha os endpoints responsáveis pelo gerenciamento de listas de exercícios. O módulo permite a criação completa de avaliações (com suporte a questões de múltipla escolha, verdadeiro ou falso e discursivas), listagem, recuperação detalhada e atualização granular de cada componente (enunciados, opções, temas e objetivos).

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** Token Bearer (Obrigatório em todas as rotas)

### ℹ️ Padrão de Resposta

- **Sucesso (`200/201`):** Retorna `sucess: true` (ou dados implícitos) e o objeto manipulado.
- **Paginação:** Endpoints de listagem retornam `total`, `totalPages`, `currentPage` e `data`.
- **Erro:** Retorna `sucess: false` e a descrição no campo `message`.

---

## 🚀 Endpoints de Criação e Leitura

### 1\. Criar Lista de Exercícios (`Add Exercise`)

Cria uma nova lista de exercícios completa, incluindo objetivos de aprendizagem, temas abordados e as questões (itens) com suas respectivas alternativas.

- **Método:** `POST`
- **Rota:** `/exercises/create-exercises`
- **Autenticação:** Bearer Token

#### 📥 Body (JSON) - Estrutura Principal

| Campo                        | Tipo   | Obrigatório | Descrição                                    |
| :--------------------------- | :----- | :---------: | :------------------------------------------- |
| `subject_exercises`          | String |     Sim     | Matéria ou disciplina (ex: "Parasitologia"). |
| `description_exercises`      | String |     Sim     | Descrição geral da lista.                    |
| `grade_level_exercises`      | String |     Sim     | Nível de ensino (ex: "Ensino Superior").     |
| `complexity_level_exercises` | String |     Sim     | Nível de dificuldade (ex: "Avançado").       |
| `duration_minutes_exercises` | Number |     Sim     | Duração estimada em minutos.                 |
| `objectives_exercises`       | Array  |     Sim     | Lista de objetivos de aprendizagem.          |
| `themes_exercises`           | Array  |     Sim     | Lista de temas abordados.                    |
| `exercises`                  | Array  |     Sim     | Lista de questões (itens).                   |

#### 🏗️ Estruturas dos Arrays Internos

**Objetivos (`objectives_exercises`):**

```json
{
  "titleObjectiveExercises": "Título do Objetivo",
  "contentObjectiveExercises": "Descrição detalhada do objetivo."
}
```

**Temas (`themes_exercises`):**

```json
{
  "titleThemeExercises": "Título do Tema",
  "contentThemeExercises": "Descrição do tema."
}
```

**Questões (`exercises`):**
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `type_exercise` | String | Tipo da questão. Valores aceitos: `"multipla-escolha"`, `"verdadeiro-falso"`, `"discursiva"`. |
| `title_exercise` | String | Título curto da questão. |
| `content_exercise` | String | Enunciado da questão. |
| `correct_answer_exercise` | String | Gabarito (ex: "E", "V, F, V", ou null para discursivas). |
| `explanation_exercise` | String | Explicação/Feedback da resposta. |
| `bloom_level` | String | Nível da Taxonomia de Bloom (ex: "analisar", "lembrar"). |
| `options_exercise_multipla_escolha` | Array | (Opcional) Usado se tipo for múltipla escolha. Contém `{ "option": "A", "content_option": "Texto" }`. |
| `options_exercise_verdadeiro_falso` | Array | (Opcional) Usado se tipo for V/F. Contém `{ "option": "V", "content_option": "Texto" }`. |

**Exemplo de Request Completo:**

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
      "title_exercise": "Identificação de pulgas",
      "content_exercise": "As pulgas são ectoparasitas...",
      "options_exercise_multipla_escolha": [
        { "option": "A", "content_option": "Texto da opção A" },
        { "option": "E", "content_option": "Texto da opção E (Correta)" }
      ],
      "correct_answer_exercise": "E",
      "explanation_exercise": "Explicação detalhada...",
      "bloom_level": "analisar"
    }
  ]
}
```

#### 📤 Response (Sucesso)

Retorna o objeto criado com todos os IDs gerados.

---

### 2\. Listar Exercícios - Admin (`Get by Admin`)

Retorna todas as listas de exercícios do sistema com paginação.

- **Método:** `GET`
- **Rota:** `/exercises/get-exercises/admin`
- **Autenticação:** Bearer Token

#### ⚙️ Query Params

| Parâmetro | Tipo | Padrão | Descrição         |
| :-------- | :--- | :----- | :---------------- |
| `page`    | Int  | 1      | Número da página. |
| `limit`   | Int  | 10     | Itens por página. |

#### 📤 Response (Sucesso)

```json
{
  "total": 3,
  "totalPages": 2,
  "currentPage": 1,
  "data": [
    {
      "id_exercise": "d737cdb2-ecdb-489a-a20e-f7cc556bc830",
      "subjectExercises": "Parasitologia",
      "descriptionExercises": "Exercícios para revisão...",
      "createdAt": "2025-11-16T16:09:32.882Z"
      // ... demais campos
    }
  ]
}
```

---

### 3\. Listar Exercícios - Usuário (`Get by User`)

Retorna as listas de exercícios criadas pelo usuário logado.

- **Método:** `GET`
- **Rota:** `/exercises/get-exercises/user`
- **Autenticação:** Bearer Token

#### ⚙️ Query Params

| Parâmetro | Tipo | Padrão | Descrição         |
| :-------- | :--- | :----- | :---------------- |
| `page`    | Int  | 1      | Número da página. |
| `limit`   | Int  | 10     | Itens por página. |

#### 📤 Response (Sucesso)

Estrutura idêntica à rota de Admin, filtrada pelo `id_user`.

---

### 4\. Obter Exercício por ID (`Get by ID`)

Recupera todos os detalhes de uma lista de exercícios específica, incluindo suas questões, opções, temas e objetivos.

- **Método:** `GET`
- **Rota:** `/exercises/get-exercises/exercise/:id`
- **Autenticação:** Bearer Token

#### ⚙️ Parâmetros de URL

| Parâmetro | Descrição                    |
| :-------- | :--------------------------- |
| `:id`     | UUID da lista de exercícios. |

#### 📤 Response (Sucesso)

Retorna o objeto completo com arrays aninhados (`execiseItems`, `themeExercises`, `objectiveExercises`).

---

## 🛠️ Endpoints de Atualização (Granular)

A API permite atualizar partes específicas da estrutura sem a necessidade de reenviar o objeto inteiro.

### 5\. Atualizar Dados Gerais (`Update ExerciseModel`)

Atualiza metadados da lista (título, descrição, tempo, etc).

- **Método:** `PATCH`
- **Rota:** `/exercises/update/exercise/:id`

#### 📥 Body (JSON)

```json
{
  "subjectExercises": "Estruturas de Dados em Java (atualizado)",
  "descriptionExercises": "Revisão dos exercícios...",
  "durationMinutesExercises": 120
}
```

### 6\. Atualizar Item/Questão (`Update ExerciseItem`)

Atualiza o enunciado, explicação ou gabarito de uma questão específica.

- **Método:** `PATCH`
- **Rota:** `/exercises/update/exercise-item/:id_item`

#### 📥 Body (JSON)

```json
{
  "title_exercise": "Afirmação sobre remoção (atualizada)",
  "explanation_exercise": "Nova explicação mais detalhada..."
}
```

### 7\. Atualizar Objetivo (`Update ObjectiveExercise`)

Atualiza um objetivo de aprendizagem específico.

- **Método:** `PATCH`
- **Rota:** `/exercises/update/objective/:id_objective`

#### 📥 Body (JSON)

```json
{
  "titleObjectiveExercises": "Compreender melhor listas..."
}
```

### 8\. Atualizar Tema (`Update Theme`)

Atualiza um tema específico.

- **Método:** `PATCH`
- **Rota:** `/exercises/update/theme/:id_theme`

#### 📥 Body (JSON)

```json
{
  "contentThemeExercises": "Revisão da estrutura de nós..."
}
```

### 9\. Atualizar Opção Múltipla Escolha (`Update Option Multiple`)

Atualiza o texto de uma alternativa de múltipla escolha.

- **Método:** `PATCH`
- **Rota:** `/exercises/update/option-multiple/:id_option`

#### 📥 Body (JSON)

```json
{
  "content_option": "Texto da alternativa atualizado"
}
```

### 10\. Atualizar Opção Verdadeiro/Falso (`Update Option True/False`)

Atualiza o texto de uma alternativa de verdadeiro ou falso.

- **Método:** `PATCH`
- **Rota:** `/exercises/update/option-true-or-false/:id_option`

#### 📥 Body (JSON)

```json
{
  "content_option": "Afirmação atualizada"
}
```

---

## 🗑️ Endpoints de Remoção

### 11\. Deletar Exercício (`Delete Exercise`)

Remove uma lista de exercícios (deve pertencer ao usuário).

- **Método:** `DELETE`
- **Rota:** `/exercises/delete-exercise/:id`
- **Autenticação:** Bearer Token

### 12\. Deletar Exercício - Admin (`Delete Exercise Adm`)

Remove qualquer lista de exercícios (rota administrativa).

- **Método:** `DELETE`
- **Rota:** `/exercises/delete-exercise-admin/:id`
- **Autenticação:** Bearer Token (Admin)

#### 📤 Response (Padrão para Deleção)

```json
{
  "message": "Exercício deletado com sucesso.",
  "sucess": true
}
```
