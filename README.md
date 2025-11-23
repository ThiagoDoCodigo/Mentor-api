Com certeza\! Aqui está uma versão aprimorada, visualmente organizada e profissional do seu **README**, incorporando as melhores práticas de documentação, formatação clara e emojis para facilitar a leitura.

---

# 🎓 Guia de Início Rápido - Projeto Mentor API

Este documento serve como o manual definitivo para configuração, execução e testes do **Projeto Mentor**, uma API RESTful de alta performance voltada para o gerenciamento de conteúdo educacional. O sistema integra tecnologias modernas e Inteligência Artificial (Google Gemini) para automatizar a criação de planos de aula e exercícios.

---

## 1\. 📋 Visão Geral do Projeto

O **Projeto Mentor** é construído sobre uma arquitetura robusta utilizando **Fastify** e **TypeScript**, garantindo tipagem estática e alta velocidade de processamento. O núcleo da aplicação gerencia:

- **Usuários:** Controle de acesso e perfis (Student/Admin).
- **Conteúdo:** Criação e versionamento de Planos de Aula e Exercícios.
- **IA Generativa:** Integração nativa com Google Gemini para geração de material didático complexo.

### 🛠️ Stack Tecnológico

| Categoria          | Tecnologia / Lib  | Finalidade Principal                                                     |
| :----------------- | :---------------- | :----------------------------------------------------------------------- |
| **Core**           | Node.js & Fastify | Runtime e Framework web de baixa sobrecarga e alta performance.          |
| **Linguagem**      | TypeScript        | Superconjunto de JS que adiciona tipagem estática e segurança ao código. |
| **Banco de Dados** | PostgreSQL        | SGBD Relacional robusto para persistência de dados.                      |
| **ORM**            | Sequelize         | Abstração e manipulação do banco de dados via objetos (Models).          |
| **Segurança**      | JWT & Bcrypt      | Autenticação via Tokens (Access/Refresh) e hash seguro de senhas.        |
| **Testes**         | Jest              | Framework completo para testes unitários e de integração.                |
| **AI**             | Google Gemini API | Motor de geração de conteúdo educacional.                                |

---

## 2\. ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

### 2.1. Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (Versão LTS recomendada v18+).
- **PostgreSQL** (Servidor rodando e acessível).
- **Gerenciador de Pacotes** (`npm` ou `yarn`).

### 2.2. Instalação de Dependências

Na raiz do projeto, execute o comando para baixar as bibliotecas:

```bash
npm install
# ou
yarn install
```

### 2.3. Configuração de Variáveis de Ambiente (`.env`)

O projeto requer a configuração de variáveis sensíveis. Crie dois arquivos na raiz: `.env` (desenvolvimento/produção) e `.env.test` (testes automatizados).

#### 📄 Arquivo `.env` (Exemplo)

```ini
# --- Banco de Dados (Aplicação) ---
DB_USERNAME=postgres
DB_PASSWORD=sua_senha_aqui
DB_TABLE=MENTOR-API
DB_HOST=localhost
DB_PORT=5432

# --- Servidor ---
PORT=3000
HOST=0.0.0.0

# --- Segurança (JWT) ---
JWT_LIMIT_ACCESS=2h
JWT_LIMIT_REFRESH=2d
JWT_PASSWORD=secret_super_seguro_123

# --- Integrações Externas ---
GEMINI_API_KEY=sua_chave_api_google_gemini
```

#### 📄 Arquivo `.env.test` (Exemplo)

```ini
# --- Banco de Dados (Testes) ---
# ATENÇÃO: Use um banco separado para não limpar seus dados de dev
DB_USERNAME=postgres
DB_PASSWORD=sua_senha_aqui
DB_TABLE=MENTOR-API-TEST
DB_HOST=localhost
DB_PORT=5432

# --- Configurações de Teste ---
NODE_ENV=test
PORT=3001
JWT_LIMIT_ACCESS=1h
JWT_LIMIT_REFRESH=1d
JWT_PASSWORD=test_secret
GEMINI_API_KEY=sua_chave_api_google_gemini
```

### 2.4. Configuração do Banco de Dados

O Sequelize sincronizará os modelos com o banco, mas ele **não cria o banco de dados em si**.

1.  **Manual:** Abra seu terminal SQL ou pgAdmin e crie dois bancos vazios:
    - `MENTOR-API`
    - `MENTOR-API-TEST`
2.  **Sincronização:** Execute o script para criar as tabelas e relacionamentos:

<!-- end list -->

```bash
npm run sync
```

> _Este comando executa `src/data/sync.ts`, garantindo que o schema esteja atualizado._

---

## 3\. 🚀 Execução do Servidor

Escolha o modo de execução adequado para sua necessidade:

### 🧑‍💻 Modo Desenvolvimento (Padrão)

Utiliza `ts-node-dev` com _hot-reload_. Qualquer alteração no código reinicia o servidor automaticamente.

```bash
npm run dev
```

### 🧠 Modo Desenvolvimento (Memória Estendida)

Ideal para operações pesadas (ex: processamento em lote com IA). Aloca `8GB` de memória para o Node.js.

```bash
npm run dev:mem
```

### 🏭 Modo Produção

Para deploy ou performance máxima. Compila o TypeScript para JavaScript otimizado.

1.  **Build:** Transpila o código para a pasta `dist/`.
    ```bash
    npm run build
    ```
2.  **Start:** Roda o servidor compilado.
    ```bash
    npm start
    ```

---

## 4\. 🧪 Testes Automatizados (Quality Assurance)

O projeto utiliza **Jest** para garantir a qualidade do código.

### 🧩 Testes Unitários

Testam funções isoladas e regras de negócio (Services/Utils) sem tocar no banco de dados ou APIs externas.

```bash
npm run test:unit
```

### 🔌 Testes de Integração

Testam os Endpoints (Rotas) reais, verificando o fluxo completo (Request -\> Controller -\> DB -\> Response).

```bash
npm run test:integration
```

> **Nota:** Os testes de integração utilizam o banco `MENTOR-API-TEST` e o limpam a cada execução.
