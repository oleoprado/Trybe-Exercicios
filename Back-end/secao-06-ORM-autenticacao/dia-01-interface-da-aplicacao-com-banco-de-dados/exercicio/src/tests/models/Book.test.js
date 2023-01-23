const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../models/Book');

describe('Testando o model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book= new Book();

  describe('verifica se possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('verifica se possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  })
})