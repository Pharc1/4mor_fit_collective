import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Logo from '../Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/accueil', icon: 'Home' },
    { name: 'Notre Histoire', path: '/histoire', icon: 'Users' },
    { name: 'Services', path: '/services', icon: 'Dumbbell' },
    { name: 'Lieux', path: '/lieux', icon: 'MapPin' },
    { name: 'Entreprises', path: '/entreprises', icon: 'Building2' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' }
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
            to="/accueil" 
            className="group"
            onClick={closeMobileMenu}
          >
            <Logo 
              size="small" 
              variant="default"
              showSubtitle={true}
              className="group-hover:scale-105"
            />
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
              to="/contact"
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
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-cta"
            >
              WHATSAPP
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white font-cta border-2 border-red-500"
            >
              VENEZ NOUS REJOINDRE
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
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white justify-center font-cta"
              >
                CONTACT WHATSAPP
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={closeMobileMenu}
                className="bg-red-600 hover:bg-red-700 text-white font-cta justify-center border-2 border-red-500"
              >
                VENEZ NOUS REJOINDRE
              </Button>
            </div>

            {/* Mobile Brand Info */}
            <div className="pt-4 border-t border-border text-center">
              <p className="text-text-secondary text-sm font-body">
                PASSIONNÉS DU FITNESS - DAKAR
              </p>
              <p className="text-red-500 text-lg font-cta mt-1">
                10,000 FCFA - VENEZ NOMBREUX
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