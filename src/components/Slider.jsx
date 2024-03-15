import React, { useState } from 'react';
import './Slider.css';
import Coding from '../assets/Coding.jpg';
import Leafs from '../assets/Leafs.jpg';
import Mountains from '../assets/Mountains.jpg';

const images = [
  { src: Mountains, title: "Robert Naumann", subtitle: "About Me", description: "Hey, my name is Robert Naumann." },
  { src: Leafs, title: "Web Design", subtitle: "Build your website", description: "You are looking for a website, but you don't know where to start? \nContact me!" },
  { src: Coding, title: "Requests", subtitle: "Contact me", description: "If you want to work together feel free to contact me!" }
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="list">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.title} />
            <div className="content">
              <p>{image.title}</p>
              <h2>{image.subtitle}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          {/* SVG for previous button */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button id="next" onClick={nextSlide}>
          {/* SVG for next button */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Thumbnail */}
      <div className="thumbnail">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
