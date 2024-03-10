//funcao que verifica se o numero é par
export const ehPar = (numero) => {
  /*    if(numero % 2 === 0) {
          return true;
      } else {
          return false;
      }
  */
  return numero % 2 === 0 ? true : false;
}

//v2 da ehPar, usando Promise
// export const ehPar2 = (numero) => {
//     return new Promise((resolver, rejeitar) => {
//         if(isNaN(numero)) {
//             rejeitar({ erro: 'Número inválido' });
//         } else {
//             resolver(numero % 2 === 0)? true : false;
//         }
//     })
// }


//v3 da ehPar, usando Promise + API
const URL_API = 'https://api.isevenapi.xyz/api/iseven';
export const ehPar3 = (numero) => {
  return new Promise((resolver, rejeitar) => {
    if (isNaN(numero)) {
      rejeitar({ erro: 'Número inválido' });
    } else {
      fetch(`${URL_API}/${numero}`)
        .then((resposta) => {
          resposta.json()
            .then((resultado) => {
              //const iseven = resultado.iseven;
              const { iseven } = resultado;
              resolver(iseven);
            })
        })
        .catch((erro) => {
          rejeitar(erro);
        })
    }
  })
}


//v4 da ehPar, usando Promise + API + aync/await
export const ehPar4 = async (numero) => { 
  if(isNaN(numero)) {
    return { erro: 'Número inválido'};
  }
  const resposta = await fetch(`${URL_API}/${numero}`);
  const resultado = await resposta.json();
  const { iseven } = resultado;
  return iseven;
}

//export { ehPar, ehPar2, ehPar3, ehPar4 }


//export { ehPar }
