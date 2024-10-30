// Checkout.js
import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cartItems = [] }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const shippingCost = shippingMethod === "standard" ? 5.00 : 10.00;

  // Calculate total based on cart items and selected shipping method
  const productTotal = cartItems.reduce((total, item) => {
    // Check if item.price is defined, otherwise default to 0
    const priceValue = item.price ? parseFloat(item.price.replace('$', '')) : 0;
    return total + priceValue * item.quantity;
  }, 0);

  const total = productTotal + shippingCost;

  const handlePlaceOrder = () => {
    // Perform basic validation
    if (!email || !firstName || !lastName || !address || !city || !postalCode) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Order placed! Total: $${total.toFixed(2)}`);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* User Information Form */}
      <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Shipping Method:</label>
          <select
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
          >
            <option value="standard">Standard Shipping - $5.00</option>
            <option value="express">Express Shipping - $10.00</option>
          </select>
        </div>
      </form>

      {/* Order Summary */}
      <div className="checkout-section">
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <p key={index}>
            {item.name}: ${item.price ? parseFloat(item.price.replace('$', '')).toFixed(2) : '0.00'} (x{item.quantity})
          </p>
        ))}
        <p>Shipping: ${shippingCost.toFixed(2)}</p>
        <p><strong>Total: ${total.toFixed(2)}</strong></p>
      </div>

      {/* Place Order Button */}
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
