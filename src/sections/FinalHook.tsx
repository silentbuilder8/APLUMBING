import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { AlertTriangle } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const FinalHook: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-hook-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="final-hook-section"
      className="py-20 bg-primary text-white"
    >
      <Container>
        <div className={`text-center transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Votre compétiteur vient de s'abonner.<br/>
            Voulez-vous le croiser chez VOS clients ce soir?
          </h2>
          
          <div className="max-w-md mx-auto">
            <Button 
              primary={false} 
              large={true} 
              className="w-full text-xl"
              href={CALENDLY_URL}
            >
              NON, JE VEUX LE DÉTRUIRE → ACCÉDER À L'OFFRE
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalHook