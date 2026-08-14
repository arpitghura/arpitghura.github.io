import React, { useEffect, useState } from "react";
import { Icon } from "../components";
import ProjectCard from "../components/Project/ProjectCard";
import { client } from "../utils/sanityClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => { client.fetch('*[_type == "project"]').then(setProjects).catch(console.error); }, []);
  return <section id="projects" className="section-padding bg-[#0f0f0f]">
    <div className="container-max"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">Selected work</p><h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Projects that solve real problems.</h2><div className="section-title-line w-44" /><p className="mt-6 max-w-2xl leading-7 text-[#a0a0a0]">A selection of product work spanning thoughtful user experiences and reliable implementation.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard project={project} key={project._id} />)}</div>
      {!projects.length && <p className="mt-10 text-[#a0a0a0]">Projects are loading.</p>}
      <a href="https://github.com/arpitghura?tab=repositories" target="_blank" rel="noreferrer" className="btn-outline mx-auto mt-10 flex w-fit items-center gap-2">Browse GitHub <Icon name="github" className="h-5 w-5" /></a>
    </div>
  </section>;
};

export default Projects;
