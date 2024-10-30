import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; // Updated filename
import Header from '../Components/Headar'; // Updated spelling
import Footer from '../Components/Footer';

function Men() {
  return (
    <div >  
      <Header />
      <h2 className="kids-heading">Men Footwear Categories</h2>
      <div className="link-container">
        <Link to="/MFormal" className="category-link">Formal</Link>
        <Link to="/Mloungewear" className="category-link">Loungewear</Link>
        <Link to="/MSandels" className="category-link">Sandels</Link>
        <Link to="/MSenekers" className="category-link">Sneakers</Link>  
      </div>
      <Footer />
    </div>
  );
}

export default Men;
