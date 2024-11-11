import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        placeholder="Search for a country..."
        type="text"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
