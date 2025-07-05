import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Home.css';
import ScrollIcon from '../assets/images/scroll-down-arrow.gif';
import Vector1 from '../assets/images/vector-1.png';
import Vector2 from '../assets/images/vector-2.png';
import Background from '../assets/images/background.png';

function Home() {
    const [coords, setCoords] = useState({ x: 0, y: 0});
    const coordsRef = useRef(coords);

    const colors = ["#e53170", "#ec3569", "#f23b62", "#f7425b", "#fb4a53", "#fe524b", "#ff5a43", "#ff633b", "#ff6d31", "#ff7627", "#ff801a", "#ff8906"];

    /* eslint-disable react-hooks/exhaustive-deps */
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

            let value = window.scrollY;
            if (value > 0) {
                const layer1 = document.getElementById("layer1");
                layer1.style.left = -value * 0.9 + "px";

                const layer2 = document.getElementById("layer2");
                layer2.style.left = -value * 0.8 + "px";
                layer2.style.height = 270 + value * 0.07 + "px";

                const background = document.getElementById("Home");
                background.style.backgroundPosition = `50% calc(50% + ${value * 0.2}px)`;
            }
        };

        const handleResize = () => {
            const htmlTag = document.getElementById("html");
            console.log(window.innerWidth);
            if (window.innerWidth < 750) { htmlTag.style.scrollBehavior = 'auto'; }
            else { htmlTag.style.scrollBehavior = 'smooth'; }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
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
    
    const handleIconPress = (location) => {
        const htmlTag = document.getElementById("html");
        var toReset = false;
        if (htmlTag) { 
            htmlTag.style.scrollBehavior = 'smooth'; 
            if (window.innerWidth < 750) { 
                toReset = true;
            }
        }
        window.location.href = location;
        
        if (toReset) { 
            setTimeout(() => {
                htmlTag.style.scrollBehavior = 'auto';
            }, 800);
        }
              
    }; 

    return (
        <div className="Home" id="Home"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="HomeContent">
                <h1>ALEXANDER <br />HEFFERNAN</h1>
                <h2>SOFTWARE ENGINEER | FULL-STACK DEVELOPER</h2>
                <img onClick={() => handleIconPress("#About")} className="scrollDownArrow" src={ScrollIcon} alt="scroll icon" />
                {Array.from({ length: 12 }, (_, index) => (
                    <div className="circle" key={(index)}></div>
                ))}
            </div>
            <div className="ParallaxBackground">
                <img src={Vector2} alt="" id="layer2" />
                <img src={Vector1} alt="" id="layer1" />
            </div>
        </div>
    )
}

export default Home;