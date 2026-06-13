'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header   from '@/components/Header';
import Hero     from '@/components/Hero';
import About    from '@/components/About';
import Skills   from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact  from '@/components/Contact';
import Footer   from '@/components/Footer';

export default function Home() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
