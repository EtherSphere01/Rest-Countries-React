import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleFlags }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.flags.png);
  // console.log(handleVisitedCountries);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country, visited);
  };
  const handleFlag = () => {
    handleFlags(country.flags.png);
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
      <button onClick={handleFlag}>Show Flag</button>
    </div>
  );
};

export default Country;
