import React, { Component } from "react";

class Projects extends Component {
    render(props) {
        return (
            <div class="col-xs-4 p-1">
                <div class="col">
                    <a href={props.projectURL} target="blank">
                        <img src={props.projectImage} class="img-fluid border" alt={props.projectName} />
                    </a>
                </div>
                <div class="col text-center">
                    <a href={props.projectURL} target="blank">{props.projectName}</a><br />
                    <a href={props.projectRepo} target="blank">GitHub Repository</a>
                </div>
            </div>
        )
    }
}

export default Projects;


