import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/homepage-fitness-movement-portal', icon: 'Home' },
    { name: 'Notre Histoire', path: '/collective-story-coach-mor-team', icon: 'Users' },
    { name: 'Services', path: '/training-services-interactive-universe', icon: 'Dumbbell' },
    { name: 'Lieux', path: '/location-experience-interactive-venues', icon: 'MapPin' },
    { name: 'Entreprises', path: '/corporate-solutions-professional-partnership-hub', icon: 'Building2' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-booking-multi-channel-engagement', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/221123456789?text=Salut! Je suis intéressé par 4mor Fit Collective', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-fitness-movement-portal" 
            className="flex items-center space-x-2 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <span className="font-accent text-white text-xl font-bold">4</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-accent text-2xl text-primary tracking-tight">
                4mor
              </span>
              <span className="font-body text-sm text-text-secondary ml-1">
                Fit Collective
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-secondary bg-secondary/10' :'text-text-primary hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                <span className="relative z-10">{item?.name}</span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact-booking-multi-channel-engagement"
              className="text-text-primary hover:text-secondary transition-colors duration-300 font-body text-sm font-medium"
            >
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              WhatsApp
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-white font-cta"
            >
              Essai Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-secondary hover:bg-secondary/5 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body text-base transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-secondary bg-secondary/10 border-l-4 border-secondary' :'text-text-primary hover:text-secondary hover:bg-secondary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body text-base transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-secondary bg-secondary/10 border-l-4 border-secondary' :'text-text-primary hover:text-secondary hover:bg-secondary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  handleWhatsAppClick();
                  closeMobileMenu();
                }}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white justify-center"
              >
                Contactez-nous sur WhatsApp
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={closeMobileMenu}
                className="bg-secondary hover:bg-secondary/90 text-white font-cta justify-center"
              >
                Commencer l'Essai Gratuit
              </Button>
            </div>

            {/* Mobile Brand Info */}
            <div className="pt-4 border-t border-border text-center">
              <p className="text-text-secondary text-sm font-body">
                Rejoignez la communauté fitness authentique de Dakar
              </p>
              <p className="text-accent text-lg font-cta mt-1">
                10,000 FCFA/mois
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-primary/20 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;