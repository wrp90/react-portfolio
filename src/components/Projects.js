import React from "react";

function Projects(props) {
   
    return (
        <div className="col-xs-4 p-1">
            <div className="col">
                <a href={props.projectURL} target="blank">
                    <img src={props.projectImage} className="img-fluid border" alt={props.projectName} />
                </a>
            </div>
            <div className="col text-center">
                <a href={props.projectURL} target="blank">{props.projectName}</a><br />
                <a href={props.projectRepo} target="blank">GitHub Repo</a>
            </div>
        </div>
    )

}

export default Projects;


