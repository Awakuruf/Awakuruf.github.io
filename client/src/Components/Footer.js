import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer__container">
                <div className="contacts">
                    <div className="contacts__wrap">
                        <Link to="/" id="footer__logo">
                            <i className="fas fa-bolt"></i> DFR
                        </Link>
                        <p className="website__rights">© DFR 2022. All rights reserved</p>
                        <div className="contact__icons">
                            <a href="mailto:daichifg0626@gmail.com" className="social__icons--link" target="_blank" rel='noreferrer'>
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                            <a href="tel:+7789994589" className="social__icons--link" target="_blank" rel='noreferrer'>
                                <i className="fa-solid fa-phone"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/daichi-furukawa-588677233/" className="social__icons--link"
                                target="_blank" rel='noreferrer'>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Awakuruf" className="social__icons--link" target="_blank" rel='noreferrer'>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/daichifr/" className="social__icons--link" target="_blank" rel='noreferrer'>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;