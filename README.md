# Projeto de API REST com Node.js, Express e MongoDB

## Sobre o Projeto

Este projeto é um exemplo de uma API REST completa construída com Node.js, Express e MongoDB.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON

## 📌 Funcionalidades

### 📚 Livros

1. **Listar todos os livros**
2. **Listar livros por editora**
3. **Obter informações de um livro específico pelo ID**
4. **Adicionar um novo livro**
5. **Atualizar as informações de um livro**
6. **Excluir um livro**

### 👨‍🏫 Autores

1. **Listar todos os autores**
2. **Obter informações de um autor específico pelo ID**
3. **Adicionar um novo autor**
4. **Atualizar as informações de um autor**
5. **Excluir um autor**

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina
- MongoDB instalado ou conta em um serviço de banco de dados em nuvem
- Navegador ou Postman para testar a API

### 📥 Passos

1. **Clone o repositório para sua máquina local**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. **Entre na pasta do projeto e instale as dependências**
    ```bash
    cd pasta-do-projeto
    npm install
    ```

3. **Inicie o servidor**
    ```bash
    npm start
    ```

4. **O servidor estará rodando em `http://localhost:3000`**

## 🌐 Rotas da API

### 📚 Livros

- `GET /livros` - Lista todos os livros.
- `GET /livros/busca` - Lista livros por editora.
- `GET /livros/:id` - Retorna um livro específico com base no ID.
- `POST /livros` - Adiciona um novo livro.
- `PUT /livros/:id` - Atualiza as informações de um livro.
- `DELETE /livros/:id` - Exclui um livro.

### 👨‍🏫 Autores

- `GET /autores` - Lista todos os autores.
- `GET /autor/:id` - Retorna um autor específico com base no ID.
- `POST /autor` - Adiciona um novo autor.
- `PUT /autor/:id` - Atualiza as informações de um autor.
- `DELETE /autor/:id` - Exclui um autor.

## 📚 Aprendizados

- Como criar um servidor com Node.js e Express
- Como conectar a um banco de dados MongoDB com Mongoose
- Como realizar operações CRUD em coleções do MongoDB
- Como modelar dados com Mongoose
- Como tratar diferentes tipos de requisições HTTP
- Como validar e manipular parâmetros de URL e corpo da requisição
