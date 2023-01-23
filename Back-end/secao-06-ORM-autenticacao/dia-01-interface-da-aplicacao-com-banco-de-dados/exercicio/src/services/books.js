const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']]});
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if(!book) throw { status: 404, message: 'book not found'};
  return book;
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author }, order: [['title', 'ASC']]})
  if(!author) throw { status: 404, message: 'author not found'};
  return books;
}

const create = async ({ title, author, pageQuantity, publisher }) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
  return newBook;
}

const update = async (id, title, author, pageQuantity) => {
  const book = await Book.findByPk(id);
  if(!book) throw { status: 404, message: 'book not found'};

  const [updated] = Book.update({ title, author, pageQuantity, publisher }, { where: {id} });
  return updated;
}

const remove = async (id) => {
  const book = await Book.findByPk(id);
  if(!book) throw { status: 404, message: 'book not found'};

  return Book.destroy({ where: { id }});
}

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
}