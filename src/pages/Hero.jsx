import React, { useEffect, useState } from "react";
import { ArrowAnim, Icon } from "../components";
import { fetchAbout } from "../api/fetchAbout";

const socialLinks = [
  ["linkedin", "linkedIn", "LinkedIn"], ["github", "gitHub", "GitHub"], ["x", "twitter", "X"], ["youtube", "youTube", "YouTube"],
];

const Hero = () => {
  const [summary, setSummary] = useState(null);
  useEffect(() => { fetchAbout().then(setSummary).catch(console.error); }, []);
  const role = summary?.role || "Software Engineer";

  return <section id="home" className="hero-mesh relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#55bb97]/10 blur-[120px]" />
    <div className="container-max relative z-10 text-center">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#55bb97] animate-[fadeIn_.5s_ease_both]">Portfolio / 2026</p>
      <h1 className="mx-auto max-w-4xl font-spartan text-5xl font-bold leading-[.95] text-[#f0f0f0] sm:text-6xl md:text-7xl">
        Designing code that makes <span className="gradient-text">ideas tangible.</span>
      </h1>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#a0a0a0] animate-[fadeInUp_.7s_ease_.1s_both]">
        Hi, I&apos;m Arpit Ghura — a <span className="border-r-2 border-[#55bb97] pr-1 font-semibold text-[#f0f0f0] typewriter-role">{role}</span> building dependable digital experiences.
      </p>
      <div className="mt-8 flex justify-center gap-3 animate-[fadeInUp_.7s_ease_.2s_both]">
        {socialLinks.map(([icon, key, label]) => summary?.[key] && <a key={key} href={summary[key]} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[.03] text-[#d9d9d9] transition hover:border-[#55bb97]/50 hover:bg-[#55bb97]/10 hover:text-[#55bb97]">
          <Icon name={icon} className="h-5 w-5" />
        </a>)}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 animate-[fadeInUp_.7s_ease_.3s_both]">
        {summary?.cvUrl && <a className="btn-primary inline-flex items-center gap-2" href={summary.cvUrl} target="_blank" rel="noreferrer">View résumé <Icon name="external" className="h-4 w-4" /></a>}
        <a className="btn-outline inline-flex items-center gap-2" href="#contact">Start a conversation <Icon name="arrowRight" className="h-4 w-4" /></a>
      </div>
    </div>
    <a href="#about" aria-label="Scroll to about section" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#55bb97] motion-safe:animate-bounce"><ArrowAnim /></a>
  </section>;
};

export default Hero;
