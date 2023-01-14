import React from 'react'
import "../Components/Styles/Home/Home.css";
import { Filter } from "../Components/Filter/Filter";
import { List } from '../Components/List/List';

export const Home = () => {
  return (
    <div id="home">
        <div id="home-container">
          <Filter />
          <List />
        </div>
    </div>
  )
}
