import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
const Footer = () => (
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>P</span>rogram <span>W</span>arehouse</h1>
      </div>
      <div className="social-icon">
        {[
          { href: 'https://www.instagram.com/programwarehouse', icon: 'instagram' },
          { href: 'https://github.com/program-warehouse', icon: 'github' },
          { href: 'https://www.linkedin.com/company/program-warehouse', icon: 'linkedin' },
        ].map((social, index) => (
          <div className="social-item" key={index}>
            <a href={social.href}>
              <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${social.icon}.svg`} alt={social.icon} width="20px" />
            </a>
          </div>
        ))}
      </div>
      <p>Copyright Ⓒ 2020 Program Warehouse. All Rights Reserved.</p>
    </div>
  </section>
);
export default Footer