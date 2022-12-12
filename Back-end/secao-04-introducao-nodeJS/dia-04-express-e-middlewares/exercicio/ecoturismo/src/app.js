const express = require('express');

const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDescription, (req, res) => {
  const { name, price, description: { rating, difficulty, createdAt } } = req.body;

  const newActivitie = {
    name,
    price,
    description: {
      rating,
      difficulty,
      createdAt
    }
  };

  return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});


module.exports = app;