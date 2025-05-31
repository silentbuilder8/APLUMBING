import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import CountdownTimer from '../components/CountdownTimer';
import Button from '../components/Button';
import { Gift, FileCheck, Award } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const Urgency: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('urgency-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const bonuses = [
    {
      title: 'Audit de votre Business',
      value: '$1,200',
      icon: FileCheck,
      description: 'Analyse complète de votre processus client et identification des opportunités d\'amélioration.'
    },
    {
      title: 'Lead Reactivation Engine',
      value: '$2,500',
      icon: Gift,
      description: 'Module premium qui réactive automatiquement vos anciens clients et prospects froids.'
    },
    {
      title: 'Google Review Manager',
      value: '$1,200',
      icon: Award,
      description: 'Système de gestion de réputation qui booste vos avis Google et surveille votre e-réputation.'
    }
  ];

  return (
    <section 
      id="urgency-section"
      className="py-20 bg-accent/5"
    >
      <Container>
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <SectionTitle
            title="Offre Exclusive Québec"
            subtitle="Les 10 premiers inscrits reçoivent ces bonus GRATUITS"
            centered={true}
          />
        </div>
        
        <div className="mt-8 mb-12">
          <div className={`transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <CountdownTimer />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 delay-${(index + 2) * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-accent/10 p-4 flex justify-between items-center">
                <h3 className="font-bold">{bonus.title}</h3>
                <div className="bg-accent text-white rounded-full py-1 px-3 text-sm font-medium">
                  {bonus.value}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <bonus.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                <p className="text-center text-gray-600">{bonus.description}</p>
                
                <div className="mt-4 flex justify-center">
                  <span className="bg-green-100 text-green-800 font-medium rounded-full py-1 px-3 text-sm">
                    GRATUIT
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button primary large href={CALENDLY_URL}>
            RÉSERVER MA PLACE MAINTENANT
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Urgency