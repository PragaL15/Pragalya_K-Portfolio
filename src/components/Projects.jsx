import React, { useEffect, useState } from "react";
import "../App.css";

import img1 from "../assets/images/login.png";
import img2 from "../assets/images/record.png";
import img3 from "../assets/images/pastRec.png";
import img4 from "../assets/images/addPatient.png";

import iot1 from "../assets/images/Add_details.png";
import iot2 from "../assets/images/admin.png";
import iot3 from "../assets/images/logincoe.png";
import iot4 from "../assets/images/approval.png";
import iot5 from "../assets/images/decline.png";

const projectsData = [
  {
    title: "Doctor-Patient Relationship Manager",
    description:
      "Users can log in securely with JWT authentication, ensuring protected access to patient data based on assigned roles. API endpoints are restricted through role-based access control (RBAC).The system supports dynamic patient selection and enhances real-time data fetching with Axios, and a voice recording toggle for capturing and transcribing audio inputs. Additionally, the application provides real-time voice-to-text conversion, displaying the transcribed text in a structured format for seamless interaction.",
    images: [img1, img2, img3, img4], 
  },
  {
    title: "Paper Re-allocation module",
    description:
      "The Paper Correction Management System is a web-based platform designed to streamline the examination paper evaluation process. It provides faculty with an easy-to-use Faculty Dashboard for efficient paper evaluation, while HODs can oversee the process through a Control Panel, manage paper assignments, and generate reports. The system ensures real-time updates, maintains audit trails for accountability, and offers cost analysis to optimize resources. This solution improves efficiency, reduces costs, and enhances transparency in paper correction.",
     images: [iot1, iot2, iot3, iot4,iot5], 
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        <div className="all-projects">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="project-item">
      <div className="project-info">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div className="project-img">
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="transition-opacity duration-2000 ease-in-out"
          style={{
            width: "100%",
            height: "auto",
            transition: "opacity 1s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
