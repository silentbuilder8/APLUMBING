import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import { Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="pricing-section"
      className="py-20"
    >
      <Container>
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <SectionTitle
            title="Payez seulement quand votre IA travaille pour vous"
            subtitle="Deux modèles de tarification flexibles adaptés à vos besoins et votre budget."
            centered={true}
          />
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <PricingCard
              title="Full Profit Share"
              setupFee="$2,500"
              commission="15% sur revenus GÉNÉRÉS PAR LE SYSTÈME"
              features={[
                "Setup complet et personnalisé",
                "Formation de votre équipe",
                "Intégration à vos outils existants",
                "Support prioritaire 24/7",
                "Mises à jour gratuites à vie",
                "Commission uniquement sur les revenus générés"
              ]}
            />
          </div>
          
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <PricingCard
              title="Abonnement Léger"
              monthlyFee="$497/mois"
              commission="8% sur revenus passifs"
              features={[
                "Setup complet et personnalisé",
                "Formation de votre équipe",
                "Intégration à vos outils existants",
                "Support standard en heures ouvrables",
                "Mises à jour gratuites pendant 1 an",
                "Paiement mensuel prévisible"
              ]}
              recommended={true}
            />
          </div>
        </div>
        
        <div className={`mt-16 bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-4xl mx-auto text-center transition-all duration-700 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex justify-center mb-4">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Notre Garantie</h3>
          <p className="text-lg">
            ROI 3x en 90 jours ou remboursement INTÉGRAL + $500 pour votre temps perdu.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;