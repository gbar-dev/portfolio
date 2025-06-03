"use client";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./Header";
import SkillsSection from "./Skills";
import ContactSection from "./contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };
  const projects = [
    {
      title: "TheMarketWays",
      description:
        "Modern Ecommerce Platform with Next and Django. completely automatised amazon comparator",
      image: "/themarketways.jpg",
      tech: ["Next.js", "Django", "MySQL", "Elasticsearch"],
      live: "https://themarketways.com/",
    },
    {
      title: "Nextdjo Boilerplate",
      description:
        "A ready-to-use fullstack boilerplate with separate Next.js frontend and Django backend—perfect for collaborative projects. Includes optional features like authentication, payments, emailing, Sentry monitoring, and more. Plug in only what you need.",
      image: "/boilerplate.png",
      tech: ["Next.js", "Django", "PosgreSQL", "Oauth"],
      github: "https://github.com/gbar-dev/NEXTDGO.git",
    },
    {
      title: "Predicting Energy Performance (DPE) Ratings for Houses",
      description:
        "Predictive modeling of French Energy Performance (DPE) ratings using government housing data. Benchmarks include supervised models like KNN, Random Forest Classifier and Gradient Boosting ",

      image: "/DPE.webp",
      tech: ["Excel", "VBA", "Machine Learning", "Python"],
      github: "https://github.com/gbar-dev/DIGITAL_PROJECT3.git",
    },
  ];
  return (
    <div className="bg-[#FAFDFE] text-black overflow-x-hidden">
      {/* Header */}
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center  justify-center gap-4  relative overflow-hidden"
      >
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl w-full z-10">
            {/* Left Section */}
            <div className="flex flex-col text-center md:text-left animate-fade-in-up ">
              <p className="text-lg md:text-2xl text-blue-500 mb-2">
                Hello There, I&apos;m
              </p>
              <h1
                className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-200  bg-clip-text text-transparent mb-4 leading-tight"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Guillaume <br /> Baroin
              </h1>
              <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-2 text-blue-500 text-lg md:text-2xl">
                <p className="font-bold">Fullstack Developer,</p>
                <p>
                  building scalable digital products that bridge data and design
                  — turning complex information into meaningful user
                  experiences.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                {/* GitHub */}
                <a
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-gray-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  href="https://github.com/gbar-dev"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium transition-colors duration-300 group-hover:bg-transparent">
                    <FaGithub className="text-2xl text-sky-700 group-hover:text-white" />
                    <span className="text-sky-700 group-hover:text-white">
                      Github
                    </span>
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-gray-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  href="https://www.linkedin.com/in/guillaume-baroin-38b26b241/"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium transition-colors duration-300 group-hover:bg-transparent">
                    <FaLinkedin className="text-2xl text-sky-700 group-hover:text-white" />
                    <span className="text-sky-700 group-hover:text-white">
                      Linkedin
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Section - Profile Image */}
            <div className="flex justify-center">
              <div
                className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden "
                style={{ animation: "floatSpin 1s ease-in-out" }}
              >
                <Image
                  src="/profile-zoomed.png"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                  width={512}
                  height={512}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/10 rounded-full animate-float-slow"></div>
      </section>

      {/* About Section */}
      <section id="skills" className="py-20">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#eaf6ff]  hover:bg-[#D5EFFF] rounded-2xl overflow-hidden backdrop-blur-sm border border-[#b6dcfe] hover:border-[#60a5fa] transition-all duration-300 transform hover:scale-105 "
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sky-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#3b82f6]/20 text-sky-600 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-sky-600 hover:text-[#113264] transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-sky-600 hover:text-[#113264] transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      {/* Footer */}
      <footer className="py-8  border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sky-400">
            © 2025 Guillaume Baroin. Built with passion and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
