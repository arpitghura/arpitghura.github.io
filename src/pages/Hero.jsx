import React from 'react'
import { Img, Text, ArrowAnim } from "components";


const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray_900 h-[85dvh]" id='hero'>
        <Text
          className="text-center text-white_A700 motion-safe:animate-bounce-slow"
          as="h1"
          variant="h1"
        >
          Hi, I’m Arpit Ghura
        </Text>
        <Text
          className="mt-[11px] text-center text-green_A200"
          as="h2"
          variant="h2"
        >
          Front End Developer
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
            className="cursor-pointer font-normal leading-[normal] min-w-[187px] py-4 text-center text-gray_900 rounded-[20px] text-lg bg-cyan_400"
            href='https://drive.google.com/file/d/1frGDK2_JNuRl-g8Lm1dEVtm5Xca7b1CK/view?usp=drive_link'
            target='_blank'
          >
            Resume
          </a>
          <a
            className="cursor-pointer font-normal leading-[normal] min-w-[187px] py-4 text-center bg-blue_gray_900 text-cyan_400 text-lg rounded-[20px]"
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