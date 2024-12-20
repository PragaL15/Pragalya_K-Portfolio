import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
const About = () => (
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src="../../public/profile.png" alt="profile photo" />
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>Me</span></h1>
        <h2>Hello! I'm Pragalya Kanakaraj</h2>
        <p>I am a Computer Science and Design student at Bannari Amman Institute of Technology</p>
        <a href="#contact" className="cta">Contact Me</a>
      </div>
    </div>
  </section>
);
export default About