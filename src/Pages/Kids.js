import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; // Updated filename
import Header from '../Components/Headar'; // Updated spelling
import Footer from '../Components/Footer';

function Kids() {
  return (
    <div className="kids-page">  
      <Header />
      <div className="kids-content">
        <h2 className="kids-heading">Kids Footwear Categories</h2>
        <div className="link-container">
          <div className="category-card">
            <Link to="/Peshwari" className="category-link">Peshawari</Link>
          </div>
          <div className="category-card">
            <Link to="/Sandals" className="category-link">Sandals</Link>
          </div>
          <div className="category-card">
            <Link to="/School" className="category-link">School</Link>
          </div>
          <div className="category-card">
            <Link to="/Sneakers" className="category-link">Sneakers</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
