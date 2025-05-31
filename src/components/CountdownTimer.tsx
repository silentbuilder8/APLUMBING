import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 14,
    seconds: 55,
  });
  
  const [spots, setSpots] = useState({
    claimed: 7,
    total: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        seconds--;
        
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        
        if (hours < 0) {
          hours = 2;
          minutes = 14;
          seconds = 55;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="text-center">
      <div className="mb-4 inline-block bg-red-100 rounded-full py-2 px-4 text-red-800 font-medium">
        [{spots.claimed}/{spots.total} RECLAMÉS]
      </div>
      
      <div className="flex justify-center items-center gap-1 md:gap-2">
        <p className="text-gray-700 font-medium mr-2">Prochaine expiration dans:</p>
        
        <div className="bg-gray-900 text-white rounded-md px-2 py-1 w-9 text-center">
          {formatTime(time.hours)}
        </div>
        <span className="text-gray-900 font-bold">:</span>
        <div className="bg-gray-900 text-white rounded-md px-2 py-1 w-9 text-center">
          {formatTime(time.minutes)}
        </div>
        <span className="text-gray-900 font-bold">:</span>
        <div className="bg-gray-900 text-white rounded-md px-2 py-1 w-9 text-center">
          {formatTime(time.seconds)}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;