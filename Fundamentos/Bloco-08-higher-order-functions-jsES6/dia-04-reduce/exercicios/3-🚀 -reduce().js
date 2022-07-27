const books = require('./books.js');
// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  const qtdLivros = books.length;
  const mediaIdades = books.map((book) => book.releaseYear - book.author.birthYear).reduce((acc, curr, array) => (acc + curr) , 0);
  return (mediaIdades / qtdLivros);
}
console.log(averageAge()); 