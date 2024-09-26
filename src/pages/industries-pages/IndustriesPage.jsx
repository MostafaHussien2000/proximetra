import React, { useState } from "react";
import industries from "./data";

function IndustriesPage() {
  const [popup, showPopup] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState({});
  return (
    <main className="industries-page">
      {popup ? (
        <IndustryPopUp show={showPopup} industry={selectedIndustry} />
      ) : (
        <></>
      )}
      <h1>Industries We Serve</h1>
      <p>
        At <b>Proximetra Solutions Ltd.</b>, we are proud to provide
        cutting-edge engineering, technology, and consulting solutions across a
        broad spectrum of industries. Our expertise enables us to deliver
        tailored services to businesses, government agencies, healthcare
        institutions, and other key sectors, ensuring impactful results and
        sustainable growth.
      </p>
      <div className="industries-page__grid">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            onClick={() => {
              setSelectedIndustry(industry);
              showPopup(true);
            }}
          >
            <IndustryCard industry={industry} />
          </div>
        ))}
      </div>

      <section className="about-us__contact">
        <h1>Partnering for Success Across Industries</h1>
        <p>
          Proximetra Solutions Ltd. combines industry expertise with innovative
          solutions to serve clients across diverse sectors. Our commitment to
          sustainability, efficiency, and quality ensures that no matter the
          industry, we deliver results that exceed expectations.
        </p>
      </section>
    </main>
  );
}

export default IndustriesPage;

function IndustryCard({ industry }) {
  return (
    <div className="industries-page__grid__industry-card">
      <div className="industries-page__grid__industry-card__banner">
        <img loading="lazy" src={industry.banner} alt={industry.name} />
      </div>
      <div className="industries-page__grid__industry-card__content">
        <h3>{industry.name}</h3>
        <p>{industry.desc}</p>
      </div>
    </div>
  );
}

function IndustryPopUp({ industry, show }) {
  return (
    <div className="popup" onClick={() => show(false)}>
      <div className="popup__body" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => show(false)}>×</button>
        <div className="popup__body__banner">
          <img src={industry.banner} alt={industry.name} />
          <h1 style={{ marginTop: "30px" }}>{industry.name}</h1>
        </div>
        <p>{industry.desc}</p>
        <div>
          {industry.points.map((point, index) => (
            <div key={index} style={{ marginTop: "30px" }}>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
