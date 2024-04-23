import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  });


  const handleChange = (e) => {
    setBook(((prev => ({ ...prev, [e.target.name]: e.target.value }))));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/v1/books/${id}`, book);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Update Book Form</h1>
      <form className="form">
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
        <input type="number" placeholder="price" onChange={handleChange} name="price" />
        <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

        <button onClick={handleClick} className="formButton">Update</button>
      </form>
    </div>
  )
}

export default Update;