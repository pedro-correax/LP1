import { ehPar4 } from "./matematica.js";

//v1
//console.log(ehPar('asdasd'));

//v3 - Promises
ehPar3(10)
.then((resultado) => console.log("Promessa Resolvida: ", resultado))
.catch((erro) => { console.log(erro); })

ehPar3('blabla')
.then((resultado) => console.log("Promessa Resolvida!"))
.catch((erro) => { console.log(erro); })


//v4, usando async/await
/*
const run = async () => {
    var resultado = await ehPar4(10);
    console.log(resultado);

    resultado = await ehPar4('blabla');
    console.log(resultado);
}
run();
*/

//v4, usando async/await - IIFE (Immediately Invoked Function Expression)
;(async () => {
    var resultado = await ehPar4(10);
    console.log(resultado);

    resultado = await ehPar4('blabla');
    console.log(resultado);
})()