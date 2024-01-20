import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Modeling from "./pages/Modeling";
import Painting from "./pages/Painting";
import Fiber from "./pages/Fiber";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/modeling" element={<Modeling />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/fiber" element={<Fiber />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
