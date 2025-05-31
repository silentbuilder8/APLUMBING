import React, { useState, useEffect } from 'react';

const ROICalculator: React.FC = () => {
  const [calls, setCalls] = useState<number>(50);
  const [lostRevenue, setLostRevenue] = useState<number>(7500);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Calculate lost revenue based on calls
    setLostRevenue(calls * 150);
  }, [calls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('roi-calculator');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      id="roi-calculator"
      className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Votre fuite de cash actuelle</h3>
        <p className="text-gray-600">Glissez pour voir combien vous perdez chaque mois</p>
      </div>
      
      <div className="mb-8">
        <label htmlFor="calls" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre d'appels par mois: <span className="font-bold">{calls}</span>
        </label>
        <input
          type="range"
          id="calls"
          min="10"
          max="200"
          step="5"
          value={calls}
          onChange={(e) => setCalls(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10</span>
          <span>100</span>
          <span>200</span>
        </div>
      </div>
      
      <div className="text-center p-6 bg-gray-50 rounded-xl">
        <div className="text-gray-700 mb-2">Vous perdez potentiellement</div>
        <div className="text-5xl font-bold text-primary mb-2">${lostRevenue.toLocaleString()}</div>
        <div className="text-gray-700">par mois en opportunités manquées</div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-block animate-bounce bg-accent text-white font-bold py-2 px-4 rounded-full text-sm">
          ↓ Découvrez la solution ci-dessous ↓
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;