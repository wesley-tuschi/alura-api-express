import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    nacionalidade: {type: String, required: true},
}, {versionKey: false});

const autor = mongoose.model('autores', autorSchema);

export { autor, autorSchema };
