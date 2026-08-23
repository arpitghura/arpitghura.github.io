import React, { useEffect, useState } from "react";
import { fetchEducation } from "../api/fetchEducation";
import { getStartEndDate } from "../utils/dates";

const Education = () => {
  const [educations, setEducations] = useState([]);
  useEffect(() => { fetchEducation().then(setEducations).catch(console.error); }, []);
  return <section id="education" className="section-padding bg-[#0f0f0f]">
    <div className="container-max"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">Academic foundation</p><h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Education</h2><div className="section-title-line w-32" />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {educations.map((education) => <article className="glass-card p-6" key={education._id}>
          <div className="flex items-start justify-between gap-4"><div><h3 className="font-spartan text-2xl font-bold text-[#f0f0f0]">{education.degree}</h3><p className="mt-2 font-semibold text-[#55bb97]">{education.university}</p></div>{education.cgpa && <span className="rounded-full bg-[#55bb97]/15 px-3 py-1 text-sm min-w-max font-bold text-[#79d9b7]">CGPA: {education.cgpa}</span>}</div>
          <p className="mt-4 text-[#a0a0a0]">{[education.major, education.location].filter(Boolean).join(" · ")}</p><p className="mt-5 text-sm font-semibold text-[#a0a0a0]">{getStartEndDate(education.startDate, education.endDate)}</p>
        </article>)}
        {!educations.length && <p className="text-[#a0a0a0]">Education details are loading.</p>}
      </div>
    </div>
  </section>;
};

export default Education;
