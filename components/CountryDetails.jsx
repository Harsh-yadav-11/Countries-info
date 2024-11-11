import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./CountryDetails.css";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {
  const [isDark] = useTheme();
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  console.log(state);

  function updateCountryData(data) {
    setCountryData({
      flags: data.flags?.svg,
      name: data.name?.common,
      nativeName:
        Object.values(data.name?.nativeName || {})[0]?.common || "N/A",
      population: data.population?.toLocaleString("en-IN") || "N/A",
      region: data.region || "N/A",
      subregion: data.subregion || "N/A",
      capital: data.capital?.join(", ") || "N/A",
      currencies: Object.values(data.currencies || {})[0]?.name || "N/A",
      currenciesSymbol: Object.values(data.currencies || {})[0]?.symbol || "",
      languages: Object.values(data.languages || {}).join(", ") || "N/A",
      tld: data.tld?.[0] || "N/A",
      borders: data.borders || [],
      maps: data.maps?.googleMaps || "",
    });

    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Country Not Found</h2>
      </div>
    );
  }

  return !countryData ? (
    <CountryDetailsShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flags} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name" />
                &nbsp;{countryData.nativeName || countryData.name}
              </p>
              <p>
                <b>Population: </b>
                <span className="population" />
                &nbsp;{countryData.population.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region: </b>
                <span className="region" />
                &nbsp;{countryData.region}
              </p>
              <p>
                <b>Sub Region:</b>
                <span className="sub-region" />
                &nbsp;{countryData.subregion}{" "}
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital" />
                &nbsp;{countryData.capital}
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain" />
                &nbsp;{countryData.tld}
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies" />
                &nbsp;{countryData.currenciesSymbol}&nbsp;
                {countryData.currencies}
              </p>
              <p>
                <b>Languages:</b>
                <span className="languages" />
                &nbsp;{countryData.languages}{" "}
              </p>
              <p>
                <b>Location:</b>
                <span className="location" />
                &nbsp;
                <Link className="location-a" to={countryData.maps}>
                  🗺️ Map
                </Link>
              </p>
              {countryData.borders.length !== 0 && (
                <p className="dev-border">
                  <b>Border Countries:</b>
                  <ul className="borders-list ">
                    {countryData.borders.map((border) => (
                      <li key={border}>
                        <Link className="Country-a" to={`/${border}`}>
                          {border}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
