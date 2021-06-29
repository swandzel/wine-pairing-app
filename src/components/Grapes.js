import React from "react";

function Grapes(props) {
  return (
    <div>
      <div className="grapes">{props.pairedWines}</div>
      <div className="description">{props.pairingText}</div>
    </div>
  );
}

export default Grapes;
