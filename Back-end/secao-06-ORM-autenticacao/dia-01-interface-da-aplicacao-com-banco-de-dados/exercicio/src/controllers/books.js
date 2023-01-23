const booksService = require('../services/books');

const getAll = async (req, res, next) => {
  try {
    const { author } = req.query;
    let books;
    if (author) {
      books = await booksService.getByAuthor(author);
    } else {
      books = await booksService.getAll();
    }
    // author
    //   ? books = await booksService.getByAuthor(author)
    //   : books = await booksService.getAll()

    res.status(200).json(books)
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await booksService.getById(id);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
}

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await booksService.create({ title, author, pageQuantity, publisher });
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;
    await booksService.update(id, {title, author, pageQuantity, publisher})
    res.status(200).json({ message: 'Livro atualizado com sucesso'});
  } catch (err) {
    next(err)
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await booksService.remove(id);
    res.status(200).json({ message: 'Livro excluído com sucesso'})
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}