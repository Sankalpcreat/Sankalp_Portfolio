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
      <div className="bg-gradient-to-r  text-white font-semibold rounded-lg p-2 shadow-lg">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#home" className="text-white transition-all">
                Home Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#projects" className="text-white transition-all">
                Projects Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Skills">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#skills" className="text-white transition-all">
                Skills Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Experience">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#experience" className="text-white transition-all">
                Experience Section
              </a>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="#contact" className="text-white transition-all">
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
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32 mt-8">

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
        Building AI-powered web apps and tools.Always learning, always shipping.
      </p>

      {/* Get in Touch Button */}
      <a
        href="#contact"
        className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Get in touch
      </a>
      
      {/* Featured Projects Section */}
      <div className="mt-12 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* xautodm.com Card */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">AI Platform</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">xautodm.com</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">Automate social media outreach at scale with intelligent messaging and advanced targeting.</p>
              <a
                href="https://xautodm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              >
                Visit Platform
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* tokgency.com Card */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Video AI</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">tokgency.com</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">Create professional UGC-style videos with AI-powered tools and voice synthesis.</p>
              <a
                href="https://tokgency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
              >
                Visit Platform
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
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

        {/* Experience Section */}
        <CardHoverEffectDemo />

        {/* Project Cards Section */}
        <ProjectCards />
        <Skills/>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Contact
        </h2>

    
        <SocialLinks />


        

       
      </div>
    </div>
  );
}
