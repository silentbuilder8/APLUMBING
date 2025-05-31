import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
  roi: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, action, roi }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Action</p>
              <p className="font-medium">{action}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">ROI Immédiat</p>
              <p className="font-medium text-green-600">{roi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;