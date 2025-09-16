import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import Cursor from "./components/Cursor";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import Projects from "./components/Projects";
// import StonePaperScissors from "./components/Stonepaperscissors";
// import TicTacToe from "./components/Tictactoe";
// import Flames from "./components/Flames"
// import Calculator from "./components/Calculator"

function App() {
  return (
    <div className="app-container">
      <Cursor/>
      <BrowserRouter>
        <nav>
          <h1 id="nameId">PORTFOLIO</h1>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/skills">SKILLS</Link>
            {/* <Link to="/projects">PROJECTS</Link> */}
            <Link to="/contact">CONTACT</Link>
          </div>
        </nav>

        <main>
          <Routes>
            {/* Main Portfolio Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/projects" element={<Projects />} />
            Project Subpages
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/flames" element={<Flames />} />
            <Route path="/tic-tac-toe" element={<TicTacToe/>} />
            <Route path="/stone-paper-scissors" element={<StonePaperScissors/>} /> */}

            {/* Fallback */}
            <Route path="*" element={<h1>PAGE 404 NOT FOUND</h1>} />
          </Routes>
        </main>

        <footer>
          <nav>
            <p>Designed and Developed by Karthikeyan K</p>
            <p>&copy; 2025 KK</p>
          </nav>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
