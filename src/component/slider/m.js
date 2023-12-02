import './index.css'
import im1 from '../Assets/im1.jpg'
import im2 from '../Assets/im2.jpg'
import im3 from '../Assets/im3.jpg'
import im4 from '../Assets/im4.jpg'
import im5 from '../Assets/im5.jpg'
import im6 from '../Assets/im6.jpg'
import im7 from '../Assets/im7.jpg'
import im8 from '../Assets/im8.jpg'
import im9 from '../Assets/im9.jpg'
import React, { useEffect, useState } from 'react';


const Slider = () => {
    
    const images = [im1,im2,im3,im4,im5,im6,im7,im8,im9];
    const [currentSlide, setCurrentSlide] = useState(0);
 
    const changeSlide = (increment) => {
      const newSlide = (currentSlide + increment + images.length) % images.length;
      setCurrentSlide(newSlide);
    };

    return (
        
    
        <div className="slider-container">
            <h1>Nos plats:</h1>
          <div className="slider"  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            
            {images.map((image, index) => (
              <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>

            ))}
          </div>
          <div className="prev" onClick={() => changeSlide(-1)}>&#10094;</div>
          <div className="next" onClick={() => changeSlide(1)}>&#10095;</div>
   
        </div>
      );
    };
   
    export default Slider;
