import { EventEmitter } from 'events';
import cron from 'node-cron';
import { getBitcoinPrice } from '../servicos/servico_api.js';

export const emissorEventos = new EventEmitter();

//A cada 15 segundos...
const periodo = '*/15 * * * * *';

/*
    Tarefa que pega o preço atualizado do bitcoin em  dolar,
    conforme período indicado. 
    Depois do valor obtido, dispara o evento 'valor_bitcoin'
*/
cron.schedule(periodo, async () => {
    const preco = await getBitcoinPrice();
    emissorEventos.emit('valor_bitcoin_obtido', preco);
});