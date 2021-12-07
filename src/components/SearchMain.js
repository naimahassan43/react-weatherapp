import React, { useState } from "react";
import "./style.css";
function SearchMain() {
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="Search city..."
          id="search"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>
      <button className="searchButton"> Search</button>
    </div>
  );
}

export default SearchMain;
