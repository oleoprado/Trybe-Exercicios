const express = require('express');
const generateToken = require('../utils/generate_token/generateToken');
const validateSignup = require('../middlewares/validateSignup');


const sigunpRouter = express.Router();

sigunpRouter.post('/signup', validateSignup, (req, res) => {
  const { email, password, firstName, phone } = req.body;

  const user = {
    email,
    password,
    firstName,
    phone,
  }

  return res.status(200).json({ token: generateToken()});
});

module.exports = sigunpRouter;