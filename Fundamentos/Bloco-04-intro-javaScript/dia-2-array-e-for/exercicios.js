//1-percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* for (let i= 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}
 */

//2-some todos os valores contidos no array e imprima o resultado
/* let sumResult = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sumResult += numbers[i];
}
console.log(sumResult); */

//3-calcule e imprima a média aritmética dos valores contidos no array;
/* let sumResult = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sumResult += numbers[i];
}
let media = sumResult / numbers.length; 
console.log(media); */

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/* if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
} */

//5-Utilizando for, descubra qual o maior valor contido no array e imprima-o;
/* let maiorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero); */

//6-Descubra quantos valores impares existem no array e imprima.Caso não exista nenhum, msg 'nenhum valor impar encontrado' 
let ehImpar = [];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !==0) {
        ehImpar.push(numbers[i]);
    } else {
        console.log("nenhum valor encontrado");
    }
}
console.log(ehImpar);



//7-Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}

console.log(menorValor);

//8-Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}
// console.log(array);

//9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */
let divisaoPor2;
for (let i = 0; i < array.length; i += 1) {
    divisaoPor2 = (array[i] / 2);
    console.log(divisaoPor2);
}