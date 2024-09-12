require('dotenv').config();
const { EventEmitter } = require('events');
const { Promise } = require('mongoose');
const cron = require('node-cron');
const fs = require('fs').promises;
const fetch = require('node-fetch');

const event = new EventEmitter();
const period = '*/2 * * * * *' //'*/1 * * * *';
const token = process.env.TOKEN;
console.log(token);
let i = 0;


const readJson = async () => {
    const data = await fs.readFile('./itens.json', 'utf8');
    return JSON.parse(data);
};

const postInApi = async (nome, cpf, turma, curso, numeroMatricula) => {
    const urlApi = `http://localhost:3000/estudante?nome=${nome}&cpf=${cpf}&turma=${turma}&curso=${curso}&numeroMatricula=${numeroMatricula}`;
    const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    return await response.json();
};


const tokenIsValid = async () => {
    const urlApi = `http://localhost:3000/estudantes`;
    const response = await fetch(urlApi, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    });
    return response.status === 200;
};

const returnTokenError = () => {
    return '[ERRO]: Insira um token correto no arquivo .env!';
};

const successPost = (estudante) => {
    return `[SUCESSO]: Estudante ${estudante} cadastrado com sucesso!`;
};

event.on('acessoNegado', (message) => {
    console.error(message); 
});


event.on('estudanteCadastrado', (message) => {
    console.log(message);
});


cron.schedule(period, async () => {
    console.log('Iniciando...');
    const tokenValid = await tokenIsValid();
    const estudantesList = await readJson();

    if (tokenValid == false) {
        console.log('Token inválido.');
        event.emit('acessoNegado', returnTokenError()); 

    } else {
        console.log('Token valido.');

        if (i < 10) {
            const estudante = estudantesList[i];
            const postResult = await postInApi(estudante.nome, estudante.cpf, estudante.turma, estudante.curso, estudante.numeroMatricula);
            console.log(postResult); 
            event.emit('estudanteCadastrado', successPost(estudante.nome));
            i++;
            
        } else {
            console.log('Todos os estudantees foram cadastrados.');
        };
    };
});

