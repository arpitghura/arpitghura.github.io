import React from 'react'
import { Img, Text } from "components";


const About = () => {
    return (
        <div className="bg-blue_gray_900_cc flex flex-col items-center justify-center p-12 md:px-10 sm:px-5" id='about'>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[20px] mt-[15px] w-[90%] md:w-[97%]">
                <Img
                    src="images/arpit.png"
                    className="h-[530px] md:h-auto mb-1 md:mt-0 object-cover rounded-[25px]"
                    alt="arpit ghura photo"
                />
                <div className="flex flex-col items-start justify-start pl-4 ml-4 md:ml-0">
                    <Text
                        className="font-semibold text-cyan_400"
                        as="h4"
                        variant="h4"
                    >
                        About Me
                    </Text>
                    <Text
                        className="font-normal mt-4 text-justify text-white_A700"
                        variant="body1"
                    >
                        <>
                            I&#39;m a final year undergraduate student in Computer
                            Science at Lakshmi Narain College of Technology and Science
                            (LNCTS) in Bhopal, India. I&#39;m passionate about
                            creating amazing front ends for software and helping
                            businesses grow. I enjoy learning new technologies and
                            working on personal projects. I&#39;m also a big fan of
                            open source software, and I&#39;m always happy to
                            contribute to open source projects. <br />
                            <br />I am also the maintainer of the open source project
                            Typing Test, which has been a part of 4 open source
                            events, including Hacktober, Kharagpur Winter of Code,
                            Diversion&#39;23, and IWoC. I am proud of the work that I
                            have done on this project, and I am excited to continue to
                            improve it and make it even more useful to others.
                        </>
                    </Text>
                    <Text
                        className="font-semibold mt-[22px] text-justify text-white_A700 w-full"
                        variant="body1"
                    >
                        <span className="sm:text-[21px] text-white_A700 text-xl font-montserrat">
                            Interests:{" "}
                        </span>
                        <span className="sm:text-[21px] text-white_A700 font-montserrat font-normal">
                            Reading Books, Playing Games Online, Engaging with
                            communities.
                        </span>
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default About