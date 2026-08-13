import React from 'react'
import { Typography } from '../Text/index'

const ProjectCard = ({ project }) => {
    console.log(project, "project data");
    return (
        <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mb-[5px] w-full">
            <div className="bg-blue_gray_100_33  md:mt-0 mt-3.5 rounded-[10px] w-[90%]">
                {/* <img src={project?.projectImage} alt={project?.imageAlt} className='object-cover' /> */}
            </div>
            <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row w-full mt-4">
                    <Typography
                        className="font-semibold text-green_A200"
                        as="h5"
                        variant="h5"
                    >
                        {project?.title}
                    </Typography>
                    <div className="bg-gray_900 h-max ml-4 rounded-[10px] px-3 py-1 w-max">
                        <Typography
                            className="text-green_A200_dd uppercase"
                        >
                            {project?.tags?.join(", ")}
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-max flex-wrap my-2 font-semibold text-sm">
                    {project?.technologies?.map((tech, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 rounded-lg">{tech}</span>
                    ))}
                </div>
                <Typography
                    className="font-normal mt-3.5 text-white_A700 w-[90%]"
                    variant="body2"
                >
                    {project?.description}
                </Typography>
                <div className="flex flex-row sm:gap-5 items-center w-full">
                    <div className="flex flex-row items-center gap-5 bg-gray_900 rounded-[10px]  py-3 px-8 text-green_A200_dd md:mr-0 mr-6">
                        <a
                            className="font-normal leading-[normal] text-[22px]"
                            href={project?.projectUrl}
                        >
                            Visit
                        </a>
                    </div>
                    <a
                        className="cursor-pointer font-normal leading-[normal] text-[22px] py-3 px-8 ml-4 sm:ml-0 text-center text-light_green_300 font-montserrat bg-gray_900 rounded-[10px]"
                        href={project?.githubUrl}
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard