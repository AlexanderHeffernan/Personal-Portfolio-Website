import React from 'react';
import '../assets/styles/About.css';
import portraitOrange from '../assets/images/Avatar-2-orange.png';
import portrait from '../assets/images/Avatar-2.png';

function About() {
    return (
        <div className="About" id="About">
            <div className="TextContainer">
                <h3><span>01.</span> About</h3>
                <p>Hey there! I'm currently diving into the world of software engineering at Victoria University of Wellington, working towards a Bachelor's degree. With almost two years of hands-on experience as a website administrator in a communications team, I've become a tech enthusiast with a knack for web content management and collaboration.
                    <br /><br />Whether it's through my academic journey or professional gigs, my focus is always on growth and innovation. I bring a mix of solid engineering principles and practical communication skills to the table. My aim? To inject fresh perspectives into every technical challenge and contribute tech-driven solutions.
                    <br /><br />Excited about the tech journey ahead, and looking forward to connecting with like-minded folks. Let's create something awesome together!
                </p>
            </div>
            <div className="ImageContainer">
                <div className="Outline">
                    <img src={portrait} alt="Portrait for Alexander Heffernan" />
                    <img className="Overlay"src={portraitOrange} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;