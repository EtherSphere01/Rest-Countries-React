import React from "react";

const Country = ({country}) => {
  console.log(country);
  return (
    <div>
      <h3>name : {country.name.common}</h3>
    </div>
  );
};

export default Country;
