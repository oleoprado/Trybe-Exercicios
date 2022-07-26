const books = require('./books.js');
// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  // const autor = books.find((book) => book.author.name.includes(nomeAutor));
  // return autor.name;
  return books.find((book) => book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name;
}  
console.log(authorWith3DotsOnName());
