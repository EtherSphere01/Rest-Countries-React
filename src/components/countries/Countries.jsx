import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromies }) => {
  const countries = use(countriesPromies);
//   console.log(countries);
  return (
    <div>
      <h1>Travelling Countries : {countries.length}</h1>
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
