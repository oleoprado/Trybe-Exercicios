require('dotenv').config;

const booksController = require('./src/controllers/books');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);
app.post('/books', booksController.create);
app.put('/books/:id', booksController.update);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({message: err.message});
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));