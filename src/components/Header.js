import React, { Component } from "react";
import NavbarBrand from './NavbarBrand';
import NavbarButton from './NavbarButton';
import NavbarLinks from './NavbarLinks';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavbarBrand />
            <NavbarButton />
            <NavbarLinks />
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;