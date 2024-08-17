import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
    }, interval);

    return () => clearInterval(autoPlay); // Cleanup interval on component unmount
  }, [current, images.length, interval]);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="w-full lg:w-1/2 xl:w-1/2 slideshow-container">
      <button onClick={prevSlide} className="slideshow-btn">◀</button>
      <div className="slideshow-image-wrapper">
        <img
          src={images[current].photo}
          alt={`Slide ${current}`}
          className="slideshow-image"
        />
        <div className="slideshow-caption">{images[current].caption}</div>
      </div>
      <button onClick={nextSlide} className="slideshow-btn">▶</button>
    </div>
  );
};

export default Slideshow;
