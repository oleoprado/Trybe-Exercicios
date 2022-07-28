// Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

//////////////////////////////////////////
// PARA FIXAR 
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizaSaudacao] = saudacoes;
// console.log(realizaSaudacao(saudacao));

/////////////////////////////////////////////////////
// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida); // arroz gato água

/////////////////////////////////////////////////////
// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [,,, ...numbers] = numerosPares;
console.log(numbers); // [6, 8, 10, 12];

