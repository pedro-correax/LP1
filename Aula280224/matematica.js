//funcao que virifica se o numero é par
export const ehPar = (numero) => {
/*  if(numero % 2 === 0){
        return true;
    } else {
        return false
    }
*/
    return (numero % 2 === 0)? true : false;
}

//v2 da ehPar, usando Promises
export const ehPar2 = (numero) => {
    return new Promise((resolver, rejeitar) => {
        if (isNaN(numero)) {
            rejeitar ({ erro :'Número inválido'})
        } else {
            resolver(numero % 2 === 0)? true : false
        }
    })
}






//export { ehPar }