import React, { useEffect } from "react";
import Header from "./components/Navbar";
import Hero from "./components/BodyComponent";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
    const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
    const menuItems = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
    const header = document.querySelector(".header.container");

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      header.style.backgroundColor = scrollPosition > 250 ? "#29323c" : "transparent";
    };

    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("scroll", handleScroll);
    menuItems.forEach((item) => {
      item.addEventListener("click", toggleMenu);
    });

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.removeEventListener("scroll", handleScroll);
      menuItems.forEach((item) => {
        item.removeEventListener("click", toggleMenu);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
};

export default App;
