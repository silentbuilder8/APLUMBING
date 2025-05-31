import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { TrendingUp, Clock, Star, Users } from 'lucide-react';
import Button from '../components/Button';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const CaseStudy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('case-study-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="case-study-section"
      className="py-20 bg-gray-50"
    >
      <Container>
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <SectionTitle
            title="Ils ont déjà transformé leur business"
            subtitle="Découvrez comment nos clients utilisent l'IA pour générer des revenus passifs."
            centered={true}
          />
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Marc's Testimonial */}
          <div className={`transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold">
                    M
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Marc</h3>
                    <p className="text-gray-600">Plombier Indépendant, Drummondville</p>
                  </div>
                </div>
                
                <blockquote className="text-lg mb-6 italic text-gray-800">
                  "J'étais sceptique... Mais mon AI Chief a répondu à un appel à 2h du matin pendant que je dormais. Le client a payé 89$ pour un tuto DIY. J'ai RIEN FAIT."
                </blockquote>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-semibold">1 840$ de revenus passifs le 1er mois</span>
                  </div>
                  <div className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">16h de gagnées par semaine</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 bg-white p-4 rounded-lg shadow-inner">
                  "Mon compétiteur a essayé de copier... mais mon système travaille déjà pour moi 😎 Ne réfléchis pas. Essaie. C'est comme avoir un employé gratuit qui rapporte."
                </p>
                
                <Button href={CALENDLY_URL} primary className="w-full text-sm">
                  Je veux les mêmes résultats →
                </Button>
              </div>
            </div>
          </div>

          {/* Sophie's Testimonial */}
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sophie</h3>
                    <p className="text-gray-600">Gérante de 8 Techniciens, Québec</p>
                  </div>
                </div>
                
                <blockquote className="text-lg mb-6 italic text-gray-800">
                  "On perdait 40% des appels. Maintenant ? Notre IA transforme 1 message sur 3 en cash. Hier, elle a vendu un contrat d'entretien à 1 200$/an... pendant qu'on réparait une canalisation."
                </blockquote>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Équipe 2x plus productive</span>
                  </div>
                  <div className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Les clients disent "Merci" à MON NOM via l'IA</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 bg-white p-4 rounded-lg shadow-inner">
                  "Le système s'est remboursé en 9 jours. Prends 90 secondes. Demande la démo. Ton futur toi te remerciera."
                </p>
                
                <Button href={CALENDLY_URL} primary className="w-full text-sm">
                  Réserver ma démo maintenant →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudy;