// ProductSlider.js

import React, { useState } from "react";
import "./ProductSlider.css";

const ProductSlider = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const itemsToShow = 4;

  const handlePrev = () => {
    setCurrentItem(
      currentItem === 0 ? items.length - itemsToShow : currentItem - 1,
    );
  };

  const handleNext = () => {
    setCurrentItem(
      currentItem === items.length - itemsToShow ? 0 : currentItem + 1,
    );
  };

  return (
    

    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-content">
        {items
          .slice(currentItem, currentItem + itemsToShow)
          .map((item, index) => (
            <div key={index} className="carousel-item">
              <img
                src={item.image}
                alt={item.description}
                className="card-image"
              />
              <div className="card-description">{item.description}</div>
            </div>
          ))}
      </div>
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ProductSlider;
