const books = require('./books.js');
// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const fantasiaEficcao =  books.filter((book) => book.genre.includes('Ficção Científica') || book.genre.includes('Fantasia'));
  return fantasiaEficcao.map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());
