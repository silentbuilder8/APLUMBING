import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import ROI from './sections/ROI';
import Pricing from './sections/Pricing';
import CaseStudy from './sections/CaseStudy';
import Urgency from './sections/Urgency';
import Trust from './sections/Trust';
import FinalHook from './sections/FinalHook';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "AI Plumber Agent | Votre employé IA 24h/24";
    
    // Create favicon dynamically
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230F52BA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ROI />
      <Pricing />
      <CaseStudy />
      <Urgency />
      <Trust />
      <FinalHook />
      <Footer />
    </div>
  );
}

export default App;