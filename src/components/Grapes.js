import React from "react";
import "./Grapes.css";

function Grapes(props) {
  return (
    <div>
      {props.pairingText !== "" ? (
        <>
          <div className="grapes">
            {props.pairedWines.map((grape) => (
              <span className="grape" key={grape}>
                {grape}
              </span>
            ))}
          </div>
          <div className="description">{props.pairingText}</div>
        </>
      ) : (
        <span className="error">
          Could not find a wine pairing for this query.
        </span>
      )}
    </div>
  );
}

export default Grapes;
