import React from "react";
import { Icon } from "../components";

const categories = [
  ["Frontend", ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "SASS"]],
  ["Backend", ["Java", "Spring Boot", "JPA", "Hibernate", "JUnit", "Node.js", "REST APIs",]],
  ["Database", ["MySQL", "SQL Server", "PostgreSQL", "MongoDB", "Redis"]],
  ["Tools", ["Git", "Azure DevOps", "Azure", "Claude", "GitHub Copilot"]],
  ["Languages", ["English", "Hindi"]],
];

const Skills = () => <section id="skills" className="section-padding bg-[#0a0a0a]">
  <div className="container-max"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">Tools I use</p><h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Skills & technologies</h2><div className="section-title-line w-44" />
    <div className="mt-10 grid gap-6 md:grid-cols-3">{categories.map(([category, skills]) => <article className="glass-card p-6" key={category}><h3 className="font-spartan text-xl font-bold text-[#f0f0f0]">{category}</h3><div className="mt-5 flex flex-wrap gap-3">{skills.map((skill) => <div className="skill-chip" key={skill}><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#55bb97]/15 text-[#55bb97]"><Icon name="code" className="h-4 w-4" /></span><span className="text-sm font-semibold text-[#d9d9d9]">{skill}</span></div>)}</div></article>)}</div>
  </div>
</section>;

export default Skills;
