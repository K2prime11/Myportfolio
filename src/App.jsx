import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";  // 🔥 import here
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import Cursor from "./components/Cursor";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <Cursor />
      <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// ✅ Extracted Routes with AnimatePresence
function MainRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> {/* handles exit before enter */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><h1>PAGE 404 NOT FOUND</h1></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// ✅ Wrapper for animations
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}   // when entering
      animate={{ opacity: 1, x: 0 }}    // while visible
      exit={{ opacity: 0, x: -50 }}     // when leaving
      transition={{ duration: 0.5, ease: "easeInOut" }} // smoothness
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Navbar extracted for clarity
function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav>
      <h1 id="nameId">PORTFOLIO</h1>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div><div></div><div></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "mobile" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
        <Link to="/skills" onClick={() => setIsMenuOpen(false)}>SKILLS</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
      </div>
    </nav>
  );
}

// ✅ Footer
function Footer() {
  return (
    <footer>
      <nav>
        <p>Designed and Developed by Karthikeyan K</p>
        <p>&copy; 2025 KK</p>
      </nav>
    </footer>
  );
}

export default App;
