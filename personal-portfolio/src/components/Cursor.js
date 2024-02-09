// Cursor.js

import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
        const maxY = window.innerHeight - 6;

        if (e.pageY < maxY) {
            setPosition({ x: e.pageX, y: e.pageY });
            cursor.style.opacity = '1';
            cursor.style.width = '20px';  // Adjust width and height on mouse move
            cursor.style.height = '20px';
        }
        else if (cursor.style.opacity > 0) {
            cursor.style.opacity = cursor.style.opacity - 0.01;
        }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor.style.width = '0';  // Reset width and height on mouse leave
      cursor.style.height = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default Cursor;
