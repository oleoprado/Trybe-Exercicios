const express = require('express');

const validateName = require('./../middlewares/validateName');
const validatePrice = require('./../middlewares/validatePrice');
const validateDescription = require('./../middlewares/validateDescription');
const validateFormatCreatedAt = require('./../middlewares/validateFormatCreatedAt');
const validateRating = require('./../middlewares/validateRating');
const validateDifficulty = require('./../middlewares/validateDifficulty');

const activitiesRouter = express.Router();

activitiesRouter.post('/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateFormatCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
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

module.exports = activitiesRouter;