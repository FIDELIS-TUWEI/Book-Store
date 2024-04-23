import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/books`)
                setBooks(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, [])
  return (
    <div>
        <h1>MySQL Book Shop</h1>
        <div className="books">
            {books.map((book) => (
                <div className="bookCard" key={book.id}>
                    {book.cover && <img src={book.cover} alt="books" />}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Books;