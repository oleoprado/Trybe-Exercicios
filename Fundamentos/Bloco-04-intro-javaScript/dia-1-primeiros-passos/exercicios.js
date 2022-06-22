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

//7
const nota = 49;

if (nota < 0 || nota > 100) {
    console.log("Error: Nota inválida");
} else if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else if (nota >= 60) {
    console.log("Nota D");
} else if (nota >= 50) {
    console.log("Nota E");
} else {
    console.log("Nota F");
}

//8
const ehPar1 = 20;
const ehPar2 = 5;
const ehPar3 = 12;


if (ehPar1 % 2 === 0 || ehPar2 % 2 === 0 || ehPar3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//9
const ehImpar1 = 13;
const ehImpar2 = 10;
const ehImpar3 = 7;

let ehImpar = false;

if (ehImpar1 % 2 !== 0 || ehImpar2 % 2 !== 0 || ehImpar3 % 2 !== 0) {
    ehImpar = true;
} else {
    ehImpar = false;
}
console.log(ehImpar)

//10
const valorCusto = 4;
const valorProduto = 20;

if (valorCusto >= 0 && valorProduto >= 0) {
    const custoTotal = valorCusto * 0.2;
    const lucroTotal = (valorProduto - custoTotal) * 1000;
    console.log(lucroTotal);
} else {
    console.log("Error: valor de entrada menor que 0");
}

//11
const salarioBruto = 7000;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    aliquotaInss = (salarioBruto * 0.08);
    console.log("Aliquota de 8% - desconto INSS de R$" + aliquotaInss.toFixed(2));
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = (salarioBruto * 0.09);
    console.log("Aliquota de 9% - desconto INSS de R$" + aliquotaInss.toFixed(2));
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = (salarioBruto * 0.11);
    console.log("Aliquota de 11% - desconto INSS de R$" + aliquotaInss.toFixed(2));
} else {
    aliquotaInss = 570.88
    console.log("Aliquota máxima de R$570.88 - desconto INSS de R$" + aliquotaInss.toFixed(2));
} 

const salarioBase = (salarioBruto - aliquotaInss);

if (salarioBase > 0 && salarioBase <= 1903.98) {
    aliquotaIr = 0;
    console.log("Isento de IR");
} else if (salarioBase <= 2826.65) {
    aliquotaIr = ((salarioBase * 0.075) - 142.80);
    console.log("Aliquota 7,5% - desconto IR de R$" + aliquotaIr.toFixed(2));
} else if (salarioBase <= 3751.05) {
    aliquotaIr = ((salarioBase * 0.15) - 354.80);
    console.log("Aliquota 15% - desconto IR de R$" + aliquotaIr.toFixed(2));
} else if (salarioBase <= 4664.68) {
    aliquotaIr = ((salarioBase * 0.225) - 636.13);
    console.log("Aliquota 22.5% - desconto IR de R$" + aliquotaIr.toFixed(2));
} else {
    aliquotaIr = ((salarioBase * 0.275) - 869.36);
    console.log("Aliquota 27.5% - desconto IR de R$" + aliquotaIr.toFixed(2));
}

const salarioLiquido = (salarioBase - aliquotaIr.toFixed(2));
console.log("Salario liquido: R$ " + salarioLiquido);
