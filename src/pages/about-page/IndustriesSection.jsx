import React from "react";
import { Link } from "react-router-dom";

function IndustriesSection() {
  const industries = [
    {
      name: "Engineering",
      desc: "From civil and structural to electrical and mechanical engineering, our experts provide tailored solutions to enhance productivity and efficiency.",
      cover:
        "https://th.bing.com/th/id/OIP.d7CTN9gua803gF02qsQcCwHaFj?rs=1&pid=ImgDetMain",
    },
    {
      name: "Government",
      desc: "We partner with local and national government agencies to provide sustainable engineering and technology solutions that address the unique needs of public sector projects.",
      cover:
        "https://wonderfulengineering.com/wp-content/uploads/2014/03/engineering-pictures-11.jpg",
    },
    {
      name: "Healthcare",
      desc: "Our solutions for the healthcare industry focus on improving patient outcomes through advanced engineering and IT systems.",
      cover:
        "https://th.bing.com/th/id/OIP.TOskQy9yW3nc3fma4JjsrAHaFF?rs=1&pid=ImgDetMain",
    },
    {
      name: "Energy",
      desc: "We help energy companies optimize their operations, from exploration and production to distribution and consumption.",
      cover:
        "https://th.bing.com/th/id/R.a4b1ed8654e4c5fe5f8d3fcda9d45dd3?rik=Ojc0lFkNswniOQ&pid=ImgRaw&r=0",
    },
    {
      name: "Telecommunications",
      desc: "Our IT and engineering services support telecommunications companies in building scalable, secure, and efficient networks.",
      cover:
        "https://th.bing.com/th/id/R.cd5a272288421105f628272cf1beca93?rik=R0I0WLPi8DvdmA&pid=ImgRaw&r=0",
    },
  ];
  return (
    <section className="about-us__industries">
      <h1>Industries We Serve</h1>
      <p>
        We serve a wide range of industries, including construction, energy,
        manufacturing, transportation, healthcare, and aerospace. Our expert
        team delivers tailored solutions that enhance efficiency,
        sustainability, and innovation, helping clients achieve their project
        goals and drive growth.
      </p>
      <div className="about-us__industries__grid">
        {industries.map((item, index) => (
          <IndustryCard key={index} industry={item} />
        ))}
      </div>
      <center>
        <Link to="/industries">Learn More</Link>
      </center>
    </section>
  );
}

export default IndustriesSection;

function IndustryCard({ industry }) {
  return (
    <div className="about-us__industries__grid__industry-card">
      <div className="about-us__industries__grid__industry-card__banner">
        <img loading="lazy" src={industry.cover} alt={industry.name} />
      </div>
      <div className="about-us__industries__grid__industry-card__content">
        <h3>{industry.name}</h3>
        <p>{industry.desc}</p>
      </div>
    </div>
  );
}
