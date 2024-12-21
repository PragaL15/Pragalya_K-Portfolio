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

const skillIcons = {
  HTML: HTMLIcon,
  CSS: CSSicon,
  C: Cicon,
  React: REACTicon,
  Java: JAVAicon,
  'Tailwind.css': Tailwindicon,
  Linux: LINUXicon,
  Javascript: JAVASCRIPTicon,
  PostgreSQL: POSTGRESSQLicon,
  GitHub: GITHUBicon,
  Git: GITicon,
};

const Skills = () => (
  <section id="skills">
    <div className="skills container">
      <div className="skills-top">
        <h1 className="section-title">Skills</h1>
      </div>
      <div className="skills-bottom">
        {['C', 'HTML', 'CSS', 'Java', 'PostgreSQL', 'React', 'Tailwind.css', 'Linux', 'Javascript', 'GitHub', 'Git'].map(skill => (
          <div className={`skills-items ${skill.toLowerCase()}`} key={skill}>
            <div className="icon">
              <img src={skillIcons[skill]} alt={`${skill} Icon`} width="60" height="60" />
            </div>
            <h1>{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
