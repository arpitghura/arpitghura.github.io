import React from "react";
import { Img } from "../components";
import { useEffect, useState } from "react";
import { client } from "../utils/sanityClient";
import { Typography } from "../components/Text/index";

const About = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "summary"][0]`)
      .then((data) => {
        console.log(data);
        setSummary(data)
      })
      .catch(console.error);
  }, []);

  return (
    <div
      className="bg-blue_gray_900_cc flex flex-col items-center justify-center p-12 md:px-10 sm:px-5"
      id="about"
    >
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[20px] mt-[15px] w-[90%] md:w-[97%]">
        <Img
          src={summary?.profilePic || "images/arpit.png"}
          className="h-[530px] md:h-auto mb-1 md:mt-0 object-cover rounded-[25px]"
          alt="arpit ghura photo"
        />
        <div className="flex flex-col items-start justify-start pl-4 ml-4 md:ml-0">
          <Typography className="font-semibold text-green_A200_dd" as="h4" variant="h4">
            About Me
          </Typography>
          <Typography
            className="font-normal text-justify text-white_A700"
          >
            <span className="block my-4">
              I’m Arpit Ghura, a Software Engineer passionate about building intuitive, scalable, and impactful digital products. With a strong foundation in the <strong className="bg-green_A200_dd text-gray-900 px-0.5 mx-0.5">Full-Stack development</strong> and experience across modern frameworks like <strong className="bg-green_A200_dd text-gray-900 px-0.5 mx-0.5">React, Next.js, and Node.js</strong>, I enjoy turning complex ideas into clean, functional, and user-friendly solutions.
            </span>
            <span className="block my-4">
              Over the past few years, I’ve worked on diverse projects ranging from <strong className="bg-green_A200_dd text-gray-900 px-0.5 mx-0.5">enterprise-grade tools for team and task management</strong> to <strong className="bg-green_A200_dd text-gray-900 px-0.5 mx-0.5">monitoring and case management systems</strong> that improved reliability and efficiency. My experience at organizations like <strong className="bg-green_A200_dd text-gray-900 px-0.5 mx-0.5">Microsoft and Kfin Technologies</strong>, as well as with startups, has shaped my ability to blend technical expertise with problem-solving to deliver real value.
            </span>
            {/* <span className="block my-4">
              At Microsoft, I contributed to the Microsoft To-Do web app,
              enhancing user experience and performance. At Kofuku Idea Labs, I
              improved user experience in a Case Management Software by
              implementing bulk invite functionality and efficient case
              filtering.
            </span> */}
            <span className="block my-4">
              Beyond coding, I believe in writing modular, maintainable code and contributing to products that improve how people work. I’m constantly learning, exploring new technologies, and refining my craft to stay ahead in the fast-changing tech space.
            </span>
          </Typography>
          {/* <Typography
            className="font-semibold mt-[22px] text-justify text-white_A700 w-full"
            variant="body"
          >
            <span className="sm:text-[21px] text-white_A700 text-xl font-montserrat">
              Interests:{" "}
            </span>
            <span className="sm:text-[21px] text-white_A700 font-montserrat font-normal">
              Reading Books, Playing Games Online, Engaging with communities.
            </span>
          </Typography> */}
        </div>
      </div>
    </div>
  );
};

export default About;
