import React from "react";

import { FaPeopleGroup } from "react-icons/fa6";

import { GrTechnology } from "react-icons/gr";
import { IoBuild } from "react-icons/io5";

function ServicesSection() {
  const services = [
    {
      title: "Engineering",
      icon: () => <IoBuild />,
      desc: "Our mechanical engineers use the latest tools and technology to develop new products and services that are cost efficient and sustainable.",
      color: "#ed1b2e",
    },
    {
      title: "Technology",
      icon: () => <GrTechnology />,
      desc: "The end-user experience drives our security and technology design. Our design is coordinated with the supporting MEP disciplines and architectural features yielding a seamless result.",
      color: "#939494",
    },
    {
      title: "Consulting",
      icon: () => <FaPeopleGroup />,
      desc: "Our engineering consulting services offer expert advice and innovative solutions to optimize your projects and ensure successful outcomes.",
      color: "#a6be3a",
    },
  ];

  return (
    <section className="home-page__services">
      <h1>Our Services</h1>
      <p>
        Modern buildings rely on multifaceted systems to provide healthy,
        comfortable, durable, and user-friendly environments. From design
        through construction and operation, our engineers continually seek
        inventive and comprehensive solutions to achieve our goals of
        sustainability and longevity for each building.
      </p>
      <div className="home-page__services__cards">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

function ServiceCard({ service }) {
  return (
    <div className="home-page__services__cards__card">
      <div
        style={{ background: service.color }}
        className="home-page__services__cards__card__icon"
      >
        {service.icon()}
      </div>
      <h3 className="home-page__services__cards__card__title">
        {service.title}
      </h3>
      <p className="home-page__services__cards__card__desc">{service.desc}</p>
    </div>
  );
}
