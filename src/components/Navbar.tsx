import React, { useState, useEffect } from 'react';
import Container from './Container';
import Button from './Button';
import { MessageSquare, Menu, X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
    }`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-6 w-6 text-primary mr-2" />
            <span className={`font-bold text-lg ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              AI Plumber Agent
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('solution-section')} 
              className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-primary transition-colors px-2`}
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => scrollToSection('pricing-section')} 
              className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-primary transition-colors px-2`}
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('case-study-section')} 
              className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-primary transition-colors px-2`}
            >
              Témoignages
            </button>
            <Button primary={false} href={CALENDLY_URL} className="text-sm px-4 py-2">Nous contacter</Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-3 shadow-lg">
          <Container>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('solution-section')}
                className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('pricing-section')}
                className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('case-study-section')}
                className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
              >
                Témoignages
              </button>
              <Button primary={false} href={CALENDLY_URL} className="text-sm">Nous contacter</Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;