import React from 'react';
import './CartComponent.css'; 

const CartComponent = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{`Product ${index + 1}`}</h3>
            <img src={item.image} alt={`Cart Item ${index + 1}`} />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.image)}>+</button>
            <button onClick={() => decreaseQuantity(item.image)}>-</button>
          </div>
        ))
      )}
      <h3>Total Bill: ${calculateTotal()}</h3>
    </div>
  );
};

export default CartComponent;
