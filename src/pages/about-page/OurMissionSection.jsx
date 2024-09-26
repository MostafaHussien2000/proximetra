import React from "react";

import aboutMissionImage2 from "../../assets/about-mission-2.jpg";
import aboutMissionImage1 from "../../assets/about-mission-1.jpg";

function OurMissionSection() {
  return (
    <section className="about-us__mission">
      <div className="about-us__mission__drop-shade"></div>
      <div className="about-us__mission__content">
        <div className="about-us__mission__content__left">
          <div className="about-us__mission__content__image">
            <img
              src={aboutMissionImage2}
              alt="Office inte rior with DBR logo"
            />
          </div>
        </div>
        <div className="about-us__mission__content__right">
          <h1>Our Mission</h1>
          <p>
            At Proximetra Solutions Ltd., our mission is to empower enterprises,
            governments, and organizations with innovative, reliable, and
            cost-effective solutions that address their unique needs. Through
            our robust service offerings, we help clients streamline their
            operations, stay ahead of technological advancements, and achieve
            their business objectives.
          </p>
          <p>
            We are committed to fostering long-term partnerships, rooted in
            trust, collaboration, and integrity. By consistently delivering
            results that exceed expectations, we aim to make a positive
            difference in the industries we serve and the communities we touch.
          </p>
          <div className="about-us__mission__content__image">
            <img src={aboutMissionImage1} alt="Image of people in office" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMissionSection;

/*
    <div className="image right">
        
    </div>
    <div className="text">
    <h1>Our Story</h1>
    <p>
        Founded in 1972, DBR has evolved into the premier MEP engineering firm
        in Texas, providing mechanical, electrical, and plumbing engineering
        services, as well as building commissioning, integrated technology,
        and security system consulting.
    </p>
    <p>
        DBR’s steady growth has been fueled by loyal clients who appreciate
        our willingness to listen, open-minded approach to problem-solving,
        and relentless commitment to service.
    </p>
    <p>
        Now, more than 50 years later, DBR has a team of over 200
        professionals in seven cities across the State of Texas. While our
        history guides our growth, our talented team of consultants are
        focused on the future. We are helping to create healthy and
        comfortable environments that will stand the test of time.
    </p>
    <div className="image">
        
    </div>
    </div>


*/
