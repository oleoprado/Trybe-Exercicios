const books = require('./books.js');
// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());