import "./Pages/Components/Styles/App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Pages/Components/Nav/Nav";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;