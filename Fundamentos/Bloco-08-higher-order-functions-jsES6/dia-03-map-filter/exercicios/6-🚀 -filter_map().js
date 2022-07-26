const books = require('./books.js');
// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books.filter((book) => (2022 - book.releaseYear) > 60).map((book) => book.name);
}
console.log(oldBooks());