import moongoose from 'mongoose';

const autorSchema = new moongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true},
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    nacionalidade: {type: String, required: true},
}, {versionKey: false});

const autor = mongoose.model('autores', autorSchema);

export { autor, autorSchema };
