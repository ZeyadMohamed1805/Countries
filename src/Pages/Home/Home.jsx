import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../Components/Styles/Home/Home.css";
import { Country } from "../Components/Country/Country";

export const Home = () => {
  const [countriesAPI, setCountriesAPI] = useState([]);
  const [counter, setCounter] = useState(11);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {setCountriesAPI(response.data)});
  }, []);

  return (
    <div id="home">
        <div id="home-container">
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
          <div id="list">
            <div id="list-container">
              {countriesAPI.filter(country => countriesAPI.indexOf(country) <= counter).map(country => (<Country key={countriesAPI.indexOf(country)} image={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />))}
            </div>
          </div>
          <button onClick={() => setCounter(previous => previous + 12)}>Load More</button>
        </div>
    </div>
  )
}
