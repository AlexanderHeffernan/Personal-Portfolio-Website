import React, { useState } from 'react';
import '../assets/styles/NavBar.css';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`} id="navbar">
            <a className="title" href="#Home">Alexander <br />Heffernan</a>
            <div className="links">
                <a onClick={handleHamburgerClick} id="text" href="#About" className="active"><span className="num">01.</span> About</a>
                <a onClick={handleHamburgerClick} id="text" href="#Work"><span className="num">02.</span> Work</a>
                <a onClick={handleHamburgerClick} id="text" href="#Education"><span className="num">03.</span> Education</a>
                <a onClick={handleHamburgerClick} id="text" href="#Portfolio"><span className="num">04. </span>Portfolio</a>
                <a onClick={handleHamburgerClick} id="text" href="#Contact"><span className="num">05. </span>Contact</a>
                <a onClick={handleHamburgerClick} id="button" href="#Resume"><span><span>Resume</span></span></a>
            </div>
            <a className="icon" onClick={handleHamburgerClick}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default NavBar