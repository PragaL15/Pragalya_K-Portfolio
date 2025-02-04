import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">
              
            </Link>
          </div>
          <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
            </div>
            <ul>
              <li>
                <Link to="/" data-after="Home">
                  <img src={homeIcon} alt="Home Icon" className="icon white-icon" />
                </Link>
              </li>
              <li>
                <Link to="/about" data-after="About">
                  <img src={aboutIcon} alt="About Icon" className="icon white-icon" />
                </Link>
              </li>
              <li>
                <Link to="/skills" data-after="Skills">
                  <img src={skillIcon} alt="Skill Icon" className="icon white-icon" />
                </Link>
              </li>
              <li>
                <Link to="/projects" data-after="Projects">
                  <img src={projectIcon} alt="Project Icon" className="icon white-icon" />
                </Link>
              </li>
              <li>
                <Link to="/contact" data-after="Contact">
                  <img src={contactIcon} alt="Contact Icon" className="icon white-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
