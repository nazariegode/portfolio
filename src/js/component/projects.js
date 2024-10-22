import React from 'react';
import projectImage1 from '../../img/geekfood.png';
import projectImage2 from '../../img/starwars.png';
import projectImage3 from '../../img/nazarisushi.png';
import projectImage4 from '../../img/tiktaktoe.png';
import projectImage5 from '../../img/traffic.png';
import projectImage6 from '../../img/pets.png';
import '../../styles/projects.css';

const projects = [
    {
        title: 'Geek Food',
        description: 'Website for the sale of fast food.',
        image: projectImage1,
        projectUrl: 'https://geekfood-three.vercel.app/',
        codeUrl: 'https://github.com/nazariegode/geekfood'
    },
    {
        title: 'StarWars Blog',
        description: 'Web page making requests to an API.',
        image: projectImage2,
        projectUrl: 'https://start-wars-blog.vercel.app/',
        codeUrl: 'https://github.com/nazariegode/StartWars-Blog'
    },
    {
        title: 'NazariSushi',
        description: 'Website for the sale of Sushi food.',
        image: projectImage3,
        projectUrl: 'https://proyecto-nazariego.vercel.app/index.html',
        codeUrl: 'https://github.com/nazariegode/reactjs-nazariego'
    },
    {
        title: 'Tiktak Toe',
        description: 'Fun tiktactoe game.',
        image: projectImage4,
        projectUrl: 'https://tic-tac-toe-con-react-js.vercel.app/',
        codeUrl: 'https://github.com/nazariegode/TicTacToe-con-React.js'
    },
    {
        title: 'Traffic Light',
        description: 'Fun TrafficLight game.',
        image: projectImage5,
        projectUrl: 'https://traffic-light-liard.vercel.app/',
        codeUrl: 'https://github.com/nazariegode/Traffic-Light'
    },
    {
        title: 'Pets - Landing Page',
        description: 'Website for the sale of pets.',
        image: projectImage6,
        projectUrl: 'https://landing-page-with-react-three.vercel.app/',
        codeUrl: 'https://github.com/nazariegode/Landing-Page-with-React'
    },
];

const ProjectGallery = () => {
    return (
        <div className="container gallery-container" id='ProjectGallery'>
            <div className="row">
                <h2 className="tittle mb-3"><i class="bi bi-caret-right-fill"></i>Projects</h2>
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>

                        <div className="card project-card">
                            <img src={project.image} className="card-img-top project-image" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn">See Project</a>
                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn ml-2">See Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;
