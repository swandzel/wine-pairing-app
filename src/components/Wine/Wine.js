import React from "react";
import "./Wine.css";

const Wine = ({ productMatches }) => {
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
          <img src={productMatches?.imageUrl} alt="Our recommended wine" />
        </div>
      </div>
    </div>
  );
};

export default Wine;
