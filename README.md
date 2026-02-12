# Projeto de Tradução no Banco de Dados

> **Objetivo:** Prova de conceito (POC) para validar uma abordagem de tradução genérica diretamente no banco de dados, permitindo que a API retorne dados já traduzidos, com suporte a múltiplos idiomas, fallback automático e fácil extensibilidade.

---

## 📌 Contexto

Este projeto explora uma estratégia onde as traduções não ficam acopladas ao frontend ou a arquivos estáticos, mas sim centralizadas no banco de dados, possibilitando:

- reutilização das traduções por múltiplos consumidores (API, frontend, mobile, etc.)
- adição de novos idiomas sem necessidade de alterações estruturais
- consultas flexíveis com filtros por entidade, campo e idioma

---

## 🧱 Stack utilizada

- **Node.js**
- **MySQL**
- **Prisma ORM**
- **Swagger (OpenAPI)**

---

## ✅ Pré-requisitos

- **MySQL** instalado localmente ou via **Docker**
- **Node.js** `v24.0.0` ou superior
- **npm** `v11.6.2` ou superior

## 🚀 Iniciando o projeto

### 1. Configurando o Banco de Dados

**Opção 1: MySQL local**

1. Abra o **MySQL Workbench**.
2. Execute o comando para criar o banco de dados:

```sql
CREATE DATABASE translate_db;
```

**Opção 2: MySQL via Docker**

1. Execute o comando abaixo no terminal para iniciar o container:

```bash
docker compose up -d
```

### 2. Configuração das Tabelas

1. Execute a migração das tabelas com o Prisma:

```bash
npx prisma migrate reset
```

2. Popule as tabelas com os dados iniciais executando o script:

```bash
seed.sql;
```

### 3. Iniciando o Servidor

Inicie o servidor Node.js:

```bash
npm run start
```

### 🌐 Endpoints

- **Servidor:** `http://localhost:9001`
- **Documentação da API (Swagger):** `http://localhost:9001/docs/`
