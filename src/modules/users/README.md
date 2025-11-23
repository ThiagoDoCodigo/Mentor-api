# 👤 Módulo de Usuários (Users API)

Este documento detalha os endpoints disponíveis no módulo de gerenciamento de usuários. A API permite criar, listar, atualizar e excluir usuários com suporte a diferentes níveis de permissão (usuário comum e admin).

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** A maioria dos endpoints requer um token Bearer no cabeçalho.

### ℹ️ Padrão de Respostas

Todas as respostas da API seguem um padrão JSON.

- **Sucesso:** `sucess: true` com os dados solicitados.
- **Erro:** `sucess: false` (ou status HTTP de erro) com uma mensagem descritiva no campo `message`.

---

## 🚀 Endpoints

### 1\. Criar Usuário

Registra um novo usuário no sistema.

- **Método:** `POST`
- **URL:** `/users/create`
- **Autenticação:** Não requerida (neste contexto).

#### 📥 Body (JSON)

| Campo           | Tipo   | Obrigatório | Descrição                                   |
| :-------------- | :----- | :---------: | :------------------------------------------ |
| `name_user`     | String |     Sim     | Nome completo do usuário.                   |
| `email_user`    | String |     Sim     | Endereço de e-mail válido.                  |
| `cpf_user`      | String |     Sim     | CPF (apenas números ou formatado).          |
| `password_user` | String |     Sim     | Senha de acesso.                            |
| `role_user`     | String |     Sim     | Perfil do usuário (ex: "student", "admin"). |

**Exemplo de Request:**

```json
{
  "name_user": "Thiago Ferreira",
  "email_user": "thiagos@thc.com",
  "cpf_user": "56417881040",
  "password_user": "123455678",
  "role_user": "admin"
}
```

#### 📤 Response (Sucesso)

```json
{
  "message": "Usuário criado com sucesso.",
  "sucess": true,
  "createdUser": {
    "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
    "name_user": "Thiago Ferreira",
    "email_user": "thiago@thc.com",
    "cpf_user": "99091731079",
    "role_user": "admin"
  }
}
```

---

### 2\. Listar Todos os Usuários

Retorna uma lista com todos os usuários cadastrados.

- **Método:** `GET`
- **URL:** `/users/get-all`
- **Autenticação:** Bearer Token

#### 🔐 Headers

| Key             | Value              |
| :-------------- | :----------------- |
| `Authorization` | `Bearer {{token}}` |

#### 📤 Response (Sucesso)

```json
{
  "users": [
    {
      "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
      "name_user": "Thiago Ferreira",
      "email_user": "thiago@thc.com",
      "cpf_user": "99091731079",
      "role_user": "admin"
    }
  ],
  "sucess": true
}
```

---

### 3\. Atualizar Usuário (Padrão)

Atualiza os dados de um usuário específico.

- **Método:** `PATCH`
- **URL:** `/users/patch/:id`
- **Autenticação:** Bearer Token

#### ⚙️ Parâmetros de Rota (Path)

| Parâmetro | Descrição                                             |
| :-------- | :---------------------------------------------------- |
| `id`      | UUID do usuário a ser atualizado (Ex: `61fd49d4...`). |

#### 🔐 Headers

| Key             | Value              |
| :-------------- | :----------------- |
| `Authorization` | `Bearer {{token}}` |

#### 📥 Body (JSON)

Envie apenas os campos que deseja alterar.

| Campo       | Tipo   | Descrição             |
| :---------- | :----- | :-------------------- |
| `name_user` | String | Novo nome do usuário. |

**Exemplo de Request:**

```json
{
  "name_user": "Thiago Ferreira Gonçalves"
}
```

#### 📤 Response (Sucesso)

```json
{
  "message": "Usuário atualizado com sucesso.",
  "sucess": true,
  "updatedUser": {
    "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
    "name_user": "Thiago Ferreira Gonçalves",
    "email_user": "thiago@thc.com",
    "cpf_user": "99091731079",
    "role_user": "admin"
  }
}
```

---

### 4\. Atualizar Usuário (Admin)

Endpoint administrativo para atualização forçada ou privilegiada de dados do usuário.

- **Método:** `PATCH`
- **URL:** `/users/patchAdmin/:id`
- **Autenticação:** Bearer Token (Requer privilégios de Admin)

#### ⚙️ Parâmetros de Rota (Path)

| Parâmetro | Descrição             |
| :-------- | :-------------------- |
| `id`      | UUID do usuário alvo. |

#### 🔐 Headers

| Key             | Value              |
| :-------------- | :----------------- |
| `Authorization` | `Bearer {{token}}` |

#### 📥 Body (JSON)

**Exemplo de Request:**

```json
{
  "name_user": "Thiago"
}
```

#### 📤 Response (Sucesso)

```json
{
  "message": "Usuário atualizado com sucesso.",
  "sucess": true,
  "updatedUser": {
    "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
    "name_user": "Thiago",
    "email_user": "thiago@thc.com",
    "cpf_user": "99091731079",
    "role_user": "admin"
  }
}
```

---

### 5\. Deletar Usuário

Remove um usuário do sistema.

- **Método:** `DELETE`
- **URL:** `/users/delete/:id`
- **Autenticação:** Bearer Token

#### ⚙️ Parâmetros de Rota (Path)

| Parâmetro | Descrição                                           |
| :-------- | :-------------------------------------------------- |
| `id`      | UUID do usuário a ser removido (Ex: `4a7129d5...`). |

#### 🔐 Headers

| Key             | Value              |
| :-------------- | :----------------- |
| `Authorization` | `Bearer {{token}}` |

#### 📤 Response (Esperado)

_O corpo da resposta segue o padrão de sucesso da API._

```json
{
  "message": "Usuário deletado com sucesso.",
  "sucess": true
}
```

---

### 6\. Deletar Usuário (Admin)

Endpoint administrativo para remoção de usuários (pode ignorar certas restrições de usuário padrão).

- **Método:** `DELETE`
- **URL:** `/users/deleteAdmin/:id`
- **Autenticação:** Bearer Token (Requer privilégios de Admin)

#### ⚙️ Parâmetros de Rota (Path)

| Parâmetro | Descrição             |
| :-------- | :-------------------- |
| `id`      | UUID do usuário alvo. |

#### 🔐 Headers

| Key             | Value              |
| :-------------- | :----------------- |
| `Authorization` | `Bearer {{token}}` |

#### 📤 Response (Esperado)

```json
{
  "message": "Usuário deletado com sucesso.",
  "sucess": true
}
```

---
