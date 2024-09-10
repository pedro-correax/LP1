const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstudantesSchema = new Schema({
    nome: { type: String, required: true },
    cpf: {type: String, required: true, unique: true },
    turma: { type: String, required: true, unique: true },
    curso: { type: String, required: true},
    numeroMatricula: {type: String, required: true, unique: true }
});

module.exports = mongoose.model('Estudantes', EstudantesSchema);