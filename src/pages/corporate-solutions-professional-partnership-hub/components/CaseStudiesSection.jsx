import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'tech-startup',
      company: 'InnovateTech Dakar',
      industry: 'Technologie',
      size: '45 employés',
      challenge: 'Équipe dispersée, communication difficile, stress élevé lors des sprints de développement',
      solution: 'Programme Team Building intensif sur 3 mois avec sessions hebdomadaires de functional training',
      duration: '3 mois',
      investment: '450,000 FCFA',
      results: {
        teamCohesion: '+75%',
        productivity: '+60%',
        stressReduction: '-45%',
        retention: '+85%'
      },
      testimonial: `"Coach Mor a transformé notre culture d'équipe. Les sessions de training ont créé des liens authentiques entre nos développeurs. Notre productivité a explosé et l'ambiance de travail est incomparable."`,
      testimonialAuthor: 'Amadou Diallo',
      testimonialRole: 'CEO, InnovateTech Dakar',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    },
    {
      id: 'finance-firm',
      company: 'West Africa Finance',
      industry: 'Services Financiers',
      size: '120 employés',
      challenge: 'Burnout des cadres, turnover élevé, manque de cohésion entre départements',
      solution: 'Programme Executive Fitness pour les dirigeants + Team Building inter-départements',
      duration: '6 mois',
      investment: '850,000 FCFA',
      results: {
        executiveWellness: '+80%',
        interdepartmentalCollaboration: '+70%',
        employeeSatisfaction: '+65%',
        turnoverReduction: '-40%'
      },
      testimonial: `"L'approche de 4mor Fit a révolutionné notre gestion du stress. Nos dirigeants sont plus énergiques, nos équipes plus soudées. C'est un investissement qui se ressent dans tous nos indicateurs."`,
      testimonialAuthor: 'Fatou Seck',
      testimonialRole: 'DRH, West Africa Finance',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    },
    {
      id: 'manufacturing',
      company: 'Dakar Industries',
      industry: 'Industrie',
      size: '200 employés',
      challenge: 'Accidents de travail fréquents, moral bas, résistance au changement',
      solution: 'Programme Wellness complet avec formation sécurité intégrée et renforcement physique',
      duration: '12 mois',
      investment: '1,200,000 FCFA',
      results: {
        accidentReduction: '-60%',
        physicalFitness: '+55%',
        changeAdaptability: '+50%',
        overallMorale: '+70%'
      },
      testimonial: `"4mor Fit a transformé notre approche de la sécurité. En renforçant physiquement nos équipes, nous avons drastiquement réduit les accidents. L'impact sur le moral est extraordinaire."`,
      testimonialAuthor: 'Ibrahima Fall',
      testimonialRole: 'Directeur Opérations, Dakar Industries',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="text-accent" />
            <span className="font-body text-accent text-sm font-medium">Résultats Prouvés</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-surface-foreground mb-6">
            Études de Cas
            <span className="text-gradient block">Entreprises Dakar</span>
          </h2>
          
          <p className="font-body text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos partenaires ont transformé leurs équipes et leurs résultats grâce à nos solutions sur mesure.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies?.map((caseStudy, index) => (
            <button
              key={caseStudy?.id}
              onClick={() => setActiveCase(index)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl font-body text-sm transition-all duration-300 ${
                activeCase === index
                  ? 'bg-accent text-primary shadow-brand'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <span className="font-cta font-bold">{caseStudy?.company}</span>
              <span className="text-xs opacity-80">{caseStudy?.industry}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-card rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Case Image & Company Info */}
            <div className="lg:col-span-2 relative">
              <Image
                src={currentCase?.image}
                alt={`${currentCase?.company} team training session`}
                className="w-full h-64 lg:h-full min-h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              
              {/* Company Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="font-accent text-white text-lg font-bold">
                        {currentCase?.company?.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-cta text-primary text-lg font-bold">{currentCase?.company}</h3>
                      <p className="font-body text-text-secondary text-sm">{currentCase?.industry} • {currentCase?.size}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="font-accent text-accent text-xl font-bold">{currentCase?.duration}</p>
                      <p className="font-body text-text-secondary text-xs">Durée</p>
                    </div>
                    <div>
                      <p className="font-accent text-secondary text-xl font-bold">{currentCase?.investment}</p>
                      <p className="font-body text-text-secondary text-xs">Investissement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="space-y-8">
                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-cta text-secondary text-lg mb-3 flex items-center">
                      <Icon name="AlertTriangle" size={20} className="mr-2" />
                      Défi Initial
                    </h4>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {currentCase?.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-cta text-accent text-lg mb-3 flex items-center">
                      <Icon name="Lightbulb" size={20} className="mr-2" />
                      Solution 4mor Fit
                    </h4>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {currentCase?.solution}
                    </p>
                  </div>
                </div>

                {/* Results Grid */}
                <div>
                  <h4 className="font-cta text-primary text-lg mb-4 flex items-center">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Résultats Mesurés
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(currentCase?.results)?.map(([key, value], index) => {
                      const labels = {
                        teamCohesion: 'Cohésion Équipe',
                        productivity: 'Productivité',
                        stressReduction: 'Réduction Stress',
                        retention: 'Rétention',
                        executiveWellness: 'Bien-être Dirigeants',
                        interdepartmentalCollaboration: 'Collaboration Inter-Dép.',
                        employeeSatisfaction: 'Satisfaction Employés',
                        turnoverReduction: 'Réduction Turnover',
                        accidentReduction: 'Réduction Accidents',
                        physicalFitness: 'Condition Physique',
                        changeAdaptability: 'Adaptabilité',
                        overallMorale: 'Moral Général'
                      };
                      
                      return (
                        <div key={index} className="bg-background rounded-lg p-4">
                          <p className="font-accent text-2xl font-bold text-accent mb-1">{value}</p>
                          <p className="font-body text-text-secondary text-sm">{labels?.[key]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                  <Icon name="Quote" size={24} className="text-secondary mb-4" />
                  <blockquote className="font-body text-text-primary text-lg leading-relaxed mb-4 italic">
                    "{currentCase?.testimonial}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-accent text-white text-sm font-bold">
                        {currentCase?.testimonialAuthor?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-cta text-primary font-bold">{currentCase?.testimonialAuthor}</p>
                      <p className="font-body text-text-secondary text-sm">{currentCase?.testimonialRole}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                    className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                  >
                    Étude Complète PDF
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-primary"
                  >
                    Discuter de Votre Projet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
              Calculez Votre ROI
            </h3>
            <p className="font-body text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Chaque entreprise est unique. Obtenez une estimation personnalisée du retour sur investissement pour votre organisation.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-primary font-cta"
            >
              Calculateur ROI Gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;