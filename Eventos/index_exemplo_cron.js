//npm i node-cron
import cron from 'node-cron';

//Criando período para tarefa executar..
//Todo segundo 05: 11h00m05; 11h01m05; 11h02m05
//const periodo1 = '5 * * * * *';
//A cada 5 segundos
const periodo = '*/5 * * * * *';

//Agendando a tarefa de mostrar no console
//no 'periodo' indicado
cron.schedule(periodo, () => {
    let horarioAtual = new Date();
    console.log('Tarefa executada às ', horarioAtual);
})