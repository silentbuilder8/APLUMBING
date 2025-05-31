import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowDown } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-b from-primary/5 to-white pt-32 pb-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">L'arme secrète</span> des maîtres-plombiers :
                <span className="block mt-4 relative">
                  Une IA qui engrange{' '}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent inline-block relative">
                    $2,100/mois
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-50"></div>
                  </span>{' '}
                  <span className="relative">
                    PENDANT
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
                  </span>
                  {' '}vos chantiers, vos pauses-café et vos nuits de sommeil profond
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Système clé-en-main installé en quelques minutes : 
                <span className="block mt-2 font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Capturez 100% des appels urgents, transformez les diagnostics en cash instantané
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button primary large className="sm:flex-1 text-center text-lg" href={CALENDLY_URL}>
                  ACCÉDEZ MAINTENANT À MON IA
                </Button>
                <Button primary={false} large className="sm:flex-1 text-center">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20">
                <div className="bg-primary text-white py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="ml-2 font-medium">AI Plumber Agent</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/20 h-10 w-10 rounded-full flex items-center justify-center text-primary font-bold">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Bonjour! Je suis votre Assistant Plombier IA. Comment puis-je vous aider aujourd'hui?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4 justify-end">
                    <div className="bg-primary rounded-lg p-3 max-w-xs text-white">
                      <p className="text-sm">J'ai un robinet qui fuit dans ma cuisine.</p>
                    </div>
                    <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center text-gray-600 font-bold">
                      C
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 h-10 w-10 rounded-full flex items-center justify-center text-primary font-bold">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Pouvez-vous m'envoyer une photo ou une vidéo du robinet? Je pourrai vous aider à diagnostiquer le problème sans déplacement.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-accent text-white rounded-full py-2 px-4 font-bold text-sm shadow-lg transform rotate-12">
                24/7 Disponible!
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
