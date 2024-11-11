import React from "react";
import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  const mapped = Array.from({ length: 100 }).map((el, i) => {
    return <div key={i} className="country-card shimmer-card"></div>;
  });
  return <div className="countries-container">{mapped}</div>;
}
