import React from "react";

import valuesImageIntegrity from "../../assets/about-values-integrity.jpg";
import valuesImageInnovation from "../../assets/about-values-innovation.jpg";
import valuesImageExcellence from "../../assets/about-values-excellence.jpg";
import valuesImageCollaboration from "../../assets/about-mission-1.jpg";
import valuesImageSustainability from "../../assets/home-about.jpg";

function CoreValuesSection() {
  const values = [
    {
      title: "Integrity",
      desc: "We hold ourselves to the highest ethical standards, ensuring transparency and honesty in every project.",
      imgAttributes: {
        src: valuesImageIntegrity,
        alt: "Integrity",
      },
    },
    {
      title: "Innovation",
      desc: "We embrace change and are always looking for ways to innovate and improve our offerings.",
      imgAttributes: {
        src: valuesImageInnovation,
        alt: "Innovation",
      },
    },
    {
      title: "Excellence",
      desc: "We pursue excellence in every aspect of our work, consistently delivering high-quality results.",
      imgAttributes: {
        src: valuesImageExcellence,
        alt: "Excellence",
      },
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork—internally and with our clients—to achieve shared success.",
      imgAttributes: {
        src: valuesImageCollaboration,
        alt: "Collaboration",
      },
    },
    {
      title: "Sustainability",
      desc: "We are committed to environmental responsibility and ensuring that our solutions contribute to a sustainable future.",
      imgAttributes: {
        src: valuesImageSustainability,
        alt: "Sustainability",
      },
    },
  ];
  return (
    <section className="about-us__values">
      <h1>Core Values</h1>
      <div className="about-us__values__grid">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            desc={value.desc}
            imgAttributes={value.imgAttributes}
          />
        ))}
      </div>
    </section>
  );
}

export default CoreValuesSection;

function ValueCard({ title, desc, imgAttributes }) {
  return (
    <div className="about-us__values__grid__card">
      <img
        loading="lazy"
        decoding="async"
        src={imgAttributes.src}
        alt={imgAttributes.alt}
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <div className="about-us__values__grid__card__text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
