import React, {useContext} from 'react';
import { APIContext } from "../../App";
import "../Styles/Details/Details.css";

export const Details = () => {
  const APIData = useContext(APIContext);
  const index = Number(window.location.pathname.slice(1, window.location.pathname.length));
  console.log(APIData);

  const lengthCheck = () => {
    if (APIData.length !== 0) {
      return (
        <div id="details-content">
          <img src={APIData[index].flags.png} alt={APIData[index].name.common} />
          <div id="details-info">
            <h1>{APIData[index].name.common}</h1>
            <div id="details-flex">
              <div id="details-left">
                <h3>Native Name: {APIData[index].name.nativeName.deu.common}</h3> {/* */}
                <h3>Population: <span>{APIData[index].population}</span></h3>
                <h3>Region: <span>{APIData[index].region}</span></h3>
                <h3>Sub Region: <span>{APIData[index].subregion}</span></h3>
                <h3>Captial: <span>{APIData[index].captial}</span></h3> {/* */}
              </div>
              <div id="details-right">
              <h3>Top Level Domain: <span>{APIData[index].tld[0]}</span></h3> {/* */}
              <h3>Currencies: <span>{APIData[index].currencies.XCD}</span></h3> {/* */}
              {/* <h3>Languages: {APIData[index].languages.map(language => (<span>{language}</span>))}</h3> */} {/* */}
              </div>
            </div>
            <div id="details-border">
              <h3>Border Countries: </h3>
              {/* {APIData[index].map(border => <button>{border}</button>)} */} {/* */}
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div id="details">
      <div id="details-container">
        <button><i className="fa-solid fa-arrow-left"></i> Back</button>
        {lengthCheck()}
      </div>
    </div>
  )
}
