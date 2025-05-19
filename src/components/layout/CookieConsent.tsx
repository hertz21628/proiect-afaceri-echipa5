import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!hasAccepted) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-800 text-amber-50 p-4 shadow-lg z-50 animate-fadeIn">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8 flex-1">
          <p className="text-sm">
            Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră. 
            Prin continuarea navigării, sunteți de acord cu 
            <Link to="/info/privacy" className="underline ml-1 hover:text-amber-200">
              Politica noastră de confidențialitate
            </Link>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-amber-200 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;