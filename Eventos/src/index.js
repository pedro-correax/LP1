import { emissorEventos } from "./emissores/emissor_bitcoin.js";


const formataGrana = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl'
})

//Criando listener/ouvinte para quando tiver o valor do bitcoin obtido com o getBitcoinPrice
emissorEventos.on('valor_bitcoin_obtido', (preco) => {
    //const horarioAtual = new Date();
    const horarioAtual = new Date().toISOString();
    const precoFormatado = formataGrana.format(preco);
    console.log(`Preço do Bitcoin em ${horarioAtual} => ${precoFormatado}`);
})
