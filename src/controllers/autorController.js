import autor from "../models/Autor.js";

class AutorController {
  static async listarAutor(req, res) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requesição`,
      });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requesição do autor`,
      });
    }   
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Autor cadastrado com sucesso!",
        autor: novoAutor,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao cadastrar autor`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requesição do Autor`,
      });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao excluir Autor` });
    }
  }
}
export default AutorController;
