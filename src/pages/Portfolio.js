import React from "react";
import Projects from "../components/Projects";
import projects from "../components/projects.json";


function Portfolio() {
    const projectsList = () => {
        return projects.map(project => (
            <Projects
                key={project.id}
                projectURL={project.projectURL}
                projectImage={project.projectImage}
                projectName={project.projectName}
                projectRepo={project.projectRepo}
            />
        ))
    };
    return (
        <div>
            <h1 className="text-primary display-4"><strong>Portfolio</strong></h1>
            <div className="row justify-content-center m-2">
                {projectsList()}
            </div >
        </div>
    );
}

export default Portfolio;


