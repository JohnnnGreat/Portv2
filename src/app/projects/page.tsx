"use client";
import { projectsInfoDetails } from "@/constant";
import Link from "next/link";
import React from "react";

const Projects = () => {
   return (
      <>
         <header className="  fixed top-[2rem] w-full z-10 p-[1rem] ">
            <div className="py-[1rem] px-[2rem] max-w-[1100px] mx-auto bg-[#fafafaa2] blur_h border rounded-[40px] flex justify-between gap-[2rem]">
               {" "}
               <Link
                  href="/"
                  className="inline-block font-Din font-normal text-[1.2rem] uppercase tracking-[2]"
               >
                  Back
               </Link>
               <div className="flex items-center gap-[1rem]">
                  <div className="font-Din leading-[1] border-r pr-[.7rem] text-right">
                     <h1>John</h1>
                     <h1>Ossai</h1>
                  </div>
                  <h1 className="font-Circular">Design and Development</h1>
               </div>
            </div>
         </header>
         <div className="max-w-[1000px] mx-auto p-[1rem]">
            {" "}
            <h1 className="text-[3rem]  md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[100%] md:max-w-[70%] lg:max-w-[80%] mt-[9rem]">Check out some of the cool stuff I’ve built</h1>
            <p className="font-thin font-Circular  mx-auto  mb-12 mt-[1rem]">These projects showcase what I can do, and I’m always excited to create more!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[3rem]">
               {projectsInfoDetails.map((project) => (
                  <div className=" rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                     <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem] ">{project.no}</h1>
                     <div>{project.image}</div>
                     {/* Content */}
                     <div className=" mt-[1rem]">
                        <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">{project.title}</h1>
                        <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">{project.description}</p>

                        <a
                           href={project.href}
                           target="_blank"
                           className="font-Din uppercase mt-[3rem] inline-block tracking-widest"
                        >
                           View Project Details <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
                        </a>

                        <ul className="mt-[1.3rem] font-Din flex gap-3 uppercase tracking-widest text-[#000]/50">
                           {project.technologiesUsed.map((tech) => (
                              <li>{tech}</li>
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
