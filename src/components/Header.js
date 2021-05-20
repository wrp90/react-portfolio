import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <span class="navbar-brand mb-0 h1">William Papp</span>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <nav class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <nav class="navbar-nav ml-auto">
                  <a class="nav-item nav-link active" href="./index.html">About <span class="sr-only"></span></a>
                  <a class="nav-item nav-link active" href="./portfolio.html">Portfolio</a>
                  <a class="nav-item nav-link active" href="./contact.html">Contact</a>
                </nav>
              </nav>
            </nav>
          </header>
        )
    }
}

export default Header; 