import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Home.css';
import ScrollIcon from '../assets/images/scroll-down-arrow.gif';

function Home() {
    const [coords, setCoords] = useState({ x: 0, y: 0});
    const coordsRef = useRef(coords);
    const [showCursor, setCursor] = useState(true);

    const colors = ["#e53170", "#ec3569", "#f23b62", "#f7425b", "#fb4a53", "#fe524b", "#ff5a43", "#ff633b", "#ff6d31", "#ff7627", "#ff801a", "#ff8906"];

    useEffect(() => {
        const circles = document.querySelectorAll('.circle');

        circles.forEach((circle, index) => {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        })

        const handleMouseMove = (e) => {
            const maxY = window.innerHeight - 5;

            if (e.pageY < maxY) {
                circles.forEach((circle) => {
                    circle.classList.remove("hide");
                });

                setCoords({ x: e.clientX, y: e.clientY });
            } else {
                circles.forEach((circle) => {
                    circle.classList.add("hide");
                })
            }
        };

        const handleMouseLeave = () => {
            circles.forEach((circle) => {
                circle.classList.add("hide");
            })
        };

        const handleScroll = () => {
            circles.forEach((circle) => {
                circle.classList.add("hide");
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        coordsRef.current = coords;
    }, [coords]);

    useEffect(() => {
        let animationFrameId; // Declare variable to store animation frame ID
      
        const animateCircles = () => {
            let x = coordsRef.current.x;
            let y = coordsRef.current.y;
            
            if (showCursor) {
                circles.forEach((circle, index) => {
                    circle.style.left = x - 12 + "px";
                    circle.style.top = y - 12 + "px";
            
                    circle.style.transform = `scale(${((circles.length - index) / circles.length)})`;
            
                    circle.x = x;
                    circle.y = y;
            
                    const nextCircle = circles[index + 1] || circles[0];
                    x += (nextCircle.x - x) * 0.3;
                    y += (nextCircle.y - y) * 0.3;
                });
            }
        
            // Request the next animation frame and store the ID
            animationFrameId = requestAnimationFrame(animateCircles);
        };
      
        const circles = document.querySelectorAll('.circle');
        animateCircles();
      
        // Cleanup function
        return () => {
          // Cancel animation frame on component unmount
          cancelAnimationFrame(animationFrameId);
        };
      }, []); // Only run this effect once on mount
    
    return (
        <div className="Home" id="Home">
            <h1>ALEXANDER <br />HEFFERNAN</h1>
            <h2>SOFTWARE ENGINEER, FRONT/BACK END WEB & APP DEVELOPER</h2>
            <a className="scrollDownArrow" href="#About"><img src={ScrollIcon} alt="scroll icon" /></a>
            {Array.from({ length: 12 }, (_, index) => (
                <div className="circle" key={(index)}></div>
            ))}
        </div>
    )
}

export default Home;