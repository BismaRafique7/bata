// CartComponent.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './CartComponent.css';

const CartComponent = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
  // Function to calculate the total bill
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Check if item.price is defined and has a valid format
      const priceValue = item.price ? parseFloat(item.price.slice(1)) : 0;
      return total + priceValue * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <h3>{`Product ${index + 1}`}</h3>
            <img src={item.image} alt={`Product ${index + 1}`} className="cart-item-image" />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.name)}>+</button>
            <button onClick={() => decreaseQuantity(item.name)}>-</button>
          </div>
        ))
      )}
      <h3>Total Bill: ${calculateTotal()}</h3>

      {/* Add Checkout button */}
      <Link to="/checkout">
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default CartComponent;
