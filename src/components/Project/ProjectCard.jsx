import React from "react";
import Icon from "../Icon";

const ProjectCard = ({ project }) => <article className="glass-card flex h-full flex-col p-6 sm:p-7">
  <div className="flex flex-wrap items-start justify-between gap-4"><h3 className="font-spartan text-2xl font-bold text-[#f0f0f0]">{project?.title}</h3>{project?.tags?.length > 0 && <span className="rounded-full border border-[#55bb97]/25 bg-[#55bb97]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#83e0bf]">{project.tags.join(" · ")}</span>}</div>
  <div className="mt-5 flex flex-wrap gap-2">{project?.technologies?.map((technology) => <span className="tech-pill" key={technology}>{technology}</span>)}</div>
  <p className="mt-6 flex-1 leading-7 text-[#a0a0a0]">{project?.description}</p>
  <div className="mt-7 flex flex-wrap gap-3">
    {project?.projectUrl && <a href={project.projectUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#55bb97]/40 px-4 py-2 text-sm font-bold text-[#83e0bf] transition hover:bg-[#55bb97] hover:text-[#080808]"><Icon name="external" className="h-4 w-4" /> Visit</a>}
    {project?.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-[#d9d9d9] transition hover:border-white/40 hover:bg-white/10"><Icon name="github" className="h-4 w-4" /> Source</a>}
  </div>
</article>;

export default ProjectCard;
