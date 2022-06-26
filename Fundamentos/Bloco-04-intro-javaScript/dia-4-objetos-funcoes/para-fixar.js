//OBJETOS
//1-  Crie um objeto player contendo as variáveis listadas abaixo.
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

//2- Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log("A jodadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");

//3- - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player);

//4-- Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

//5-Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata.");

//FOR IN FOR OF 
//1- for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let name in names) {
  console.log("Olá " + names[name]);
}

//2- Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};
for (let key in car) {
  console.log(key, car[key]);
}

//FUNÇÕES

// Refatorar os exercícios de 1 a 5 do dia 4.1 e faça que eles sejam funções de um mesmo arquivo.

//1-(REFATORADO)Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados
function soma(a, b) {
  let resultado = "Resultado da soma: " + (a + b);
  return resultado;
}
function subtracao(a, b) {
  let resultado = "Resultado da subtração: " + (a - b);
  return resultado;
}
function multiplicacao(a, b) {
  let resultado = "Resultado da multiplicacao: " + (a * b);
  return resultado;
}
function divisao(a, b) {
  let resultado = "Resultado da divisao: " + (a / b);
  return resultado;
}
function modulo(a, b) {
  let resultado = "Resultado do modulo de divisão: " + (a % b);
  return resultado;
}

//2-(REFATORADO)Faça um programa que retorne o maior de dois números
function mostraMaiorNumero(num1, num2) {
  if (num1 > num2) {
    let resultado = num1 + " é maior que " + num2;
    return resultado;
  } else {
    resultado = num2 + " é maior que " + num1;
    return resultado;
  }
}

//3-(REFATORADO)Faça um programa que retorne o maior de três números
function qualMaiorNumero(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

//4-(REFATORADO) dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.
function verificaNumPositivoNegativo(num) {
  if (num > 0) {
    return console.log("É um valor positive");
  } else if (num < 0) {
    return console.log("é um valor negative");
  } else {
    return console.log("zero")
  }
}

//5-defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
function verificaAnguloTriangulo(ladoA, ladoB, ladoC) {
  let somaDosLados = ladoA + ladoB + ladoC;
  let angulosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;
  
  if (angulosPositivos) {
    if (somaDosLados === 180) {
     return console.log(true);
    } else {
     return console.log(false);
    }
  } else {
    return console.log("Valor do angulo inválido")
  }
}
