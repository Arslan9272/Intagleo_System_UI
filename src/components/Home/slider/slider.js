import React, { useState, useEffect } from 'react';
import './slider.css';
import Sliderr1 from './sliderr1.jpg';
import Sliderr2 from './sliderr2.jpg';
import Sliderr3 from './sliderr3.jpg';
const slides = [
  {
    image: Sliderr1,
    heading: (
      <>
        <span style={{ color: 'white' }}>Scalable Solutions to</span> <span style={{ color: 'blue' }}>Boost Efficiency</span>
      </>
    ),
    description: "Our innovative application of evolving technologies, from Cloud Computing & Big Data to Artificial Intelligence & Deep Learning & more, helps deliver scalable solutions with flexible architecture that are adapt to change, reduce costs & boost business efficiency.",
    buttonText: "Get In Touch"
  },
  

  {
    image: Sliderr2,
    heading: (
      <>
        <span style={{ color: 'white' }}>Innovaive Solutions</span> <span style={{ color: 'blue' }}>For your Business </span>
      </>
    ),
    description: "We provide cutting-edge technology solutions to help your business thrive in the modern world. Our expertise spans across various domains, ensuring tailored solutions that fit your needs.",
    buttonText: "Learn More"
  },
  {
    image: Sliderr3,
    heading: (
      <>
        <span style={{ color: 'white' }}>Transforming Ideas </span> <span style={{ color: 'blue' }}>Into Reality</span>
      </>
    ),
    description: "With a focus on quality and efficiency, we bring your ideas to life through innovative software solutions. Let us help you achieve your business goals with our expert services.",
    buttonText: "Contact Us"
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-background" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide-content" key={index}>
              <div className="content-wrapper">
                <h1 className='h11'>{slide.heading}</h1>
                <p className='pp'>{slide.description}</p>
                <button className="btn btn-primary">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="custom-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
