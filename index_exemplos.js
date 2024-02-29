import * as fs from 'node:fs';

const dados = 'Texto Texto Texto Texto...';

//v1 - Callbeck
fs.writeFile('./arquivo.txt', dados, () => {
    console.log('Arquivo gravado com sucesso!');
});

//v2 - Callbeck hell
fs.writeFile('./arquivo1.txt', dados, () => {
    console.log('Arquivo gravado com sucesso!');
    fs.writeFile('./arquivo2.txt', dados, () => {
      console.log('Arquivo gravado com sucesso!');
  });
});

//v3 - Promises
import * as fs from 'node:fs/promises';
fs.writeFile('./arquivo1.txt', dados)
 .then(() => {
  console.log('Arquivo gravado com sucesso!');
  return fs.writeFile('./arquivo2.txt', dados)
})
.then(() => {
  console.log('Arquivo gravado com sucesso!');
  return fs.writeFile('./arquivo2.txt', dados)
})
.catch((erro) => {
  console.log('Erro ao gravar arquivo!');
  console.log(Erro);
})