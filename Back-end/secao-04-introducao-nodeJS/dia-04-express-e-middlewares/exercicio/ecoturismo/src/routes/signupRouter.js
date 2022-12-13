const express = require('express');
const generateToken = require('../utils/generate_token/generateToken');

const sigunpRouter = express.Router();

sigunpRouter.post('/signup', (req, res) => {

});

module.exports = sigunpRouter;