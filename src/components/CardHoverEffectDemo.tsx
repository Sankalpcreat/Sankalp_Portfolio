// CardHoverEffectDemo.tsx

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Utility classnames function

export function CardHoverEffectDemo() {
    return (
      <div  id="experience" className="max-w-5xl mx-auto px-8 py-10">
        {/* Experience Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Experience
        </h2>
  
        <HoverEffect items={projects} />
      </div>
    );
  }

export const projects = [
  {
    title: "AmplifyXLabs (Jan 2025 - Present)",
    description:
      "SDE: Built AI web apps (Node/Next.js/Python), automated DMs, and video tools. Improved performance and collaborated remotely.",
    link: "https://xautodm.com", // Example link
  },
  {
    title: "SmartCard AI (Nov 2024 - Jan 2025)",
    description:
      "AI Intern: Developed Windows app with Python/Flask, worked with LLMs, optimized performance, and enabled app-web sync.",
    link: "#", // No public link
  },
  {
    title: "QED42 (June-2023 July-2023)",
    description:
      "Worked as a Software Intern at QED42, gaining experience in full-stack web development and collaborating with a dynamic team to deliver impactful solutions.",
    link: "https://qed42.com", // Replace with the actual link if needed
  },
  {
    title: "SRM Institute of Science and Technology(2020-2024)",
    description:
      "Completed my Bachelor of Technology in Electronics and Communication Engineering from SRM Institute.",
    link: "https://www.srmist.edu.in", // Replace with the actual link if needed
  }
];

// HoverEffect component (Now defined only once in the file)
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-10 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
