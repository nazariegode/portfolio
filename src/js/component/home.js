import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Contact from "./contactme";
import AboutMe from "./aboutme";
import ProjectGallery from "./projects";


const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbo />
            <AboutMe />
            <ProjectGallery />
            <Contact />
        </>
    )
}

export default Home
