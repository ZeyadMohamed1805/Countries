import React from 'react'
import "../Components/Styles/Home/Home.css";
import { Filter } from "../Components/Filter/Filter";

export const Home = () => {
  return (
    <div id="home">
        <div id="home-container">
          <Filter />
        </div>
    </div>
  )
}
