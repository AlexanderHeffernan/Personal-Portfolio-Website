import React, { useState } from 'react';
import '../assets/styles/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import SlideShow from './SlideShow';

import PureWater1 from '../assets/images/PureWaterNZ-HomeScreen.png';
import PureWater2 from '../assets/images/PureWaterNZ-Article.png';
import PureWater3 from '../assets/images/PureWaterNZ-Login.png';

import RFM1 from '../assets/images/RFM-HomePage.png';
import RFM2 from '../assets/images/RFM-ExplorePage.png';
import RFM3 from '../assets/images/RFM-LibraryPage.png';
import RFM4 from '../assets/images/RFM-ArtistPage.png';

import LoneWolf1 from '../assets/images/LoneWolf1.jpg';
import LoneWolf2 from '../assets/images/LoneWolf2.jpg';
import LoneWolf3 from '../assets/images/LoneWolf3.jpg';
import LoneWolf4 from '../assets/images/LoneWolf4.jpg';
import LoneWolf5 from '../assets/images/LoneWolf5.jpg';
import LoneWolf6 from '../assets/images/LoneWolf6.jpg';
import LoneWolf7 from '../assets/images/LoneWolf7.jpg';
import LoneWolf8 from '../assets/images/LoneWolf8.jpg';
import LoneWolf9 from '../assets/images/LoneWolf9.jpg';
import LoneWolf10 from '../assets/images/LoneWolf10.jpg';
import LoneWolf11 from '../assets/images/LoneWolf11.jpg';
import LoneWolf12 from '../assets/images/LoneWolf12.jpg';
import LoneWolf13 from '../assets/images/LoneWolf13.jpg';
import LoneWolf14 from '../assets/images/LoneWolf14.jpg';
import LoneWolf15 from '../assets/images/LoneWolf15.png';
import LoneWolf16 from '../assets/images/LoneWolf16.png';
import LoneWolf17 from '../assets/images/LoneWolf17.png';
import LoneWolf18 from '../assets/images/LoneWolf18.png';
import LoneWolf19 from '../assets/images/LoneWolf19.png'

import WingedWarfare1 from '../assets/images/WingedWarfare1.png';
import WingedWarfare2 from '../assets/images/WingedWarfare2.png';
import WingedWarfare3 from '../assets/images/WingedWarfare3.png';
import WingedWarfare4 from '../assets/images/WingedWarfare4.png';
import WingedWarfare5 from '../assets/images/WingedWarfare5.png';
import WingedWarfare6 from '../assets/images/WingedWarfare6.png';
import WingedWarfare7 from '../assets/images/WingedWarfare7.png';

import DeathWave1 from '../assets/images/DeathWave1.png';
import DeathWave2 from '../assets/images/DeathWave2.png';
import DeathWave3 from '../assets/images/DeathWave3.png';
import DeathWave4 from '../assets/images/DeathWave4.png';

import XRBWebsite1 from '../assets/images/XRBWebsite1.png';
import XRBWebsite2 from '../assets/images/XRBWebsite2.png';
import XRBWebsite3 from '../assets/images/XRBWebsite3.png';
import XRBWebsite4 from '../assets/images/XRBWebsite4.png';
import XRBWebsite5 from '../assets/images/XRBWebsite5.png';

import BusNetworks1 from '../assets/images/BusNetworks1.png';
import BusNetworks2 from '../assets/images/BusNetworks2.png';
import BusNetworks3 from '../assets/images/BusNetworks3.png';

import WellingtonTrains1 from '../assets/images/WellingtonTrains1.png';
import WellingtonTrains2 from '../assets/images/WellingtonTrains2.png';
import WellingtonTrains3 from '../assets/images/WellingtonTrains3.png';
import WellingtonTrains4 from '../assets/images/WellingtonTrains4.png';
import WellingtonTrains5 from '../assets/images/WellingtonTrains5.png';

import AVCProject1 from '../assets/images/AVCProject1.jpeg';
import AVCProject2 from '../assets/images/AVCProject2.jpeg';
import AVCProject3 from '../assets/images/AVCProject3.jpeg';
import AVCProject4 from '../assets/images/AVCProject4.jpeg';
import AVCProject5 from '../assets/images/AVCProject5.jpeg';
import AVCProject6 from '../assets/images/AVCProject6.jpeg';
import AVCProject7 from '../assets/images/AVCProject7.jpeg';

function Portfolio() {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedProjectImages, setSelectedProjectImages] = useState([]); // Set your selected project images here

    const handleOpenFullScreen = (images) => {
        setSelectedProjectImages(images);
        setIsFullScreen(true);
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen(false);
    };


    return (
        <div className="Portfolio" id="Portfolio">
            <h3><span>04.</span> Portfolio</h3>
            <div className="ItemsGrid">
                <PortfolioItem 
                    title={"XRB Website"} 
                    description={"In January 2022, I played a role in developing the new XRB website, contributing to the design, structure, and content. I have been overseeing website management ever since."}
                    tags={['SilverStripe', 'HTML', 'CSS']}
                    link={"https://www.xrb.govt.nz"}
                    linkTitle={"Check it out"}
                    slideshow={() => handleOpenFullScreen([
                        XRBWebsite1,
                        XRBWebsite2,
                        XRBWebsite3,
                        XRBWebsite4,
                        XRBWebsite5
                    ])}
                />
                <PortfolioItem 
                    title={"Pure Water NZ"} 
                    description={"A website built for NCEA Level 1. Hosted many articles on New Zealand's Water infrastructure, and contained many technical challenges involving databases with PHP and SQL."}
                    tags={['HTML', 'CSS', 'Bootstrap 3', 'PHP', 'SQL']}
                    slideshow={() => handleOpenFullScreen([
                        PureWater1,
                        PureWater2,
                        PureWater3
                    ])}
                />
                <PortfolioItem 
                    title={"RFM"} 
                    description={"A website built for NCEA Level 3. Hosted a large database of songs, that with the help of algorithms written in JavaScript could easily be explored and ranked by popularity."}
                    tags={['HTML', 'CSS', 'Bootstrap 3', 'JavaScript', 'PHP', 'SQL']}
                    slideshow={() => handleOpenFullScreen([
                        RFM1,
                        RFM2,
                        RFM3,
                        RFM4
                    ])}
                />
                <PortfolioItem 
                    title={"Lone Wolf: World War 2"} 
                    description={"A game developed by my brother and I for NCEA Level 2 & 3, later released on Steam. Fly over Europe and Northern Africa, engage in aerial combat, shoot down planes, drop bombs, and evade enemy attacks."}
                    tags={['Unity', 'C#']}
                    link={"https://store.steampowered.com/app/1399180/Lone_Wolf_World_War_2/"}
                    linkTitle={"Steam"}
                    slideshow={() => handleOpenFullScreen([
                        LoneWolf15,
                        LoneWolf1,
                        LoneWolf2,
                        LoneWolf16,
                        LoneWolf17,
                        LoneWolf3,
                        LoneWolf4,
                        LoneWolf18,
                        LoneWolf5,
                        LoneWolf6,
                        LoneWolf19,
                        LoneWolf7,
                        LoneWolf8,
                        LoneWolf9,
                        LoneWolf10,
                        LoneWolf11,
                        LoneWolf12,
                        LoneWolf13,
                        LoneWolf14
                    ])}
                />
                <PortfolioItem 
                    title={"Winged Warfare"} 
                    description={"A project for a Computer Graphics course, embodying the core concepts learned during the trimester. Built with Processing, using Object-Oriented Programming principles."}
                    tags={['Processing', 'OOP']}
                    slideshow={() => handleOpenFullScreen([
                        WingedWarfare1,
                        WingedWarfare2,
                        WingedWarfare3,
                        WingedWarfare4,
                        WingedWarfare5,
                        WingedWarfare6,
                        WingedWarfare7
                    ])}
                    link={"https://github.com/AlexanderHeffernan/WingedWarfare-CGRA151"}
                    linkTitle={"GitHub"}
                />
                <PortfolioItem 
                    title={"Death Wave"} 
                    description={"A project developed by my brother and I in 2019. Death Wave is a endless zombie survival game where you have to last as long as you can against a never ending force of the undead on a planet plagued with fire and death."}
                    tags={['Unity', 'C#']}
                    slideshow={() => handleOpenFullScreen([
                        DeathWave1,
                        DeathWave2,
                        DeathWave3,
                        DeathWave4
                    ])}
                />
                <PortfolioItem 
                    title={"Bus Network System"} 
                    description={"A Computer Science assignment that covers key concepts from the introductory 100-level data types course, using the New Zealand Bus Network as a basis."}
                    tags={['Java', 'Advanced Data Types']}
                    slideshow={() => handleOpenFullScreen([
                        BusNetworks1,
                        BusNetworks2,
                        BusNetworks3
                    ])}
                />
                <PortfolioItem 
                    title={"WGTN Trains System"} 
                    description={"A Computer Science assignment encapsulating fundamental concepts from the introductory 100-level course on data types, based on the Wellington Trains Network."}
                    tags={['Java', 'Advanced Data Types']}
                    slideshow={() => handleOpenFullScreen([
                        WellingtonTrains1,
                        WellingtonTrains2,
                        WellingtonTrains3,
                        WellingtonTrains4,
                        WellingtonTrains5
                    ])}
                />
                <PortfolioItem 
                    title={"AVC Project"} 
                    description={"The Autonomous Vehicle Challenge was an Engineering project where we had to create and program an small robot to complete an obstacle course."}
                    tags={['C++', 'Robotics', 'Raspberry Pi']}
                    slideshow={() => handleOpenFullScreen([
                        AVCProject1,
                        AVCProject2,
                        AVCProject3,
                        AVCProject4,
                        AVCProject5,
                        AVCProject6,
                        AVCProject7,
                    ])}
                />
            </div>
            {/* Full screen slider */}
            {isFullScreen && (
                <SlideShow images={selectedProjectImages} onClose={handleCloseFullScreen} />
            )}
        </div>
    )
}

export default Portfolio;