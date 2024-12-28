import React from "react";
import "../App.css";

const Hero = () => (
  <section id="hero" className="relative w-screen h-screen overflow-hidden">
    <div className="hero container relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">
          Hello,<span></span>
        </h1>
        <h1 className="text-4xl font-bold">
          My Name is <span></span>
        </h1>
        <h1 className="text-4xl font-bold">
          Pragalya Kanakaraj <span></span>
        </h1>
        <a
          href="/Resume.pdf"
          className="cta inline-block px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          download
        >
          Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
