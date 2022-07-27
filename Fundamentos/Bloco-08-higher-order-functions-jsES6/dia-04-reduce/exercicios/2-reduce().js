const books = require('./books.js');
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  // const nomes = books.reduce((acumulador, nomeAtual) => acumulador.concat(`${nomeAtual.author.name}, `), '');
  // return nomes;
  const names = books
    .map((book) => book.author.name)
    .reduce((acc, curr, index, array) => (index != array.length -1) ? `${acc} ${curr},` : `${acc} ${curr}.` , '');
  return names;
}
console.log(reduceNames());