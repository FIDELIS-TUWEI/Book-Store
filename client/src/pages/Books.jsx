import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/books/${id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    
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
                    <button className="update">
                        <Link to={`/update/${book.id}`} className="link-update">Update</Link>
                    </button>
                    <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                </div>
            ))}
        </div>
        <button className="addBook">
            <Link to="/add" className="link-add">
                Add Book
            </Link>
        </button>
    </div>
  )
}

export default Books;