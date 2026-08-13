import React, { useEffect, useState } from 'react'
import { Img } from "../components";
import { client } from '../utils/sanityClient';
import { Typography } from '../components/Text/index';


const Footer = () => {

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
    <div className="bg-gray_900 flex flex-row items-start justify-between md:flex-col pt-4 px-4 md:px-5" id='footer'>
      <div className="flex flex-col gap-[22px] justify-start">
        <Typography
          className="font-medium ml-[16px] text-white_A700"
          as="h6"
          variant="h6"
        >
          Let’s Connect
        </Typography>
        <div className="flex flex-row gap-4 items-center justify-between px-[10px] pb-5">
          <a href={summary?.linkedIn || "http://www.linkedin.com/in/arpitghura"} target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_linkedin.png"
              className="h-10 object-cover"
              alt="linkedin"
            />
          </a>
          <a href={summary?.gitHub || "http://www.github.com/arpitghura"} target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_github.png"
              className="h-10 object-cover"
              alt="github"
            />
          </a>
          <a href={summary?.twitter || "http://www.twitter.com/arpitghura"} target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_twitter.png"
              className="h-10 object-cover"
              alt="twitter"
            />
          </a>
          <a href={summary?.youTube || "http://www.youtube.com/@arpitghura"} target="_blank" rel="noopener noreferrer">
            <Img
              src="images/img_youtube.png"
              className="h-10 object-cover"
              alt="youtube"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center self-center gap-0 px-[10px]">
        <Typography
          className="font-medium ml-auto my-auto text-center text-white_A700"
          as="h6"
          variant="h6"
        >
          <span className="text-white_A700 font-montserrat">
            Made with ❤️ by{" "}
          </span>
          <span className="text-green_A200 font-montserrat">
            Arpit Ghura
          </span>
          <span className="text-white_A700 font-montserrat">
            .
          </span>
        </Typography>
        <Typography
          className="md:ml-[0] ml-[auto mt-2.5 text-center text-white_A700"
        >
          Credit: All Icons are taken from Icon scout
        </Typography>
      </div>
    </div>
  )
}

export default Footer