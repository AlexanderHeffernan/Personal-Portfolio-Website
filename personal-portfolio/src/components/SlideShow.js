import React, { useState, useEffect, useCallback } from 'react';
import '../assets/styles/SlideShow.css';

function SlideShow({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [handleNext, handlePrev, onClose]);

  useEffect(() => {
    // Disable body scroll when the slideshow is active
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Enable body scroll when the slideshow is closed
      document.body.style.overflow = 'auto';

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown, onClose]);
  
  return (
    <div className="fullscreen-slider">
      <div className="slider-container">
        <div className="slider-content">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="prev-button" onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-button" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <button className="close-button" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default SlideShow;
