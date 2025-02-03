"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/app/components/ui/Card";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Book,
  Coffee,
  Mountain,
} from "lucide-react";

const funFacts = [
  { text: "Loves solving puzzles", icon: <Code className="w-6 h-6" /> },
  { text: "Built first app at 15", icon: <Coffee className="w-6 h-6" /> },
  {
    text: "Fluent in 5 programming languages",
    icon: <Book className="w-6 h-6" />,
  },
  {
    text: "Avid hiker and nature enthusiast",
    icon: <Mountain className="w-6 h-6" />,
  },
];

const stats = [
  { label: "Favorite Day", value: "Leg Day" },
  { label: "Addiction", value: "Reading and Building" },
  { label: "Volunteering Hours", value: "300+" },
  { label: "Favorite Animal", value: "Da 🐐" },
];

export default function AboutMe() {
  const [currentFact, setCurrentFact] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % funFacts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + funFacts.length) % funFacts.length);
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-black bg-opacity-50 backdrop-blur-lg"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: About Me Text */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              Hi there! I&apos;m William Ngo, a passionate computer science
              graduate with a keen interest in software engineering. My journey
              in tech began with a curiosity about how things work, which
              quickly evolved into a love for creating innovative solutions.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              With a strong foundation in various programming languages and a
              knack for problem-solving, I&apos;m always eager to take on new
              challenges and learn cutting-edge technologies. My goal is to
              contribute to projects that make a positive impact on
              people&apos;s lives.
            </p>
          </motion.div>

          {/* Right Column: Fun Facts and Stats */}
          <div className="space-y-8">
            {/* Fun Facts Card */}
            <Card>
              <CardContent className="p-6 bg-white bg-opacity-10 rounded-lg">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Fun Fact About Me:
                </h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevFact}
                    aria-label="Previous fact"
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <div className="flex items-center space-x-4">
                    {funFacts[currentFact].icon}
                    <p className="text-xl md:text-2xl font-medium text-white">
                      {funFacts[currentFact].text}
                    </p>
                  </div>
                  <button
                    onClick={nextFact}
                    aria-label="Next fact"
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <h4 className="text-3xl font-bold text-white">
                      {stat.value}
                    </h4>
                    <p className="text-base text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
