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
                        <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>About Me</h2>

                        <h1 className="info-text mb-0">
                            I’m a frontend web developer passionate about creating beautiful, responsive digital experiences that work
                            seamlessly across devices. I combine creativity, attention to detail, and technical skills to design intuitive, functional
                            interfaces that enhance user experience. With a solid fullstack foundation and a background in Human Resources, I
                            bring a unique perspective that connects human needs with effective technological solutions. I’m always seeking new
                            challenges to keep growing and build digital products that truly make an impact.
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
