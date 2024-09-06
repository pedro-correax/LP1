
const express = require('express');
const api = express();
require('dotenv').config();
const URL_BD = process.env.URL_BD || '';
const portaApi = 3000;
const mongoose = require('mongoose');

mongoose.connect(URL_BD);

mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
});

mongoose.connection.on('disconnected', () => {
    console.log('API foi desconectada do BD!');
});

mongoose.connection.on('error', (erro) => {
    console.log('Erro ao conectar no BD! ', erro);
});

//function() {} é similar a () => {}

api.get('/status', function (req, res) {
    res.send('<h3>API Online!</h3>');
});

api.listen(portaApi, function() {
    console.log('API Online!');
});

const estudantesController = require('./controller/estudantes.js');
const usuarioController = require('./controller/usuario.js');
const autenticacao = require('./middlewares/autenticacao.js');

api.post('/login', autenticacao.logar);
api.post('/usuario', usuarioController.registrarUsuario);
api.get('/estudantes', autenticacao.autenticar, estudantesController.listarEstudantes);
api.post('/estudante', autenticacao.autenticar, estudantesController.adicionarEstudante);
api.put('/estudante', autenticacao.autenticar, estudantesController.editarEstudante);
api.delete('/estudante', autenticacao.autenticar, estudantesController.removerEstudante);
