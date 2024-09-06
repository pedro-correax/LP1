const Estudantes = require('../model/estudantes');

exports.listarEstudantes = async (req, res) => {
    try{
        const Estudante = await Estudantes.find({});
        res.status(200).send(Estudantes);
    } catch(erro) {
        console.log(erro);
        res.status(500).send({ msg: '[ERRO]: Erro o listar!', detalhes: erro  });
    }
}

exports.adicionarEstudante = async (req, res) => {
    //req.body OU req.params OU req.query
    const novoEstudante = req.headers;
    if(!novoEstudante.nome || !novoEstudante.cpf) {
        res.send({ msg: '[ERRO]: Informar nome e cpf!' });
    } else {
        try{
            await Estudantes.create(novoEstudante);
            res.send({ msg: '[SUCESSO]: Estudante adicionado!' });
        } catch(erro) {
            console.log(erro);
            res.send({ msg: '[ERRO]: Erro ao cadastrar Estudante', detalhes: erro  });
        }
    }
}

exports.editarEstudante = async (req, res) => {
    const Estudante = req.headers;
    if(!Estudante.nome || !Estudante.cpf) {
       return res.send({ msg: '[ERRO]: Informar nome e cpf!' });
    }
    try {
        const EstudanteEditado = await Estudantes.findOneAndUpdate({ nome: Estudante.nome }, { cpf: Estudante.cpf });
        if(EstudanteEditado == null)
            res.send({ msg: '[AVISO]: Estudante não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: Estudante editado!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao editar', detalhes: erro });
    }
}

exports.removerEstudante = async (req, res) => {
    const Estudante = req.headers;
    if(!Estudante.nome)
       return res.send({ msg: '[ERRO]: Informar nome!' });
    try {
        const EstudanteRemovido = await Estudantes.findOneAndDelete({ nome: Estudante.nome });
        if(EstudanteRemovido == null)
            res.send({ msg: '[AVISO]: Estudante não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: Estudante removido!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao remover', detalhes: erro });
    }
}

