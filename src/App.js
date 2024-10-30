import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import ProductList from './components/ProductList';
import CartComponent from './components/CartComponent'; 
import productsCasual from './components/ProductDatac';
import productsSandals from './components/ProductDatas';
import productsSchool from './components/ProductDataschl';
import productsPeshwari from './components/ProductDatap';
import products from './components/ProductData';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.image === product.image);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.image === product.image
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (image) => {
    setCartItems(
      cartItems.map(item =>
        item.image === image
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (image) => {
    setCartItems(
      cartItems.map(item =>
        item.image === image && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="App">
    
      <header className="top-header">
        <h1>Bata</h1>
        <div className="top-options">
          <span>Login</span>
          <Link to="/cart">
            <FaShoppingCart size={20} color='yellow'/> 
          </Link>
          <input type="text" placeholder="Search..." className="search-field" /> 
        </div>
      </header>

    
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <Routes>
        
        <Route
          path="/kids"
          element={
            <div className="category-grid">
              <div className="category-box" onClick={() => navigate('/casual')}>
                <h3>Casual</h3>
              </div>
              <div className="category-box" onClick={() => navigate('/sandals')}>
                <h3>Sandals</h3>
              </div>
              <div className="category-box" onClick={() => navigate('/peshwari')}>
                <h3>Peshwari</h3>
              </div>
              <div className="category-box" onClick={() => navigate('/sneakers')}>
                <h3>Sneakers</h3>
              </div>
              <div className="category-box" onClick={() => navigate('/school')}>
                <h3>School</h3>
              </div>
            </div>
          }
        />
       
        <Route path="/casual" element={<ProductList products={productsCasual} addToCart={addToCart} />} />
        <Route path="/sandals" element={<ProductList products={productsSandals} addToCart={addToCart} />} />
        <Route path="/peshwari" element={<ProductList products={productsPeshwari} addToCart={addToCart} />} />
        <Route path="/sneakers" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/school" element={<ProductList products={productsSchool} addToCart={addToCart} />} />
        
       
        <Route
          path="/cart"
          element={
            <CartComponent
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
