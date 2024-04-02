const express = require('express');
const app = express();
const middleware = require('./utils/middleware');
const booksRouter = require('./controllers/booksController');

app.use(express.json());
app.use(middleware.requestLogger);
app.disable("x-powered-by");

app.use(booksRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;