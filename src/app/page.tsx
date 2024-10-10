"use client";
import React, { useState,useEffect } from "react";

import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import Image from "next/image";
import { AspectRatio } from "@/components/aspect-ratio";
import { Button } from "@/components/button";
import { Card, CardContent, CardFooter } from "@/components/card";
import { Github, Link } from "lucide-react";
import { SocialLinks } from "../components/social-links"; 
import {  Menu, MenuItem } from "../components/navbar-menu";
import { cn } from "@/lib/utils";
import Skills from "@/components/Skills"
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Handle scrolling smoothly to different sections
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
  
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="bg-gradient-to-r  text-white rounded-lg p-2 shadow-lg">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#home" className="text-blue-500 transition-all">
                Home Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#projects" className="text-blue-500 transition-all">
                Projects Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Skills">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#skills" className="text-blue-500 transition-all">
                Skills Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Experience">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#experience" className="text-blue-500 transition-all">
                Experience Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#contact" className="text-blue-500 transition-all">
                Contact Section
              </a>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
const projects = [
  {
    name: "SpaceScape",
    description: "AI-powered platform for generating custom interior design images based on user input",
    image: "/project1.png",
    github: "https://github.com/Sankalpcreat/Spacescape",
    link: "https://spacescape-taupe.vercel.app/",
    width: 500,
    height: 300,
  },
  {
    name: "TalkStream",
    description: "A brief description of Project 2",
    image: "/project0.png",
    github: "https://github.com/Sankalpcreat/TalkStream",
    link: "https://talk-stream.vercel.app/",
    width: 500,
    height: 300,
  },
  {
    name: "Project 3",
    description: "A brief description of Project 3",
    image: "/project1 copy.png",
    github: "https://github.com/Sankalpcreat/FlavorFusion",
    link: "https://flavour-fusion03.vercel.app/",
    width: 500,
    height: 300,
  },
  {
    name: "Bio Generator",
    description: "A brief description of Project 4",
    image: "/project3.png",
    github: "https://github.com/Sankalpcreat/TikTokBio",
    link: "https://tik-tok-93ndfnpit-sankalpcreats-projects.vercel.app/",
    width: 500,
    height: 300,
  },
];


const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 mt-16">

      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg mb-6">
        <Image
          src="/image.jpeg" // Replace with the path to your image
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>

      {/* Title with Emoji */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Hi, I am Sankalp Singh
        <span className="ml-2" role="img" aria-label="waving hand">
          👋
        </span>
      </h1>

      {/* Description/Bio */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        As a Full Stack Web Developer, I am dedicated to crafting impactful web
        applications from the ground up. With expertise in both frontend and
        backend development, I focus on delivering production-ready solutions.
        Driven by a passion for solving real-world challenges, I am always eager
        to embrace new opportunities and take on complex projects.
      </p>

      {/* Get in Touch Button */}
      <a
        href="#contact"
        className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Get in touch
      </a>
    </section>
  );
};

const ProjectCards = () => {
  return (
    <section id="projects" className="py-1 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <AspectRatio ratio={5 / 3}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}  // Add appropriate width
                      height={300} // Add appropriate height
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:text-purple-400 hover:bg-purple-950/50 transition-colors p-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:text-purple-400 hover:bg-purple-950/50 transition-colors p-1"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-2 bg-gray-800">
                <h3 className="text-sm font-semibold text-purple-300">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {project.description}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Full-screen grid background */}
      <div className="fixed inset-0 -z-10">
        <GridBackgroundDemo />
      </div>

      {/* Navbar and Hero Section */}
      <div className="relative z-10">
        {/* Use Navbar directly instead of NavbarDemo */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />

        {/* Project Cards Section */}
        <ProjectCards />
        <Skills/>
        <CardHoverEffectDemo />
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Contact
        </h2>

    
        <SocialLinks />


        

       
      </div>
    </div>
  );
}
