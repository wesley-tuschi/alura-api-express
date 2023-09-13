import express from "express";
import livros from "./livros.json" assert { type: "json" };

const app = express();
app.use(express.json());

function BuscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = BuscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json(req.body);
});

app.put("/livros/:id", (req, res) => {
  const index = BuscaLivro(req.params.id);
  livros[index].nome = req.body.nome;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = BuscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso!");
});

export default app;
