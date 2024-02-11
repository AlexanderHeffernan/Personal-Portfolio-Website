import React, { useState } from 'react';
import '../assets/styles/NavBar.css';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNamePress = (location) => {
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
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`} id="navbar">
            <p className="title" onClick={() => handleNamePress("#Home")}>Alexander <br />Heffernan</p>
            <div className="links">
                <a onClick={handleHamburgerClick} id="text" href="#About" className="active"><span className="num">01.</span> About</a>
                <a onClick={handleHamburgerClick} id="text" href="#Work"><span className="num">02.</span> Work</a>
                <a onClick={handleHamburgerClick} id="text" href="#Education"><span className="num">03.</span> Education</a>
                <a onClick={handleHamburgerClick} id="text" href="#Portfolio"><span className="num">04. </span>Portfolio</a>
                <a onClick={handleHamburgerClick} id="text" href="#Contact"><span className="num">05. </span>Contact</a>
                <a onClick={handleHamburgerClick} id="button" href="documents/Alexander Heffernan – CV (2024).pdf" download="Alexander Heffernan - CV (2024).pdf"><span><span>Resume</span></span></a>
            </div>
            <p className="icon" onClick={handleHamburgerClick}>
                <i className="fa fa-bars"></i>
            </p>
        </div>
    )
}

export default NavBar