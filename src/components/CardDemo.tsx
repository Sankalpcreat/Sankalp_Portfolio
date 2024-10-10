"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-64 w-64 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4 bg-white dark:bg-gray-800"
        )}
      >
        <div className="flex flex-col items-center space-y-2">
          {/* Image (optional) */}
          <Image
            height="80"
            width="80"
            alt="Project"
            src="/project-placeholder.png" // Replace with actual project image
            className="rounded-md object-cover"
          />
          {/* Title */}
          <h1 className="font-bold text-lg text-black dark:text-white">
            Project Name
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A short description of the project goes here.
          </p>
        </div>

        {/* Buttons for GitHub and Website */}
        <div className="flex justify-between mt-4 space-x-4">
          <a
            href="https://github.com" // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://yourwebsite.com" // Replace with actual website link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition-colors"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
