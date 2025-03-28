import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.flags.png);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? `country-visited` : ""}`}>
      <h3>name : {country.name.common}</h3>
      <img src={country.flags.png} alt="" />
      <p> Independent : {country.independent ? "Free" : "Not Free"} </p>
      <p> Area : {country.area} </p>
      <p> Population : {country.population} </p>
      <p> Region : {country.region} </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
