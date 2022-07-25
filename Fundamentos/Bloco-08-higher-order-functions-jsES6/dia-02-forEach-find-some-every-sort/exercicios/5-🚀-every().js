const books = require('./books.js');

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const inicioSeculoXX = 1901;
  const fimSeculoXX = 2000;
  return books.every((autores) => (autores.author.birthYear > inicioSeculoXX && autores.author.birthYear < fimSeculoXX));
}
console.log(everyoneWasBornOnSecXX());