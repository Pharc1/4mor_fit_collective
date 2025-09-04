import React from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg"
          alt="Corporate team training session with Coach Mor"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-red-500/30">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-body text-sm text-red-400 font-medium">TEAM BUILDING BRUT</span>
                </div>
                
                <h1 className="font-headline text-5xl lg:text-7xl leading-tight">
                  VOS ÉQUIPES
                  <span className="text-red-500 block">S'ENTRAÎNENT</span>
                </h1>
                
                <p className="font-body text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  <strong>Coach Mor et son équipe</strong> transforment vos équipes avec du cross-training authentique.<br/>
                  <em>Kettle bells, cordes, wall balls... Pour des équipes plus fortes.</em>
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-accent text-lg">+85%</span>
                  </div>
                  <div>
                    <p className="font-cta text-white text-sm">ÉQUIPES PLUS FORTES</p>
                    <p className="font-body text-gray-400 text-xs">Résultats concrets</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-accent text-lg">50+</span>
                  </div>
                  <div>
                    <p className="font-cta text-white text-sm">ÉQUIPES TRANSFORMÉES</p>
                    <p className="font-body text-gray-400 text-xs">À Dakar</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-cta border-2 border-red-500"
                >
                  VENEZ NOUS REJOINDRE
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-cta"
                >
                  CONTACT WHATSAPP
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">FR</span>
                  </div>
                  <span className="font-body text-gray-300 text-sm">Certification Française</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-secondary text-xs font-bold">SN</span>
                  </div>
                  <span className="font-body text-gray-300 text-sm">Culture Locale</span>
                </div>
              </div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                  alt="Corporate team building session in action"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                  <button className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-brand-lg hover:scale-110 transition-transform duration-300 group">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-primary/80 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-cta text-white text-sm mb-1">Session Team Building</p>
                    <p className="font-body text-gray-300 text-xs">Entreprise Tech Dakar - 25 participants</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl p-4 shadow-brand-lg">
                <p className="font-accent text-primary text-2xl font-bold">4.9/5</p>
                <p className="font-body text-primary text-xs">Satisfaction Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="font-body text-xs">Découvrez nos solutions</span>
          <div className="w-px h-8 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;