import Layout from "../components/Layout";
import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
}
