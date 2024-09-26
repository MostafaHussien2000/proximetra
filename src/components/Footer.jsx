import React from "react";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ImLinkedin, ImYoutube } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__col" id="footer-col-1">
        <div className="logo">
          <img src={logo} alt="Proximetra" />
        </div>
        <p>©2024 Proximetra Solutions Ltd. Engineering, Inc.</p>
        <div className="social-links">
          <a
            href="http://linkedin.com/company/proximetra-solutions-ltd"
            target="_blank"
          >
            <ImLinkedin />
          </a>
          <a href="https://www.youtube.com/@ProximetraSolution" target="_blank">
            <ImYoutube />
          </a>
          <a href="mailto:info@proximetra.com">
            <IoIosMail />
          </a>
        </div>
        <p>
          <b>Tel:</b> 281-699-4093
        </p>
        <p>
          <b>Address:</b> 440 Louisiana St, Houston, 77002
        </p>
        <div className="internal-links">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <Link to={"/terms-of-service"}>Terms of Service</Link>
        </div>
      </div>
      <div className="footer__col" id="footer-col-2">
        <ul>
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
      </div>
      <div className="footer__col" id="footer-col-3">
        <Link to="/about">Know more about us</Link>
      </div>
    </footer>
  );
}

export default Footer;
