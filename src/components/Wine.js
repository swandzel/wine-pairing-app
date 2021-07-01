import React from "react";
import "./Wine.css";

function Wine(props) {
  return (
    <div className="container-wine">
      <div className="product-container">
        <div className="product">
          <div className="productTitle">{props.productMatches.title}</div>
          <div className="productDescription">
            {props.productMatches.description}
          </div>
          <a href={props.productMatches.link} target="_blank" rel="noreferrer">
            <button className="buy">
              Buy This Wine ({props.productMatches.price}
            </button>
          </a>
        </div>
        <img
          className="image"
          src={props.productMatches.imageUrl}
          alt="Our recommended wine"
        />
      </div>
    </div>
  );
}

export default Wine;
