"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineCard from "@/app/components/ui/TimelineCard";
import ZoomedTimelineItem from "@/app/components/ui/ZoomedTimelineItem";

const timelineData = [
  {
    title: "Software Developer",
    company: "PalAte",
    period: "Sep. 2023 – Present",
    location: "San Jose, CA",
    image: "/palate_logo.svg",
    accomplishments: [
      "Engineered a React Native app with 20+ screens and 15+ integrated packages, including Google Maps API",
      "Designed and maintained PostgreSQL databases using Supabase, implementing row-level security policies",
      "Implemented advanced bitwise algorithms to optimize party-restaurant matching, reducing runtime by 37% and enhancing scalability for thousands of concurrent users",
      "Orchestrated strategic product launch campaign, targeting 1,000+ potential clients and 10+ restaurants",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "The Sunrise State",
    period: "Oct. 2024 – Dec 2025",
    location: "Remote",
    image: "/thesunrisestate_logo.svg",
    accomplishments: [
      "Set up scalable, secure cloud infrastructure for content-management system on Microsoft Azure with CI/CD",
      "Implemented automated testing, reducing bug reports by 30%",
    ],
  },
  {
    title: "Project Developer and Tutor",
    company: "San Jose State University",
    period: "Aug. 2022 — Present",
    location: "San Jose, CA",
    image: "/960x0.webp",
    accomplishments: [
      "Cultivated digital literacy and cybersecurity awareness in 280+ students",
      "Developed comprehensive computer science and information security curriculum",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "IBM",
    period: "Jun. 2022 – Aug. 2022",
    location: "San Jose, CA",
    image: "/ibm.svg",
    accomplishments: [
      "Spearheaded implementation of Agile SDLC methodologies, resulting in a 30% faster product launch cycle",
      "Developed JavaScript application to address local homelessness and unemployment",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "SJSU Software & Computer Engineering Society",
    period: "Aug. 2021 – Feb. 2023",
    location: "San Jose, CA",
    image: "/sce.webp",
    accomplishments: [
      "Documented classification and clustering algorithms in Python, like Decision Trees, with detailed explanations and performance analysis, creating a reusable foundation for future machine learning projects",
      "Built a machine learning model using tokenization and BERT embeddings to match job postings with resumes",
    ],
  },
];

const Experience: React.FC = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleZoom = (index: number) => {
    setZoomedIndex(index);
  };

  const handleCloseZoom = () => {
    setZoomedIndex(null);
  };

  return (
    <section id="experience" className="w-full py-16 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          My Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TimelineCard {...item} onZoom={() => handleZoom(index)} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {zoomedIndex !== null && (
          <ZoomedTimelineItem
            data={timelineData[zoomedIndex]}
            onClose={handleCloseZoom}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
