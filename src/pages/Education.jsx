import React, { useState, useEffect } from 'react'
import { client } from '../utils/sanityClient';
import { Img, Line } from "../components";
import { Typography } from '../components/Text/index';

const Education = () => {
    const [educations, setEducations] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "education"]`)
            .then((data) => {
                console.log(data);
                setEducations(data)
            })
            .catch(console.error);
    }, []);
    return (
        <div
            className="flex flex-col items-end justify-end mt-[43px] sm:pl-5 pl-6 py-6 w-full"
            id="education"
        >
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[54px] w-[94%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                    <Typography className="font-bold text-white_A700" as="h5" variant="h5">
                        Education
                    </Typography>
                    <Line className="bg-green_A200_dd h-1 w-[55%] md:w-[45%]" />
                </div>
                <div className="flex flex-col gap-[53px] items-center justify-start w-[73%] md:w-full">
                    {educations?.map((education, index) => (<div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[90%]" key={index}>
                        <Typography
                            className="font-semibold text-green_A200"
                            as="h6"
                            variant="h6"
                        >
                            {education?.degree}
                        </Typography>
                        <Typography
                            className="font-medium mt-[5px] text-white_A700 italic"
                            as="h6"
                            variant="h6"
                        >
                            {education?.university}
                        </Typography>
                        <Typography
                            className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                        >
                            {education?.startDate} - {education?.endDate} | CGPA: {education?.cgpa}
                        </Typography>
                    </div>))}
                    {/* <div className="flex flex-col items-start justify-start w-[90%]">
                  <Typography
                    className="font-semibold text-green_A200"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-green_A200_dd">Kofuku Idea Labs</span> | Feb -
                    Apr 2024 | Hyderabad, India
                  </Typography>
                  <Typography
                    className="ml-0.5 md:ml-[0] my-2 text-white_A700"
                    variant="body"
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
                    variant="body"
                  >
                    <span className="bold">Skills: </span>
                    <span className="text-green_A200">
                      Next.js · Redux · React.js · SCSS · Typescript · Javascript · UI Design
                    </span>
                  </Typography>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Education