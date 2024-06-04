import React from "react";
import { Img, Text } from "components";

const About = () => {
  return (
    <div
      className="bg-blue_gray_900_cc flex flex-col items-center justify-center p-12 md:px-10 sm:px-5"
      id="about"
    >
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[20px] mt-[15px] w-[90%] md:w-[97%]">
        <Img
          src="images/arpit.png"
          className="h-[530px] md:h-auto mb-1 md:mt-0 object-cover rounded-[25px]"
          alt="arpit ghura photo"
        />
        <div className="flex flex-col items-start justify-start pl-4 ml-4 md:ml-0">
          <Text className="font-semibold text-cyan_400" as="h4" variant="h4">
            About Me
          </Text>
          <Text
            className="font-normal text-justify text-white_A700"
            variant="body1"
          >
            <span className="block my-4">
              I am a dedicated Computer Science student at Lakshmi Narain
              College of Technology and Science, Bhopal, with an 8.91 CGPA. I
              have gained practical experience through internships at Microsoft
              and Kofuku Idea Labs.
            </span>
            <span className="block my-4">
              At Microsoft, I contributed to the Microsoft To-Do web app,
              enhancing user experience and performance. At Kofuku Idea Labs, I
              improved user experience in a Case Management Software by
              implementing bulk invite functionality and efficient case
              filtering.
            </span>
            <span className="block my-4">
              I have developed projects like Quizzy, WeatherX, and Typing Test,
              showcasing my skills in React.js, JavaScript, and TailwindCSS. My
              technical proficiency also includes C/C++, Python, MERN stack, Next.js, Node.js, and databases like MySQL and MongoDB.
            </span>
            <span className="block my-4">
              As an Open Source Track Lead at Google Developer Student Clubs –
              LNCTS and co-organizer of BhopalFOSS, I am passionate about
              fostering a collaborative tech community. I am eager to leverage
              my skills in impactful projects and grow as a developer.
            </span>
          </Text>
          {/* <Text
            className="font-semibold mt-[22px] text-justify text-white_A700 w-full"
            variant="body1"
          >
            <span className="sm:text-[21px] text-white_A700 text-xl font-montserrat">
              Interests:{" "}
            </span>
            <span className="sm:text-[21px] text-white_A700 font-montserrat font-normal">
              Reading Books, Playing Games Online, Engaging with communities.
            </span>
          </Text> */}
        </div>
      </div>
    </div>
  );
};

export default About;
