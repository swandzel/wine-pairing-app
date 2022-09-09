import React from "react";
import "./Logo.css";

const Logo = ({ refreshPage }) => {
  return (
    <div className="logo" onClick={refreshPage}>
      <i className="fas fa-wine-glass-alt glass"></i>
      wine pairing app
    </div>
  );
};

export default Logo;
