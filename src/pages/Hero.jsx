import React from 'react'
import { Img, Text, ArrowAnim } from "components";


const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray_900 h-[85dvh]" id='hero'>
        <Text
          className="text-center text-gray_200 motion-safe:animate-bounce-slow"
          as="h1"
          variant="h1"
        >
          Hi, I’m Arpit Ghura
        </Text>
        <Text
          className="mt-[11px] text-center text-gray_700"
          as="h2"
          variant="h2"
        >
          Full Stack Developer
        </Text>
        <div className="flex flex-row gap-10 md:gap-5 mt-2.5 pb-0.5 px-0.5 flex-wrap">
          <a href="http://www.linkedin.com/in/arpitghura" target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_linkedin.png"
              className="h-[60px] md:h-10 object-cover"
              alt="linkedin"
            />
          </a>
          <a href="http://www.github.com/arpitghura" target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_github.png"
              className="h-[60px] md:h-10 object-cover"
              alt="github"
            />
          </a>
          <a href="http://www.twitter.com/arpitghura" target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_twitter.png"
              className="h-[60px] md:h-10 object-cover"
              alt="twitter"
            />
          </a>
          <a href="http://www.instagram.com/ghura.arpit" target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_instagram.png"
              className="h-[60px] md:h-10 object-cover"
              alt="instagram"
            />
          </a>
          <a href="http://www.youtube.com/@arpitghura" target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_youtube.png"
              className="h-[60px] md:h-10 object-cover"
              alt="youtube"
            />
          </a>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[78px] items-center justify-center mt-[38px]">
          <a
            className="cursor-pointer  leading-[normal] min-w-[187px] py-4 text-center text-gray_900 rounded-[20px] text-lg bg-green_A200 text-blue_900 hover:bg-green_A200_dd border border-green_A200 font-bold"
            href='https://drive.google.com/file/d/1frGDK2_JNuRl-g8Lm1dEVtm5Xca7b1CK/view?usp=drive_link'
            target='_blank'
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="cursor-pointer leading-[normal] min-w-[187px] py-4 text-center bg-blue_gray_900 text-green_A200 hover:bg-green_A200_dd hover:text-blue_900 border border-green_A200 text-lg rounded-[20px] font-bold"
            href='#contact'
          >
            Contact
          </a>
        </div>
      </div>
      <div className='mx-auto w-[50px]'>
        <ArrowAnim />
      </div>
    </>
  )
}

export default Hero