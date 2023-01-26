const express = require('express');
const authController = require('./controllers/auth.controller');
const meController = require('./controllers/me.controller');

const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
app.use(express.json());

app.post('/login', authController.auth);
app.get('/users/me', authMiddleware, meController.getMe);

module.exports = app;