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
                            Hi, I’m David, a 33-year-old web developer with a passion for creating beautiful, responsive websites.
                        </h1>
                        <h1 className="info-text mb-0">
                            I specialize in frontend development, designing seamless digital experiences that work perfectly on any device.
                        </h1>
                        <h1 className="info-text mb-0">
                            With an eye for detail and a focus on intuitive interfaces, I combine creativity with technical expertise to bring your ideas to life.
                        </h1>
                        <h1 className="info-text mb-0">
                            Let’s build something amazing together!
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
