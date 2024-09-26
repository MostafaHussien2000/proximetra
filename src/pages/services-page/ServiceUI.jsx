import React from "react";

function ServiceUI({ name, desc, banner, subServices }) {
  return (
    <section className="services-page__service">
      <header className="services-page__service__header">
        <div className="services-page__service__header__content">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
        <img
          className="services-page__service__header__banner"
          src={banner}
          alt={name}
        />
      </header>
      {subServices.map((subService, index) => (
        <SubService
          key={index}
          index={index}
          title={subService.title}
          cards={subService.cards}
        />
      ))}
    </section>
  );
}

export default ServiceUI;

function SubService({ index, title, cards }) {
  return (
    <div className="services-page__service__sub-service">
      <h1>
        <span>0{index + 1}</span>
        {title}
      </h1>
      <div className="services-page__service__cards">
        {cards.map((card, index) => (
          <SubServiceCard
            key={index}
            icon={card.icon}
            name={card.name}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
}

function SubServiceCard({ icon, name, desc }) {
  const Icon = icon();
  return (
    <div className="services-page__service__cards__card">
      <div className="services-page__service__cards__card__icon">
        <Icon />
      </div>
      <h3 className="services-page__service__cards__card__name">{name}</h3>
      <p className="services-page__service__cards__card__desc">{desc}</p>
    </div>
  );
}
