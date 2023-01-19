import React from 'react';
import { useNavigate } from 'react-router';
import "../../Styles/Country/Country.css";

export const Country = (props) => {
  const navigate = useNavigate();
  
  const handleRoute = () => {
    navigate(`/${props.id}`);
  }
  
  return (
    <div id="country" onClick={handleRoute}>
        <img src={`${props.image}`} alt={props.name} />
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
