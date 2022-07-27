const books = require('./books.js');
// 🚀 4- Encontre o livro com o maior nome.
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  const livroMaiorNome = books.reduce((acc, book) => (acc.name.length < book.name.length) ? book : acc);
  return livroMaiorNome;
}
console.log(longestNamedBook());