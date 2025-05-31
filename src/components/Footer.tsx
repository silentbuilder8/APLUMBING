import React from 'react';
import Container from './Container';
import { MessageSquare, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl">AI Plumber Agent</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre employé IA 24h/24 qui transforme WhatsApp en machine à cash - Sans salaire, sans congés, sans erreur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('solution-section')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('case-study-section')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Témoignages
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:ai.discoveryy@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  ai.discoveryy@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a href="tel:+14384489501" className="text-gray-400 hover:text-white transition-colors">
                  +1 (438) 448-9501
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AI Plumber Agent. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;