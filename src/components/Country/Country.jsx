import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country.flags.png);
  return (
    <div className="country">
      <h3>name : {country.name.common}</h3>
      <img src={country.flags.png} alt="" />
      <p> Independent : {country.independent ? "Free" : "Not Free"} </p>
      <p> Area : {country.area} </p>
      <p> Population : {country.population} </p>
      <p> Region : {country.region} </p>
    </div>
  );
};

export default Country;
