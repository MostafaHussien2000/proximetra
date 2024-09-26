import React from "react";
import { Link, useParams } from "react-router-dom";

import projects from "./data";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const category = projects.find((element) => element.slug === slug);

  return (
    <main className="project-page">
      <header className="project-page__header">
        <h1>{category.category}</h1>
        <img src={category.cover} alt="" />
      </header>
      <section className="project-page__projects">
        {category.projects.map((item, index) => (
          <div className="project-page__projects__item" key={index}>
            <h1>{item.name}</h1>
            <div className="project-page__projects__item__info">
              <p>
                <b>Client</b>
              </p>
              <p>{item.client}</p>
              <p>
                <b>Location</b>
              </p>
              <p>{item.location}</p>
              <p>
                <b>Scope of Work</b>
              </p>
              <p>{item.scope}</p>
            </div>
          </div>
        ))}
      </section>
      <Link to={"/work"}>Back to Work Page</Link>
    </main>
  );
}

export default ProjectDetailsPage;
