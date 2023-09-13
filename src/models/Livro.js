import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    paginas: {type: Number},
    autor: {type: String, required: true},
    preco: {type: Number, required: true},
},{versionKey: false});

const livro = mongoose.model('livros', livroSchema);

export default livro;
