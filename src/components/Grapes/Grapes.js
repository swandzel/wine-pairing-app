import React from "react";
import "./Grapes.css";

const Grapes = ({ pairedWines, pairingText }) => {
  const pairedWinesWithCommas = pairedWines.join(', ')
  
  return (
    <div>
      <div className="grapes">
          <span className="grape" data-testid="grapes">
            {pairedWinesWithCommas}
          </span>
      </div>
      <div className="description">{pairingText}</div>
    </div>
  );
};

export default Grapes;
