import React from "react";
import "../App.css";
import HTMLIcon from '../assets/HTML.svg';
import CSSicon from '../assets/CSS.svg'
import JAVAicon from '../assets/JAVA.svg'
import REACTicon from '../assets/React1.svg'
import LINUXicon from '../assets/LINUX.svg'
import Tailwindicon from '../assets/Tailwindcss.svg'
import JAVASCRIPTicon from '../assets/JS.svg'
import Cicon from '../assets/C.svg'
import POSTGRESSQLicon from '../assets/Postgresql.svg'
import GITHUBicon from '../assets/GitHub.svg'
import GITicon from '../assets/Git.svg'
const Skills = () => (
  <section id="skills">
    <div className="skills container">
      <div className="skills-top">
        <h1 className="section-title">Sk<span>i</span>lls</h1>
        <p>From last few years, I have put much effort into learning and improving my skills. Here are some of them!</p>
      </div>
      <div className="skills-bottom">
        {['C', 'HTML', 'CSS', 'Java', 'PostgreSQL', 'React', 'Tailwind.css', 'Linux', 'Javascript','GitHub','Git'].map(skill => (
          <div className="skills-items" key={skill}>
            <div className="icon">
              {skill === 'HTML' && (
                <img src={HTMLIcon} alt="HTML Icon" width="60" height="60" />
              )}
              {skill === 'CSS' && (
                <img src={CSSicon} alt="CSS Icon" width="60" height="60" />
              )}
              {skill === 'C' && (
                <img src={Cicon} alt="C Icon" width="60" height="60" />
              )}
              {skill === 'React' && (
                <img src={REACTicon} alt="React Icon" width="60" height="60" />
              )}
              {skill === 'Java' && (
                <img src={JAVAicon} alt="JAVA Icon" width="60" height="60" />
              )}
              {skill === 'Tailwind.css' && (
                <img src={Tailwindicon} alt="Tailwind Icon" width="60" height="60" />
              )}
              {skill === 'Linux' && (
                <img src={LINUXicon} alt="LINUX Icon" width="60" height="60" />
              )}
              {skill === 'Javascript' && (
                <img src={JAVASCRIPTicon} alt="JS Icon" width="60" height="60" />
              )}
              {skill === 'PostgreSQL' && (
                <img src={POSTGRESSQLicon} alt="PSQL Icon" width="60" height="60" />
              )}
              {skill === 'GitHub' && (
                <img src={GITHUBicon} alt="GitHub Icon" width="60" height="60" />
              )}
              {skill === 'Git' && (
                <img src={GITicon} alt="PSQL Icon" width="60" height="60" />
              )}
            </div>
            <h1>{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
