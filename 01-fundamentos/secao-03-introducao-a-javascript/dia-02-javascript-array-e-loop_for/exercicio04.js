// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

media = 0;
soma = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i=0; i < numbers.length; i++){
    // console.log (numbers[i]);
    soma = soma + numbers[i];

    media = (soma/numbers.length);
}

if (media > 20){
    console.log(media + " Média maior que 20");
} else {
    console.log (media + " Média menor que 20");
}
