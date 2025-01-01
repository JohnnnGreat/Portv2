"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import TypewriterLoader from "@/components/Preloader";
import { useMotionValue, useSpring, useTransform, motion, useViewportScroll } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { latestProjects } from "@/constant";
import Link from "next/link";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [pageHeight, setPageHeight] = useState(0);
   const [openNav, setOpenNav] = useState(false);
   const resizePageHeight = useCallback(
      (entries) => setPageHeight(entries[0].contentRect.height),
      [],
   );
   const scrollRef = useRef(null);

   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver(resizePageHeight);
      if (scrollRef.current) resizeObserver.observe(scrollRef.current);
      return () => resizeObserver.disconnect();
   }, [resizePageHeight]);

   const { scrollY } = useViewportScroll();
   const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
   const spring = useSpring(transform, { damping: 15, mass: 0.27, stiffness: 55 });

   return (
      <html lang="en">
         <body>
            <header className=" fixed top-[2rem] w-full z-10 p-[1rem]">
               <div className="py-[1rem] px-[2rem] max-w-[1000px] mx-auto bg-[#fafafaa2] blur_h border rounded-[40px] flex justify-between">
                  <div className="flex items-center gap-[1rem]">
                     <Link
                        href="/"
                        className="font-Din leading-[1] border-r pr-[.7rem] text-right"
                     >
                        <h1>John</h1>
                        <h1>Ossai</h1>
                     </Link>
                     <h1 className="font-Circular text-[.7rem] uppercase tracking-wider">
                        Design and Development
                     </h1>
                  </div>
                  <button
                     className="inline-block font-Din font-normal text-[1.2rem] uppercase tracking-[2]"
                     onClick={() => {
                        setOpenNav(true);
                     }}
                  >
                     Menu
                  </button>
               </div>
            </header>

            <motion.div
               ref={scrollRef}
               style={{ y: spring }}
               className="scroll-container"
            >
               {children}
            </motion.div>
            <div style={{ height: pageHeight }} />

            <div
               className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${
                  openNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
               } transition-opacity duration-300`}
               onClick={() => setOpenNav(false)}
            ></div>

            <nav
               className={`fixed top-0 left-0 h-full w-full md:w-[70%] bg-white shadow-lg z-30 p-[2rem] transform ${
                  openNav ? "translate-x-0" : "-translate-x-full"
               } transition-transform duration-500 ease-in-out`}
            >
               <button
                  className="absolute top-[1rem] right-[1rem] text-gray-500 font-Din uppercase tracking-widest"
                  onClick={() => setOpenNav(false)}
               >
                  Close ✖
               </button>
               <ul className=" font-Din md:text-[2rem] mt-[2rem] flex items-center justify-between">
                  <li>
                     <a
                        href="/"
                        className="hover:text-purple-500"
                     >
                        Home
                     </a>
                  </li>
                  <li>
                     <a
                        href="#tech"
                        className="hover:text-purple-500"
                     >
                        Tech Stack
                     </a>
                  </li>
                  <li>
                     <a
                        href="/projects"
                        className="hover:text-purple-500"
                     >
                        Projects
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contact"
                        className="hover:text-purple-500"
                     >
                        Contact
                     </a>
                  </li>
               </ul>
               <h1 className="text-[2.8rem]  mb-[1rem] md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] my-[4rem]">
                  Let's build something amazing together!
               </h1>
               <div>
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] mt-[3rem] max-h-full">
                     {latestProjects.map((project, idx) => (
                        <div key={idx}>
                           <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem] ">
                              {project.no}
                           </h1>
                           <div>{project.image}</div>
                           {/* Content */}
                           <div className=" mt-[1rem]">
                              <h1 className="font-Mark text-[1rem] md:text-[1rem] mt-[2rem] leading-relaxed line-clamp-1">
                                 {project.title}
                              </h1>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </nav>
         </body>
      </html>
   );
}
