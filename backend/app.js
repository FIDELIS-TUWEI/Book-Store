const config = require('./utils/config');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const middleware = require('./utils/middleware');
const booksRouter = require('./controllers/booksController');


const db = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE
});

app.use(express.json());
app.use(middleware.requestLogger);
app.disable("x-powered-by");

app.use("/api/books", booksRouter);
app.use(middleware.unknownEndpoint);

module.exports = {
    app,
    db
};