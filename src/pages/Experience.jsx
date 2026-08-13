import React from 'react'
import { Img, Line } from "../components";
import { Typography } from '../components/Text/index';

const Experience = () => {
    return (
        <div
            className="flex flex-col items-end justify-end mt-[30px] sm:pl-5 pl-6 py-6 w-full"
            id="experience"
        >
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between  w-[94%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                    <Typography className="font-bold text-white_A700" as="h5" variant="h5">
                        Experience
                    </Typography>
                    <Line className="bg-cyan_400 h-1 w-[60%] md:w-[50%]" />
                </div>
                <div className="flex flex-col gap-[53px] items-center justify-start w-[73%] md:w-full">
                    <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
                        <Typography
                            className="font-semibold text-green_A200"
                            as="h6"
                            variant="h6"
                        >
                            FrontEnd Engineer Intern
                        </Typography>
                        <Typography
                            className="font-medium mt-[5px] text-white_A700 italic"
                            as="h6"
                            variant="h6"
                        >
                            <span className="text-green_A200_dd">Kofuku Idea Labs</span> | Feb -
                            Apr 2024 | Hyderabad, India
                        </Typography>
                        <Typography
                            className="ml-0.5 md:ml-[0] my-2 text-white_A700"

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
                        </Typography>
                        <Typography
                            className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                        // variant="body"
                        >
                            <span className="bold">Skills: </span>
                            <span className="text-green_A200">
                                Next.js · Redux · React.js · SCSS · Typescript · Javascript · UI Design
                            </span>
                        </Typography>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]">
                        <Typography
                            className="font-semibold text-green_A200"
                            as="h6"
                            variant="h6"
                        >
                            Software Developer Intern
                        </Typography>
                        <Typography
                            className="font-medium mt-[5px] text-white_A700 italic"
                            as="h6"
                            variant="h6"
                        >
                            <span className="text-green_A200_dd">Microsoft</span> | June - July
                            2023 | Hyderabad, India
                        </Typography>
                        <Typography
                            className="ml-0.5 md:ml-[0] my-2 text-white_A700"

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
                        </Typography>
                        <Typography
                            className="ml-0.5 md:ml-[0] my-2 text-white_A700"

                        >
                            <span className="bold">Skills: </span>
                            <span className="text-green_A200">
                                React · Javascript · UI Design · Azure DevOps Server · Git ·
                                Bootstrap · JavaScript · Redux · Responsiveness · TypeScript ·
                                React.js
                            </span>
                        </Typography>
                    </div>
                    {/* <div className="flex flex-col items-start justify-start w-[90%]">
                <Typography
                  className="font-semibold text-green_A200"
                  as="h6"
                  variant="h6"
                >
                  Co-Founder{" "}
                </Typography>
                <Typography
                  className="font-medium mt-2 text-white_A700 italic"
                  as="h6"
                  variant="h6"
                >
                  Iconic Institute of Modern Education | Bhopal, India
                </Typography>
                <Typography
                  className="ml-0.5 md:ml-[0] text-white_A700"
                  variant="body"
                >
                  <ul className="list-disc mt-2 w-[90%]">
                    <li className="md:py-2">
                      Build a technology company for providing the top notch content on leadership, personality development, communication and related.
                    </li>
                    <li className="md:py-2">
                      Community of over 5000+ students in 50+ colleges all over India.
                    </li>
                  </ul>
                </Typography>
              </div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience