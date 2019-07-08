import React from "react";
import logo from "../img/logo.png";
import "../css/navbar.css";

const NavBar = () => {
  return (
    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    //     Navbar{" "}
    //     <span className="badge badge-pill badge-secondary">
    //       {totalCounters}
    //     </span>
    //   </a>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="index.html">
          <img src={logo} width="100" height="100" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase left">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav text-uppercase right ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
