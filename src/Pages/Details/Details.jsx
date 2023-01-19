import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { APIContext } from "../../App";
import "../Styles/Details/Details.css";

export const Details = () => {
  const APIData = useContext(APIContext);
  const index = Number(window.location.pathname.slice(1, window.location.pathname.length));
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/`);
  }

  const lengthCheck = () => {
    if (APIData.length !== 0) {
      const nativeNameObject = APIData[index].name.nativeName;
      const currenciesObject = APIData[index].currencies;
      const languagesObject = APIData[index].languages;
      const image = APIData[index].flags.png;
      const name = APIData[index].name.common;
      const nativeName = Object.values(nativeNameObject)[0].common;
      const population = APIData[index].population;
      const region = APIData[index].region;
      const subregion = APIData[index].subregion;
      const capital = APIData[index].capital[0];
      const topLevelDomain = APIData[index].tld[0];
      const currencies = Object.values(currenciesObject)[0].name;
      const languages = Object.values(languagesObject).join(", ");
      const borders = APIData[index].borders;

      return (
        <div id="details-content">
          <img src={image} alt={name} />
          <div id="details-info">
            <h1>{name}</h1>
            <div id="details-flex">
              <div id="details-left">
                <h3>Native Name: <span>{nativeName}</span></h3>
                <h3>Population: <span>{population}</span></h3>
                <h3>Region: <span>{region}</span></h3>
                <h3>Sub Region: <span>{subregion}</span></h3>
                <h3>Captial: <span>{capital}</span></h3>
              </div>
              <div id="details-right">
              <h3>Top Level Domain: <span>{topLevelDomain}</span></h3>
              <h3>Currencies: <span>{currencies}</span></h3>
              <h3>Languages: <span>{languages}</span></h3>
              </div>
            </div>
              { Object.values(APIData[index]).includes(borders) ?
                  <div id="details-border">
                    <h3>Border Countries: </h3>
                    <div id="details-button">{borders.map(border => <button key={borders.indexOf(border)}>{border}</button>)}</div>
                  </div>
                : null
              }
          </div>
        </div>
      )
    }
  }

  return (
    <div id="details">
      <div id="details-container">
        <button id="back-button" onClick={handleRoute}><i className="fa-solid fa-arrow-left"></i> Back</button>
        {lengthCheck()}
      </div>
    </div>
  )
}
