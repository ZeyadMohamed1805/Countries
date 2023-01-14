import React from 'react';
import "../Styles/Filter/Filter.css";

export const Filter = () => {
  return (
    <div id="filter">
      <div id="search-container">
        <input id="search" type="search" placeholder="Search for a country..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <select id="select" defaultValue="none">
        <option value="none" disabled hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
