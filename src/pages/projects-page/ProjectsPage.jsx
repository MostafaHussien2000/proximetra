import React from "react";
import { Link } from "react-router-dom";
import projects from "./data";

function ProjectsPage() {
  return (
    <main className="projects-page">
      <h1>Our Projects</h1>
      <p>
        At <b>Proximetra Solutions Ltd.</b>, we take pride in delivering
        successful engineering, technology, and consulting projects for a wide
        range of clients. From government initiatives to large-scale corporate
        ventures, we have a proven track record of exceeding client
        expectations. Here’s a look at some of our standout projects across
        Houston and Dallas, Texas.
      </p>

      <section className="projects-page__categories">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="about-us__contact">
        <h1>Our Commitment to Excellence</h1>
        <p>
          Proximetra Solutions Ltd. is dedicated to delivering exceptional
          results for our clients across all sectors. Whether it’s large-scale
          infrastructure projects, commercial developments, or energy
          modernization, we bring the same level of dedication, innovation, and
          expertise to every project we undertake.
        </p>
        <p>
          By partnering with leading organizations and public sector clients, we
          continue to drive success and deliver projects that make a positive
          impact in Houston, Dallas, and beyond.
        </p>
      </section>
    </main>
  );
}

export default ProjectsPage;

function ProjectCard({ project }) {
  const Icon = project.icon();
  return (
    <div className="projects-page__project-card">
      <div className="projects-page__project-card__icon">
        <Icon />
      </div>
      <h3>{project.category}</h3>
      <Link to={`/work/${project.slug}`}>View Projects</Link>
    </div>
  );
}
