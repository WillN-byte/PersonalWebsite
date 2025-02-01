"use client";

import { useEffect, useState } from "react";
//import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const SocialButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
        rotate: [0, 10, -10, 5, -5, 0],
        transition: { duration: 0.5 },
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out z-10"
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      {icon}
    </motion.a>
  );
};

export default function Hero() {
  //const [_, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rotateX = useTransform(cursorY, [0, 300], [15, -15]);
  const rotateY = useTransform(cursorX, [0, 300], [-15, 15]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      //setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cursorX, cursorY]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center space-y-8">
        <motion.div
          className="w-full space-y-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary drop-shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 200,
            }}
          >
            Hi, I&apos;m William Ngo
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-primary-foreground mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Computer Science Graduate & Software Engineer
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <SocialButton
              href="https://www.linkedin.com/in/william-ngo-byte/"
              icon={<Linkedin size={24} />}
              label="LinkedIn"
            />
            <SocialButton
              href="https://github.com/WillN-byte"
              icon={<Github size={24} />}
              label="GitHub"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden"
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          {/* <Image
            src="/placeholder.svg"
            alt="William Ngo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
