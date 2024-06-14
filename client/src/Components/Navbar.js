import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" id="navbar__logo">
                        <i className="fas fa-bolt"></i> DFR
                    </Link>
                    <div id="mobile-menu" className={`navbar__toggle ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`navbar__menu ${isActive ? 'active' : ''}`}>
                        <li className="navbar__item">
                            <Link to="/work" className="navbar__links"> Work </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/projects" className="navbar__links"> Projects </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/volunteer" className="navbar__links"> Volunteer </Link>
                        </li>
                        <li className="navbar__btn">
                            <Link to="/aboutMe" className="button"> About Me </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
