const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const sigunpRouter = require('./routes/signupRouter');

const app = express();

app.use(express.json());
app.use(activitiesRouter);
app.use(sigunpRouter);

module.exports = app;
