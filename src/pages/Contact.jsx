import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "../components";
import { client } from "../utils/sanityClient";

const Contact = () => {
  const [postData, setPostData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState(null);
  useEffect(() => { client.fetch('*[_type == "summary"][0]').then(setSummary).catch(console.error); }, []);
  const handleChange = (event) => setPostData({ ...postData, [event.target.name]: event.target.value });
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (!postData.name || !postData.email || !postData.message) { setMessage("Please fill out all fields."); return; }
    try { const response = await axios.post("https://eoahnoskapd5jrd.m.pipedream.net", postData); if (response.status === 200) { setMessage("Message sent successfully."); setPostData({ name: "", email: "", message: "" }); } } catch { setMessage("Message failed to send. Please try again."); }
  };
  const details = [["mail", summary?.email, summary?.email ? `mailto:${summary.email}` : null], ["pin", summary?.currentLocation, null], ["linkedin", "LinkedIn", summary?.linkedIn], ["github", "GitHub", summary?.gitHub]];
  return <section id="contact" className="section-padding bg-[#0a0a0a]"><div className="container-max"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#55bb97]">Get in touch</p><h2 className="mt-3 font-spartan text-4xl font-bold text-[#f0f0f0] sm:text-5xl">Let&apos;s build something useful.</h2><div className="section-title-line w-44" />
    <div className="mt-10 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><aside className="glass-card p-6 sm:p-8"><p className="leading-7 text-[#a0a0a0]">Have an idea, a role, or a difficult product problem? I&apos;d love to hear about it.</p><div className="mt-8 space-y-4">{details.map(([icon, label, href]) => label && <div className="flex items-center gap-4" key={icon}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#55bb97]/10 text-[#55bb97]"><Icon name={icon} className="h-5 w-5" /></span>{href ? <a className="break-all text-sm font-semibold text-[#d9d9d9] transition hover:text-[#55bb97]" href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">{label}</a> : <span className="text-sm font-semibold text-[#d9d9d9]">{label}</span>}</div>)}</div></aside>
      <form className="glass-card space-y-5 p-6 sm:p-8" onSubmit={handleSubmitForm}><div><label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#d9d9d9]">Name</label><input id="name" name="name" value={postData.name} onChange={handleChange} className="portfolio-input" required /></div><div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#d9d9d9]">Email</label><input id="email" type="email" name="email" value={postData.email} onChange={handleChange} className="portfolio-input" required /></div><div><label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#d9d9d9]">Message</label><textarea id="message" rows="5" name="message" value={postData.message} onChange={handleChange} className="portfolio-input resize-y" required /></div><button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2">Send message <Icon name="arrowRight" className="h-4 w-4" /></button>{message && <p className="text-center text-sm text-[#a0a0a0]" role="status">{message}</p>}</form>
    </div></div></section>;
};

export default Contact;
