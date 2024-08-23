const Usuario = require('../model/usuario.js');

exports.registrarUsuario = async (req, res) => {
    const novoUsuario = req.headers.usuario;
    const senhaNovoUsuario = req.headers.senha;

    try {
        const usuarioJahexiste = await Usuario.findOne({ usurio: novoUsuario});

        if(usuarioJahexiste) {
            return res.status(400).send({ msg: '[ERRO]: Usuário já cadastrado!' });
        } else{
            const senhaEncripitada = bcrypt.hash(senhaNovoUsuario, 10);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: '[ERRO]: Erro ao registrar!', detalhes: err });
    }


}