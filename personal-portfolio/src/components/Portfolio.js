import React, { useState } from 'react';
import '../assets/styles/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import SlideShow from './SlideShow';

import PureWater1 from '../assets/images/PureWaterNZ-HomeScreen.png';
import PureWater2 from '../assets/images/PureWaterNZ-Article.png';
import PureWater3 from '../assets/images/PureWaterNZ-Login.png';

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
                    title={"Pure Water NZ"} 
                    description={"This is a project I completed for NCEA level 2, receiving excellence"}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                    SlideShow={() => handleOpenFullScreen([
                        PureWater1,
                        PureWater2,
                        PureWater3
                    ])}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
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