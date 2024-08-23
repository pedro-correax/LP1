require('dotenv').config();
const chavePrivada = process.env.CHAVE_JWT || '';
const jwt = require('jsonwebtoken');

exports.autenticar = (req, res, next) => {
    const token = req.headers['authorization'];

    jwt.verify(token, chavePrivada, (erro, informacoesUsuario) => {
        if(erro)
            return res.status(401).send({ msg: 'Token inválido ou expirado!' });
        next();
    });
}

exports.logar = (req, res, next) => {
    /*const usuario = req.headers.usuario;
    const senha = req.headers.senha;*/

    const { usuario, senha } = req.headers;
    //simulando verificação de usuário no BD
    if(usuario == 'aderbal' && senha == '123456') {
        //simulando os dados que vieram do BD
        const dadosUsuario = {
            id: 1,
            nome: 'Aderbal',
            email: 'aderbal@email.com'
        };
        //Criando o token para o usuário aderbal
        jwt.sign(dadosUsuario, chavePrivada, { expiresIn: '20000' }, (erro, token) => {
            if(erro)
                return res.status(500).send({ msg: 'Erro ao gerar JWT!'});
            res.status(200).send({ token: token });
        });
    } else {
        res.status(401).send({ msg: 'Usuário ou Senha errados!' });
    }
}