import React from 'react';
import devImage from '../../img/dn5.png';
import devImage2 from '../../img/dn6.png';
import logo from '../../img/amsoft.png';
import logo2 from '../../img/easy.png';
import logo3 from '../../img/mcdonalds.png';
import '../../styles/about.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import node from '../../img/node.png';
import bst from '../../img/bootstrap.png';
import flask from '../../img/flask.png';
import git from '../../img/git.png';
import github from '../../img/github.png';
import npm from '../../img/npm.png';
import postgres from '../../img/postgres.png';
import python from '../../img/python.png';
import react from '../../img/react.png';
import tailwind from '../../img/tailwind.png';

const AboutMe = () => {
    return (
        <div className='container'>
            <div className='row'>

                {/* ABOUT ME */}
                <div className="about col-12 d-flex align-items-center justify-content-center mb-5" id='AboutMe'>
                    <div className="about-image-container">
                        <img src={devImage} alt="Developer" className="about-image" />
                    </div>
                    <div className="about-text-container">
                        <h2 className="tittle mb-0"><i className="bi bi-caret-right-fill"></i>About Me</h2>
                        <h1 className="info-text mb-0">
                            I’m a passionate web developer with a strong love for creating beautiful, responsive websites. I specialize in designing and building digital experiences that not only look amazing.
                        </h1>
                    </div>
                </div>

                {/* EDUCATION */}
                <div className="col-12 mb-5 about-text-container" id='Education'>
                    <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>Education</h2>
                    <div className="card w-100 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">4GEEKS ACADEMY</h5>
                            <p className="card-text">Fullstack Developer</p>
                            <a href="https://www.coderhouse.com/cl/certificados/652e91407999ed426bc2f1d4?lang=es" className="btn" target="_blank" rel="noopener noreferrer">See Certificate</a>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">CODERHOUSE</h5>
                            <p className="card-text">React FrontEnd Developer</p>
                            <a href="https://www.coderhouse.com/cl/certificados/652e91407999ed426bc2f1d4?lang=es" className="btn" target="_blank" rel="noopener noreferrer">See Certificate</a>
                        </div>
                    </div>
                </div>

                {/* SKILLS */}
                <div className="col-12 mb-5 about-text-container" id='Skills'>
                    <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>Skills</h2>
                    <div className="skills-container d-flex flex-wrap">
                        <img src={html} className="skill-circle" alt="HTML" />
                        <img src={css} className="skill-circle" alt="CSS" />
                        <img src={js} className="skill-circle" alt="JavaScript" />
                        <img src={react} className="skill-circle" alt="React" />
                        <img src={git} className="skill-circle" alt="Git" />
                        <img src={node} className="skill-circle" alt="Node.js" />
                        <img src={bst} className="skill-circle" alt="Bootstrap" />
                        <img src={tailwind} className="skill-circle" alt="Tailwind CSS" />
                        <img src={github} className="skill-circle" alt="GitHub" />
                        <img src={npm} className="skill-circle" alt="npm" />
                        <img src={postgres} className="skill-circle" alt="PostgreSQL" />
                        <img src={flask} className="skill-circle" alt="Flask" />
                        <img src={python} className="skill-circle" alt="Python" />
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div className="about col-12 d-flex align-items-center justify-content-center mb-5" id='AboutMe'>
                    <div className="about-text-container">
                        <h2 className="tittle"><i className="bi bi-caret-right-fill"></i>Experience</h2>
                        <div className="card mb-3">
                            <div className="row g-0">

                                <div className="card-body">
                                    <h5 className="card-title">AMOSFT SPA</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>Jan-Dec 2024</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">

                                <div className="card-body">
                                    <h5 className="card-title">Easy Retail SA</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>Jan-Dec 2023</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Mc Donalds</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>Jan-Dec 2022</strong></p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="about-image-container">
                        <img src={devImage2} alt="Developer" className="about-image" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;
