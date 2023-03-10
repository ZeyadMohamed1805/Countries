import "./Pages/Styles/App/App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Pages/Components/Nav/Nav";
import { Home } from "./Pages/Home/Home";
import { Details } from "./Pages/Details/Details";
import { createContext, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import axios from "axios";

export const APIContext = createContext();

function App() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setAPIData(response.data))
  }, []);

  return (
    <HashRouter>
      <APIContext.Provider value={APIData}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
      </APIContext.Provider>
    </HashRouter>
  );
}

export default App;