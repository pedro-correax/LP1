import { ehPar, ehPar2 } from "./matematica.js";

//v1
console.log(ehPar(2));

//v2
ehPar2(9)
.then((resultado) => {
    console.log(resultado);
})
.catch((erro) => {
    console.log(erro)
})