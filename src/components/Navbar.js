import React, { Component } from "react";
import NavbarBrand from './NavbarBrand';
import NavbarButton from './NavbarButton';
import NavbarLinks from './NavbarLinks';

class Header extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
           <NavbarBrand />
           <NavbarButton />
           <NavbarLinks />
          </nav>
      </div>
    )
  }
}

export default Header;