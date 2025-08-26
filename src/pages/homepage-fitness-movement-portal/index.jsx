import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import CommunityProof from './components/CommunityProof';
import InstagramFeed from './components/InstagramFeed';
import LocationMap from './components/LocationMap';
import WhatsAppFloat from './components/WhatsAppFloat';
import Icon from '../../components/AppIcon';


const HomepageFitnessMovementPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>4mor Fit Collective - Pour l'amour du sport | Fitness Dakar</title>
        <meta name="description" content="Rejoignez la communauté fitness la plus authentique de Dakar. Cross Training, Personal Coaching, Team Building Corporate. 10,000 FCFA/mois. Essai gratuit." />
        <meta name="keywords" content="fitness dakar, cross training, coach mor, salle sport dakar, team building, personal training, 4mor fit" />
        <meta property="og:title" content="4mor Fit Collective - Pour l'amour du sport" />
        <meta property="og:description" content="Transformez votre corps, renforcez votre mental, créez des liens durables avec la communauté fitness authentique de Dakar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4morfit.com/homepage-fitness-movement-portal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="4mor Fit Collective - Pour l'amour du sport" />
        <meta name="twitter:description" content="Rejoignez plus de 500 membres actifs dans la communauté fitness la plus authentique de Dakar." />
        <link rel="canonical" href="https://4morfit.com/homepage-fitness-movement-portal" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section with Video Background */}
          <HeroSection />

          {/* Service Preview Section */}
          <ServicePreview />

          {/* Community Proof Section */}
          <CommunityProof />

          {/* Instagram Feed Section */}
          <InstagramFeed />

          {/* Location Map Section */}
          <LocationMap />
        </main>

        {/* WhatsApp Floating Button */}
        <WhatsAppFloat />

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <span className="font-accent text-white text-2xl font-bold">4</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-accent text-3xl text-white tracking-tight">
                      4mor Fit
                    </h3>
                    <p className="font-body text-accent">
                      Collective
                    </p>
                  </div>
                </div>
                <p className="font-body text-white/80 mb-6 max-w-md">
                  Pour l'amour du sport - La communauté fitness la plus authentique de Dakar.\nTransformez votre corps, renforcez votre mental, créez des liens durables.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://instagram.com/4morfit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <Icon name="Instagram" size={20} color="white" />
                  </a>
                  <a
                    href="https://facebook.com/4morfit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <Icon name="Facebook" size={20} color="white" />
                  </a>
                  <a
                    href="https://wa.me/221123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                  >
                    <Icon name="MessageCircle" size={20} color="white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-cta text-lg text-white mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/collective-story-coach-mor-team"
                      className="font-body text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      Notre Histoire
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training-services-interactive-universe"
                      className="font-body text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/corporate-solutions-professional-partnership-hub"
                      className="font-body text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      Corporate
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-cta text-lg text-white mb-4">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                    <p className="font-body text-white/80 text-sm">
                      Plateau, Almadies, Sacré-Cœur\nDakar, Sénégal
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} color="var(--color-accent)" />
                    <p className="font-body text-white/80 text-sm">
                      +221 XX XXX XXXX
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} color="var(--color-accent)" />
                    <p className="font-body text-white/80 text-sm">
                      contact@4morfit.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="font-body text-white/60 text-sm">
                © {new Date()?.getFullYear()} 4mor Fit Collective. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a
                  href="/privacy"
                  className="font-body text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Confidentialité
                </a>
                <a
                  href="/terms"
                  className="font-body text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Conditions
                </a>
                <span className="font-body text-accent text-sm font-medium">
                  10,000 FCFA/mois
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageFitnessMovementPortal;