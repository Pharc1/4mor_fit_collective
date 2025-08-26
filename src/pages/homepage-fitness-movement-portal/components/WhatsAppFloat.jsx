import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Salut ! Je veux rejoindre 4mor Fit Collective et commencer ma transformation fitness 💪");
    window.open(`https://wa.me/221123456789?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className={`group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isAnimating ? 'animate-pulse scale-110' : ''
          }`}
          aria-label="Contacter via WhatsApp"
        >
          <Icon name="MessageCircle" size={24} color="white" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-primary text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Contactez-nous sur WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
          </div>
        </div>
      </div>

      {/* Mobile WhatsApp Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-green-500 text-white p-3 mx-4 mb-20 rounded-t-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} color="white" />
              </div>
              <div>
                <p className="font-cta text-sm">Besoin d'aide ?</p>
                <p className="font-body text-xs opacity-90">Contactez-nous sur WhatsApp</p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-500 px-4 py-2 rounded-full font-cta text-sm hover:bg-green-50 transition-colors duration-200"
            >
              Écrire
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;