import React from "react";
import Typewriter from 'typewriter-effect';
import devImage from '../../img/dn4.png';
import '../../styles/jumbo.css';

const Jumbo = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center" id="Jumbo">
            <div className="home-image-container">
                <img src={devImage} alt="Developer" className="home-image" />
            </div>
            <div className="home-text-container">
                <h3 className="info-text mb-0">Hi! I'm </h3>
                <h1 className="home-name mb-0">David Nazariego</h1>

                <h2 className="info-text text-white mb-0">
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
                <div className="social justify-content-center">
                    <a href='https://www.linkedin.com/in/nazariego/' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href='https://github.com/nazariegode' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github ms-2"></i>
                    </a>
                    <a href='https://github.com/nazariegode/CV/raw/main/David%20Nazariego%20Developer.pdf' target="_blank" download="DavidNazariegoCV.pdf" rel="noopener noreferrer">
                        <i className="bi bi-download ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;
