import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products[productId];

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div>
      <h2>{`Product ${parseInt(productId) + 1}`}</h2>
      <img src={product.image} alt={`Product ${parseInt(productId) + 1}`} />
      <p>Price: {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

