import React from "react";
import VerticalCarousel from "../../ui/VerticalCarousel";
import { Link } from "react-router-dom";

function ProjectsSection() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <section className="about-us__contact home-page__projects">
      <h1>Our Work</h1>
      <p>
        When you choose Proximetra, you receive the benefit of years of building
        system designs as displayed in our diverse portfolio. Whether you are an
        Owner, Developer, or Architect, we will deliver you a healthy building.
      </p>
      <Link to={"/projects"}>View all projects</Link>
    </section>
  );
}

export default ProjectsSection;
