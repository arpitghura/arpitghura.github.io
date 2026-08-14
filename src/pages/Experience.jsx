import React from "react";

const experiences = [
  {
    role: "Associate Software Engineer II", company: "MetLife", period: "Nov 2025 — Present", location: "Hyderabad, India",
    highlights: ["Redesigned the Admin Panel UI to streamline bulk case invitations and improve user experience.", "Implemented a new filtering and search system for efficient case retrieval.", "Integrated the Admin Panel with the core application logic for seamless data flow."],
    skills: ["Java", "Spring Boot", "Spring Security", "JPA", "Hibrernate", "Microsoft Azure", "AI"],
  },
  {
    role: "Software Engineer", company: "KFin Technologies", period: "Aug 2024 — Nov 2025", location: "Hyderabad, India",
    highlights: ["Redesigned the Admin Panel UI to streamline bulk case invitations and improve user experience.", "Implemented a new filtering and search system for efficient case retrieval.", "Integrated the Admin Panel with the core application logic for seamless data flow."],
    skills: ["React", "Redux", "TypeScript", "Javascript", "Node.js", "Express.js", "AWS"],
  },
  {
    role: "Software Engineer Intern", company: "KFin Technologies", period: "Apr 2024 — Aug 2024", location: "Hyderabad, India",
    highlights: ["Redesigned the Admin Panel UI to streamline bulk case invitations and improve user experience.", "Implemented a new filtering and search system for efficient case retrieval.", "Integrated the Admin Panel with the core application logic for seamless data flow."],
    skills: ["React", "Redux", "TypeScript", "Javascript", "TailwindCSS"],
  },
  {
    role: "Front-end Engineer Intern", company: "Kofuku Idea Labs", period: "Feb — Apr 2024", location: "Hyderabad, India",
    highlights: ["Built invite-only workflows for a case management platform.", "Streamlined bulk invitations and improved admin workflow by 7%.", "Reduced case search time by 12% with a focused filtering experience."],
    skills: ["Next.js", "React", "Redux", "TypeScript", "SCSS"],
  },
  {
    role: "Software Developer Intern", company: "Microsoft", period: "Jun — Jul 2023", location: "Hyderabad, India",
    highlights: ["Developed user-focused concepts for the Microsoft To Do web client.", "Delivered four design POCs, including a Smart List Pivot Pill concept.", "Collaborated with product and design teams to refine task-management interactions."],
    skills: ["React", "TypeScript", "Redux", "Azure DevOps", "Bootstrap"],
  },
];

const Experience = () => <section id="experience" className="section-padding bg-[#0a0a0a]">
  <div className="container-max">
    <p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">Where I&apos;ve contributed</p>
    <h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Experience</h2>
    <div className="section-title-line w-32" />
    <div className="relative mt-12 space-y-8 border-l border-[#55bb97]/30 pl-7 sm:pl-10">
      {experiences.map((experience) => <article key={experience.company} className="relative glass-card p-6 sm:p-8">
        <span className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border-4 border-[#0a0a0a] bg-[#55bb97] shadow-[0_0_18px_rgba(85,187,151,.7)] sm:-left-[47px]" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div><h3 className="font-spartan text-2xl font-bold text-[#f0f0f0]">{experience.role}</h3><p className="mt-1 font-semibold text-[#55bb97]">{experience.company}</p></div>
          <div className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-semibold text-[#a0a0a0]">{experience.period} · {experience.location}</div>
        </div>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-[#a0a0a0] sm:text-base">{experience.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1fbabf]" />{highlight}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2">{experience.skills.map((skill) => <span className="tech-pill" key={skill}>{skill}</span>)}</div>
      </article>)}
    </div>
  </div>
</section>;

export default Experience;
