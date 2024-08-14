import React from "react";
import Typewriter from 'typewriter-effect';
import devImage from '../../img/header.png';
import '../../styles/jumbo.css';

const Jumbo = () => {
    return (
        <div className="home d-flex align-items-center justify-content-center">
            <div className="home-text-container">
                <h3 className="info-text mb-0">Hi! I'm </h3>
                <h1 className="home-name mb-0">David Nazariego</h1>
                <h2 className="info-text mb-0">
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer', 'Front-End Developer', 'Back-End Developer', 'Scrum Master', 'UI Designer'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 20,
                        }}
                    />
                </h2>
            </div>
            <div className="home-image-container">
                <img src={devImage} alt="Developer" className="home-image" />
            </div>
        </div>
    )
}

export default Jumbo;
