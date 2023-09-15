import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", autorController.listarAutor);
routes.get("/autor/:id", autorController.listarAutorPorId);
routes.post("/autor", autorController.cadastrarAutor);
routes.put("/autor/:id", autorController.atualizarAutor);
routes.delete("/autor/:id", autorController.excluirAutor);

export default routes;
