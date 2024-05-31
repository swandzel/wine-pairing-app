import React from "react";

import placeholderImage from "../../img/wine-placeholder.webp";

import "./Wine.css";

const Wine = ({ productMatches }) => {
  const handleImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <div className="container-wine">
      <div className="product-container">
        <div className="product">
          <div className="productTitle">{productMatches?.title}</div>
          <div className="product-description">
            {productMatches?.description}
          </div>
          <a href={productMatches?.link} target="_blank" rel="noreferrer">
            <button className="buy">
              Buy This Wine ({productMatches?.price})
            </button>
          </a>
        </div>
        <div className="image">
          <img
            src={productMatches?.imageUrl}
            alt="Our recommended wine"
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
};

export default Wine;
