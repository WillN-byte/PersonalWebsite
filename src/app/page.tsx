"use client";
import Layout from "./components/Layout";
import Hero from "@/app/components/sections/Hero";
import AboutMe from "@/app/components/sections/AboutMe";
// import Skills from '@/components/sections/Skills';
// import Projects from '@/components/sections/Projects';
import Experience from "@/app/components/sections/Experience";
// import Education from '@/components/sections/Education';
// import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Hero />
        <AboutMe />
        <Experience />
        {/* <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact /> */}
      </main>
    </Layout>
  );
}
