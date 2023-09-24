import React from 'react'
import { Img, Line, Text } from "components";


const Skills = () => {
    return (
        <div className="bg-gray_900_01 flex flex-col items-start justify-start mt-[5px] mx-auto md:px-5 py-[13px] w-full" id='skills'>
            {/* Education Section Starts */}
            <div className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full" id='education'>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
                    <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                        <Text
                            className="font-bold text-white_A700"
                            as="h5"
                            variant="h5"
                        >
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
                                2020 - 2024 | Score: 8.87 CGPA (aggregate)
                            </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[90%]">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Section Starts */}
            <div className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full" id='experience'>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
                    <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                        <Text
                            className="font-bold text-white_A700"
                            as="h5"
                            variant="h5"
                        >
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
                                Software Developer Intern
                            </Text>
                            <Text
                                className="font-medium mt-[5px] text-white_A700 italic"
                                as="h6"
                                variant="h6"
                            >
                                Microsoft | June - July 2023 | Hyderabad, India
                            </Text>
                            <Text
                                className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                                variant="body1"
                            >
                                <ul className="list-disc mt-2 w-[90%]">
                                    <li className="md:py-2">
                                        Implemented smart-list pivot functionality for the Microsoft ToDO product, which allowed users to easily switch between different sections to view tasks and hence improve the user experience.
                                    </li>
                                    <li className="md:py-2">
                                        Learned and worked on <span className="font-semibold">React, Redux, TypeScript,</span> and <span className="font-semibold">FluentUI</span>, writing test cases. During the internship, I worked on a number of approaches, which taught me a lot about the application and its functioning.
                                    </li>
                                    <li className="md:py-2">
                                        I specifically took care of ensuring optimal performance by caching the computed state in the Redux store.
                                    </li>
                                </ul>

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
            <div className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full" id='skills'>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
                    <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                        <Text
                            className="font-bold text-white_A700"
                            as="h5"
                            variant="h5"
                        >
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
                            <div className="flex sm:flex-col flex-row md:gap-[25px] items-start mt-[27px] w-[90%] gap-x-4">
                                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-between px-5 py-3 rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" /></svg>
                                    <Text
                                        className="font-semibold ml-1.5  mt-auto mb-auto text-white_A700"
                                        as="h6"
                                        variant="h6"
                                    >
                                        HTML
                                    </Text>
                                </div>
                                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" /></svg>
                                    <Text
                                        className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                                        as="h6"
                                        variant="h6"
                                    >
                                        CSS
                                    </Text>
                                </div>
                                <div className="bg-blue_gray_900 flex md:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg>
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
                                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
                                    <Text
                                        className="font-semibold ml-1.5 mt-auto mb-auto text-white_A700"
                                        as="h6"
                                        variant="h6"
                                    >
                                        React
                                    </Text>
                                </div>
                                <div className="bg-blue_gray_900 flex sm:flex-1 flex-row gap-[10px] justify-center px-5 py-3 rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" /></svg>
                                    <Text
                                        className="font-semibold ml-2 mt-auto mb-auto text-white_A700"
                                        as="h6"
                                        variant="h6"
                                    >
                                        Bootstrap{" "}
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
    )
}

export default Skills