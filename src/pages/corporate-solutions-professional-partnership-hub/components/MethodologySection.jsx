import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const MethodologySection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const methodology = [
    {
      phase: 1,
      title: 'Diagnostic Organisationnel',
      subtitle: 'Analyse Approfondie',
      description: `Évaluation complète de votre culture d'entreprise, dynamiques d'équipe et objectifs spécifiques. Coach Mor utilise son expertise française pour identifier les leviers de transformation les plus efficaces.`,
      duration: '1-2 semaines',
      deliverables: [
        'Audit culture d\'entreprise',
        'Évaluation condition physique équipes',
        'Analyse besoins spécifiques',
        'Recommandations personnalisées'
      ],
      tools: ['Questionnaires anonymes', 'Entretiens dirigeants', 'Tests physiques', 'Observation terrain'],
      icon: 'Search',
      color: 'secondary'
    },
    {
      phase: 2,
      title: 'Conception Programme',
      subtitle: 'Solution Sur Mesure',
      description: `Création d'un programme unique combinant functional training, team building et développement leadership. Chaque activité est calibrée selon vos contraintes et objectifs business.`,
      duration: '1 semaine',
      deliverables: [
        'Programme détaillé personnalisé','Planning sessions optimisé','Matériel pédagogique adapté','Indicateurs de performance'
      ],
      tools: ['Méthodes françaises certifiées', 'Adaptation culturelle locale', 'Exercices collaboratifs', 'Défis progressifs'],
      icon: 'PenTool',color: 'accent'
    },
    {
      phase: 3,
      title: 'Mise en Œuvre Active',subtitle: 'Transformation en Action',
      description: `Déploiement du programme avec Coach Mor et son équipe. Sessions interactives mélangeant entraînement physique, challenges collaboratifs et développement des soft skills essentiels.`,
      duration: '2-12 mois',
      deliverables: [
        'Sessions training régulières','Coaching individuel dirigeants','Ateliers team building','Suivi performance continue'
      ],
      tools: ['Functional training adapté', 'Challenges équipe', 'Coaching leadership', 'Feedback temps réel'],
      icon: 'Zap',color: 'secondary'
    },
    {
      phase: 4,
      title: 'Mesure & Optimisation',subtitle: 'ROI Démontré',
      description: `Évaluation rigoureuse des résultats avec métriques quantifiables. Ajustements continus pour maximiser l'impact et assurer la pérennité des transformations obtenues.`,
      duration: 'Continue',
      deliverables: [
        'Rapports performance détaillés',
        'Analyses ROI quantifiées',
        'Recommandations évolution',
        'Plan maintien résultats'
      ],
      tools: ['KPIs personnalisés', 'Enquêtes satisfaction', 'Analyses comparatives', 'Tableaux de bord'],
      icon: 'BarChart3',
      color: 'accent'
    }
  ];

  const principles = [
    {
      title: 'Authenticité Culturelle',
      description: 'Intégration respectueuse de la culture sénégalaise avec l\'expertise française',
      icon: 'Globe',
      stats: '100% adaptation locale'
    },
    {
      title: 'Functional Training',
      description: 'Mouvements naturels applicables au quotidien professionnel',
      icon: 'Dumbbell',
      stats: '+60% force fonctionnelle'
    },
    {
      title: 'Leadership Collaboratif',
      description: 'Développement du leadership par l\'exemple et l\'action collective',
      icon: 'Users',
      stats: '+75% engagement équipe'
    },
    {
      title: 'Mesure Continue',
      description: 'Suivi rigoureux avec indicateurs business et bien-être',
      icon: 'TrendingUp',
      stats: 'ROI moyen +45%'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Compass" size={16} className="text-accent" />
            <span className="font-body text-accent text-sm font-medium">Notre Approche</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-primary mb-6">
            Méthodologie
            <span className="text-gradient block">Éprouvée</span>
          </h2>
          
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Une approche structurée qui combine l'expertise française de Coach Mor avec l'authenticité culturelle de Dakar pour des résultats durables.
          </p>
        </div>

        {/* Methodology Phases */}
        <div className="mb-20">
          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {methodology?.map((phase, index) => (
              <button
                key={phase?.phase}
                onClick={() => setActivePhase(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                  activePhase === index
                    ? `bg-${phase?.color} text-white shadow-brand`
                    : 'bg-card text-text-secondary hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activePhase === index ? 'bg-white/20' : 'bg-secondary/10'
                }`}>
                  <span className={`font-accent text-sm font-bold ${
                    activePhase === index ? 'text-white' : 'text-secondary'
                  }`}>
                    {phase?.phase}
                  </span>
                </div>
                <span className="hidden sm:inline">{phase?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="bg-card rounded-2xl shadow-brand overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Phase Visual */}
              <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-secondary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 bg-${methodology?.[activePhase]?.color} rounded-full flex items-center justify-center shadow-brand-lg`}>
                    <Icon 
                      name={methodology?.[activePhase]?.icon} 
                      size={48} 
                      className="text-white" 
                    />
                  </div>
                </div>
                
                {/* Phase Number */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 bg-${methodology?.[activePhase]?.color} rounded-xl flex items-center justify-center`}>
                    <span className="font-accent text-white text-2xl font-bold">
                      {methodology?.[activePhase]?.phase}
                    </span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="font-body text-text-secondary text-xs mb-1">Durée</p>
                    <p className="font-cta text-primary text-sm font-bold">
                      {methodology?.[activePhase]?.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-3xl text-primary mb-2">
                      {methodology?.[activePhase]?.title}
                    </h3>
                    <p className={`font-cta text-${methodology?.[activePhase]?.color} text-lg mb-4`}>
                      {methodology?.[activePhase]?.subtitle}
                    </p>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {methodology?.[activePhase]?.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-cta text-primary text-lg mb-4">Livrables</h4>
                    <div className="space-y-3">
                      {methodology?.[activePhase]?.deliverables?.map((deliverable, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-5 h-5 bg-${methodology?.[activePhase]?.color}/20 rounded-full flex items-center justify-center`}>
                            <Icon name="Check" size={12} className={`text-${methodology?.[activePhase]?.color}`} />
                          </div>
                          <p className="font-body text-text-secondary text-sm">{deliverable}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-cta text-primary text-lg mb-4">Outils & Méthodes</h4>
                    <div className="flex flex-wrap gap-2">
                      {methodology?.[activePhase]?.tools?.map((tool, index) => (
                        <div key={index} className={`bg-${methodology?.[activePhase]?.color}/10 rounded-full px-3 py-1`}>
                          <p className={`font-body text-${methodology?.[activePhase]?.color} text-sm`}>{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
              Principes Fondamentaux
            </h3>
            <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
              Les piliers qui garantissent l'efficacité et la durabilité de nos interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles?.map((principle, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 card-hover">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name={principle?.icon} size={24} className="text-secondary" />
                  </div>
                  
                  <div>
                    <h4 className="font-cta text-primary text-lg font-bold mb-2">
                      {principle?.title}
                    </h4>
                    <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                      {principle?.description}
                    </p>
                  </div>

                  <div className="bg-accent/10 rounded-lg py-2 px-4">
                    <p className="font-accent text-accent text-lg font-bold">
                      {principle?.stats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
            <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
              Prêt à Transformer Votre Équipe ?
            </h3>
            <p className="font-body text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Découvrez comment notre méthodologie peut s'adapter à vos défis spécifiques lors d'une consultation gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-cta text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Consultation Gratuite</span>
              </button>
              
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl font-cta text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="FileText" size={20} />
                <span>Guide Méthodologie</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;