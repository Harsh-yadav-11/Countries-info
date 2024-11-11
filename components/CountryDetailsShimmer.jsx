import React from "react";
import "./CountryDetailsShimmer.css"; // Import the CSS for shimmer

export default function CountryDetailsShimmer() {
  return (
    <div className="country-details-container shimmer">
      <div className="country-details shimmer-img">
        <div className="shimmer-img-container"></div>
        <div className="details-text-container">
          <div className="shimmer-element shimmer-title"></div>
          <div className="details-text">
            <div className="shimmer-element"></div>
            <div className="shimmer-element"></div>
            <div className="shimmer-element"></div>
            <div className="shimmer-element"></div>
            <div className="shimmer-element extra"></div>
            <div className="shimmer-element extra"></div>
          </div>
          <div className="border-countries">
            <div className="shimmer-element border-shimmer"></div>
            <div className="shimmer-element border-shimmer"></div>
            <div className="shimmer-element border-shimmer"></div>
            <div className="shimmer-element border-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
