import React, { Component } from "react";

class NavbarLinks extends Component {
  render() {
    return (
      <div>
            <nav class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <nav class="navbar-nav ml-auto">
                <a class="nav-item nav-link active" href="./index.html">About <span class="sr-only"></span></a>
                <a class="nav-item nav-link active" href="./portfolio.html">Portfolio</a>
                <a class="nav-item nav-link active" href="./contact.html">Contact</a>
              </nav>
            </nav>
      </div>
    )
  }
}

export default NavbarLinks;