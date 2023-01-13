import "./Components/Styles/App/App.css";
import { Nav } from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;