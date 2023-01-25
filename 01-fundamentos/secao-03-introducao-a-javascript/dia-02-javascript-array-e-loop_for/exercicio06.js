
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;


let numbers = [2,2,6,3];

somaImpar = 0;

for (i=0; i < numbers.length; i++){
    if (numbers[i]%2 !=0){
    somaImpar = somaImpar + 1;
    }
}
if (somaImpar == 0){
    console.log("Nenhum valor impar encontrado");
} else {
    console.log (somaImpar);
}
