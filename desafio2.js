/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado 
pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido 
no código;
*/
const input = require('readline-sync');


function fibonacci(numero) {
    let termo1 = 0;
    let termo2 = 1;
    let termo3 = 0;
    while (termo3 < numero) {
        termo3 = termo1 + termo2;
        termo1 = termo2;
        termo2 = termo3;       
    }
    return termo3 === numero;
}

let usuarioNumero = Number(input.question("Informe um numero: "));


function mensagem () {
    if (fibonacci(usuarioNumero)) {
        console.log("O numero", usuarioNumero, "pertence a sequencia Fibonacci");
    }
    else {
        console.log("O numero", usuarioNumero, "NAO pertence a sequencia Fibonacci");
    }
}

mensagem();