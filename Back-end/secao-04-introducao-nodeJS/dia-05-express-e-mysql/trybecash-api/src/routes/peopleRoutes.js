const express = require('express');

const peopleRoutes = express.Router();

peopleRoutes.post('/', (req, res) => {
  const person = req.body;
  res.status(201).json(person);
});

module.exports = peopleRoutes;