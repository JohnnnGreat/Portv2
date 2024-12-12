import Veronicas from "../public/projectsImages/Veronicas.jpg";
import Midwest from "../public/projectsImages/midwest.jpg";
import ScholarHub from "../public/projectsImages/ScholarHub.jpg";
import FitVibe from "../public/projectsImages/fitvibe.png";
import Portfolio from "../public/projectsImages/TimPortfolio.jpg";
import AppDesign from "../public/projectsImages/ImageOne.png";
import Hom from "../public/projectsImages/hom.jpg";
import Heritage from "../public/projectsImages/Heritage.png";
import Macgroup from "../public/projectsImages/Macgroup.png";
import FileStorage from "../public/projectsImages/FileStorage.jpg";
import Ed from "../public/projectsImages/ed.jpg";
import Marketing from "../public/projectsImages/marketing.jpg";
import Culinary from "../public/projectsImages/culinary.jpg";
import Saveo from "../public/projectsImages/Saveo.jpg";
import Jobr from "../public/projectsImages/newl.jpg";
import Temu from "../public/projectsImages/temu.png";
import Diplomatic from "../public/projectsImages/diplo.png";
import AICU from "../public/projectsImages/AICU.jpeg";
import EDUGATE from "../public/projectsImages/Edugate.jpg";

import Image from "next/image";

export const homeProjects = [
   {
      id: 18,
      no: "01",
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={AICU}
            alt="aicu"
         />
      ),
      title: "AICU | American International Christian University",
      description: "A comprehensive university website designed to showcase AICU's mission of developing servant leaders. The platform highlights the institution's vision, academic programs, and commitment to global service through an intuitive and engaging user interface.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://www.aicuedu.org/",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 19,
      no: "02",
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={EDUGATE}
            alt="edugate"
         />
      ),
      title: "Edugate",
      description:
         "An experimental university portal prototype exploring innovative digital solutions for educational management. While still in development, the project demonstrates potential features for student and administrative interactions, showcasing the future of digital campus experiences.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://github.com/JohnnnGreat/Edugate-Portal",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 16,
      no: "03",
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Temu}
            alt="temu"
         />
      ),
      title: "Temu Immigration",
      description:
         "A comprehensive immigration website providing clear, accessible information about immigration services, processes, and support. The platform aims to simplify complex immigration procedures, offer guidance to potential immigrants, and create a user-friendly navigation experience for those seeking international relocation assistance.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://temu-omega.vercel.app/",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 15,
      no: "04",
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Midwest}
            alt="midwest"
         />
      ),
      title: "Midwest Jack and Greens",
      description:
         "A vibrant restaurant website capturing the authentic essence of Jamaican cuisine, offering an immersive digital experience that showcases menu items, restaurant ambiance, and provides seamless online reservation capabilities. The design reflects the warm, welcoming spirit of Caribbean culinary traditions.",
      technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
      designTheme: ["Light"],
      href: "https://midwest-peach.vercel.app/",
      reverse: false,
      sourceCodeHref: "https://github.com/JohnnnGreat/Midwest",
   },
];

export const latestProjects = [
   {
      id: 18,
      no: "01",
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={AICU}
            alt="aicu"
         />
      ),
      title: "AICU | American International Christian University",
      description: "A comprehensive university website designed to showcase AICU's mission of developing servant leaders. The platform highlights the institution's vision, academic programs, and commitment to global service through an intuitive and engaging user interface.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://www.aicuedu.org/",
      reverse: false,
      sourceCodeHref: "/",
   },
];
export const projectsInfoDetails = [
   {
      id: 18,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={AICU}
            alt="aicu"
         />
      ),
      title: "AICU | American International Christian University",
      description: "A comprehensive university website designed to showcase AICU's mission of developing servant leaders. The platform highlights the institution's vision, academic programs, and commitment to global service through an intuitive and engaging user interface.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://www.aicuedu.org/",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 19,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={EDUGATE}
            alt="edugate"
         />
      ),
      title: "Edugate",
      description:
         "An experimental university portal prototype exploring innovative digital solutions for educational management. While still in development, the project demonstrates potential features for student and administrative interactions, showcasing the future of digital campus experiences.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://github.com/JohnnnGreat/Edugate-Portal",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 17,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Diplomatic}
            alt="diplomatic"
         />
      ),
      title: "The Diplomatic Digital World",
      description: "A dynamic web platform for a coding training center, meticulously designed to showcase educational programs, instructor expertise, and provide an engaging entry point for aspiring tech professionals seeking comprehensive coding education and career development.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://www.diplomatsdigitalworld.com.ng/",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 16,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Temu}
            alt="temu"
         />
      ),
      title: "Temu Immigration",
      description:
         "A comprehensive immigration website providing clear, accessible information about immigration services, processes, and support. The platform aims to simplify complex immigration procedures, offer guidance to potential immigrants, and create a user-friendly navigation experience for those seeking international relocation assistance.",
      technologiesUsed: ["React", "Next", "TailwindCss"],
      designTheme: ["Light"],
      href: "https://temu-omega.vercel.app/",
      reverse: false,
      sourceCodeHref: "/",
   },
   {
      id: 1,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Jobr}
            alt="midwest"
         />
      ),
      title: "Jobr",
      description:
         "A full-stack job finding application that bridges the gap between job seekers and employers. Features include advanced job search capabilities, real-time application tracking, personalized job recommendations, and a user-friendly interface designed to streamline the entire job hunting and recruitment process.",
      technologiesUsed: ["React", "Vite", "Express"],
      designTheme: ["Light"],
      href: "https://jobr.vercel.app/",
      reverse: false,
      sourceCodeHref: "https://github.com/JohnnnGreat/Jobr-Online-Job-Portal.git",
   },
   {
      id: 15,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Midwest}
            alt="midwest"
         />
      ),
      title: "Midwest Jack and Greens",
      description:
         "A vibrant restaurant website capturing the authentic essence of Jamaican cuisine, offering an immersive digital experience that showcases menu items, restaurant ambiance, and provides seamless online reservation capabilities. The design reflects the warm, welcoming spirit of Caribbean culinary traditions.",
      technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
      designTheme: ["Light"],
      href: "https://midwest-peach.vercel.app/",
      reverse: false,
      sourceCodeHref: "https://github.com/JohnnnGreat/Midwest",
   },
   {
      id: 2,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Veronicas}
            alt="veronicas"
         />
      ),
      title: "Veronicas Kitchen",
      description:
         "An elegant food reservation website that offers a seamless dining experience, allowing customers to explore curated menus, check real-time availability, and make reservations with unprecedented ease. The platform combines a sophisticated culinary showcase with intuitive booking functionality.",
      technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
      designTheme: ["Light"],
      href: "https://www.veronicas-kitchen.com/",
      reverse: true,
      sourceCodeHref: "",
   },
   {
      id: 3,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={ScholarHub}
            alt="scholarhub"
         />
      ),
      title: "Scholars Hub",
      description:
         "An innovative research delivery platform designed to connect researchers, students, and academic professionals worldwide. The ongoing project aims to streamline research access, facilitate knowledge sharing, and create a collaborative ecosystem for academic and scientific exploration.",
      href: "https://scholar-six.vercel.app/",
      reverse: false,
      technologiesUsed: ["Nextjs", "TailwindCss", "Ant Design", "React Router"],
      designTheme: ["Dark"],
      sourceCodeHref: "https://github.com/JohnnnGreat/ScholarHub-MERN",
   },
   {
      id: 4,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Portfolio}
            alt="portfolio"
         />
      ),
      title: "Tim's Portfolio",
      description: "A professionally crafted personal portfolio website showcasing Tim's professional journey, skills, and creative projects. Designed to provide a comprehensive and visually appealing representation of his professional capabilities and achievements.",
      href: "https://timgabrielcodes.vercel.app/",
      reverse: false,
      technologiesUsed: ["Next", "Tailwindcss"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/TimPortfolio",
   },
   {
      id: 5,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Macgroup}
            alt="Macgroup Tech"
         />
      ),
      title: "Macgroup Technologies",
      description: "A comprehensive redesign and development of the Macgroup Technologies website, focusing on creating a modern, intuitive digital presence that effectively communicates the company's technological expertise, services, and innovative solutions.",
      href: "https://www.macgrouptech.com/",
      reverse: false,
      technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
      designTheme: ["Light"],
      sourceCodeHref: "/",
   },
   {
      id: 6,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Heritage}
            alt="heritage Hub"
         />
      ),
      title: "Heritage Hub",
      description: "A sophisticated cuisine discovery platform that allows users to explore, learn about, and connect with traditional culinary experiences. The website serves as a bridge between food enthusiasts and authentic cultural dining experiences.",
      href: "https://soulfood-sepia.vercel.app/",
      reverse: false,
      technologiesUsed: ["Nextjs", "Sass", "Nodemailer", "MongoDb", "Express Js"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Traditional-Cuisines",
   },
   {
      id: 7,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={FitVibe}
            alt="scholarhub"
         />
      ),
      title: "FitVibe Hub",
      description: "A dynamic landing page for a fitness and wellness website, designed to motivate and inspire individuals on their health journey. The platform provides an engaging introduction to fitness resources, wellness tips, and lifestyle transformations.",
      href: "https://fitness-and-wellness.vercel.app/",
      reverse: false,
      technologiesUsed: ["Nextjs", "Tailwindcss", "Nodemailer"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Fitness-and-Wellness",
   },
   {
      id: 8,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={AppDesign}
            alt="Appdesign"
         />
      ),
      title: "Food Green",
      description: "A meticulously crafted UI design for a food delivery application, demonstrating innovative user interface principles and creating an intuitive, visually appealing digital experience for modern food ordering platforms.",
      href: "/",
      reverse: false,
      technologiesUsed: ["Figma", "CorelDraw"],
      designTheme: ["Light"],
      sourceCodeHref: "/",
   },
   {
      id: 9,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Hom}
            alt="House of Max"
         />
      ),
      title: "House of Max",
      description: "A compassionate web presence for a Nigerian NGO, designed to showcase the organization's mission, programs, and impact. The website serves as a powerful communication tool to engage supporters, share stories, and promote community development initiatives.",
      href: "https://www.houseofmax.org/",
      reverse: false,
      technologiesUsed: ["Figma", "CorelDraw"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Maxwell-Bessie-Adiele-",
   },
   {
      id: 10,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={FileStorage}
            alt="File Storage"
         />
      ),
      title: "File Storage",
      description: "An advanced file storage web application that revolutionizes digital file management, offering secure sharing, intuitive organization, and seamless cloud storage solutions for individuals and teams.",
      href: "https://media-storage-pi.vercel.app/",
      reverse: false,
      technologiesUsed: ["Next", "Shadcnui", "Supabase"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Media-Storage-Supabase-Next.Js",
   },
   {
      id: 11,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Ed}
            alt="ed circle"
         />
      ),
      title: "Ed Circle",
      description: "A comprehensive landing page for an educational resource website, designed to provide easy access to learning materials, educational insights, and inspire continuous knowledge acquisition.",
      href: "https://edu-circle.netlify.app/",
      reverse: false,
      technologiesUsed: ["Html", "CSS", "Javascript"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Ed-Circle",
   },
   {
      id: 12,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Culinary}
            alt="scholarhub"
         />
      ),
      title: "Culinary Finder with API",
      description: "An innovative culinary exploration platform that leverages API integration to provide users with extensive food and recipe information, enabling culinary discovery and inspiration through a user-friendly interface.",
      href: "https://food-finder-ecru.vercel.app/",
      reverse: false,
      technologiesUsed: ["Axios", "TailwindCss"],
      designTheme: ["Light"],
      sourceCodeHref: "https://github.com/JohnnnGreat/FoodFinder",
   },
   {
      id: 13,
      image: (
         <Image
            className="rounded-[20px] h-[500px!important] object-cover"
            src={Marketing}
            alt="ed circle"
         />
      ),
      title: "Marketing Madness",
      description: "A cutting-edge frontend for an AI-powered marketing agency, showcasing innovative digital marketing solutions and demonstrating the potential of artificial intelligence in transforming marketing strategies.",
      href: "https://marketing-madnes.vercel.app/",
      reverse: false,
      technologiesUsed: ["Html", "CSS", "Javascript"],
      designTheme: ["Dark"],
      sourceCodeHref: "https://github.com/JohnnnGreat/Marketing-Madnes",
   },
];

export const devSteps = [
   {
      title: "Research and Design 🧐",
      description:
         "First things first—research! I dive into finding out what I need to know, whether it’s tools, tech, or design systems. I look for inspiration and check out websites that do something similar to what I’m building. Once I’ve got a solid understanding, it’s time to get creative and start sketching out designs in Figma.",
   },
   {
      title: "Development and Testing 💻",
      description:
         "This is where I get my hands dirty! With the design and research in place, I build out the website using the right tools and tech, making sure it’s all about the user’s needs. After that, I run through some testing to ensure everything works like it should, and we catch any issues before launch.",
   },
   {
      title: "Deployment and Delivery 🚀",
      description: "Now that the site’s good to go, it’s time to deploy! I typically use Vercel for quick and easy deployment—it’s fast and smooth. Once it’s live, I send the website over to the client with the URL, documentation, and any other important info they might need.",
   },
   {
      title: "Periodic Maintenance & Updates 🔄",
      description: "After the website is live, I don’t just leave it hanging. I check in every so often to make sure everything’s running smoothly. And when it’s time for content updates (thanks, client requests 😅), I’m always down to make those tweaks and keep things fresh.",
   },
];
