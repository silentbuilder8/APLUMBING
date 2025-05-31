import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { Bot, Calendar, RefreshCw, Star } from 'lucide-react';

const Solution: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('solution-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      title: 'Diagnostic IA',
      description: 'Analyse instantanée des photos et vidéos envoyées par vos clients via WhatsApp et génération de tutoriels DIY.',
      icon: Bot,
      action: 'Analyse photo/vidéo via WhatsApp + tutoriel DIY',
      roi: 'Économise 30% des déplacements'
    },
    {
      title: 'Booking Automatique',
      description: 'Calendrier intelligent qui s\'adapte à vos disponibilités et envoie des rappels vocaux à vos clients.',
      icon: Calendar,
      action: 'Calendrier intelligent + rappels vocaux',
      roi: 'Réduit 75% des RDV manqués'
    },
    {
      title: 'Lead Reactivation',
      description: 'Scanne votre CRM pour identifier les clients inactifs et lance des campagnes de relance personnalisées.',
      icon: RefreshCw,
      action: 'Scan CRM mort → Relance personnalisée',
      roi: 'Réactive 18% des clients perdus'
    },
    {
      title: 'Google Review Manager',
      description: 'Sollicite automatiquement des avis après chaque intervention et vous alerte en cas d\'avis négatifs.',
      icon: Star,
      action: 'Envoi auto post-intervention + alerte mécontents',
      roi: 'Boost 4.8★ moyenne'
    }
  ];

  return (
    <section 
      id="solution-section"
      className="py-20"
    >
      <Container>
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <SectionTitle 
            title="Rencontrez votre Agent IA - Employé #1 qui travaille pendant que vous réparez"
            subtitle="Un assistant virtuel qui ne dort jamais, ne prend pas de congés et transforme WhatsApp en machine à revenus."
            centered={true}
          />
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${(index + 1) * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solution;