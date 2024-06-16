import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div>
            <div className="services">
                <h1>Check it out!</h1>
                <div className="services__container">
                    <div className="services__card">
                        <h2>Projects</h2>
                        <p>Personal, Academic, Career Related</p>
                        <Link to="/projects">
                            <button id="career">Check it out!</button>
                        </Link>                    </div>
                    <div className="services__card">
                        <h2>Work Experience</h2>
                        <p>AWS, Mastercard, Dayforce</p>
                        <Link to="/work">
                            <button id="career">Check it out!</button>
                        </Link>
                    </div>
                    <div className="services__card">
                        <h2>Volunteer</h2>
                        <p>AWS, UBC CSSS, Hackathon Mentor</p>
                        <Link to="/volunteer">
                            <button id="career">Check it out!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;