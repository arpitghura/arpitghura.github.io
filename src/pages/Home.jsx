import React from "react";
import '../styles/animations.css'
import { BackToTop } from "../components";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const HomePage = () => {
  return (
    <div className="bg-gray_900 font-montserrat">
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

};

export default HomePage;
