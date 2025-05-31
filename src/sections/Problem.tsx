import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { AlertTriangle, PhoneOff, Clock, Star } from 'lucide-react';

const Problem: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('problem-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="problem-section"
      className="py-20 bg-gray-50"
    >
      <Container>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Arrêtez de jeter <span className="text-primary">$150 par appel manqué</span> dans les toilettes de la concurrence
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`bg-white p-6 rounded-xl shadow-md transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-3">
                <PhoneOff className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold">Appels Manqués</h3>
            </div>
            <p className="text-gray-700">
              <span className="text-red-500 font-bold">😤</span> Les clients raccrochent après 3 sonneries? Votre répondeur est un trou noir à cash.
            </p>
          </div>
          
          <div className={`bg-white p-6 rounded-xl shadow-md transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-3">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold">Temps Perdu</h3>
            </div>
            <p className="text-gray-700">
              <span className="text-amber-500 font-bold">⏳</span> Perdre 2h/jour en diagnostics routiers = 1 camionnette neuve en moins par an.
            </p>
          </div>
          
          <div className={`bg-white p-6 rounded-xl shadow-md transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-3">
                <Star className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Réputation</h3>
            </div>
            <p className="text-gray-700">
              <span className="text-orange-500 font-bold">⭐</span> 1 étoile Google = 12 clients perdus. Votre réputation se noie dans l'inaction.
            </p>
          </div>
        </div>
        
        <div className={`mt-16 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl transition-all duration-700 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
            <h3 className="text-xl font-bold">Statistique choc</h3>
          </div>
          <p className="mt-2 text-lg">
            <span className="text-red-500 font-bold">⚡</span> 57% des Québécois abandonnent après 1 appel non-répondu - Votre compétiteur les vole à $185/urgence.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Problem;