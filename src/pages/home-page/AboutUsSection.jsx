import React from "react";

import home01 from "../../assets/home-about.jpg";

function AboutUsSection() {
  return (
    <section className="home-page__about-us">
      <div className="home-page__about-us__text">
        <h1>About Us</h1>
        <p>
          Proximetra Solutions Ltd. is a pioneering engineering and consulting
          firm focused on innovative solutions to optimize buildings and enhance
          the lives of our residents.
        </p>
        <button>Learn More About Our Team</button>
      </div>
      <div className="home-page__about-us__image">
        <img
          loading="lazy"
          decoding="async"
          src={home01}
          alt="Proximetra's team"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
    </section>
  );
}

export default AboutUsSection;
