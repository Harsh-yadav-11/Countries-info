import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [cData, setCData] = useState([]);
  const [rData, setRData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setRData(data);
      });
  }, []);

  if (cData.length === 0) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className="countries-container">
        {cData
          .filter((country) =>
            (country.region, country.name.common).toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                name={country.name.common}
                flags={country.flags.svg}
                region={country.region}
                capital={country.capital}
                population={country.population}
                area={country.area}
                unMember={country.unMember}
                key={country.name.common}
                data={country}
              />
            );
          })}
        {rData
          .filter((country) => country.region.includes(query))
          .map((country) => {
            return (
              <CountryCard
                name={country.name.common}
                flags={country.flags.svg}
                region={country.region}
                capital={country.capital}
                population={country.population}
                area={country.area}
                unMember={country.unMember}
                key={country.name.common}
              />
            );
          })}
      </div>
    </>
  );
}
