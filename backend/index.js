require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();

const PORT = process.env.PORT;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Body', req.body);
    console.log('---');

    next();
};

app.use(requestLogger);

app.get("/", (req, res) => {
    res.json("Backend Server running")
});

app.get("/books", (req, res) => {
    const querybooks = "SELECT * FROM books";

    db.query(querybooks, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    });
})

app.listen(PORT, () => {
    console.log('Connected to backend!');
});