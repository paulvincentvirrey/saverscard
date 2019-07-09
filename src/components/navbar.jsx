import React from "react";
import { Navbar, NavItem } from "react-materialize";
import logo from "../img/logo.png";
import "../css/navbar.css";

const NavBar = () => {
  var logoImg = (
    <a>
      <img src={logo} />
    </a>
  );

  return (
    <Navbar className="main-nav" brand={logoImg} alignLinks="left" fixed>
      <NavItem href="">Services</NavItem>
      <NavItem href="">About</NavItem>
      <NavItem href="">Contact Us</NavItem>
      <NavItem href="">Sign In</NavItem>
      <NavItem href="">Sign Up</NavItem>
    </Navbar>
    // <nav>
    //   <div class="nav-wrapper container">
    //     <a href="#" class="brand-logo">
    //       Logo
    //     </a>
    //     <ul id="nav-mobile" class="right hide-on-med-and-down">
    //       <li>
    //         <a href="sass.html">Sass</a>
    //       </li>
    //       <li>
    //         <a href="badges.html">Components</a>
    //       </li>
    //       <li>
    //         <a href="collapsible.html">JavaScript</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    //   <div className="container">
    //     <a className="navbar-brand js-scroll-trigger" href="index.html">
    //       <img src={logo} width="100" height="100" alt="" />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       Menu
    //       <i className="fas fa-bars" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav text-uppercase left">
    //         <li className="nav-item">
    //           <a className="nav-link js-scroll-trigger" href="#services">
    //             Services
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link js-scroll-trigger" href="#about">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link js-scroll-trigger" href="#contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav text-uppercase right ml-auto">
    //         <li className="nav-item">
    //           <a className="nav-link js-scroll-trigger" href="">
    //             Log In
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link js-scroll-trigger" href="">
    //             Sign Up
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
