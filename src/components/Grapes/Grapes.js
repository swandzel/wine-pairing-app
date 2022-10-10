import React from "react";
import "./Grapes.css";

const Grapes = ({ pairedWines, pairingText }) => {
  return (
    <div>
      <div className="grapes">
        {pairedWines?.map((pairedWine, index) => (
          <span className="grape" key={index} data-testid="grapes">
            {pairedWine}
          </span>
        ))}
      </div>
      <div className="description">{pairingText}</div>
    </div>
  );
};

export default Grapes;
