import React, { useEffect, useState } from 'react'
import { Line } from "../components";
import { client } from '../utils/sanityClient';
import ProjectCard from '../components/Project/ProjectCard';
import { Typography } from '../components/Text/index';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "project"]`)
      .then((data) => {
        console.log(data, "project");
        setProjects(data)
      })
      .catch(console.error);
    return () => {

    }
  }, []);

  return (
    <div className="bg-blue_gray_900 flex flex-col md:gap-10 gap-8 justify-start mx-auto p-[50px] md:px-5 w-full" id='projects'>
      <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[60px] w-[76%] md:w-full">
        <div className="flex flex-col items-start justify-start sm:w-full">
          <Typography className="font-bold text-white_A700" as="h4" variant="h4">
            Projects
          </Typography>
          <Line className="bg-green_A200_dd h-1 mt-[3px] w-full sm:w-[42%]" />
        </div>
        <Typography className="font-normal text-white_A700"
        // as="body" variant="body"
        >
          Projects are the best way to showcase your level of expertise.
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-start mx-auto pb-[18px] pl-[18px] w-[93%] md:w-full">
        {projects?.map((project, index) => (<ProjectCard project={project} key={index} />))}
      </div>
      <a
        className="cursor-pointer leading-[normal] mx-auto text-[20px] py-4 px-8 text-center text-green_A200_dd font-montserrat animate-bg-ltor rounded-[10px] bg-gray_900"
        href='https://github.com/arpitghura?tab=repositories'

      >
        View More Projects
      </a>
    </div>
  )
}

export default Projects