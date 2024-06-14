import React from 'react';

function Hero() {
    return (
        <div>
            <div className="main">
                <div className="main__container">
                    <div className="main__content">
                        <h1>Thanks for viewing <span></span></h1>
                        <h1>My Name is <span></span></h1> <br />
                        <h1>Daichi <span></span></h1> <br />
                        <button className="main__btn"><a href="https://github.com/Awakuruf">Portfolio</a></button>
                    </div>
                    <figure className="main__image--container">
                        <img src="images/profile.jpg" alt="Profile" className="main__img" />
                        <figcaption className="caption">Daichi Furukawa</figcaption>
                        <figcaption className="caption2">Cognitive Systems under Computer Science at UBC</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Hero;