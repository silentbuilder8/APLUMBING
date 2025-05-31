import React from 'react';

type TestimonialCardProps = {
  name: string;
  company: string;
  image: string;
  quote: string;
  before?: string;
  after?: string;
  rating?: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  image,
  quote,
  before,
  after,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        {(before || after) && (
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {before && (
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-500 mb-2">AVANT</h4>
                <img 
                  src={before} 
                  alt="Avant" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            {after && (
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-500 mb-2">APRÈS</h4>
                <img 
                  src={after} 
                  alt="Après" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-start gap-4">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg italic mb-4">"{quote}"</p>
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-gray-600 text-sm">{company}</p>
              
              {rating && (
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;