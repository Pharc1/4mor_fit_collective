import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-surface to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-secondary rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-body text-sm font-medium">
                  Fondateur & Coach Principal
                </span>
              </div>
              
              <h1 className="font-headline text-5xl lg:text-7xl text-white leading-tight">
                Coach
                <span className="text-gradient block">Mor</span>
                <span className="text-accent text-3xl lg:text-4xl block mt-2">
                  & L'Équipe 4mor
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl font-body leading-relaxed max-w-lg">
                De la formation française d'élite à la démocratisation du fitness fonctionnel à Dakar. Une histoire de passion, d'expertise et de communauté.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                iconName="Play"
                iconPosition="left"
              >
                Voir Notre Histoire
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
                iconName="Users"
                iconPosition="left"
              >
                Rencontrer l'Équipe
              </Button>
            </div>

            {/* Certifications */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm font-body mb-4">Certifications Professionnelles</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface/50 px-4 py-2 rounded-lg border border-gray-600">
                  <span className="text-accent font-body text-sm font-medium">Formation France</span>
                </div>
                <div className="bg-surface/50 px-4 py-2 rounded-lg border border-gray-600">
                  <span className="text-accent font-body text-sm font-medium">Fitness Fonctionnel</span>
                </div>
                <div className="bg-surface/50 px-4 py-2 rounded-lg border border-gray-600">
                  <span className="text-accent font-body text-sm font-medium">Coach Certifié</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Coach Mor - Fondateur de 4mor Fit Collective"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-brand border border-border">
                <div className="text-center">
                  <div className="text-3xl font-headline text-secondary">8+</div>
                  <div className="text-sm font-body text-text-secondary">Années d'Expérience</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card rounded-xl p-6 shadow-brand border border-border">
                <div className="text-center">
                  <div className="text-3xl font-headline text-accent">500+</div>
                  <div className="text-sm font-body text-text-secondary">Membres Transformés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;