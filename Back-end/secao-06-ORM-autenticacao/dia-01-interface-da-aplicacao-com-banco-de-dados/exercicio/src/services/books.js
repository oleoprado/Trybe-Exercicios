const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if(!book) throw { status: 404, message: 'book not found'};
  return book;
}

const create = async ({ title, author, pageQuantity}) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
}

const update = async (id, title, author, pageQuantity) => {
  const book = await Book.findByPk(id);
  if(!book) throw { status: 404, message: 'book not found'};

  return Book.update({ title, author, pageQuantity }, { where: {id} });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
}