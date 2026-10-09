import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { CodeBackground } from './components/UI/CodeBackground';

export function App() {
  return (
    <div className="relative isolate min-h-screen bg-cream-50 text-charcoal-900 selection:bg-mocha-200 selection:text-mocha-900 overflow-x-hidden">
      {/* Background animé subtil inspiré du développement logiciel */}
      <CodeBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
