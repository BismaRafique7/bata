// Footer.js
import React from 'react';
import './Footer.css';  // Add a CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Email: bata@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Bata Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
