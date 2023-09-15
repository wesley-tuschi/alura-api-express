import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();
connection.on("error", (error) =>
  console.error("Erro ao conectar ao Banco de Dados", error)
);
connection.once("open", () => console.log("Conectado ao Banco de Dados"));

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = BuscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso!");
});

export default app;
