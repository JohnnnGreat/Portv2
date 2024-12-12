"use client";
import TechStackDisplay from "@/components/Tech";
import { devSteps, homeProjects, latestProjects } from "@/constant";

import { useEffect, useState } from "react";

export default function Home() {
   const [openNav, setOpenNav] = useState(false);

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 5000); // Preloader duration: 3 seconds
      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         <meta
            name="theme-color"
            content="#10101A"
         />
         <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
         />
         <title>John Ossai 🚀 &mdash; Web Developer</title>
         <meta
            name="description"
            content="I am a web developer passionate about turning ideas into real-life products."
         />
         <meta
            property="og:type"
            content="website"
         />
         <meta
            property="og:title"
            content="John Ossai 🚀 &mdash; Web Developer"
         />
         <meta
            property="og:url"
            content="https://johnossai.com.ng/"
         />
         <meta
            property="og:image"
            content="webp/preview-image.png"
         />
         <meta
            property="og:description"
            content="I am a web developer passionate about turning ideas into real-life products."
         />
         <meta
            name="twitter:title"
            content="John Ossai 🚀 &mdash; Web Developer"
         />
         <meta
            name="twitter:description"
            content="I am a web developer passionate about turning ideas into real-life products."
         />
         <meta
            name="twitter:image"
            content="webp/preview-image.png"
         />
         <meta
            name="twitter:card"
            content="summary_large_image"
         />
         <meta
            name="twitter:url"
            content="https://johnossai.com.ng/"
         />

         <section className="min-h-screen  bg-white flex items-center py-[5rem] pt-[5rem] md:py-[10rem] px-[1rem]">
            <div className="max-w-[1000px] mx-auto">
               <h1 className="font-Circular border inline-block rounded-full py-2 px-5 sm:py-3 sm:px-7 bg-[#fafafa] text-sm sm:text-base">Hey, I am John</h1>
               <h1 className="text-[3rem]   md:text-5xl lg:text-[5.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
                  Crafting <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate">websites</span> that work, look, and feel great.
               </h1>
               <a
                  href="#projects"
                  className="mt-[4rem] inline-block font-Din font-normal text-[1rem] uppercase tracking-[2px]"
               >
                  View Projects
                  <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
               </a>
            </div>
         </section>

         {/* Project Highlights */}
         <section
            id="#projects"
            className="py-[4rem] px-[1rem]"
         >
            <div className=" max-w-[1100px] mx-auto">
               <p className="text-[2.8rem]  mb-[1rem] lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">Some Things I’ve Built 🛠️</p>
               <p className="font-thin font-Circular  mx-auto  mb-12">A peek into the cool stuff I’ve been crafting—apps, websites, and things that just work.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[3rem]">
                  {homeProjects.map((project) => (
                     <div className=" rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                        <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem] ">{project.no}</h1>
                        <div>{project.image}</div>
                        {/* Content */}
                        <div className=" mt-[1rem]">
                           <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">{project.title}</h1>
                           <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">{project.description}</p>

                           <button className="font-Din uppercase mt-[3rem] tracking-widest">
                              View Project Details <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
                           </button>

                           <ul className="mt-[1.3rem] font-Din flex gap-3 uppercase tracking-widest text-[#000]/50">
                              {project.technologiesUsed.map((tech) => (
                                 <li>{tech}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>

               <a
                  href="/projects"
                  className="font-Din text-[1.2rem] mt-[4rem] inline-block tracking-widest uppercase"
               >
                  See All Projects 🚀
                  <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
               </a>
            </div>
         </section>

         {/* Tools I use */}
         <TechStackDisplay />

         <section className="py-[5rem] px-[1rem]">
            <div className="max-w-[1000px] mx-auto">
               <h1 className="text-[2.8rem]  mb-[1rem] md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark  mt-[.5rem] text-right">
                  🚀My Dev <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate text-right"> Process </span>
               </h1>
               <p className="font-thin font-Din max-w-[500px] leading-relaxed tracking-wider text-[#000]/50  ml-auto mt-[1rem] text-right uppercase"> These are the tools I rely on to bring your ideas to life. I swear by these—each one is my go-to for building cool stuff!</p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[2rem]">
                  {devSteps.map((step) => (
                     <div className="bg-[#fafafa] p-[2rem] rounded-[20px] border">
                        <h1 className="font-Mark text-[1.5rem] my-[1rem] leading-[1.3]">{step.title}</h1>
                        <p className="mt-[1.3rem] font-Circular text-[#000]/50">{step.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section className="py-[3rem] px-[1rem]">
            <div className="max-w-[1000px] mx-auto">
               <h2 className="text-[2.8rem]  mb-[1rem] lg:text-[4.5rem] font-extrabold font-Mark leading-[1] ">Think I could be the perfect developer for you?</h2>
               <p className="text-[1rem] mt-[1rem] md:max-w-[70%]  text-[#000]/50 font-Circular">My projects say it all—clean code, eye-catching designs, and user-first experiences. If you’re looking for someone to bring your ideas to life, let’s make it happen together.</p>
               <a
                  href="/projects"
                  className="font-Din text-[1.2rem] mt-[4rem] inline-block tracking-widest uppercase"
               >
                  Check Out My Works🚀
                  <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
               </a>
            </div>
         </section>

         <section className="py-[5rem] px-[1rem]">
            <div className="max-w-[1000px] mx-auto">
               <h2 className="text-[2.8rem]  mb-[1rem] lg:text-[4.5rem] font-bold font-Mark mt-[4rem] leading-[1] md:max-w-[80%] text-[#000]/40">
                  Ready to turn your ideas into a stunning reality? <span className="bg-clip-text inline-block text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Let’s build something amazing together.</span>
               </h2>
               <a
                  href="mailto:johnossai20@gmail.com"
                  className="mt-[2rem] inline-block font-Din font-normal text-[1rem] uppercase tracking-[2px]"
               >
                  Send a Message 👋
                  <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
               </a>
               <div className="flex  mt-[3rem] space-x-[2rem]">
                  <a
                     href="https://github.com/your-username"
                     target="_blank"
                     className=" font-Din tracking-widest uppercase"
                     aria-label="GitHub"
                  >
                     🐙 GitHub
                  </a>
                  <a
                     href="https://twitter.com/your-username"
                     target="_blank"
                     className=" font-Din tracking-widest uppercase"
                     aria-label="Twitter"
                  >
                     🐦 Twitter
                  </a>
                  <a
                     href="https://linkedin.com/in/your-username"
                     target="_blank"
                     className=" font-Din tracking-widest uppercase"
                     aria-label="LinkedIn"
                  >
                     💼 LinkedIn
                  </a>
               </div>
            </div>
         </section>

         <footer className="border-t py-[3rem] px-[1rem]">
            <div className="max-w-[1000px] mx-auto">
               <div className="flex items-center gap-[1rem]">
                  <div className="font-Din leading-[1] border-r pr-[.7rem]">
                     <h1>John</h1>
                     <h1>Ossai</h1>
                  </div>
                  <h1 className="font-Circular">Design and Development</h1>
               </div>
            </div>
         </footer>
      </>
   );
}
