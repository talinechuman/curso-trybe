// Calcule e imprima a média aritmética dos valores contidos no array;
media = 0;
soma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i=0; i < numbers.length; i++){
    // console.log (numbers[i]);
    soma = soma + numbers[i];

    media = (soma/numbers.length);
}
console.log(media);

