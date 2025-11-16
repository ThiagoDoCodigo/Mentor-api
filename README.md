# Guia de Início Rápido - Projeto Mentor API 

Este documento serve como um guia essencial para configurar, rodar e testar o Projeto Mentor, uma API de gerenciamento de conteúdo educacional desenvolvida em Node.js com Fastify, TypeScript e integração com Google Gemini.

## 1. Visão Geral do Projeto

O Projeto Mentor é uma API de alta performance construída com Fastify e TypeScript, focada em gerenciar usuários, planos de aula e exercícios. Sua funcionalidade central é a integração com a API do Google Gemini para a geração automática de conteúdo educacional.

| Categoria | Tecnologia/Biblioteca | Finalidade Principal |
| :-- | :-- | :-- |
| Framework | Node.js, Fastify | Ambiente de execução e <br> framework web de alta <br> performance. |
| Linguagem | TypeScript | Linguagem tipada para maior <br> robustez do código. |
| Banco de <br> Dados | PostgreSQL (pg, <br> pg-hstore) | Sistema de gerenciamento de <br> banco de dados relacional. |
| ORM | Sequelize | Mapeamento Objeto-Relacional <br> para interagir com o PostgreSQL. |
| Autenticação | JWT, bcrxpt | Autenticação baseada em tokens <br> e hash de senhas. |
| Testes | Jest, supertest | Testes unitários e de integração. |

## 2. Instalação e Configuração

# Passo 2.1: Pré-requisitos 

Certifique-se de ter instalado:

1. Node.js (versão recomendada: LTS)
2. PostgreSQL (servidor de banco de dados rodando)

## Passo 2.2: Instalação de Dependências

Navegue até o diretório raiz do projeto e instale todas as dependências necessárias (produção e desenvolvimento):
npm install
\# ou
yarn install

## Passo 2.3: Configuração das Variáveis de Ambiente

O projeto utiliza o pacote dotenv para gerenciar configurações. Você deve criar um arquivo .env na raiz do projeto, preenchendo as variáveis, especialmente as de conexão com o banco de dados e a chave de API do Google Gemini.

## Variáveis Mínimas (Exemplo):

```
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_TABLE=MENTOR-API
DB_HOST=localhost
DB_PORT=5432
PORT=3000
HOST=0.0.0.0
JWT_LIMIT_ACCESS=2h
JWT_LIMIT_REFRESH=2d
JWT_PASSWORD=123456
GEMINI_API_KEY=
```


## Passo 2.4: Criação e Sincronização do Banco de Dados

Após configurar as variáveis de ambiente, execute o script de sincronização para criar o schema e todas as tabelas no PostgreSQL via Sequelize:
```
npm run sync
```

Comando: Este script executa src/data/sync.ts e é crucial para preparar o ambiente de dados.

# 3. Execução do Servidor 

O Projeto Mentor oferece diferentes scripts para ambientes de desenvolvimento e produção.

### 3.1. Modo Desenvolvimento Padrão

Inicia o servidor em modo de observação (ts-node-dev), com hot-reload. Ideal para o desenvolvimento diário:

```
npm run dev
```

### 3.2. Modo Desenvolvimento (Memória Aumentada)

Inicia o servidor alocando um limite maior de memória (--max-old-space-size=8192). Utilize este modo se estiver realizando operações intensivas, como testes ou 
geração de conteúdo massivo via Gemini API:

```
npm run dev:mem
```

### 3.3. Modo Produção

Para rodar a aplicação em ambiente de produção (usando a versão compilada em JavaScript):

1. Compilação do TypeScript para JavaScript:
```
npm run build
``` 
2. Execução do Servidor Compilado:
```
npm start
```


## 4. Rodando os Testes

O projeto utiliza o Jest como framework de testes, incluindo a verificação de cobertura de código.

Execute o comando a seguir para rodar todos os testes unitários e de integração:
```
npm test
```
Comando: O script é configurado para rodar jest --verbose --coverage, fornecendo um relatório detalhado da execução e cobertura dos testes.

.



