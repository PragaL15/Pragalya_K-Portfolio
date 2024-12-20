import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
const Header = () => (
  <header id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <Link to="/">
            <h1>
              PRAGALYA KANAKARAJ
            </h1>
          </Link>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li>
              <Link to="/" data-after="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" data-after="About">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" data-after="Skills">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" data-after="Projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" data-after="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);
export default Header