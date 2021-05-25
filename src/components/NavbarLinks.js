import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

function NavbarLinks() {

  const location = useLocation();
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            to="/about"
            className={location.pathName === "/about" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathName === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathName === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks;