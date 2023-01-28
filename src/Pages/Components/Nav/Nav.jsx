import React, { useState, useEffect } from 'react';
import "../../Styles/Nav/Nav.css";

export const Nav = () => {
  const [mode, setMode] = useState("Dark");
  const [icon, setIcon] = useState("fa-regular fa-moon");

  const setColors = (variable, color) => {
    document.documentElement.style.setProperty(variable, color);
  }

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      if (localStorage.mode === "Dark") {
        setMode("Dark");
        setIcon("fa-regular fa-moon");
        setColors("--white", "hsl(0, 0%, 100%)");
        setColors("--dark-blue", "hsl(200, 15%, 8%)");
        setColors("--light-grey", "hsl(0, 0%, 98%)");
      } else {
        setMode("Light");
        setIcon("fa-regular fa-sun");
        setColors("--white", "hsl(209, 23%, 22%)");
        setColors("--dark-blue", "hsl(0, 0%, 100%)");
        setColors("--light-grey", "hsl(207, 26%, 17%)");
      }
    } else {
      localStorage.setItem("mode", "Dark");
      localStorage.setItem("icon", "fa-regular fa-moon");
    }
  }, []);

  const handleTheme = () => {
    return mode === "Dark" ? (localStorage.setItem("mode", "Light"), localStorage.setItem("icon", "fa-regular fa-sun"), setMode("Light"), setIcon("fa-regular fa-sun"), setColors("--white", "hsl(209, 23%, 22%)"), setColors("--dark-blue", "hsl(0, 0%, 100%)"), setColors("--light-grey", "hsl(207, 26%, 17%)")) : (localStorage.setItem("mode", "Dark"), localStorage.setItem("icon", "fa-regular fa-moon"), setMode("Dark"), setIcon("fa-regular fa-moon"), setColors("--white", "hsl(0, 0%, 100%)"), setColors("--dark-blue", "hsl(200, 15%, 8%)"), setColors("--light-grey", "hsl(0, 0%, 98%)"));
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