import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await dbConnect();
connection.on("error", (error) =>
  console.error("Erro ao conectar ao Banco de Dados", error)
);
connection.once("open", () => console.log("Conectado ao Banco de Dados"));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
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
