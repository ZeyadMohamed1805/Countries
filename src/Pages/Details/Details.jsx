import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { APIContext } from "../../App";
import "../Styles/Details/Details.css";

export const Details = () => {
  const APIData = useContext(APIContext);
  const index = Number(window.location.hash.slice(2, window.location.hash.length));
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/`);
  }

  const lengthCheck = () => {
    if (APIData.length !== 0) {
      const nativeNameObject = Object.keys(APIData[index].name).includes("nativeName") ? APIData[index].name.nativeName : null;
      const currenciesObject = Object.keys(APIData[index]).includes("currencies") ? APIData[index].currencies : null;
      const languagesObject = Object.keys(APIData[index]).includes("languages") ? APIData[index].languages : null;
      const image = Object.keys(APIData[index]).includes("flags") ? APIData[index].flags.png : "No Image";
      const name = Object.keys(APIData[index]).includes("name") ? APIData[index].name.common : "No Name";
      const nativeName = Object.keys(APIData[index].name).includes("nativeName") ? Object.values(nativeNameObject)[0].common : "No Native Name";
      const population = Object.keys(APIData[index]).includes("population") ? APIData[index].population.toLocaleString() : "No Population";
      const region = Object.keys(APIData[index]).includes("region") ? APIData[index].region : "No Region";
      const subregion = Object.keys(APIData[index]).includes("subregion") ? APIData[index].subregion : "No Subregion";
      const capital = Object.keys(APIData[index]).includes("capital") ? APIData[index].capital[0] : "No Capital";
      const topLevelDomain = Object.keys(APIData[index]).includes("tld") ? APIData[index].tld[0] : "No Top Level Domain";
      const currencies = Object.keys(APIData[index]).includes("currencies") ? Object.values(currenciesObject)[0].name : "No Currencies";
      const languages = Object.keys(APIData[index]).includes("languages") ? Object.values(languagesObject).join(", ") : "No Languages";
      const borders = Object.keys(APIData[index]).includes("borders") ? APIData[index].borders : "No Borders";

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
