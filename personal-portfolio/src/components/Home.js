import React from 'react';
import '../assets/styles/Home.css';
import ScrollIcon from '../assets/images/scroll-down-arrow.gif';

function Home() {
    return (
        <div className="Home" id="Home">
            <h1>ALEXANDER <br />HEFFERNAN</h1>
            <h2>SOFTWARE ENGINEER, FRONT/BACK END WEB & APP DEVELOPER</h2>
            <a className="scrollDownArrow" href="#About"><img src={ScrollIcon} alt="scroll icon" /></a>
        </div>
    )
}

export default Home;