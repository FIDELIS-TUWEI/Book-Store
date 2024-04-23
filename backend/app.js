const express = require('express');
const cors = require("cors");
const app = express();
const middleware = require('./utils/middleware');
const booksRouter = require('./controllers/booksController');

app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);
app.disable("x-powered-by");

app.use("/api/v1", booksRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;