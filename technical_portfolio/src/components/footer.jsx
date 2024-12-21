import React from "react";
import "../App.css";
const Footer = () => (
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1>Pragalya Kanakaraj</h1>
      </div>
      <div className="social-icon">
        {[
          { href: 'https://www.instagram.com/pragalyakanakaraj/', icon: 'instagram' },
          { href: 'https://github.com/PragaL15', icon: 'github' },
          { href: 'https://www.linkedin.com/in/pragalya-kanakaraj/', icon: 'linkedin' },
        ].map((social, index) => (
          <div className="social-item" key={index}>
            <a href={social.href}>
              <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${social.icon}.svg`} alt={social.icon} width="20px" />
            </a>
          </div>
        ))}
      </div>
      <p>Copyright Ⓒ 2020 Pragalya Kanakaraj. All Rights Reserved.</p>
    </div>
  </section>
);
export default Footer