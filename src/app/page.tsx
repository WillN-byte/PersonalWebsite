"use client";
import Layout from "./components/Layout";
import Hero from "@/app/components/sections/Hero";
import AboutMe from "@/app/components/sections/AboutMe";
// import Skills from '@/components/sections/Skills';
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
// import Education from '@/components/sections/Education';
// import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        {/* <Skills />
        
        <Education />
        <Contact /> */}
      </main>
    </Layout>
  );
}
