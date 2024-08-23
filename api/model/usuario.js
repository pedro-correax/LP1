const moongose = require('moongose');
const Schema = moongose.Schema;

const UsuarioSchema =new Schema ({
    usuario: {type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true },
    senha: {type: String, required: true }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);