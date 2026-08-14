import React, { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-montserrat text-[#f0f0f0]">
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
