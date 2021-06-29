import React from "react";

function Wine(props) {
  return (
    <div>
      <div className="productTitle">{props.productMatches.title}</div>
      <div className="productDescription">
        {props.productMatches.description}
      </div>
      <img
        className="image"
        src={props.productMatches.imageUrl}
        alt={props.productMatches.title}
      />
      <div className="price">{props.productMatches.price}</div>
      <div className="link">{props.productMatches.link}</div>
    </div>
  );
}

export default Wine;
