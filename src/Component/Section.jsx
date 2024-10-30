import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shoe1 from '../assets/Image/4.PNG';
import shoe2 from '../assets/Image/5.PNG';
import shoe3 from '../assets/Image/10.PNG'; 
import shoe4 from '../assets/Image/8.PNG';
import shoe5 from '../assets/Image/11.PNG';
import shoe6 from '../assets/Image/S1.PNG';
import shoe7 from '../assets/Image/6.PNG'; 
import shoe8 from '../assets/Image/1.PNG'; 
import shoe9 from '../assets/Image/2.PNG'; 

import shoe10 from '../assets/Image/W1.PNG';
import shoe11 from '../assets/Image/W2.PNG';
import shoe12 from '../assets/Image/W4.PNG'; 
import shoe13 from '../assets/Image/3.PNG';
import shoe14 from '../assets/Image/12.PNG';
import shoe15 from '../assets/Image/13.PNG';
import shoe16 from '../assets/Image/W5.PNG'; 
import shoe17 from '../assets/Image/W6.PNG'; 
import shoe18 from '../assets/Image/W7.PNG'; 

import shoe19 from '../assets/Image/K1.PNG'; // Kids Shoe 1
import shoe20 from '../assets/Image/K2.PNG'; // Kids Shoe 2
import shoe21 from '../assets/Image/K3.PNG'; // Kids Shoe 3
import shoe22 from '../assets/Image/K4.PNG'; // Kids Shoe 4
import shoe23 from '../assets/Image/K5.PNG'; // Kids Shoe 5
import shoe24 from '../assets/Image/K6.PNG'; // Kids Shoe 6
import shoe25 from '../assets/Image/K7.PNG'; // Kids Shoe 7
import shoe26 from '../assets/Image/K8.PNG'; // Kids Shoe 8
import shoe27 from '../assets/Image/K9.PNG'; // Kids Shoe 9


import shoe28 from '../assets/Image/SS1.PNG'; // Kids Shoe 8
import shoe29 from '../assets/Image/SS2.PNG'; // Kids Shoe 9

import logo1 from '../assets/Image/B1.PNG'; // Brand Logo 1
import logo2 from '../assets/Image/B2.PNG'; // Brand Logo 2
import logo3 from '../assets/Image/B3.PNG'; // Brand Logo 3
import logo4 from '../assets/Image/B4.PNG'; // Brand Logo 4
import logo5 from '../assets/Image/B5.PNG'; // Brand Logo 5

import C1 from '../assets/Image/C1.jpeg';
import C2 from '../assets/Image/C2.jpg';
import C3 from '../assets/Image/C3.jpg';
import './Section.css';

const Section = () => {
    const menShoes = [
        { id: 1, src: shoe1, alt: 'Men Shoe 1' },
        { id: 2, src: shoe2, alt: 'Men Shoe 2' },
        { id: 3, src: shoe3, alt: 'Men Shoe 3' },
        { id: 4, src: shoe4, alt: 'Men Shoe 4' },
        { id: 5, src: shoe5, alt: 'Men Shoe 5' },
        { id: 6, src: shoe6, alt: 'Men Shoe 6' },
        { id: 7, src: shoe7, alt: 'Men Shoe 7' },
        { id: 8, src: shoe8, alt: 'Men Shoe 8' },
        { id: 9, src: shoe9, alt: 'Men Shoe 9' },
    ];

    const womenShoes = [
        { id: 10, src: shoe10, alt: 'Women Shoe 1' },
        { id: 11, src: shoe11, alt: 'Women Shoe 2' },
        { id: 12, src: shoe12, alt: 'Women Shoe 3' },
        { id: 13, src: shoe13, alt: 'Women Shoe 4' },
        { id: 14, src: shoe14, alt: 'Women Shoe 5' },
        { id: 15, src: shoe15, alt: 'Women Shoe 6' },
        { id: 16, src: shoe16, alt: 'Women Shoe 7' },
        { id: 17, src: shoe17, alt: 'Women Shoe 8' },
        { id: 18, src: shoe18, alt: 'Women Shoe 9' },
    ];

    const kidsShoes = [
        { id: 19, src: shoe19, alt: 'Kids Shoe 1' },
        { id: 20, src: shoe20, alt: 'Kids Shoe 2' },
        { id: 21, src: shoe21, alt: 'Kids Shoe 3' },
        { id: 22, src: shoe22, alt: 'Kids Shoe 4' },
        { id: 23, src: shoe23, alt: 'Kids Shoe 5' },
        { id: 24, src: shoe24, alt: 'Kids Shoe 6' },
        { id: 25, src: shoe25, alt: 'Kids Shoe 7' },
        { id: 26, src: shoe26, alt: 'Kids Shoe 8' },
        { id: 27, src: shoe27, alt: 'Kids Shoe 9' },
    ];

    // Slider state
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderImages = [
        { id: 1, src: shoe28, alt: 'Slider Image 1' },
        { id: 2, src: shoe29, alt: 'Slider Image 2' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };


    const reviewsData = [
        {
            id: 1,
            name: "John Doe",
            review: "Amazing shoes! Super comfortable and stylish.",
            rating: 5,
            image: C1,
          // Update with the correct path to John Doe's image
       
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "Great quality for the price. Will buy again!",
            rating: 4,
            image: C2,
            // image: require('../assets/images/jane_image.png'), // Add the path to Jane Smith's image
        },
        {
            id: 3,
            name: "Emily Johnson",
            review: "Love these! They fit perfectly and look great.",
            rating: 5,
            image: C3,
            // image: require('../assets/images/emily_image.png'), // Add the path to Emily Johnson's image
        },
       
    ];
    
    
    return (
        <div>
           
            <section className="men-shoes-section">
                <h2>Men's Shoes</h2>
                <div className="shoe-list">
                    {menShoes.map((shoe) => (
                        <Link to="/Men" key={shoe.id} className="shoe-item">
                            <img src={shoe.src} alt={shoe.alt} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="women-shoes-section">
                <h2 className="women-heading">Women's Shoes</h2>
                <div className="shoe-list">
                    {womenShoes.map((shoe) => (
                        <Link to="/Women" key={shoe.id} className="shoe-item">
                            <img src={shoe.src} alt={shoe.alt} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="kids-shoes-section">
                <h2 className="kids-heading">Kids' Shoes</h2>
                <div className="shoe-list">
                    {kidsShoes.map((shoe) => (
                        <Link to="/Kids" key={shoe.id} className="shoe-item">
                            <img src={shoe.src} alt={shoe.alt} />
                        </Link>
                    ))}
                </div>
            </section>
            <section className="slider-section">
                <h2>Featured Shoes</h2>
                <div className="slider">
                    <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {sliderImages.map((image) => (
                            <div className="slide" key={image.id}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                </div>
            </section>
            <section className="image-gallery-section">
                {/* <h2>Brand Collaborations</h2> */}
                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src={logo1} alt="Brand 1" className="gallery-image" />
                    </div>
                    <div className="gallery-item">
                        <img src={logo2} alt="Brand 2" className="gallery-image" />
                    </div>
                    <div className="gallery-item">
                        <img src={logo3} alt="Brand 3" className="gallery-image" />
                    </div>
                    <div className="gallery-item">
                        <img src={logo4} alt="Brand 4" className="gallery-image" />
                    </div>
                    <div className="gallery-item">
                        <img src={logo5} alt="Brand 5" className="gallery-image" />
                    </div>
                </div>
            </section>

            <section className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-list">
                {reviewsData.map((review) => (
                    <div className="review-item" key={review.id}>
                        <img src={review.image} alt={review.name} className="customer-image" />
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <div className="rating">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default Section;
