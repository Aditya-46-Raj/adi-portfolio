
import { useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section if URL has hash
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background canvas with reduced opacity */}
      <BackgroundCanvas />
      
      <NavBar />
      <main className="relative z-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
