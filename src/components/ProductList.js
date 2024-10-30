import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; 

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div className="product-box" key={index}>
           <Link to={`/product/${index}`}>
            <img src={product.image} alt={`Product ${index + 1}`} />
          </Link>
          
          <p className="price">{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
