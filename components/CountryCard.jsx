import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  region,
  capital,
  population,
  area,
  flags,
  unMember,
  data,
}) {
  function unmamb() {
    if (unMember == true) {
      unMember = "Yes";
    } else {
      unMember = "NO";
    }
    return unMember;
  }

  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img src={flags} alt={name + " Flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Area: </b>
          {area}
        </p>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
        <p>
          <b>UN Mamber: </b>
          {unmamb()}
        </p>
      </div>
    </Link>
  );
}
