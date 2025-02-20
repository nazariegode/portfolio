import React from 'react';
import devImage from '../../img/dn5.png';
import '../../styles/about.css';


const AboutMe = () => {
    return (
        <div className='container'>
            <div className='row'>

                {/* ABOUT ME */}
                <div className="about col-12 d-flex align-items-center justify-content-center mb-5" id='AboutMe'>

                    <div className="about-text-container">
                        <h2 className="tittle mb-0"><i className="bi bi-caret-right-fill"></i>About Me</h2>
                        <h1 className="info-text mb-0">
                            I’m a passionate web developer with a strong love for creating beautiful, responsive websites. I specialize in designing and building digital experiences that not only look amazing.
                        </h1>

                    </div>
                    <div className="about-image-container">
                        <img src={devImage} alt="Developer" className="about-image" />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default AboutMe;
