import React from 'react';
import "../Styles/Country/Country.css";

export const Country = (props) => {
  return (
    <div id="country">
        <img src={`${props.image}`} />
        <div id="country-body">
            <h3>{props.name}</h3>
            <div id="country-info">
                <h4>Population: <span>{props.population}</span></h4>
                <h4>Region: <span>{props.region}</span></h4>
                <h4>Capital: <span>{props.capital}</span></h4>
            </div>
        </div>
    </div>
  )
}
