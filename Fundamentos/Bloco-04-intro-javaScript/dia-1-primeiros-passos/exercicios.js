//1
const a = 10;
const b = 25;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

//2
const num1 = 21;
const num2 = 50;

if (num1 > num2) {
    console.log("num1 é maior que num2");
} else {
    console.log("num2 é maior que num1");
}

//3
const numero1 = 105;
const numero2 = 50;
const numero3 = 172;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

//4
const verifica = 80;

if (verifica > 0) {
    console.log("É um valor positive");
} else if (verifica < 0) {
    console.log("é um valor negative");
}

//5 
const ladoA = -90;
const ladoB = 70;
const ladoC = 20;

let somaDosLados = ladoA + ladoB + ladoC;
let angulosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (angulosPositivos) {
    if (somaDosLados === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Valor do angulo inválido")
}

//6
const pecaXadrez = "BiSpo";

switch (pecaXadrez.toLocaleLowerCase()) {
    case 'rei':
        console.log("Rei anda uma casa apenas para qualquer direção");
        break;
    case 'bispo':
        console.log("Bispo só anda na diagonal");
        break;
    case 'rainha':
        console.log("Rainha anda na horizontal,vertical e diagonal");
        break;
    default:
        console.log('Error: Peça inválida');
}