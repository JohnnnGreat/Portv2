"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiAntdesign, SiRedux, SiShadcnui, SiSupabase, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";

const techIcons = {
   Figma: FaFigma,
   "Corel Draw": SiTypescript,
   Typescript: SiTypescript,
   "React Router": SiTypescript,
   Next: SiNextdotjs,
   Sass: FaSass,
   "Ant Design": SiAntdesign,
   Redux: SiRedux,
   ShadcnUi: SiShadcnui,
   Supabase: SiSupabase,
   Express: SiExpress,
   React: FaReact,
};

const TechStackDisplay = () => {
   const techStacks = [
      { id: 1, title: "Figma", icon: FaFigma },
      { id: 2, title: "Corel Draw", icon: SiTypescript },
      { id: 3, title: "Typescript", icon: SiTypescript },
      { id: 4, title: "React Router", icon: SiTypescript },
      { id: 5, title: "Next", icon: SiNextdotjs },
      { id: 6, title: "Sass", icon: FaSass },
      { id: 7, title: "Ant Design", icon: SiAntdesign },
      { id: 8, title: "Redux", icon: SiRedux },
      { id: 9, title: "ShadcnUi", icon: SiShadcnui },
      { id: 10, title: "Supabase", icon: SiSupabase },
      { id: 11, title: "Express", icon: SiExpress },
      { id: 12, title: "React", icon: FaReact },
   ];
   const techStacksTwo = [
      { id: 1, title: "Figma", icon: FaFigma },
      { id: 2, title: "Corel Draw", icon: SiTypescript },
      { id: 3, title: "Typescript", icon: SiTypescript },
      { id: 4, title: "React Router", icon: SiTypescript },
      { id: 5, title: "Next", icon: SiNextdotjs },
      { id: 6, title: "Sass", icon: FaSass },
      { id: 7, title: "Ant Design", icon: SiAntdesign },
      { id: 8, title: "Redux", icon: SiRedux },
      { id: 9, title: "ShadcnUi", icon: SiShadcnui },
      { id: 10, title: "Supabase", icon: SiSupabase },
      { id: 11, title: "Express", icon: SiExpress },
      { id: 12, title: "React", icon: FaReact },
   ];

   const duplicatedTechStacks = [...techStacks, ...techStacks];

   return (
      <div
         id="tech"
         className="relative w-full overflow-hidden py-[4rem]"
      >
         <div className="max-w-[1000px] mx-auto px-[1rem]">
            <h1 className="text-[2.8rem]  mb-[1rem] md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
               the <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate"> tools </span> I love 🛠️
            </h1>
            <p className="font-thin font-Circular  mx-auto mt-[1rem]"> These are the tools I rely on to bring your ideas to life. I swear by these—each one is my go-to for building cool stuff!</p>
         </div>
         <Marquee pauseOnHover={true}>
            {techStacks.map((stack, idx) => {
               const Icon = stack.icon;
               return (
                  <div
                     key={idx}
                     className="flex flex-col items-center gap-[1rem] justify-center  my-[2rem] group"
                  >
                     <div
                        className="p-[3rem] bg-[#fafafa] rounded-xl border transition-all duration-300  mx-[.5rem]
                   
                  "
                     >
                        <Icon
                           className="text-[2rem] text-gray-700 
                    transition-colors duration-300 
                    group-hover:text-black"
                        />
                     </div>
                     <p
                        className="text-[1rem] font-Circular text-gray-600 mt-2 
                  group-hover:opacity-100 
                   duration-300"
                     >
                        {stack.title}
                     </p>
                  </div>
               );
            })}
         </Marquee>
         <Marquee
            pauseOnHover={true}
            direction="right"
         >
            {techStacks.map((stack, idx) => {
               const Icon = stack.icon;
               return (
                  <div
                     key={idx}
                     className="flex flex-col items-center  justify-center   group"
                  >
                     <div
                        className="p-[3rem] bg-[#fafafa] rounded-xl border transition-all duration-300  mx-[.5rem]
                  group-hover:bg-gray-100 
                  "
                     >
                        <Icon
                           className="text-[2rem] text-gray-700 
                    transition-colors duration-300 
                    group-hover:text-black"
                        />
                     </div>
                     <p
                        className="text-[1rem] font-Circular text-gray-600 mt-2 
                  group-hover:opacity-100 
                   duration-300"
                     >
                        {stack.title}
                     </p>
                  </div>
               );
            })}
         </Marquee>
      </div>
   );
};

export default TechStackDisplay;
