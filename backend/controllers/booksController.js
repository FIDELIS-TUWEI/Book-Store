const booksRouter = require('express').Router();
const db = require('../app');

booksRouter.get("/api/books", (req, res) => {
    res.json("Backend Server running")
});

booksRouter.get("/api/books", (req, res) => {
    const getBooks = "SELECT * FROM books";

    db.query(getBooks, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    })

});

module.exports = booksRouter;