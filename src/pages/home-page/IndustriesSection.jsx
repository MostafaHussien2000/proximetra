import React from "react";

function IndustriesSection() {
  const industries = [
    {
      name: "Energy",
      cover:
        "https://th.bing.com/th/id/R.a4b1ed8654e4c5fe5f8d3fcda9d45dd3?rik=Ojc0lFkNswniOQ&pid=ImgRaw&r=0",
    },
    {
      name: "Manufacturing",
      cover:
        "https://th.bing.com/th/id/OIP.kFa4RiLoy_B95KzPxU_Y5gHaE8?rs=1&pid=ImgDetMain",
    },
    {
      name: "Healthcare",
      cover:
        "https://th.bing.com/th/id/OIP.TOskQy9yW3nc3fma4JjsrAHaFF?rs=1&pid=ImgDetMain",
    },
    {
      name: "Government",
      cover:
        "https://wonderfulengineering.com/wp-content/uploads/2014/03/engineering-pictures-11.jpg",
    },
    {
      name: "Technology",
      cover:
        "https://th.bing.com/th/id/R.cd5a272288421105f628272cf1beca93?rik=R0I0WLPi8DvdmA&pid=ImgRaw&r=0",
    },
  ];
  return (
    <section className="home-page__industries">
      <h1>Industries We Serve</h1>
      <p>
        We serve a wide range of industries, including construction, energy,
        manufacturing, transportation, healthcare, and aerospace. Our expert
        team delivers tailored solutions that enhance efficiency,
        sustainability, and innovation, helping clients achieve their project
        goals and drive growth.
      </p>
      <div className="home-page__industries__grid">
        {industries.map((item, index) => (
          <IndustryCard key={index} industry={item} />
        ))}
      </div>
    </section>
  );
}

export default IndustriesSection;

function IndustryCard({ industry }) {
  return (
    <div className="home-page__industries__grid__industry-card">
      <div className="home-page__industries__grid__industry-card__banner">
        <img loading="lazy" src={industry.cover} alt={industry.name} />
      </div>
      <div className="home-page__industries__grid__industry-card__name">
        <h3>{industry.name}</h3>
      </div>
    </div>
  );
}
