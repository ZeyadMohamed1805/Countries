import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Country } from '../Country/Country';
import "../Styles/List/List.css";

export const List = () => {
  const [countriesAPI, setCountriesAPI] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {console.log(response.data); setCountriesAPI(response.data)});
  }, []);

  return (
    <div id="list">
        <div id="list-container">
          {countriesAPI.map(country => (<Country key={countriesAPI.indexOf(country)} image={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />))}
        </div>
    </div>
  )
}