import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const heroVideos = [
    {
      id: 1,
      url: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
      title: "Cross Training Collectif",
      description: "Entraînement fonctionnel en groupe"
    },
    {
      id: 2,
      url: "https://videos.pexels.com/video-files/3191884/3191884-uhd_2560_1440_25fps.mp4",
      title: "Coaching Personnel",
      description: "Accompagnement individuel expert"
    },
    {
      id: 3,
      url: "https://videos.pexels.com/video-files/8401286/8401286-hd_1920_1080_30fps.mp4",
      title: "Team Building Corporate",
      description: "Cohésion d\'équipe par le sport"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroVideos?.length]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/221123456789?text=Salut! Je veux commencer mon parcours fitness avec 4mor Fit Collective', '_blank');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center pulse-animation">
              <span className="font-accent text-white text-4xl font-bold">4</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <h1 className="font-accent text-4xl text-white tracking-tight">
              4mor Fit Collective
            </h1>
            <p className="font-body text-accent text-lg">
              Pour l'amour du sport
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="w-full h-full bg-accent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={heroVideos?.[currentVideoIndex]?.id}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideos?.[currentVideoIndex]?.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8 fade-in-up">
          {/* Main Logo & Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="font-accent text-white text-3xl font-bold">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="font-accent text-6xl lg:text-8xl text-white tracking-tight">
                  4mor Fit
                </h1>
                <p className="font-body text-xl text-accent">
                  Collective
                </p>
              </div>
            </div>
            
            <h2 className="font-headline text-2xl lg:text-4xl text-accent mb-4">
              Pour l'amour du sport
            </h2>
            
            <p className="font-body text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Rejoignez la communauté fitness la plus authentique de Dakar.\nTransformez votre corps, renforcez votre mental, créez des liens durables.
            </p>
          </div>

          {/* Current Video Info */}
          <div className="bg-surface/20 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="font-headline text-xl text-white mb-2">
              {heroVideos?.[currentVideoIndex]?.title}
            </h3>
            <p className="font-body text-white/80">
              {heroVideos?.[currentVideoIndex]?.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-cta px-8 py-4 text-lg"
              iconName="Play"
              iconPosition="left"
            >
              Essai Gratuit - 10,000 FCFA/mois
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppClick}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-cta px-8 py-4 text-lg"
              iconName="MessageCircle"
              iconPosition="left"
            >
              WhatsApp Contact
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 pt-8">
            <div className="text-center">
              <div className="font-accent text-3xl text-accent">500+</div>
              <div className="font-body text-sm text-white/80">Membres Actifs</div>
            </div>
            <div className="text-center">
              <div className="font-accent text-3xl text-accent">50+</div>
              <div className="font-body text-sm text-white/80">Entreprises Partenaires</div>
            </div>
            <div className="text-center">
              <div className="font-accent text-3xl text-accent">3</div>
              <div className="font-body text-sm text-white/80">Lieux à Dakar</div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroVideos?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Video ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" size={32} color="white" className="opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;