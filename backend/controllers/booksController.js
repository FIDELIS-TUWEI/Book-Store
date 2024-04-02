const booksRouter = require('express').Router();
const db = require('../database');

booksRouter.get('/', (req, res) => {
    res.send("Backend Server running")
});

booksRouter.get('/api/books', (req, res) => {
    const getBooks = "SELECT * FROM books";

    db.query(getBooks, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    })

});

module.exports = booksRouter;