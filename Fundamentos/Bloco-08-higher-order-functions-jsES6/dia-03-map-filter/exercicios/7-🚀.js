const books = require('./books.js');
// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(nomeAutor) {
  // escreva seu código aqui
  const autor = books.find((book) => book.author.name.includes(nomeAutor));
  return autor.name;
}
console.log(authorWith3DotsOnName('J. R. R.'));
