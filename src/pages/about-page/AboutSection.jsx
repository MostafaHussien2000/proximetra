import React from "react";

function AboutSection() {
  return (
    <section className="about-us__about">
      <div className="about-us__about__text">
        <h1>About Us</h1>
        <p>
          At Proximetra Solutions Ltd., we pride ourselves on being an industry
          leader in engineering, technology solutions, and strategic consultancy
          services. With a proven track record of delivering high-quality,
          innovative, and scalable solutions to global clients, we specialize in
          transforming complex problems into simplified,actionable outcomes for
          businesses/client of all sizes. Whether you’re looking for advanced
          engineering, cutting-edge IT infrastructure, or strategic consulting,
          we are your trusted partner to take your business to the next level.
        </p>
        <p>
          Our commitment is simple: we strive to provide unparalleled value by
          helping our clients optimize their operations, reduce costs, and
          achieve sustainable growth. With years of industry experience, we have
          developed a deep understanding of the dynamic nature of technology and
          engineering solutions, allowing us to provide customized services that
          cater to your specific needs.
        </p>
      </div>
      <div className="about-us__about__image">
        <iframe
          src="https://www.youtube.com/embed/8IxZkr-KHck?si=DWohrNHoPSw50qLN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default AboutSection;
