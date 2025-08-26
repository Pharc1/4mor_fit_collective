import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const [counters, setCounters] = useState({
    members: 0,
    transformations: 0,
    corporateEvents: 0,
    communityHours: 0
  });

  const finalValues = {
    members: 500,
    transformations: 350,
    corporateEvents: 25,
    communityHours: 2400
  };

  const metrics = [
    {
      key: 'members',
      value: counters?.members,
      finalValue: finalValues?.members,
      label: 'Membres Actifs',
      description: 'Communauté grandissante de passionnés',
      icon: 'Users',
      color: 'secondary',
      suffix: '+'
    },
    {
      key: 'transformations',
      value: counters?.transformations,
      finalValue: finalValues?.transformations,
      label: 'Transformations Réussies',
      description: 'Vies changées par le fitness',
      icon: 'TrendingUp',
      color: 'accent',
      suffix: '+'
    },
    {
      key: 'corporateEvents',
      value: counters?.corporateEvents,
      finalValue: finalValues?.corporateEvents,
      label: 'Événements Corporatifs',
      description: 'Team-buildings d\'entreprise réalisés',
      icon: 'Building2',
      color: 'secondary',
      suffix: '+'
    },
    {
      key: 'communityHours',
      value: counters?.communityHours,
      finalValue: finalValues?.communityHours,
      label: 'Heures Communautaires',
      description: 'Temps consacré à l\'entraînement collectif',
      icon: 'Clock',
      color: 'accent',
      suffix: '+'
    }
  ];

  const impactStories = [
    {
      title: "Démocratisation du Fitness",
      description: "Rendre le fitness de qualité accessible avec un tarif unique de 10,000 FCFA/mois",
      icon: "DollarSign",
      stats: "Accessible à tous les budgets"
    },
    {
      title: "Formation Professionnelle",
      description: "Standards français appliqués dans un contexte sénégalais authentique",
      icon: "Award",
      stats: "Excellence technique garantie"
    },
    {
      title: "Cohésion d\'Équipe",
      description: "Solutions team-building qui renforcent la collaboration en entreprise",
      icon: "Handshake",
      stats: "ROI mesurable pour les entreprises"
    },
    {
      title: "Bien-être Communautaire",
      description: "Impact positif sur la santé mentale et physique de la communauté",
      icon: "Heart",
      stats: "Bien-être holistique"
    }
  ];

  // Counter animation effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(increment * currentStep), finalValues?.[key])
        }));

        if (currentStep >= steps) {
          clearInterval(intervals?.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl text-primary mb-6">
            Notre Impact
            <span className="text-gradient block">sur la Communauté</span>
          </h2>
          <p className="text-text-secondary text-lg font-body max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre engagement envers la démocratisation 
            du fitness et le renforcement de la communauté dakaroise.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.key}
              className="bg-card rounded-xl p-8 text-center shadow-brand border border-border card-hover group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-${metric?.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${metric?.color}/20 transition-colors duration-300`}>
                <Icon name={metric?.icon} size={32} className={`text-${metric?.color}`} />
              </div>
              
              <div className={`text-4xl lg:text-5xl font-headline text-${metric?.color} mb-2`}>
                {metric?.value}{metric?.suffix}
              </div>
              
              <h3 className="font-headline text-lg text-primary mb-2">
                {metric?.label}
              </h3>
              
              <p className="text-text-secondary font-body text-sm">
                {metric?.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-border rounded-full h-2">
                <div 
                  className={`bg-${metric?.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                  style={{ width: `${(metric?.value / metric?.finalValue) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <h3 className="font-headline text-3xl text-white text-center mb-12">
            Histoires d'Impact
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactStories?.map((story, index) => (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                    <Icon name={story?.icon} size={24} className="text-secondary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-headline text-xl text-white mb-3">
                      {story?.title}
                    </h4>
                    
                    <p className="text-gray-300 font-body mb-4 leading-relaxed">
                      {story?.description}
                    </p>
                    
                    <div className="inline-flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
                      <Icon name="CheckCircle" size={16} className="text-accent" />
                      <span className="text-accent font-body text-sm font-medium">
                        {story?.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <h4 className="font-headline text-2xl text-white mb-4">
              Rejoignez Notre Impact
            </h4>
            <p className="text-gray-300 font-body mb-6 max-w-2xl mx-auto">
              Devenez partie intégrante de cette transformation communautaire. 
              Ensemble, construisons des corps solides et des esprits forts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/221123456789?text=Je veux contribuer à l\'impact de 4mor Fit Collective', '_blank')}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-cta transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Nous Rejoindre</span>
              </button>
              
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 rounded-lg font-cta transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Users" size={20} />
                <span>Découvrir la Communauté</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Achievement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card px-8 py-4 rounded-full shadow-brand border border-border">
            <Icon name="Calendar" size={24} className="text-secondary" />
            <div className="text-left">
              <div className="font-headline text-lg text-primary">Depuis 2020</div>
              <div className="text-text-secondary font-body text-sm">5 années de croissance continue</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-left">
              <div className="font-headline text-lg text-accent">Vision 2030</div>
              <div className="text-text-secondary font-body text-sm">Expansion Afrique de l'Ouest</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;