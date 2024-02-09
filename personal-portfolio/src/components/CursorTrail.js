// CursorTrail.js

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const timestamp = Date.now();
        const maxY = window.innerHeight - 6;

        if (e.pageY < maxY) {
            setTrail((prevTrail) => [
                ...prevTrail,
                {
                  x: e.pageX,
                  y: e.pageY,
                  id: uuidv4(),
                  timestamp,
                },
              ]);
        }
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup trail points that have faded out
      const cleanupInterval = setInterval(() => {
        const now = Date.now();
        setTrail((prevTrail) => prevTrail.filter((point) => now - point.timestamp < 2000)); // 2000 milliseconds (2 seconds) as an example, adjust as needed
      }, 1000); // Cleanup every 1 second, adjust as needed
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        clearInterval(cleanupInterval);
      };
    }, []);
  
    return (
      <div className="cursor-trail">
        {trail.map((point) => (
          <div key={point.id} className="trail-point" style={{ left: `${point.x}px`, top: `${point.y}px` }}></div>
        ))}
      </div>
    );
  };
  
  export default CursorTrail;