import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Catagory.css';

function Catagory({ heading, books, addToCart }) {
  const navigate = useNavigate();


  const handleCart = (book) => {
    addToCart(book); 
  };

  return (
    <div className="section-container">
      <h2>{heading}</h2>
      <div className="image-scroll">
        {books.map((book, index) => (
          <div className="image-item" key={index}>
            <img src={book.image} alt={book.name} />
            <h3>{book.name}</h3>
            <button className="add-to-cart" onClick={() => handleCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagory;
