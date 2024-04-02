const mysql = require('mysql2');
const config = require('./utils/config');

const db = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE
});

module.exports = db;