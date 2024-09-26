import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import IndustriesSection from "./IndustriesSection";
import ProjectsSection from "./ProjectsSection";

function HomePage() {
  document.title = "Proximetra";
  return (
    <main className="home-page">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <IndustriesSection />
      <ProjectsSection />
    </main>
  );
}

export default HomePage;
