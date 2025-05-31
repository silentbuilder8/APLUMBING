import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Lock, Settings, MessageSquare } from 'lucide-react';

const Trust: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trust-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="trust-section"
      className="py-16 bg-gray-50 border-t border-gray-200"
    >
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`flex items-center justify-center transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Données 100% hébergées au Canada</span>
            </div>
          </div>
          
          <div className={`flex items-center justify-center transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center">
              <Settings className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Conforme RBQ/CMMTQ - Checklists intégrées</span>
            </div>
          </div>
          
          <div className={`flex items-center justify-center transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Support 24/7</span>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-lg font-medium max-w-3xl mx-auto">
            87% de nos clients plombiers renouvellent après 3 mois - Pas parce qu'on est bons. Parce que ÇA MARCHE.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Trust;