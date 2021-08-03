import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      Created by{" "}
      <a href="https://swandzel.pl/" target="_blank" rel="noreferrer">
        swandzel
      </a>{" "}
      with{" "}
      <a
        href="https://spoonacular.com/food-api"
        target="_blank"
        rel="noreferrer"
      >
        spoonacular API
      </a>
    </div>
  );
}

export default Footer;
