import React from "react";
import "../App.css";
import HTMLIcon from '../assets/HTML.svg';
import CSSicon from '../assets/CSS.svg';
import JAVAicon from '../assets/JAVA.svg';
import REACTicon from '../assets/React1.svg';
import LINUXicon from '../assets/LINUX.svg';
import Tailwindicon from '../assets/Tailwindcss.svg';
import JAVASCRIPTicon from '../assets/JS.svg';
import Cicon from '../assets/C.svg';
import POSTGRESSQLicon from '../assets/Postgresql.svg';
import GITHUBicon from '../assets/GitHub.svg';
import GITicon from '../assets/Git.svg';
import GOicon from '../assets/golang.svg';

const skillCategories = [
  {
    title: "Full Stack Development",
    skills: ["HTML", "CSS", "PostgreSQL", "React", "TailwindCSS", "Javascript", "Go"]
  },
  {
    title: "Programming Skills",
    skills: ["C", "Java", "Javascript"]
  },
  {
    title: "Tools",
    skills: ["Linux", "GitHub", "Git"]
  }
];

const skillIcons = {
  HTML: HTMLIcon,
  CSS: CSSicon,
  C: Cicon,
  React: REACTicon,
  Java: JAVAicon,
  TailwindCSS: Tailwindicon,
  Linux: LINUXicon,
  Javascript: JAVASCRIPTicon,
  PostgreSQL: POSTGRESSQLicon,
  GitHub: GITHUBicon,
  Git: GITicon,
  Go: GOicon,
};

const Skills = () => (
  <section id="skills">
    <div className="skills-container">
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skills-category" key={category.title}>
            <h2>{category.title}</h2>
            
            {/* Special Case for Full Stack - Split into Two Rows */}
            {category.title === "Full Stack Development" ? (
              <div className="skills-list">
                <div className="skills-row">
                  {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map(skill => (
                    <div className={`skill-item ${skill.toLowerCase()}`} key={skill}>
                      <img src={skillIcons[skill]} alt={`${skill} Icon`} className="skill-icon" />
                    </div>
                  ))}
                </div>
                <div className="skills-row">
                  {category.skills.slice(Math.ceil(category.skills.length / 2)).map(skill => (
                    <div className={`skill-item ${skill.toLowerCase()}`} key={skill}>
                      <img src={skillIcons[skill]} alt={`${skill} Icon`} className="skill-icon" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="skills-list">
                {category.skills.map(skill => (
                  <div className={`skill-item ${skill.toLowerCase()}`} key={skill}>
                    <img src={skillIcons[skill]} alt={`${skill} Icon`} className="skill-icon" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
