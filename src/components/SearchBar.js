import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          onChange={(e) => props.queryFromSearch(e.target.value)}
          value={props.query}
          onKeyPress={props.search}
          placeholder="Look for wine for yourself "
        />
      </div>
      <button className="search-btn" onClick={props.fetchFunc}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
