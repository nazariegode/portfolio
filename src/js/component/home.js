import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Contact from "./contactme";
import AboutMe from "./aboutme";
import Education from "./education";
import Skills from "./skills";
import ProjectGallery from "./projects";
import Experience from "./experience";


const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbo />
            <AboutMe />
            <Education />
            <Skills />
            <Experience />
            <ProjectGallery />
            <Contact />
        </>
    )
}

export default Home
