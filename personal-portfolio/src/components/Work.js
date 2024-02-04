import React, { useState } from 'react';
import '../assets/styles/Work.css';

function Work() {

    const [accordionSelection, setAccordionSelection] = useState(0);

    const content = [<XRB />, <McDonalds />]

    const handleAccordionSelectorClick = (id) => (
        setAccordionSelection(id)
    )

    return (
        <div className="Work" id="Work">
            <h3><span>02.</span> Work</h3>
            <div className="AccordionHolder">
                <div className="AccordionSelector">
                    <button className={`${accordionSelection === 0 ? 'active' : ''}`} onClick={(e) => handleAccordionSelectorClick(0)}>External Reporting Board</button>
                    <button className={`${accordionSelection === 1 ? 'active' : ''}`}onClick={(e) => handleAccordionSelectorClick(1)}>McDonald's</button>
                </div>
                {content[accordionSelection]}
            </div>
        </div>
    )
}

function XRB() {
    return (
        <div className="AccordionContent">
            <h4>Website Administrator @ External Reporting Board</h4>
            <p>Mar 2022 - Present</p>
            <p>Office Administrator Dec 2020 - Mar 2022</p>
            <ul>
                <li>
                    Delivering effective and efficient communication planning, delivery,
                    and content creation to support the Communication and
                    Engagement Team deliver the XRB’s Communication and
                    Engagement Strategy.
                </li>
            </ul>
            <h5>Key responsibilities</h5>
            <ul>
                <li>Maintaining the XRB’s website</li>
                <li>Working with colleagues to publish their desired changes to the website</li>
                <li>
                    Collecting metrics on a weekly basis for the XRB’s website, LinkedIn page, 
                    MailChimp E-Newsletter campaigns, and YouTube channel
                </li>
            </ul>
            <h5>Key achievements</h5>
            <ul>
                <li>
                    Involvement in the creation of the new XRB website, including its
                    new design, structure, and content. By working with colleagues
                    both internally and externally, a new website meeting the needs of
                    all users was launched at the start of 2022.
                </li>
            </ul>
        </div>
    )
}

function McDonalds() {
    return (
        <div className="AccordionContent">
            <h4>Crew Member @ McDonald's</h4>
            <p>Dec 2022 - April 2023</p>
            <ul>
                <li>
                    I started at 20 hours per week, steadily increasing to over 40 hours
                    weekly for two months. While at university, I transitioned to a
                    casual role, successfully managing work alongside my studies.
                </li>
            </ul>
        </div>
    )
}

export default Work;