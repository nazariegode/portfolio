import React from 'react';
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
import wordpress from '../../img/wordpress.png';
import canva from '../../img/canva.png';
import tailwind from '../../img/tailwind.png';
import claudinary from '../../img/claudinary.png';
import firebase from '../../img/firebase.png';
import vercel from '../../img/vercel.png';

const Skills = () => {
    return (
        <div className='container'>
            <div className='row'>

                {/* SKILLS */}
                <div className="col-12 mb-5 about-text-container" id='Skills'>
                    <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>Skills</h2>
                    <div className="skills-container d-flex flex-wrap">
                        <img src={html} className="skill-circle" alt="HTML" />
                        <img src={css} className="skill-circle" alt="CSS" />
                        <img src={js} className="skill-circle" alt="JavaScript" />
                        <img src={react} className="skill-circle" alt="React" />
                        <img src={saas} className="skill-circle" alt="saas" />
                        <img src={tailwind} className="skill-circle" alt="tailwind" />
                        <img src={bst} className="skill-circle" alt="Bootstrap" />
                        <img src={git} className="skill-circle" alt="Git" />
                        <img src={github} className="skill-circle" alt="GitHub" />
                        <img src={node} className="skill-circle" alt="Node.js" />
                        <img src={sql} className="skill-circle" alt="sql" />
                        <img src={flask} className="skill-circle" alt="Flask" />
                        <img src={python} className="skill-circle" alt="Python" />
                        <img src={canva} className="skill-circle" alt="Canva" />
                        <img src={wordpress} className="skill-circle" alt="Wordpress" />
                        <img src={claudinary} className="skill-circle" alt="claudinary" />
                        <img src={firebase} className="skill-circle" alt="firebase" />
                        <img src={vercel} className="skill-circle" alt="vercel" />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Skills;
