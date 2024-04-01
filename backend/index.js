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

app.get("/", (req, res) => {
    res.json("Backend Server running")
})

app.listen(PORT, () => {
    console.log('Connected to backend!');
})