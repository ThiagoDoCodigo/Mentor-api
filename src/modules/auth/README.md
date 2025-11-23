# 🔐 Módulo de Autenticação (Auth API)

Este documento detalha os endpoints responsáveis pelo controle de acesso e gerenciamento de sessões da aplicação. O módulo gerencia o login (emissão de tokens) e a renovação de credenciais (refresh token).

## 📋 Visão Geral

- **Base URL:** `{{api-url}}`
- **Formato de Dados:** JSON
- **Autenticação:** Estes endpoints são públicos (`public`), pois são utilizados justamente para obter as credenciais de acesso.

### ℹ️ Padrão de Respostas

Todas as respostas seguem a estrutura padrão da API:

- **Sucesso:** Retorna os tokens JWT (`accessToken` e `refreshToken`) e dados básicos do usuário.
- **Erro:** Retorna uma mensagem descritiva no campo `message` (ex: "Credenciais inválidas", "Token expirado").

---

## 🚀 Endpoints

### 1\. Realizar Login (`Login`)

Autentica um usuário no sistema utilizando e-mail e senha. Retorna os tokens de acesso necessários para consumir as rotas protegidas.

- **Método:** `POST`
- **Rota:** `/auth/login`
- **Autenticação:** _Não requerida_

#### 📥 Body (JSON)

| Campo           | Tipo   | Obrigatório | Descrição                     |
| :-------------- | :----- | :---------: | :---------------------------- |
| `email_user`    | String |     Sim     | E-mail cadastrado do usuário. |
| `password_user` | String |     Sim     | Senha do usuário.             |

**Exemplo de Request:**

```json
{
  "email_user": "thiago@thc.com",
  "password_user": "123455678"
}
```

#### 📤 Response (Sucesso)

Retorna os tokens de sessão e o objeto do usuário completo.

```json
{
  "tokens": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjFmZDQ5ZDQtZDAxOC00ZDFmLTkzOGYtYzQ3NGNlOTk5OTIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYzMzA5MzI2LCJleHAiOjE3NjMzMTY1MjZ9.opUcVZVSBAVT0dA-sbAoYRpjSru_vs1U5YWtXF3Yruk",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjFmZDQ5ZDQtZDAxOC00ZDFmLTkzOGYtYzQ3NGNlOTk5OTIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYzMzA5MzI2LCJleHAiOjE3NjMzMTY1MjZ9.opUcVZVSBAVT0dA-sbAoYRpjSru_vs1U5YWtXF3Yruk"
  },
  "user": {
    "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
    "name_user": "Thiago",
    "email_user": "thiago@thc.com",
    "cpf_user": "99091731079",
    "role_user": "admin"
  }
}
```

---

### 2\. Atualizar Token (`Refresh Token`)

Gera um novo `accessToken` utilizando um `refreshToken` válido. Esse endpoint é utilizado para manter a sessão do usuário ativa sem exigir que ele digite a senha novamente.

- **Método:** `POST`
- **Rota:** `/auth/refresh-token`
- **Autenticação:** _Não requerida_ (Validação feita via body)

#### 📥 Body (JSON)

| Campo          | Tipo   | Obrigatório | Descrição                                          |
| :------------- | :----- | :---------: | :------------------------------------------------- |
| `refreshToken` | String |     Sim     | Token de atualização recebido no momento do login. |

**Exemplo de Request:**

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjFmZDQ5ZDQtZDAxOC00ZDFmLTkzOGYtYzQ3NGNlOTk5OTIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYzMzA5MzI2LCJleHAiOjE3NjMzMTY1MjZ9.opUcVZVSBAVT0dA-sbAoYRpjSru_vs1U5YWtXF3Yruk"
}
```

#### 📤 Response (Sucesso)

Retorna um novo par de tokens e informações essenciais do usuário (ID e Role).

```json
{
  "tokens": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjFmZDQ5ZDQtZDAxOC00ZDFmLTkzOGYtYzQ3NGNlOTk5OTIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYzMzA5MzQ3LCJleHAiOjE3NjMzMTY1NDd9.q07lEX4bIXGsDn_jlICCWlkpkRB5Tv-lV7apEq8lKsU",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjFmZDQ5ZDQtZDAxOC00ZDFmLTkzOGYtYzQ3NGNlOTk5OTIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYzMzA5MzQ3LCJleHAiOjE3NjMzMTY1NDd9.q07lEX4bIXGsDn_jlICCWlkpkRB5Tv-lV7apEq8lKsU"
  },
  "user": {
    "id_user": "61fd49d4-d018-4d1f-938f-c474ce999921",
    "role_user": "admin"
  }
}
```
