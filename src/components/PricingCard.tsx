import React from 'react';
import Button from './Button';

const CALENDLY_URL = 'https://calendly.com/ai-discoveryy/unlock-the-power-of-ai-for-your-business';

type PricingCardProps = {
  title: string;
  setupFee?: string;
  monthlyFee?: string;
  commission?: string;
  features: string[];
  recommended?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  setupFee,
  monthlyFee,
  commission,
  features,
  recommended = false,
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1
        ${recommended ? 'border-4 border-primary relative' : 'border border-gray-200'}
      `}
    >
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Recommandé
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        
        {setupFee && (
          <div className="mb-2">
            <span className="text-gray-600">Setup:</span> 
            <span className="font-bold text-xl ml-2">{setupFee}</span>
          </div>
        )}
        
        {monthlyFee && (
          <div className="mb-2">
            <span className="text-gray-600">Mensuel:</span>
            <span className="font-bold text-3xl ml-2">{monthlyFee}</span>
          </div>
        )}
        
        {commission && (
          <div className="mb-6">
            <span className="text-gray-600">Commission:</span>
            <span className="font-bold text-xl ml-2">{commission}</span>
          </div>
        )}
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button primary={recommended} large={true} className="w-full" href={CALENDLY_URL}>
          Commencer Maintenant
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;