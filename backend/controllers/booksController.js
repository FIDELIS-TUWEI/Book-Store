const booksRouter = require('express').Router();
const db = require('../database');

booksRouter.get('/', (req, res) => {
    res.send("Backend Server running")
});

// route to get all books
booksRouter.get('/books', (req, res) => {
    const getBooks = "SELECT * FROM books";

    db.query(getBooks, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    })

});

// route to create new book
booksRouter.post('/books', (req, res) => {
    const newBook = "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES(?)";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ];

    db.query(newBook, [values], (err, data) => {
        if (err) return res.json(err);

        return res.json("Book has been created successfully");
    })
})

module.exports = booksRouter;