import React from "react";
import "./Logo.css";

function Logo(props) {
  return (
    <div className="logo" onClick={props.refreshPage}>
      <i className="fas fa-wine-glass-alt glass"></i>
      wine pairing app
    </div>
  );
}

export default Logo;
