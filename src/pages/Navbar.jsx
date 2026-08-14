import React, { useEffect, useState } from "react";
import { Icon } from "../components";

const links = ["Home", "About", "Experience", "Education", "Skills", "Projects"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const nextSection = links.find((link) => {
        const section = document.getElementById(link.toLowerCase());
        return section && section.getBoundingClientRect().top >= -180 && section.getBoundingClientRect().top < 260;
      });
      if (nextSection) setActiveSection(nextSection);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const navigate = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0a0a0a]/80 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,.35)] backdrop-blur-xl">
        <a href="#home" className="font-dancingscript text-3xl leading-none text-[#55bb97]" onClick={navigate}>AG</a>
        <div className="flex items-center gap-1 max-[800px]:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${activeSection === link ? "bg-white/10 text-[#55bb97]" : "text-[#a0a0a0] hover:text-white"}`}>
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-[#55bb97] px-4 py-2 text-sm font-bold text-[#080808] transition hover:bg-[#76d7b5] max-[800px]:hidden">Let&apos;s talk</a>
        <button type="button" className="hidden rounded-full p-2 text-white transition hover:bg-white/10 max-[800px]:block" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation menu">
          <Icon name={isOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>
      {isOpen && <div className="mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-xl backdrop-blur-xl">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={navigate} className="rounded-xl px-4 py-3 font-semibold text-[#d9d9d9] hover:bg-white/10 hover:text-[#55bb97]">{link}</a>)}
        <a href="#contact" onClick={navigate} className="mt-1 rounded-xl bg-[#55bb97] px-4 py-3 text-center font-bold text-[#080808]">Let&apos;s talk</a>
      </div>}
    </header>
  );
};

export default Navbar;
