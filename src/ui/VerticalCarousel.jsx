import React, { useState } from "react";

const VerticalCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "up") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (direction === "down") {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
    }
  };

  return (
    <div className="vertical-carousel">
      <button
        className="carousel-control up"
        onClick={() => handleScroll("up")}
      >
        &#9650;
      </button>
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="carousel-control down"
        onClick={() => handleScroll("down")}
      >
        &#9660;
      </button>
    </div>
  );
};

export default VerticalCarousel;
