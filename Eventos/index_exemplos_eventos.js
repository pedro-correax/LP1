import { EventEmitter } from 'events';
const emissorEvento = new EventEmitter();

function funcao1() {
    console.log('Ocorreu um evento!');
}

function funcao2() {
    console.log('Ocorreu outro evento!');
}

//Registrando funcao1 para o eventoUm
//Listener: ouvinte OU o cara que fica escutando/esperando algo ser acionado
emissorEvento.on('eventoUm', funcao1);
emissorEvento.on('eventoUm', funcao2);

//Emitindo/Chamando o evento "eventoUm"
emissorEvento.emit('eventoUm');

//Removendo/Desvinculando um listener do eventoUm
emissorEvento.off('eventoUm', funcao1);
//emissorEvento.emit('eventoUm');

//Evento único... Só será disparado uma vez...
emissorEvento.once('eventoUnico', () => { 
    console.log('Evento único!');
});
//Tentando disparar 3x o 'eventoUnico'...
/*emissorEvento.emit('eventoUnico');
emissorEvento.emit('eventoUnico');
emissorEvento.emit('eventoUnico');
*/
//Listando qtd de listeners para um evento
var qtd = emissorEvento.listenerCount('eventoUm');
//console.log(qtd);

//Acionando funções com parâmetros...
//v1
function statusComunicacao(dados, msg) {
    console.log(`Recebi os registros ${dados} e ${msg}`);
}
emissorEvento.on('status', statusComunicacao);

//v2
emissorEvento.on('status', () => {
    console.log('Evento acionado');
});

emissorEvento.emit('status', 'Dados..', 'Mensagem..');
