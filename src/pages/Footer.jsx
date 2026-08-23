import React, { useEffect, useState } from "react";
import { Icon } from "../components";
import { fetchAbout } from "../api/fetchAbout";

const Footer = () => {
  const [summary, setSummary] = useState(null);
  useEffect(() => { fetchAbout().then(setSummary).catch(console.error); }, []);
  const links = [["linkedin", summary?.linkedIn, "LinkedIn"], ["github", summary?.gitHub, "GitHub"], ["x", summary?.twitter, "X"], ["youtube", summary?.youTube, "YouTube"]];
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#080808] py-8">
      <div className="container-max flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="text-sm text-[#a0a0a0]">© 2024 — {new Date().getFullYear()} Arpit Ghura. Built with <span className="text-red-500">❤️</span></p>
        <p className="text-sm text-[#a0a0a0ab]">Last Updated in Aug 2026</p>
        <div className="flex gap-3">
          {links.map(([icon, href, label]) => href && <a key={icon} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#a0a0a0] transition hover:border-[#55bb97]/50 hover:text-[#55bb97]"><Icon name={icon} className="h-4 w-4" /></a>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
