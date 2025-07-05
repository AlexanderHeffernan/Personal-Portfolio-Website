import React from 'react';
import '../assets/styles/Education.css';

function Education() {

    return (
        <div className="Education" id="Education">
            <h3><span>03.</span> Education</h3>
            <div className="TimeLineContainer">
                <div className="TimeLine">
                    <div className="Dash" style={{ left: '0'}}>
                    </div>
                    <div className="Dash" style={{ right: '0'}}>
                    </div>
                </div>
            </div>
            <div className="BoxHolder">
                <div className="BoxContainer">
                    <div className="PointsContainer">
                        <div className="Point" style={{ left: '40px'}}>
                            <p>2018</p>
                            <div className="Line"></div>
                        </div>
                        <div className="Point" style={{ right: '40px'}}>
                            <p>2022</p>
                            <div className="Line"></div>
                        </div>
                    </div>
                    <div className="Box">
                        <h4>NCEA (Levels 1, 2, and 3) achieved with excellence</h4>
                        <p>Graduated 2022</p>
                        <ul>
                            <li>St Patrick’s College Silverstream Dux 2022
                                <ul>
                                    <li>Also received the Michael King Memorial Cup and Service Award</li>
                                </ul>
                            </li>
                            <li>Year 13 Leader in 2022
                                <ul>
                                    <li>Mentored a class of year 9 students</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="BoxContainer">
                    <div className="PointsContainer">
                        <div className="Point" style={{ left: '40px'}}>
                            <p>2023</p>
                            <div className="Line"></div>
                        </div>
                        <div className="Point" style={{ right: '40px'}}>
                            <p>2025</p>
                            <div className="Line"></div>
                        </div>
                    </div>
                    <div className="Box">
                        <h4>Bachelor of Engineering (Honours) at Victoria University of Wellington</h4>
                        <p>Undergraduate since 2023</p>
                        <ul>
                            <li>Majoring in Software Engineering</li>
                            <li>Specialising in Artificial Intelligence</li>
                            <li>A average</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;