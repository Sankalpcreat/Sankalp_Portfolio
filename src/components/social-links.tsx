import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp
import Image from "next/image"; 

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: faGithub as IconProp,
    color: "#333", 
    link: "https://github.com/Sankalpcreat",
  },
  {
    id: 2,
    name: "X",
    image: "/twitter.png",
    color: "#000",
    link: "https://x.com/3sankalpsingh",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: faLinkedin as IconProp,
    color: "#0077B5",
    link: "https://www.linkedin.com/in/sankalpsingh03/",
  },
  {
    id: 4,
    name: "Gmail",
    icon: faEnvelope as IconProp,
    color: "#EA4335",
    link: "mailto:singhsankalp997@gmail.com",
  },
  {
    id: 5,
    name: "Dev.io",
    icon: faDev as IconProp,
    color: "#FFA116",
    link: "https://dev.to/sankalpcreat",
  },
];

export function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div id="contact" className="flex flex-row items-center justify-center mb-10 w-full">
      {socialLinks.map((item) => (
        <div
          className="mr-6 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="p-4 rounded-full border-2"
              onMouseMove={handleMouseMove}
              style={{
                width: 60,
                height: 60,
                color: item.color,
                backgroundColor: "#fff",
                borderColor: item.color,
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                item.icon && <FontAwesomeIcon icon={item.icon} size="2x" />
              )}
            </motion.div>
          </a>
        </div>
      ))}
    </div>
  );
}
