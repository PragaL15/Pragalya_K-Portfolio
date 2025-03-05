import React, { useState } from "react";
import "../App.css";
import contactIcon from "../assets/icons/contact.svg";
import projectIcon from "../assets/icons/project.svg";
import aboutIcon from "../assets/icons/about.svg";
import skillIcon from "../assets/icons/skill.svg";
import homeIcon from "../assets/icons/home.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#home">My Portfolio</a>
          </div>
          <div className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            <div className="hamburger" onClick={toggleMenu}>
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <a href="#home" data-after="Home" onClick={toggleMenu}>
                  <img src={homeIcon} alt="Home Icon" className="icon white-icon" />
                </a>
              </li>
              <li>
                <a href="#about" data-after="About" onClick={toggleMenu}>
                  <img src={aboutIcon} alt="About Icon" className="icon white-icon" />
                </a>
              </li>
              <li>
                <a href="#skills" data-after="Skills" onClick={toggleMenu}>
                  <img src={skillIcon} alt="Skill Icon" className="icon white-icon" />
                </a>
              </li>
              <li>
                <a href="#projects" data-after="Projects" onClick={toggleMenu}>
                  <img src={projectIcon} alt="Project Icon" className="icon white-icon" />
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact" onClick={toggleMenu}>
                  <img src={contactIcon} alt="Contact Icon" className="icon white-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
