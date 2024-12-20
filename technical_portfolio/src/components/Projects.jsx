import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
const Projects = () => (
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
      </div>
      <div className="all-projects">
        {[
          {
            title: 'Accident Identification and Alerting System',
            description: 'The Accident Detection and Alert System using Arduino in the form of google map link.',
            img: './images/img-1.png'
          },
          {
            title: 'IOT based patient monitoring system',
            description: 'A system which gives body temperature and heart rate using LM35 and pulse sensor respectively.',
            img: './images/img-1.png'
          }
        ].map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-info">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects