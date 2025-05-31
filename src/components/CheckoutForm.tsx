import React, { useState } from 'react';
import Button from './Button';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    savings: '',
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Commencer avec AI Plumber Agent</h3>
      
      <div className="mb-6">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
            checked
            readOnly
          />
          <span className="ml-2">
            Je veux sauver <input 
              type="text" 
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-primary focus:ring-0 px-2 w-24 text-center" 
              placeholder="$______"
            />/mois en fuites opérationnelles
          </span>
        </label>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>
      </div>
      
      <div className="mt-8">
        <Button type="submit" primary large className="w-full text-lg">
          JE VEUX MON EMPLOYÉ IA MAINTENANT →
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;