import React, { useState } from 'react';
import '../assets/styles/NavBar.css';

function myFunction() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`} id="navbar">
            <a className="title" href="#home">Alexander <br />Heffernan</a>
            <div className="links">
                <a id="text" href="#about" className="active">About</a>
                <a id="text" href="#work">Work</a>
                <a id="text" href="#education">Education</a>
                <a id="text" href="#portfolio">Portfolio</a>
                <a id="text" href="#contact">Contact</a>
                <a id="button" href="#resume"><span>Resume</span></a>
            </div>
            <a className="icon" onClick={handleHamburgerClick}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default NavBar