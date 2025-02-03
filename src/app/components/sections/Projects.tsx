"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import ProjectModal from "../ProjectModal";

interface Project {
  title: string;
  technologies: string[];
  achievements: string[];
  category: string;

  githubLink?: string; // Optional field for GitHub link
}

const projects: Project[] = [
  {
    title: "Access Control System with RFID Integration",
    technologies: ["ESP32", "RFID", "ExpressJS", "MongoDB", "MQTT"],
    achievements: [
      "Deployed an RFID-based Access Control System for office security with over 95% accuracy in card validation.",
      "Utilized ESP32 microcontroller and RFID reader, handling up to 500 unique access cards",
      "Optimized ExpressJS and MongoDB APIs, slashing processing time by 40% and increasing performance",
      "Implemented Message Queuing Telemetry Transport system for real-time server-microcontroller communication, resulting in an 85% reduction in response time",
    ],
    category: "IoT",

    githubLink: "https://github.com/SCE-Development/RFID-door-lock", // GitHub link
  },
  {
    title: "VR Haunted House Experience",

    technologies: ["Blender", "Unity", "C#", "VR"],
    achievements: [
      "Spearheaded 3D modeling and VR scripting for an immersive game project using Blender, Unity, and C#.",
      "Leveraged object-oriented programming principles to create modular, reusable interactive VR assets",
      "Resolved cross-platform compatibility issues, ensuring seamless performance across Meta Quest and HTC Vive",
    ],
    category: "VR",

    githubLink: "https://github.com/WillN-byte/VR-Haunted-House", // GitHub link
  },
  {
    title: "PalAte - Food Recommendation App",

    technologies: ["React Native", "PostgreSQL", "Supabase", "Google Maps API"],
    achievements: [
      "Engineered a React Native app with 20+ screens and 15+ integrated packages, including Google Maps API.",
      "Designed and maintained PostgreSQL databases using Supabase, implementing row-level security policies",
      "Implemented advanced bitwise algorithms to optimize party-restaurant matching, reducing runtime by 37% and enhancing scalability for thousands of concurrent users",
      "Orchestrated strategic product launch campaign, targeting 1,000+ potential clients and 10+ restaurants",
    ],
    category: "Mobile",

    githubLink: "https://github.com/yourusername/PalAte", // GitHub link
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 relative z-30 bg-black text-white">
      <motion.h2
        className="text-4xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="flex justify-center mb-8 space-x-6">
        {["All", "IoT", "VR", "Mobile"].map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
            className="text-lg py-2 px-6"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col relative z-30 overflow-hidden group bg-white bg-opacity-10 text-white rounded-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto flex justify-between items-center">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all text-lg"
                  onClick={() => openProjectModal(project)}
                >
                  View Details
                </Button>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      GitHub
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeProjectModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
