import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      year: "2016",
      title: "Formation en France",
      description: `Mor complète sa formation avancée en fitness fonctionnel dans les centres d'excellence français.\nAcquisition des certifications internationales et maîtrise des techniques d'entraînement innovantes.`,
      icon: "GraduationCap",
      color: "accent"
    },
    {
      year: "2018",
      title: "Retour à Dakar",
      description: `Retour au Sénégal avec une vision claire : rendre le fitness de qualité accessible à tous.\nPremières sessions d'entraînement dans les espaces publics de Dakar.`,
      icon: "Home",
      color: "secondary"
    },
    {
      year: "2020",
      title: "Naissance du Collectif",
      description: `Création officielle de 4mor Fit Collective avec les premiers membres fondateurs.\nDéveloppement de la philosophie 'Pour l'amour du sport' et des trois significations de 4mor.`,
      icon: "Users",
      color: "accent"
    },
    {
      year: "2022",
      title: "Expansion Communautaire",
      description: `Ouverture de nouveaux lieux d'entraînement à travers Dakar.\nIntégration de programmes spécialisés pour différents niveaux et objectifs.`,
      icon: "MapPin",
      color: "secondary"
    },
    {
      year: "2024",
      title: "Partenariats Corporatifs",
      description: `Lancement des solutions team-building pour les entreprises.\nReconnaissance comme référence du fitness fonctionnel au Sénégal.`,
      icon: "Building2",
      color: "accent"
    },
    {
      year: "2025",
      title: "Vision Future",
      description: `Expansion vers d'autres villes du Sénégal et de l'Afrique de l'Ouest.\nDéveloppement d'une académie de formation pour futurs coachs.`,
      icon: "Rocket",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl text-primary mb-6">
            Notre Parcours
          </h2>
          <p className="text-text-secondary text-lg font-body max-w-2xl mx-auto">
            De la formation française à la révolution fitness de Dakar, 
            découvrez l'évolution de notre mouvement communautaire.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden lg:block">
            <div 
              className="bg-secondary transition-all duration-1000 w-full"
              style={{ height: `${(activeStep + 1) * (100 / timelineSteps?.length)}%` }}
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-16">
            {timelineSteps?.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } cursor-pointer transition-all duration-500 ${
                  activeStep >= index ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className={`bg-card rounded-xl p-8 shadow-brand border border-border card-hover ${
                    activeStep >= index ? 'border-secondary' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`text-2xl font-headline ${
                        step?.color === 'accent' ? 'text-accent' : 'text-secondary'
                      }`}>
                        {step?.year}
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step?.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'
                      } lg:hidden`}>
                        <Icon 
                          name={step?.icon} 
                          size={16} 
                          className={step?.color === 'accent' ? 'text-accent' : 'text-secondary'} 
                        />
                      </div>
                    </div>
                    
                    <h3 className="font-headline text-xl text-primary mb-4">
                      {step?.title}
                    </h3>
                    
                    <p className="text-text-secondary font-body leading-relaxed whitespace-pre-line">
                      {step?.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-background transition-all duration-500 ${
                    activeStep >= index 
                      ? (step?.color === 'accent' ? 'bg-accent text-primary' : 'bg-secondary text-white')
                      : 'bg-card text-text-secondary border-border'
                  }`}>
                    <Icon name={step?.icon} size={24} />
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                <div className="lg:hidden w-full flex justify-center">
                  {index < timelineSteps?.length - 1 && (
                    <div className={`w-1 h-12 transition-all duration-500 ${
                      activeStep > index ? 'bg-secondary' : 'bg-border'
                    }`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {timelineSteps?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep >= index ? 'bg-secondary' : 'bg-border'
              }`}
              aria-label={`Aller à l'étape ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;