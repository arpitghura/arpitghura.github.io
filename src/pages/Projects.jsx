import React from 'react'
import { Line, Text } from "components";


const Projects = () => {
  return (
    <div className="bg-blue_gray_900 flex flex-col md:gap-10 gap-8 justify-start mx-auto p-[50px] md:px-5 w-full" id='projects'>
      <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[60px] w-[76%] md:w-full">
        <div className="flex flex-col items-start justify-start sm:w-full">
          <Text className="font-bold text-white_A700" as="h4" variant="h4">
            Projects
          </Text>
          <Line className="bg-cyan_400 h-1 mt-[3px] w-full sm:w-[42%]" />
        </div>
        <Text className="font-normal text-white_A700" as="body1" variant="body1">
          Projects are the best way to showcase your level of expertise.
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start mx-auto pb-[18px] pl-[18px] w-[93%] md:w-full">

        <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mb-[5px] w-full">
          <div className="bg-blue_gray_100_33  md:mt-0 mt-3.5 rounded-[10px] w-[90%]">
            <img src="/images/typing-test-ss.png" alt="Typing Test Website Screenshot" className='object-cover'/>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row w-full mt-4">
              <Text
                className="font-semibold text-green_A200"
                as="h5"
                variant="h5"
              >
                Typing Test Web App
              </Text>
              <div className="w-max">
                <div className="bg-gray_900 h-max ml-4 rounded-[10px] px-3 py-1 w-max">
                  <Text
                    className="text-cyan_400 uppercase"
                    variant="body3"
                  >
                    Open Source
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-normal mt-3.5 text-white_A700 w-[90%]"
              as="body1"
              variant="body1"
            >
              The Typing Test web application allows users to practice and
              enhance their typing speed by generating sets of real words.
              It also stores session history and offers the option to reset
              stored values.
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center md:items-start justify-start mt-4 w-full">
              <div className="flex flex-row items-center gap-5 bg-gray_900 rounded-[10px]  py-3 px-8 text-center align-baseline text-cyan_400 md:mr-0 mr-6">
                <a
                  className="font-normal leading-[normal] text-[22px]"
                  href='https://typing-test-project.vercel.app'
                >
                  Visit{" "}
                </a>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </div>

              <a
                className="cursor-pointer font-normal leading-[normal] text-[22px] py-3 px-8 ml-4 sm:ml-0 text-center text-light_green_300 font-montserrat bg-gray_900 rounded-[10px]" 
                href='https://github.com/arpitghura/typing-test'
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

      </div>
      <a
        className="cursor-pointer leading-[normal] mx-auto text-[20px] py-4 px-8 text-center text-cyan_400 font-montserrat animate-bg-ltor rounded-[10px] bg-gray_900" 
        href='https://github.com/arpitghura/front-end-projects'

      >
        View More Projects
      </a>
    </div>
  )
}

export default Projects