import React from "react";
import "../App.css";
import Phone from "../../public/535-5357331_telephone-icon-png-vector-transparent-png-removebg-preview.png";
import Email from "../../public/email.jpg";
import Address from "../../public/address-icon-png-10.jpg";

const Contact = () => (
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>Info</span></h1>
      </div>
      <div className="add info">
<p>
  qwertygfefbf
</p>
      </div>
      <div className="contact-items">
        {[
          { imgSrc: Phone, title: 'Phone', info: '+91 8179062993' },
          { imgSrc: Email, title: 'Email', info: 'mvsaiprakash12345@gmail.com' },
          { imgSrc: Address, title: 'Address', info: '2-120, Davajigudem, Gannavaram Mandal, Krishna District, Andhra Pradesh, 521101.' }
        ].map((contact, index) => (
          <div className="contact-item" key={index}>
            <div className="contact-img">
              <img src={contact.imgSrc} alt={contact.title} style={{ width: '50px', height: '50px' }} />
            </div>
            <div className="contact-info">
              <h1>{contact.title}</h1>
              <h2>{contact.info}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
