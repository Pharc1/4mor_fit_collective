import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Logo from '../../components/Logo';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import LocationContact from './components/LocationContact';
import BookingScheduler from './components/BookingScheduler';
import FAQ from './components/FAQ';
import SocialConnect from './components/SocialConnect';

const ContactBookingPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Contact & Réservation - 4m'or Fit Collective | Dakar";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Contactez 4mor Fit Collective à Dakar. Réservation directe, WhatsApp, formulaire de contact. Essai gratuit Cross Training à 10,000 FCFA/mois.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Form Section */}
      <ContactForm />
      {/* Booking Scheduler */}
      <BookingScheduler />
      {/* Location Contact */}
      <LocationContact />
      {/* FAQ Section */}
      <FAQ />
      {/* Social Connect */}
      <SocialConnect />
      {/* Emergency Contact Footer */}
      <section className="py-8 bg-primary border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="font-cta text-lg text-white">
              Contact d'Urgence
            </h3>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              Pour les annulations de dernière minute ou les urgences, 
              contactez-nous directement sur WhatsApp 24h/24.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-body text-sm">Disponible maintenant</span>
              </div>
              <button
                onClick={() => {
                  const message = "Urgence - J'ai besoin d'aide concernant ma session 4mor Fit.";
                  window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-body text-sm transition-colors duration-300"
              >
                <span>WhatsApp Urgence</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <Logo 
                size="small" 
                variant="white"
                showSubtitle={true}
              />
            </div>
            <p className="font-body text-gray-400 text-sm">
              Pour l'amour du sport - Accessible à tous, partout
            </p>
            <p className="font-body text-gray-500 text-xs">
              © {new Date()?.getFullYear()} 4mor Fit Collective. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactBookingPage;