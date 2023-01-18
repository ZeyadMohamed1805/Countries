import React, {useContext} from 'react';
import { APIContext } from "../../App";
import "../Styles/Details/Details.css";

export const Details = () => {
  const APIData = useContext(APIContext);
  const index = Number(window.location.pathname.slice(1, window.location.pathname.length));
  return (
    <div id="details">
      <div id="details-container">
        <button><i className="fa-solid fa-arrow-left"></i> Back</button>
        <div id="details-content">
        </div>
      </div>
    </div>
  )
}
