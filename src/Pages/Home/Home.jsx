import React, {useState, useContext} from 'react';
import "../Styles/Home/Home.css";
import { Country } from "../Components/Country/Country";
import { APIContext } from '../../App';

export const Home = () => {
  const APIData = useContext(APIContext);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(11);
  const [category, setCategory] = useState("none");

  return (
    <div id="home">
        <div id="home-container">
          <div id="filter">
            <div id="search-container">
              <input id="search" type="text" placeholder="Search for a country..." onChange={(e) => {document.querySelector("#load").style.display = "none"; setCounter(APIData.length); setSearch(e.target.value)}} />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <select id="select" defaultValue="none" onChange={(e) => {document.querySelector("#load").style.display = "none"; setCounter(APIData.length); setCategory(e.target.value)}}>
              <option value="none" disabled hidden>Filter by Region</option>
              <option value="Africa" >Africa</option>
              <option value="Americas" >Americas</option>
              <option value="Asia" >Asia</option>
              <option value="Europe" >Europe</option>
              <option value="Oceania" >Oceania</option>
            </select>
          </div>
          <div id="list">
            <div id="list-container">
              {APIData.filter(country => category === "none" ? country : country.region === category)
                           .filter(country => search.toLowerCase() === "" ? country : country.name.common.toLowerCase().includes(search))
                           .filter(country => APIData.indexOf(country) <= counter)
                           .map(country => (<Country key={APIData.indexOf(country)} id={APIData.indexOf(country)} image={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />))
              }
            </div>
          </div>
          <button id="load" onClick={() => setCounter(previous => previous + 12)}>Load More</button>
        </div>
    </div>
  )
}
