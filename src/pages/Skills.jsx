import React from "react";
import { Img, Line, Text } from "components";

const Skills = () => {
  return (
    <div
      className="bg-gray_900_01 flex flex-col items-start justify-start mt-[5px] mx-auto md:px-5 py-[13px] w-full"
      id="skills"
    >
      {/* Education Section Starts */}
      <div
        className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full"
        id="education"
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
          <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
            <Text className="font-bold text-white_A700" as="h5" variant="h5">
              Education
            </Text>
            <Line className="bg-cyan_400 h-1 w-[55%] md:w-[45%]" />
          </div>
          <div className="flex flex-col gap-[53px] items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                Bachelor of Technology
              </Text>
              <Text
                className="font-medium mt-[5px] text-white_A700 italic"
                as="h6"
                variant="h6"
              >
                Lakshmi Narain College of Technology and Science, Bhopal
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                2020 - 2024 | Score: 8.91 CGPA (aggregate)
              </Text>
            </div>
            {/* <div className="flex flex-col items-start justify-start w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                12th Standard
              </Text>
              <Text
                className="font-medium mt-2 text-white_A700 italic"
                as="h6"
                variant="h6"
              >
                Shining Glorious Scholar's Public School, Raun
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                2018 - 2019 | Score: 77.4%
              </Text>
            </div> */}
          </div>
        </div>
      </div>

      {/* Experience Section Starts */}
      <div
        className="flex flex-col items-end justify-end mt-[30px] sm:pl-5 pl-6 py-6 w-full"
        id="experience"
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between  w-[94%] md:w-full">
          <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
            <Text className="font-bold text-white_A700" as="h5" variant="h5">
              Experience
            </Text>
            <Line className="bg-cyan_400 h-1 w-[60%] md:w-[50%]" />
          </div>
          <div className="flex flex-col gap-[53px] items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                FrontEnd Engineer Intern
              </Text>
              <Text
                className="font-medium mt-[5px] text-white_A700 italic"
                as="h6"
                variant="h6"
              >
                <span className="text-cyan_400">Kofuku Idea Labs</span> | Feb -
                Apr 2024 | Hyderabad, India
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                <ul className="list-disc mt-2 w-[95%]">
                  <li className="md:py-2">
                    Developed an invite-only platform for Case Management
                    Software, enhancing user experience.
                  </li>
                  <li className="md:py-2">
                    Streamlined admin workflow by 7% through bulk user
                    invitation, leveraging email extraction from pasted content.
                  </li>
                  <li className="md:py-2">
                    Improved case search efficiency by 12% with a filter flow
                    implementation, reducing user search time.
                  </li>
                  <li className="md:py-2">
                    Expanded technical expertise in CSS Modules (SCSS), Redux
                    Persist, and micro-frontend architecture with Nextjs 14.
                  </li>{" "}
                </ul>
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                <span className="bold">Skills: </span>
                <span className="text-green_A200">
                Next.js · Redux · React.js · SCSS · Typescript · Javascript · UI Design
                </span>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                Software Developer Intern
              </Text>
              <Text
                className="font-medium mt-[5px] text-white_A700 italic"
                as="h6"
                variant="h6"
              >
                <span className="text-cyan_400">Microsoft</span> | June - July
                2023 | Hyderabad, India
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                <ul className="list-disc mt-2 w-[95%]">
                  <li className="md:py-2">
                    Spearheaded the development of the Microsoft ToDo web app
                    within the client team.
                  </li>
                  <li className="md:py-2">
                    Developed four Proof of Concepts (POCs) to enhance the app's
                    design, leading to a more user-friendly experience.
                  </li>
                  <li className="md:py-2">
                    Contributed significantly to the new design, revolutionizing
                    how users interact with their tasks, particularly in the
                    MyDay section.
                  </li>
                  <li className="md:py-2">
                    Successfully implemented the innovative Smart List Pivot
                    Pill design within one of the POCs, streamlining task
                    management by categorizing them based on predefined rules.
                  </li>
                  <li className="md:py-2">
                    Demonstrated proficiency in React, Redux, TypeScript,
                    JavaScript, and Bootstrap throughout the development
                    process.
                  </li>
                  <li className="md:py-2">
                    Collaborated closely with product managers and the design
                    team to ensure a user-centric design approach, fostering a
                    seamless interaction between development and design.
                  </li>
                  <li className="md:py-2">
                    Gained invaluable experience in presenting and iterating on
                    concepts, with one POC selected for further development and
                    refinement.
                  </li>{" "}
                </ul>
                </Text>
                <Text
                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                variant="body1"
              >
                <span className="bold">Skills: </span>
                <span className="text-green_A200">
                  React · Javascript · UI Design · Azure DevOps Server · Git ·
                  Bootstrap · JavaScript · Redux · Responsiveness · TypeScript ·
                  React.js
                </span>
              </Text>
            </div>
            {/* <div className="flex flex-col items-start justify-start w-[90%]">
            <Text
              className="font-semibold text-green_A200"
              as="h6"
              variant="h6"
            >
              Co-Founder{" "}
            </Text>
            <Text
              className="font-medium mt-2 text-white_A700 italic"
              as="h6"
              variant="h6"
            >
              Iconic Institute of Modern Education | Bhopal, India
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] text-white_A700"
              variant="body1"
            >
              <ul class="list-disc mt-2 w-[90%]">
                <li className="md:py-2">
                  Build a technology company for providing the top notch content on leadership, personality development, communication and related.
                </li>
                <li className="md:py-2">
                  Community of over 5000+ students in 50+ colleges all over India.
                </li>
              </ul>
            </Text>
          </div> */}
          </div>
        </div>
      </div>

      {/* Skills Section Starts */}
      <div
        className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full"
        id="skills"
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
          <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
            <Text className="font-bold text-white_A700" as="h5" variant="h5">
              Skills
            </Text>
            <Line className="bg-cyan_400 h-1 w-[30%] md:w-[25%]" />
          </div>

          <div className="flex flex-col gap-[53px] items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                Front End Development
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-[25px] items-start mt-[27px] w-[90%] gap-x-4 flex-wrap">
                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-between px-5 py-3 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                  </svg>
                  <Text
                    className="font-semibold ml-1.5  mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    HTML
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
                  </svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    CSS
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z"></path>
</svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    SASS
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                  </svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    JavaScript
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-[25px] items-center md:items-start md:mt-[20px] mt-[15px] w-[90%] gap-x-4">
                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="35" height="35" viewBox="0 0 40 48">
                        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                    </svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    TypeScript
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    React
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 40 48">
<linearGradient id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1" x1="24" x2="24" y1="43.734" y2="4.266" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0a070a"></stop><stop offset=".465" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#4b4b4b"></stop></linearGradient><circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"></circle><rect width="3.023" height="15.996" x="15.992" y="16.027" fill="#fff"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2" x1="30.512" x2="30.512" y1="33.021" y2="18.431" gradientUnits="userSpaceOnUse"><stop offset=".377" stop-color="#fff" stop-opacity="0"></stop><stop offset=".666" stop-color="#fff" stop-opacity=".3"></stop><stop offset=".988" stop-color="#fff"></stop></linearGradient><rect width="2.953" height="14.59" x="29.035" y="15.957" fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3" x1="22.102" x2="36.661" y1="21.443" y2="40.529" gradientUnits="userSpaceOnUse"><stop offset=".296" stop-color="#fff"></stop><stop offset=".521" stop-color="#fff" stop-opacity=".5"></stop><stop offset=".838" stop-color="#fff" stop-opacity="0"></stop></linearGradient><polygon fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)" points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"></polygon>
</svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Nextjs
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
<path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"></path><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"></path><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"></path>
</svg>
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Redux
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-[25px] items-center md:items-start md:mt-[20px] mt-[15px] w-[90%] gap-x-4">
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
</svg>
                  <Text
                    className="font-semibold ml-2 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Tailwind CSS
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
                  </svg>
                  <Text
                    className="font-semibold ml-2 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Bootstrap{" "}
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
</svg>
                  <Text
                    className="font-semibold ml-2 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Nodejs
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                DataBase
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-[25px] items-start mt-[20px] gap-x-4">
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-between px-5 py-3 rounded-[10px]">
                  <Img
                    src="images/img_mysqllogo.png"
                    className="h-10 object-cover"
                    alt="mysqllogo"
                  />
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    MySQL
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <Img
                    src="images/img_leaf.png"
                    className="h-10 object-cover "
                    alt="mongodB logo"
                  />
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    MongodB
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
              <Text
                className="font-semibold text-green_A200"
                as="h6"
                variant="h6"
              >
                Spoken Languages
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-[25px] items-center md:items-start mt-[15px] w-[90%] gap-x-4">
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <Img
                    src="images/img_fontsize.png"
                    className="h-10 object-cover"
                    alt="fontsize"
                  />
                  <Text
                    className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    English
                  </Text>
                </div>
                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                  <Img
                    src="images/img_fontsize.png"
                    className="h-10 object-cover"
                    alt="fontsize"
                  />
                  <Text
                    className="font-semibold ml-2 mt-auto mb-auto text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Hindi
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
