import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/About" exact element={<About />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
