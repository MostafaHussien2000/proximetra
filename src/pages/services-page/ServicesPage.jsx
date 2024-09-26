import React from "react";
import ServiceUI from "./ServiceUI";
import services from "./services";
import WhyUsSection from "./WhyUsSection";

function ServicesPage() {
  document.title = "Services - Proximetra";
  return (
    <main className="services-page">
      <h1>Our Services</h1>
      <p>
        At <b>Proximetra Solutions Ltd.</b>, we deliver a wide range of
        specialized services tailored to meet the needs of our clients in
        engineering, technology, and consulting. Our team of professionals
        combines industry expertise with innovative approaches to deliver
        effective, sustainable, and efficient solutions. Explore our key service
        areas below:
      </p>
      {services.map((service, index) => (
        <ServiceUI
          key={index}
          name={service.name}
          desc={service.desc}
          subServices={service.subServices}
          banner={service.banner}
        />
      ))}
      <WhyUsSection />
    </main>
  );
}

export default ServicesPage;
