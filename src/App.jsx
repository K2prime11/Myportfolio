import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <nav>
          <h1 id="nameId">KARTHIKEYAN K</h1>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/skills">SKILLS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE 404 NOT FOUND</h1>} />
          </Routes>
        </main>

        <footer>
          <nav>
            <p>Designed and Developed by Karthikeyan K</p>
            <p> &copy; 2025 KK</p>
          </nav>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
