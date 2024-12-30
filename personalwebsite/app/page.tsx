"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExperienceTimeline } from "./components/experience-timeline";
import { ImageCarousel } from "./components/image-carousel";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">William Ngo</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer & Computer Science Student
          </h2>
          <div className="flex gap-4 justify-center mb-12">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/WillN-byte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/william-ngo-byte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:ngowilliam25@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-20">
        <Card>
          <CardContent className="p-0 sm:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2">
                <ImageCarousel />
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Passionate developer with a focus on cybersecurity, DevOps,
                  and software development
                </p>
                <p className="mb-4">
                  I am a senior Computer Science student at San Jose State
                  University with a strong passion for coding, which was
                  fostered through government-funded programs that inspired me
                  to give back to the community. As a mentor with Cyber
                  Spartans, I've had the privilege of helping others explore the
                  field of computer science. My experience spans databases,
                  machine learning, information security, and app development,
                  and I thrive in collaborative team environments.
                </p>
                <p>
                  I am currently seeking opportunities in cybersecurity, DevOps,
                  and software development. Feel free to contact me at{" "}
                  <a
                    href="mailto:ngowilliam25@gmail.com"
                    className="text-primary hover:underline"
                  >
                    ngowilliam25@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Timeline Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience Timeline
        </h2>
        <ExperienceTimeline />
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="PalAte"
            description="React Native app helping SJSU students discover restaurants matching dietary preferences"
            tags={["React Native", "PostgreSQL", "Supabase", "Google Maps API"]}
          />
          <ProjectCard
            title="VR Haunted House"
            description="Immersive VR experience built with Unity and C#"
            tags={["Unity", "C#", "Blender", "VR Development"]}
          />
          <ProjectCard
            title="Access Control System"
            description="RFID-based security system with 95% accuracy in card validation"
            tags={["ESP32", "ExpressJS", "MongoDB", "MQTT"]}
          />
          <ProjectCard
            title="Easy Nurture"
            description="JavaScript application to decrease local homelessness and unemployment"
            tags={["JavaScript", "Agile", "IBM Good Tech"]}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Java",
            "Python",
            "C/C++",
            "C#",
            "JavaScript",
            "SQL",
            "HTML",
            "CSS",
            "Node.js",
            "AWS",
            "Azure",
            "Supabase",
            "PyTorch",
            "TensorFlow",
            "DevOps",
            "QA",
            "Unity",
            "GitHub",
            "Git",
            "Docker",
            "CI/CD",
          ].map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>San Jose State University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-muted-foreground">
              GPA: 3.96 | Expected Graduation: Dec 2025
            </p>
            <div className="mt-4">
              <p className="font-medium">Achievements:</p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>President's Scholar (6 times)</li>
                <li>Software & Computer Engineering Society Member</li>
                <li>Virtual/Augmented Reality Club Member</li>
                <li>Eagle Scout</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
