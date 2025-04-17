"use client";

import Link from "next/link";
import React from "react";
import { projectsInfoDetails } from "@/constant";

const Projects = () => {
  return (
    <>
      <title>My Projects</title>
      <div className="max-w-[1000px] mx-auto p-[1rem]">
        {" "}
        <h1 className="text-[3rem]  md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[100%] md:max-w-[70%] lg:max-w-[80%] mt-[9rem]">
          Check out some of the cool stuff I’ve built
        </h1>
        <p className="font-thin font-Circular  mx-auto  mb-12 mt-[1rem]">
          These projects showcase what I can do, and I’m always excited to
          create more!
        </p>
        <div className="flex flex-wrap gap-[3rem] mt-[3rem]">
          {projectsInfoDetails.map((project, idx) => (
            <div
              key={idx}
              className=" rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative"
            >
              <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem] ">
                {project.no}
              </h1>
              <div>{project.image}</div>
              {/* Content */}
              <div className=" mt-[1rem]">
                <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">
                  {project.title}
                </h1>
                <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  className="font-Din uppercase mt-[3rem] inline-block tracking-widest"
                >
                  View Project Details{" "}
                  <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
                </a>

                <ul className="mt-[1.3rem] font-Din flex gap-3 uppercase tracking-widest text-[#000]/50">
                  {project.technologiesUsed.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
