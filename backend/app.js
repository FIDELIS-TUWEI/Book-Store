const config = require('./utils/config');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const middleware = require('./utils/middleware');


const db = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE
});

app.use(middleware.requestLogger);
app.disable("x-powered-by");

app.get("/", (req, res) => {
    res.json("Backend Server running")
});

app.get("/books", (req, res) => {
    const querybooks = "SELECT * FROM books";

    db.query(querybooks, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    });
});

module.exports = app;