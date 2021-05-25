import React, { Component } from "react";

class NavbarButton extends Component {
    render() {
        return (

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        )
    }
}

export default NavbarButton;