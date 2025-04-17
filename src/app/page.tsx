"use client";

import { devSteps, homeProjects, latestProjects } from "@/constant";
import { useEffect, useState } from "react";

import CircleMarquee from "@/components/CircularMarquee";
import Link from "next/link";
import TechStackDisplay from "@/components/Tech";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSelection, setShowSelection] = useState(true);
  const [portfolioType, setPortfolioType] = useState(null); // 'development' or 'design'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handlePortfolioSelection = (type) => {
    setPortfolioType(type);
    setShowSelection(false);
    // You could also save this preference in localStorage
    localStorage.setItem("preferredPortfolio", type);
  };

  // Portfolio selection screen
  if (showSelection) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="font-Mark text-4xl md:text-6xl font-bold mb-16 text-center">
          Welcome to John Ossai's Portfolio
        </h1>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-xl px-4">
          <button
            onClick={() => handlePortfolioSelection("development")}
            className="bg-black text-white py-8 px-8 rounded-3xl flex-1 hover:bg-gray-800 transition-all flex flex-col items-center justify-center"
          >
            <span className="text-4xl mb-4">💻</span>
            <span className="font-Din text-xl uppercase tracking-wider">
              Development
            </span>
            <p className="font-Circular text-sm mt-4 text-gray-300">
              View my web development projects and expertise
            </p>
          </button>

          <button
            onClick={() => handlePortfolioSelection("design")}
            className="bg-white text-black py-8 px-8 rounded-3xl flex-1 border-2 border-black hover:bg-gray-100 transition-all flex flex-col items-center justify-center"
          >
            <span className="text-4xl mb-4">🎨</span>
            <span className="font-Din text-xl uppercase tracking-wider">
              Design
            </span>
            <p className="font-Circular text-sm mt-4 text-gray-600">
              Explore my UI/UX and graphic design work
            </p>
          </button>
        </div>

        <button
          onClick={() => setShowSelection(false)}
          className="mt-12 font-Din uppercase tracking-wider text-sm underline"
        >
          Skip selection & view both
        </button>
      </div>
    );
  }

  // Content based on portfolio type
  const renderPortfolioSpecificContent = () => {
    if (portfolioType === "design") {
      return (
        <section className="py-[4rem] px-[1rem] bg-gray-50">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-[2.8rem] mb-[1rem] lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
              Design Projects 🎨
            </p>
            <p className="font-thin font-Circular mx-auto mb-12">
              A showcase of my creative design work—UI/UX designs, branding, and
              visual experiences.
            </p>

            {/* Design portfolio content here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[3rem]">
              {/* Replace with your design projects */}
              <div className="rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  {/* Placeholder for design image */}
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="mt-[1rem]">
                  <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">
                    Brand Identity Design
                  </h1>
                  <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">
                    A complete brand identity package including logo design,
                    color palette, typography, and brand guidelines.
                  </p>
                  <button className="font-Din uppercase mt-[3rem] tracking-widest">
                    View Project Details
                    <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
                  </button>
                  <ul className="mt-[1.3rem] font-Din flex gap-3 uppercase tracking-widest text-[#000]/50">
                    <li>Branding</li>
                    <li>Logo</li>
                    <li>Typography</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  {/* Placeholder for design image */}
                  <span className="text-4xl">📱</span>
                </div>
                <div className="mt-[1rem]">
                  <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">
                    Mobile App UI Design
                  </h1>
                  <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">
                    A modern and intuitive user interface design for a finance
                    management mobile application.
                  </p>
                  <button className="font-Din uppercase mt-[3rem] tracking-widest">
                    View Project Details
                    <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
                  </button>
                  <ul className="mt-[1.3rem] font-Din flex gap-3 uppercase tracking-widest text-[#000]/50">
                    <li>UI/UX</li>
                    <li>Mobile</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="/design-projects"
              className="font-Din text-[1.2rem] mt-[4rem] inline-block tracking-widest uppercase"
            >
              See All Design Projects 🎨
              <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
            </a>
          </div>
        </section>
      );
    } else if (portfolioType === "development") {
      return (
        <section id="projects" className="py-[4rem] px-[1rem]">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-[2.8rem] mb-[1rem] lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
              Development Projects 💻
            </p>
            <p className="font-thin font-Circular mx-auto mb-12">
              A peek into the cool stuff I've been building—websites, web apps,
              and functional solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[3rem]">
              {homeProjects.map((project) => (
                <div className="rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                  <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem]">
                    {project.no}
                  </h1>
                  <div>{project.image}</div>
                  <div className="mt-[1rem]">
                    <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">
                      {project.title}
                    </h1>
                    <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">
                      {project.description}
                    </p>
                    <button className="font-Din uppercase mt-[3rem] tracking-widest">
                      View Project Details
                      <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
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
              href="/development-projects"
              className="font-Din text-[1.2rem] mt-[4rem] inline-block tracking-widest uppercase"
            >
              See All Development Projects 💻
              <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
            </a>
          </div>
        </section>
      );
    }

    // If no specific portfolio type or "view both" was selected
    return (
      <section id="projects" className="py-[4rem] px-[1rem]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[2.8rem] mb-[1rem] lg:text-[4.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
            Some Things I've Built 🛠️
          </p>
          <p className="font-thin font-Circular mx-auto mb-12">
            A peek into the cool stuff I've been crafting—apps, websites, and
            things that just work.
          </p>

          {/* Portfolio type selector tabs */}
          <div className="flex mb-8 border-b">
            <button
              onClick={() => setPortfolioType("development")}
              className={`py-2 px-6 font-Din uppercase tracking-wider ${
                portfolioType === "development" || !portfolioType
                  ? "border-b-2 border-black"
                  : ""
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setPortfolioType("design")}
              className={`py-2 px-6 font-Din uppercase tracking-wider ${
                portfolioType === "design" ? "border-b-2 border-black" : ""
              }`}
            >
              Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[3rem]">
            {homeProjects.map((project) => (
              <div className="rounded-[40px] border p-[20px] md:p-[40px] bg-[#fafafa98] relative">
                <h1 className="text-[8rem] font-Mark text-[#5c5c5c0a] absolute top-[-5rem] left-[-3rem]">
                  {project.no}
                </h1>
                <div>{project.image}</div>
                <div className="mt-[1rem]">
                  <h1 className="font-Mark text-[1.3rem] md:text-[2rem] mt-[2rem] leading-relaxed line-clamp-1">
                    {project.title}
                  </h1>
                  <p className="font-Circular line-clamp-5 text-[#000]/50 mt-[1rem] text-justify leading-relaxed">
                    {project.description}
                  </p>
                  <button className="font-Din uppercase mt-[3rem] tracking-widest">
                    View Project Details
                    <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
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
    );
  };

  // The main portfolio page
  return (
    <>
      <meta name="theme-color" content="#10101A" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#10101A" />
      <title>
        John Ossai 🚀 &mdash;{" "}
        {portfolioType === "design"
          ? "Designer"
          : portfolioType === "development"
          ? "Web Developer"
          : "Designer & Developer"}
      </title>
      <meta
        name="description"
        content={`I am a ${
          portfolioType === "design"
            ? "designer"
            : portfolioType === "development"
            ? "web developer"
            : "designer & web developer"
        } passionate about turning ideas into real-life products.`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`John Ossai 🚀 &mdash; ${
          portfolioType === "design"
            ? "Designer"
            : portfolioType === "development"
            ? "Web Developer"
            : "Designer & Developer"
        }`}
      />
      <meta property="og:url" content="https://johnossai.com.ng/" />
      <meta
        property="og:image"
        content="https://www.johnossai.com.ng/image.png"
      />
      <meta
        property="og:description"
        content={`I am a ${
          portfolioType === "design"
            ? "designer"
            : portfolioType === "development"
            ? "web developer"
            : "designer & web developer"
        } passionate about turning ideas into real-life products.`}
      />
      <meta
        name="twitter:title"
        content={`John Ossai 🚀 &mdash; ${
          portfolioType === "design"
            ? "Designer"
            : portfolioType === "development"
            ? "Web Developer"
            : "Designer & Developer"
        }`}
      />
      <meta
        name="twitter:description"
        content={`I am a ${
          portfolioType === "design"
            ? "designer"
            : portfolioType === "development"
            ? "web developer"
            : "designer & web developer"
        } passionate about turning ideas into real-life products.`}
      />
      <meta
        name="twitter:image"
        content="https://www.johnossai.com.ng/image.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://johnossai.com.ng/" />

      {/* Header with portfolio switcher */}
      <header className="py-4 px-6 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="flex items-center gap-2">
          <div className="font-Din leading-[1] border-r pr-[.7rem]">
            <h1>John</h1>
            <h1>Ossai</h1>
          </div>
        </div>

        {/* Portfolio switcher */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSelection(true)}
            className="font-Din uppercase text-sm tracking-wider"
          >
            Switch Portfolio
          </button>
        </div>
      </header>

      <section className="overflow-hidden min-h-screen relative bg-white flex items-center py-[5rem] pt-[5rem] md:py-[10rem] px-[1rem]">
        <div className="max-w-[1000px] mx-auto">
          <img
            src="./hand.png"
            className="hidden md:block absolute w-[250px!important] bottom-[3rem] right-[-3rem] rotate-[-30deg] scale-x-[-1]"
            alt=""
          />
          <h1 className="font-Circular border inline-block rounded-full py-2 px-5 sm:py-3 sm:px-7 bg-[#fafafa] text-sm sm:text-base">
            Hey, I am John
          </h1>
          <h1 className="relative z-10 text-[3rem] md:text-5xl lg:text-[5.5rem] font-bold leading-[1] font-Mark max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] mt-4">
            Crafting{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate">
              {portfolioType === "design"
                ? "designs"
                : portfolioType === "development"
                ? "websites"
                : "experiences"}
            </span>{" "}
            that work, look, and feel great.
          </h1>
          <Link
            href={
              portfolioType === "design"
                ? "/design-projects"
                : portfolioType === "development"
                ? "/development-projects"
                : "/projects"
            }
            className="mt-[4rem] inline-block font-Din font-normal text-[1rem] uppercase tracking-[2px]"
          >
            View Projects
            <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
          </Link>
        </div>
      </section>

      {/* Render portfolio specific content */}
      {renderPortfolioSpecificContent()}

      {/* Show tech stack only for development portfolio */}
      {(portfolioType === "development" || !portfolioType) && (
        <TechStackDisplay />
      )}

      {/* Process section - customized based on portfolio type */}
      <section className="py-[5rem] px-[1rem]">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-[2.8rem] mb-[1rem] md:text-5xl lg:text-[4.5rem] font-bold leading-[1] font-Mark mt-[.5rem] text-right">
            🚀My{" "}
            {portfolioType === "design"
              ? "Design"
              : portfolioType === "development"
              ? "Dev"
              : "Creative"}{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate text-right">
              {" "}
              Process{" "}
            </span>
          </h1>
          <p className="font-thin font-Din max-w-[500px] leading-relaxed tracking-wider text-[#000]/50 ml-auto mt-[1rem] text-right uppercase">
            {" "}
            {portfolioType === "design"
              ? "My design process is methodical yet creative. Here's how I approach each project:"
              : portfolioType === "development"
              ? "Yep, I've got a workflow that I stick to when building frontend apps. Here's how I roll:"
              : "My creative process combines design thinking with development precision. Here's my approach:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[2rem]">
            {portfolioType === "design"
              ? // Design process steps
                [
                  {
                    title: "Research & Discovery",
                    description:
                      "Understanding your needs, audience, and competition to inform design decisions.",
                  },
                  {
                    title: "Ideation & Sketching",
                    description:
                      "Exploring creative concepts and visual directions through sketching and brainstorming.",
                  },
                  {
                    title: "Design & Prototyping",
                    description:
                      "Creating high-fidelity designs and interactive prototypes for user testing.",
                  },
                  {
                    title: "Refine & Deliver",
                    description:
                      "Iterating based on feedback and preparing final deliverables for implementation.",
                  },
                ].map((step) => (
                  <div className="bg-[#fafafa] p-[2rem] rounded-[20px] border">
                    <h1 className="font-Mark text-[1.5rem] my-[1rem] leading-[1.3]">
                      {step.title}
                    </h1>
                    <p className="mt-[1.3rem] font-Circular text-[#000]/50">
                      {step.description}
                    </p>
                  </div>
                ))
              : // Development process steps
                devSteps.map((step) => (
                  <div className="bg-[#fafafa] p-[2rem] rounded-[20px] border">
                    <h1 className="font-Mark text-[1.5rem] my-[1rem] leading-[1.3]">
                      {step.title}
                    </h1>
                    <p className="mt-[1.3rem] font-Circular text-[#000]/50">
                      {step.description}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </section>

      <section className="py-[3rem] px-[1rem]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[2.8rem] mb-[1rem] lg:text-[4.5rem] font-extrabold font-Mark leading-[1]">
            Think I could be the perfect{" "}
            {portfolioType === "design"
              ? "designer"
              : portfolioType === "development"
              ? "developer"
              : "creative partner"}{" "}
            for you?
          </h2>
          <p className="text-[1rem] mt-[1rem] md:max-w-[70%] text-[#000]/50 font-Circular">
            {portfolioType === "design"
              ? "My designs speak for themselves—thoughtful concepts, eye-catching visuals, and user-first experiences. Let's bring your brand vision to life."
              : portfolioType === "development"
              ? "My projects say it all—clean code, eye-catching designs, and user-first experiences. If you're looking for someone to bring your ideas to life, let's make it happen together."
              : "My portfolio shows how I blend design aesthetic with development functionality. Let's create something that stands out visually and performs flawlessly."}
          </p>
          <a
            href={
              portfolioType === "design"
                ? "/design-projects"
                : portfolioType === "development"
                ? "/development-projects"
                : "/projects"
            }
            className="font-Din text-[1.2rem] mt-[4rem] inline-block tracking-widest uppercase"
          >
            Check Out My Works 🚀
            <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
          </a>
        </div>
      </section>

      <section className="py-[5rem] px-[1rem]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[2.8rem] mb-[1rem] lg:text-[4.5rem] font-bold font-Mark mt-[4rem] leading-[1] md:max-w-[80%] text-[#000]/40">
            Ready to turn your ideas into a stunning reality?{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-rotate">
              Let's build something amazing together.
            </span>
          </h2>
          <a
            href="mailto:johnossai20@gmail.com"
            className="mt-[2rem] inline-block font-Din font-normal text-[1rem] uppercase tracking-[2px]"
          >
            Send a Message 👋
            <div className="mt-[.4rem] w-[60px] h-[1px] bg-black"></div>
          </a>
          <div className="flex mt-[3rem] space-x-[2rem]">
            <a
              href="https://github.com/your-username"
              target="_blank"
              className="font-Din tracking-widest uppercase"
              aria-label="GitHub"
            >
              🐙 GitHub
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              className="font-Din tracking-widest uppercase"
              aria-label="Twitter"
            >
              🐦 Twitter
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="font-Din tracking-widest uppercase"
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
            <h1 className="font-Circular">
              {portfolioType === "design"
                ? "Design"
                : portfolioType === "development"
                ? "Development"
                : "Design and Development"}
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}
