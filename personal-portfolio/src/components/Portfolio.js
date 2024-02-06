import React, { useState } from 'react';
import '../assets/styles/Portfolio.css';
import PortfolioItem from './PortfolioItem';

function Portfolio() {

    return (
        <div className="Portfolio" id="Portfolio">
            <h3><span>04.</span> Portfolio</h3>
            <div className="ItemsGrid">
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
                <PortfolioItem 
                    title={"Project 1"} 
                    description={"This is a description of the project."}
                    tags={['HTML', 'CSS', 'JavaScript']}
                    link={"www.google.com"}
                />

            </div>
        </div>
    )
}

export default Portfolio;