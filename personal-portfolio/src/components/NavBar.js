import React, { useState } from 'react';
import '../assets/styles/NavBar.css';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`} id="navbar">
            <a className="title" href="#home">Alexander <br />Heffernan</a>
            <div className="links">
                <a id="text" href="#about" className="active"><span class="num">1.</span> About</a>
                <a id="text" href="#work"><span class="num">2.</span> Work</a>
                <a id="text" href="#education"><span class="num">3.</span> Education</a>
                <a id="text" href="#portfolio"><span class="num">4. </span>Portfolio</a>
                <a id="text" href="#contact"><span class="num">5. </span>Contact</a>
                <a id="button" href="#resume"><span><span>Resume</span></span></a>
            </div>
            <a className="icon" onClick={handleHamburgerClick}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default NavBar