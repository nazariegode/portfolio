import React from "react";
import '../../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Iniciales para pantallas pequeñas */}
                <span className="navbar-brand d-lg-none" href="#Jumbo"></span>

                {/* Nombre completo para pantallas grandes */}
                <a className="nav-link navbar-brand d-none d-lg-block" href="#Jumbo"></a>

                {/* Botón de hamburguesa */}
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#AboutMe">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ProjectGallery">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ContactMe">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
