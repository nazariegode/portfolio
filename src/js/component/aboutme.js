import React from 'react';
import devImage from '../../img/header.png';
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
            {/* ABOUT ME */}
            <div className="about d-flex align-items-center justify-content-center" id='AboutMe'>
                <div className="about-image-container">
                    <img src={devImage} alt="Developer" className="about-image" />
                </div>
                <div className="about-text-container">
                    <h2 className="tittle mb-0">About Me</h2>
                    <h1 className="info-text mb-0">
                        I’m a passionate web developer with a strong love for creating beautiful, responsive websites. I specialize in designing and building digital experiences that not only look amazing.
                    </h1>
                </div>
            </div>

            {/* EDUCATION AND SKILLS */}
            <div className="education-skills-container" id='AboutMe'>
                <div className="about-text-container">
                    <h2 className="tittle mb-0">EDUCATION</h2>

                    <div class="card w-80 mb-3">
                        <div class="card-body">
                            <h5 class="card-title">4GEEKS ACADEMY</h5>
                            <p class="card-text">Fullstack Developer</p>
                            <a href="https://www.coderhouse.com/cl/certificados/652e91407999ed426bc2f1d4?lang=es" class="btn" target="_blank" rel="noopener noreferrer">See Certificate</a>
                        </div>
                    </div>

                    <div class="card w-80">
                        <div class="card-body">
                            <h5 class="card-title">CODERHOUSE</h5>
                            <p class="card-text">React FrontEnd Developer</p>
                            <a href="https://www.coderhouse.com/cl/certificados/652e91407999ed426bc2f1d4?lang=es" class="btn" target="_blank" rel="noopener noreferrer">See Certificate</a>
                        </div>

                    </div>
                </div>
                <div className="about-text-container">
                    <h2 className="tittle mb-0">SKILLS</h2>
                    <div className="skills-container">
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
            </div>
        </div>
    );
};

export default AboutMe;
