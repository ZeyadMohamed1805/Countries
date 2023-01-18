import React from 'react';
import { useState } from 'react';
import "../../Styles/Nav/Nav.css";

export const Nav = () => {
  const [mode, setMode] = useState("Dark");
  const [icon, setIcon] = useState("fa-regular fa-moon");

  const handleTheme = () => {
    return mode === "Dark" ? (setMode("Light"), setIcon("fa-regular fa-sun")) : (setMode("Dark"), setIcon("fa-regular fa-moon"));
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