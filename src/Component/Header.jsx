import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css'; 
import l from './logo.png';
import h from './Headerimage.PNG';
import Navigation from './Navigation';

function Header() { 
  return (
    <div className="header-container">
      <div className="top-header">
        <p>Email: bata@gmail.com</p>
      </div>
      <div className="middle-header">
        <img src={l} alt="Logo" className="header-logo" />
        <div className="icon-container">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </Link>
        </div>
      </div>
      <div className="bottom-header">
        <Navigation />
      </div>
      <div className="header-img">
        <img src={h} alt="header-img" />
      </div>
    </div>
  );
}

export default Header;