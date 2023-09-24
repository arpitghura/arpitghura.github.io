import React from 'react'
import { Button, Img, Line, List, Text, BackToTop } from "components";


const Contact = () => {
  return (
    <div className="bg-gray_900_02 flex flex-col items-start justify-center mt-0.5 pl-[60px] mx-auto md:px-5 py-[50px]" id='contact'>
      <div className="flex flex-col gap-[55px] justify-start mt-[9px]">
        <div className="flex flex-col gap-[25px] items-start justify-start ml-2 md:ml-[0]">
          <Text
            className="font-semibold text-green_A200"
            as="h4"
            variant="h4"
          >
            Want to Connect with Me?
          </Text>
          <Text
            className="font-medium text-white_A700"
            as="h6"
            variant="h6"
          >
            You can contact me through following!!
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between">
          <div className="flex flex-col items-start justify-center md:mt-0 mt-[23px] pb-[9px] px-[9px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-1.5 w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start">
                <Img
                  src="images/img_email.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="email"
                />
                <Text
                  className="font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  ghurarpit.110@gmail.com
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mt-4">
                <Img
                  src="images/img_visit.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="visit"
                />
                <Text
                  className="sm:flex-1 font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  Kalpana Nagar, Raisen Road, Bhopal, Madhya Pradesh, 462022
                </Text>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-[29px]">
                <Img
                  src="images/img_linkedin.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="linkedin"
                />
                <Text
                  className="font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  @arpitghura
                </Text>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4">
                <Img
                  src="images/img_twitter.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="twitter"
                />
                <Text
                  className="font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  @arpitghura
                </Text>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4">
                <Img
                  src="images/img_github.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="github"
                />
                <Text
                  className="font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  @arpitghura
                </Text>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4 w-3/5 md">
                <Img
                  src="images/img_instagram.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="instagram"
                />
                <Text
                  className="font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  @ghura.arpit
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-cyan_400  h-[450px] w-0.5 md:mt-0 mt-[19px] md:h-[3px] md:w-[90%]" />
          <form className="flex flex-col items-start justify-between gap-5 mb-[7px] p-5 w-[90%]" method="GET">
            <input
              className="bg-blue_gray_900_01 p-4 mr-4 my-4 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Name' type='text' required htmlFor="name"
            >
            </input>
            <input
              className="bg-blue_gray_900_01 p-4 mr-4 my-4 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Email' type='email' required htmlFor="email"
            ></input>
            <textarea
              className="bg-blue_gray_900_01 p-4 mr-4 my-4 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Message' type='text' required htmlFor="message" rows={5}
            ></textarea>
            <input
              className="cursor-pointer mt-[20px] text-xl text-center px-8 py-4 w-[100%] text-green_A200 hover:bg-gradient-to-r from-cyan-500 to-green-300 hover:text-black transition-[background-color] delay-150 hover:animate-bounce rounded-[20px] bg-blue_gray_900"
              type='submit'
              placeholder='Submit'
            >
            </input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact