const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');

const app = express();

app.use(express.json());
app.use(activitiesRouter);

module.exports = app;
