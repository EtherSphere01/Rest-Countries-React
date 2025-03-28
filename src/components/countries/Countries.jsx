import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountCountries] = useState([]);
  const [visitedCount, setVisitedCount] = useState(0);
  const [flag, setFlag] = useState("");
  const countries = use(countriesPromise);

  const handleVisitedCountries = (country, visited) => {
    if (!visited) {
      setVisitedCount(visitedCount + 1);
      console.log("Visited Countries", country.name.common);
      setVisitedCountCountries((prevVisitedCountries) => [
        ...prevVisitedCountries,
        country.name.common,
      ]);
    } else {
      setVisitedCount(visitedCount - 1);
      console.log("Unvisited Countries", country.name.common);
      setVisitedCountCountries((prevVisitedCountries) =>
        prevVisitedCountries.filter((name) => name !== country.name.common)
      );
    }
  };

  const handleFlags = (link) => {
    setFlag(link);
  };
  //   console.log(countries);
  return (
    <div>
      <h1>Traveling Countries : {countries.length}</h1>
      <h2>Total Country Visited : {visitedCount} </h2>

      <ol>
        {visitedCountries.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>

      <img src={flag} alt="" />

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
