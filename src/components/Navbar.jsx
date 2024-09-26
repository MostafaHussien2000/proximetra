import React, { useState } from "react";

import logo from "../assets/logo.png";
import BurgerMenu from "../ui/BurgerMenu";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navMenu, showNavMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const toggleNavMenu = () => {
    showNavMenu(!navMenu);
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const routesToStartDark = [
    "/work/government-and-public-sector",
    "/work/healthcare",
    "/work/industrial",
    "/work/energy",
    "/work/educational",
    "/work/commercial",
  ];

  return (
    <nav
      id="navbar"
      className={`${scrolled ? "scrolled" : ""} ${
        location.pathname === "/" ||
        routesToStartDark.includes(location.pathname)
          ? "start-light"
          : ""
      }`}
    >
      <Link to={"/"} className="logo">
        <img src={logo} alt="Proximetra Logo" width="170px" />
      </Link>
      <BurgerMenu isOpen={navMenu} setIsOpen={showNavMenu} />
      <ul className={`menu ${navMenu ? "open" : ""}`}>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/industries"}>Industries</Link>
        </li>
        <li>
          <Link to={"/work"}>Projects & Case Studies</Link>
        </li>
        <li>
          <Link to={"/careers"}>Careers</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
