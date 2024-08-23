import * as fs from 'node:fs';

const dados = 'Texto Texto Texto Texto Texto...';

//v1 - callback
fs.writeFile('./arquivo1.txt', dados, () => {
  console.log('Arquivo gravado com sucesso!');
});

//v2 - callback hell
fs.writeFile('./arquivo1.txt', dados, () => {
    console.log('Arquivo1 gravado com sucesso!');
    fs.writeFile('./arquivo2.txt', dados, () => {
        console.log('Arquivo2 gravado com sucesso!');
    });
});

//v3 - Promises
import * as fs from 'node:fs/promises';
fs.writeFile('./arquivo1.txt', dados)
  .then(() => {
    console.log('Arquivo1 gravado com sucesso!');
    return fs.writeFile('./arquivo2.txt', dados)
  })
  .then(() => {
    console.log('Arquivo2 gravado com sucesso!');
  })
  .catch((erro) => {
    console.log('Erro ao gravar arquivo');
    console.log(erro);
  })