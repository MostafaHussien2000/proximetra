import React from "react";

import homeBanner from "../../assets/home-banner.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="home-page__hero-section">
      <div className="home-page__hero-section__banner">
        <img
          src={homeBanner}
          alt="Home page banner"
          sizes="(max-width: 2250px) 100vw, 2250px"
        />
      </div>
      <header>
        <h1>
          Empowering Innovation Across Engineering, Technology, and Consulting.
        </h1>
        <p>
          Proximetra Solutions Ltd.: Transforming businesses with cutting-edge
          engineering and strategic tech solutions since 2020.
        </p>
        <Link to="/services">Learn more about our services</Link>
      </header>
    </section>
  );
}

export default HeroSection;
