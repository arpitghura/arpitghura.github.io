import React, { useEffect, useState } from "react";
import { client, urlFor } from "../utils/sanityClient";

const About = () => {
  const [summary, setSummary] = useState(null);
  useEffect(() => { client.fetch('*[_type == "summary"][0]').then(setSummary).catch(console.error); }, []);
  const profilePic = summary?.profilePic ? urlFor(summary.profilePic).width(900).url() : "images/arpit.png";

  return <section id="about" className="section-padding bg-[#0f0f0f]">
    <div className="container-max grid items-center gap-12 md:grid-cols-[minmax(230px,.72fr)_1.28fr]">
      <div className="relative mx-auto w-full max-w-sm animate-[fadeInUp_.7s_ease_both]">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#55bb97]/40 to-[#1fbabf]/15 blur-xl" />
        <img src={profilePic} alt="Arpit Ghura" className="relative aspect-[4/5] w-full rounded-[1.5rem] border border-white/15 object-cover shadow-2xl" />
      </div>
      <div className="reveal visible">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">A little about me</p>
        <h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Engineering with clarity and care.</h2>
        <div className="section-title-line w-36" />
        <div className="mt-7 space-y-5 text-base leading-8 text-[#a0a0a0]">
          <p>I&apos;m Arpit Ghura, a software engineer who turns complex product requirements into <mark className="rounded bg-[#55bb97]/15 px-1.5 py-0.5 font-semibold text-[#83e0bf]">clean, scalable experiences</mark>.</p>
          <p>I work across modern web technologies including React, Next.js, and Node.js, with experience building enterprise-grade collaboration and case management tools.</p>
          <p>From product thinking to polished implementation, I care about the details that make a digital product feel <mark className="rounded bg-[#1fbabf]/15 px-1.5 py-0.5 font-semibold text-[#70e5e8]">simple, useful, and dependable</mark>.</p>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
