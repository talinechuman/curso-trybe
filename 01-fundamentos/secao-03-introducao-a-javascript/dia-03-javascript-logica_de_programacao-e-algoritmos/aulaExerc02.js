//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
cont = 0;

for (index = 2; index <= 150; index ++){
    if (index%3 === 0){
        cont = cont + 1;
    }

    if (cont ===50){
        console.log('Mensagem secreta');
    }
}
// console.log(cont);