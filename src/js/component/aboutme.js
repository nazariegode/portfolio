import React from 'react';
import devImage from '../../img/dn5.png';
import devImage2 from '../../img/dn6.png';
import '../../styles/about.css';
import html from '../../img/HTML.png';
import css from '../../img/CSS.png';
import js from '../../img/JS.png';
import node from '../../img/Node.png';
import bst from '../../img/Bootstrap.png';
import flask from '../../img/Flask.png';
import git from '../../img/Git.png';
import github from '../../img/Github.png';
import sql from '../../img/SQL.png';
import saas from '../../img/Saas.png';
import python from '../../img/Python.png';
import react from '../../img/React.png';

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

                {/* EDUCATION */}
                <div className="col-12 mb-5 about-text-container" id='Education'>
                    <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>Education</h2>

                    <div className="card w-100 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">4GEEKS ACADEMY</h5>
                            <p className="card-text">Fullstack Developer</p>
                            <p className="card-text"><strong>Ago-2024</strong></p>
                            <a href="https://certificate.4geeks.com/b12f04ffa76695c3bf09b17ef845fc74bff2162a" className="btn" target="_blank" rel="noopener noreferrer">See Certificate</a>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">CODERHOUSE</h5>
                            <p className="card-text">React FrontEnd Developer</p>
                            <p className="card-text"><strong>Sept-2023</strong></p>
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
                        <img src={bst} className="skill-circle" alt="Bootstrap" /> 
                        <img src={js} className="skill-circle" alt="JavaScript" /> 
                        <img src={react} className="skill-circle" alt="React" /> 
                        <img src={git} className="skill-circle" alt="Git" /> 
                        <img src={node} className="skill-circle" alt="Node.js" /> 
                        <img src={github} className="skill-circle" alt="GitHub" /> 
                        <img src={sql} className="skill-circle" alt="sql" /> 
                        <img src={saas} className="skill-circle" alt="saas" /> 
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
                                    <h5 className="card-title">NO-Country</h5>
                                    <p className="card-text">Front-End Developer</p>
                                    <p className="card-text"><strong>Ago-2024 / Actual</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">AMSOFT SPA</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>Nov-2022 / May-2024</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Madeco by NEXAN's</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>Mar-2019 / Nov-2021</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Easy Retail SA</h5>
                                    <p className="card-text">Human Resource Lead</p>
                                    <p className="card-text"><strong>May-2018 / Mar-2019</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Mc Donald's</h5>
                                    <p className="card-text">Team Leader</p>
                                    <p className="card-text"><strong>Jan-2017 / Apr-2018</strong></p>
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
