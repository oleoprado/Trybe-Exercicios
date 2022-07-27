const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

/////////////////////////////////////////
//  O spread é muito útil também quando precisamos combinar arrays em uma única estrutura
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);
/////////////////////////////////////////

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

/////////////////////////////////////////
// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

/////////////////////////////////////////
// você também pode fazer o mesmo com objetos
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
// console.log(customer); 

//////////////////////////////////////////
// PARA-FIXAR
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'laranja', 'goiaba', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'mel', 'granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const saladaDeFrutaComAdicional = [...specialFruit, ...additionalItens];
  return saladaDeFrutaComAdicional;
};

console.log(fruitSalad(specialFruit, additionalItens));