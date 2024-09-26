import React from "react";

function ContactUsPage() {
  return (
    <main
      className="contact-us"
      style={{ minHeight: "85svh", paddingTop: "150px" }}
    >
      <section className="about-us__contact">
        <h1>Contact Us</h1>
        <p>
          If you’d like to learn more about Proximetra Solutions Ltd. or inquire
          about how we can help your business succeed, don’t hesitate to contact
          us.
        </p>
        <p>
          <span>Proximetra Solutions Ltd.</span>
          <a href="mailto:info@proximetra.com">info@proximetra.com</a>
        </p>
        <p>
          Or visit our page on{" "}
          <a
            href="http://linkedin.com/company/proximetra-solutions-ltd"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}

export default ContactUsPage;
