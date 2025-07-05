import React from 'react';
import '../assets/styles/About.css';
import portraitOrange from '../assets/images/Avatar-2-orange.png';
import portrait from '../assets/images/Avatar-2.png';

function About() {
    return (
        <div className="About" id="About">
            <div className="TextContainer">
                <h3><span>01.</span> About</h3>
                <p>Kia ora! I’m a passionate software engineering student at Victoria University of Wellington,
excited about building technology that makes a difference. I worked for over three
years at the External Reporting Board as the Website Administrator, managing
web content, collaborating with teams, and contributing to design projects. For
over a year and a half, I’ve been the Website Developer/Designer at
HomeStagedIT, leading front-end development for a new IT platform that’s nearly
ready for beta testing.
                    <br /><br />My studies, professional experience, and personal projects—showcased here and in my
GitHub portfolio—reflect a deep commitment to growth, curiosity, and creative
problem-solving. I thrive in collaborative environments, adapt quickly to new
challenges, and consistently look for ways to add value. I'm eager to contribute to
a forward-thinking team, where I can apply my skills, expand them further, and
make a meaningful impact from day one.
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