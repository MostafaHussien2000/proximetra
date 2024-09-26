import React from "react";
import AboutSection from "./AboutSection";
import VisionSection from "./VisionSection";
import OurMissionSection from "./OurMissionSection";
import FeaturesSection from "./FeaturesSection";
import CoreValuesSection from "./CoreValuesSection";
import IndustriesSection from "./IndustriesSection";
import ContactSection from "./ContactSection";

function AboutPage() {
  document.title = "About Us - Proximetra";
  return (
    <main className="about-us">
      <h1>Welcome to Proximetra Solutions Ltd.</h1>
      <AboutSection />
      <VisionSection />
      <OurMissionSection />
      <CoreValuesSection />
      {/* History */}
      {/* Why Choose Us Section */}
      <IndustriesSection />
      {/* Community */}
      <ContactSection />
    </main>
  );
}

export default AboutPage;
