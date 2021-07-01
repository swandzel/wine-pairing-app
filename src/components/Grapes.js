import React from "react";
import "./Grapes.css";

function Grapes(props) {
  return (
    <div>
      <div className="grapes">
        {props.pairedWines.map((grape) => (
          <span className="grape" key={grape}>
            {grape}
          </span>
        ))}
      </div>
      <div className="description">{props.pairingText}</div>
    </div>
  );
}

export default Grapes;
