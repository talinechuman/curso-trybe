// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function soma (a, b){
//     return a + b;
// }

// function subtracao (a, b){
//     return a - b;
// }

// function mult (a, b){
//     return a * b;
// }

// console.log (soma(5,3));
// console.log (soma(25,35))

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
// function maior (a,b,c){
//     if (a > b && a > c) {
//         return (console.log ('O maior numero é: ' + a))
//     } else if (b > a && b > c){
//         return (console.log ('O maior numero é: ' + b))
//     } else
//         return (console.log ('O maior numero é: ' + c))
//     }
//     maior (20,5,6);


// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positivo (a) {
    if (a > 0){
        return 'O numero é positivo';
    } else if (a < 0) {
        return 'O numero é negativo';
    } else {
        return 'O numero é zero'; 
    }
}

console.log  (positivo (-8));
