# Projeto de API REST com Node.js e Express

## Sobre o Projeto

Este projeto é um exemplo simples de uma API REST construída com Node.js e Express. A API gerencia um catálogo de livros, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar).

## Tecnologias Utilizadas

- Node.js
- Express
- JSON

## Funcionalidades

- Listar todos os livros
- Obter informações de um livro específico
- Adicionar um novo livro
- Atualizar as informações de um livro
- Excluir um livro

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina
- Navegador ou Postman para testar a API

### Passos

1. Clone o repositório para sua máquina local.

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Entre na pasta do projeto e instale as dependências.

    ```bash
    cd pasta-do-projeto
    npm install
    ```

3. Inicie o servidor.

    ```bash
    npm start
    ```

4. O servidor estará rodando em `http://localhost:3000`. Use o navegador ou o Postman para acessar as rotas da API.

## Rotas da API

- `GET /` - Retorna uma mensagem de boas-vindas.
- `GET /livros` - Lista todos os livros.
- `GET /livros/:id` - Retorna um livro específico com base no ID.
- `POST /livros` - Adiciona um novo livro.
- `PUT /livros/:id` - Atualiza as informações de um livro.
- `DELETE /livros/:id` - Exclui um livro.

## Aprendizados

- Como criar um servidor com Node.js e Express.
- Como importar dados de um arquivo JSON.
- Como realizar operações CRUD em um array de objetos.
- Como tratar diferentes tipos de requisições HTTP.
- Como validar e manipular parâmetros de URL e corpo da requisição.
