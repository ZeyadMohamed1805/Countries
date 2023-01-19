import React from 'react';
import { useState } from 'react';
import "../../Styles/Nav/Nav.css";

export const Nav = () => {
  const [mode, setMode] = useState("Dark");
  const [icon, setIcon] = useState("fa-regular fa-moon");

  const setColors = (variable, color) => {
    document.documentElement.style.setProperty(variable, color);
  }

  const handleTheme = () => {
    return mode === "Dark" ? (setMode("Light"), setIcon("fa-regular fa-sun"), setColors("--white", "hsl(209, 23%, 22%)"), setColors("--dark-blue", "hsl(0, 0%, 100%)"), setColors("--light-grey", "hsl(207, 26%, 17%)")) : (setMode("Dark"), setIcon("fa-regular fa-moon"), setColors("--white", "hsl(0, 0%, 100%)"), setColors("--dark-blue", "hsl(200, 15%, 8%)"), setColors("--light-grey", "hsl(0, 0%, 98%)"));
  }

  return (
    <div id="nav">
        <div id="nav-container">
            <h2>Where in the world?</h2>
            <button onClick={handleTheme}><i className={icon}></i> {`${mode} Mode`}</button>
        </div>
    </div>
  )
}