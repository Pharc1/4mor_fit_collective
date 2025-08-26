import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MethodologyDeepDive = () => {
  const [activeMethod, setActiveMethod] = useState('functional');

  const methodologies = [
    {
      id: 'functional',
      name: 'Entraînement Fonctionnel',
      icon: 'Zap',
      description: 'Mouvements naturels pour la vie quotidienne',
      principles: [
        {
          title: 'Mouvements multi-articulaires',
          description: 'Exercices qui sollicitent plusieurs groupes musculaires simultanément, mimant les gestes du quotidien.',
          benefits: ['Amélioration de la coordination', 'Renforcement global', 'Prévention des blessures']
        },
        {
          title: 'Progression adaptative',
          description: 'Chaque exercice est adapté au niveau individuel avec une progression constante et mesurable.',
          benefits: ['Motivation maintenue', 'Résultats durables', 'Confiance en soi']
        },
        {
          title: 'Variabilité constante',
          description: 'Programmes changeants pour éviter la stagnation et maintenir l\'engagement.',
          benefits: ['Évite la routine', 'Développement complet', 'Plaisir d\'entraîner']
        }
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    {
      id: 'community',
      name: 'Approche Communautaire',
      icon: 'Users',
      description: 'La force du groupe au service de chacun',
      principles: [
        {
          title: 'Émulation positive',
          description: 'L\'énergie du groupe pousse chaque membre à se dépasser dans un environnement bienveillant.',
          benefits: ['Motivation décuplée', 'Dépassement de soi', 'Liens sociaux forts']
        },
        {
          title: 'Entraide et soutien',
          description: 'Chaque membre devient un coach pour les autres, créant une dynamique d\'apprentissage mutuel.',
          benefits: ['Apprentissage accéléré', 'Confiance renforcée', 'Esprit d\'équipe']
        },
        {
          title: 'Célébration collective',
          description: 'Les victoires individuelles deviennent des victoires collectives, renforçant l\'appartenance.',
          benefits: ['Fierté partagée', 'Motivation durable', 'Identité de groupe']
        }
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop'
    },
    {
      id: 'french',
      name: 'Méthodologie Française',
      icon: 'Award',
      description: 'Excellence et rigueur à la française',
      principles: [
        {
          title: 'Approche scientifique',
          description: 'Méthodes basées sur la recherche française en sciences du sport et physiologie de l\'exercice.',
          benefits: ['Efficacité prouvée', 'Sécurité maximale', 'Résultats optimisés']
        },
        {
          title: 'Technique irréprochable',
          description: 'Accent mis sur la qualité d\'exécution plutôt que sur la quantité, selon la tradition française.',
          benefits: ['Prévention des blessures', 'Progression durable', 'Maîtrise technique']
        },
        {
          title: 'Individualisation poussée',
          description: 'Adaptation fine des programmes selon les capacités et objectifs de chaque pratiquant.',
          benefits: ['Résultats personnalisés', 'Respect du rythme', 'Épanouissement individuel']
        }
      ],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop'
    }
  ];

  const trainingPhases = [
    {
      phase: 'Échauffement',
      duration: '10-15 min',
      icon: 'Play',
      description: 'Préparation progressive du corps et de l\'esprit',
      activities: ['Mobilité articulaire', 'Activation cardio-vasculaire', 'Préparation mentale']
    },
    {
      phase: 'Technique',
      duration: '15-20 min',
      icon: 'Target',
      description: 'Apprentissage et perfectionnement des mouvements',
      activities: ['Décomposition gestuelle', 'Corrections individuelles', 'Progression technique']
    },
    {
      phase: 'Conditionnement',
      duration: '20-25 min',
      icon: 'Zap',
      description: 'Développement des qualités physiques',
      activities: ['Circuit training', 'Travail en intensité', 'Défis collectifs']
    },
    {
      phase: 'Récupération',
      duration: '5-10 min',
      icon: 'Heart',
      description: 'Retour au calme et régénération',
      activities: ['Étirements', 'Respiration', 'Bilan de séance']
    }
  ];

  const currentMethodology = methodologies?.find(m => m?.id === activeMethod);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl mb-4">
          Notre <span className="text-secondary">Méthodologie</span>
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
          Découvrez les principes scientifiques et philosophiques qui guident notre approche 
          unique de l'entraînement fonctionnel.
        </p>
      </div>
      {/* Methodology Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {methodologies?.map((method) => (
          <button
            key={method?.id}
            onClick={() => setActiveMethod(method?.id)}
            className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
              activeMethod === method?.id
                ? 'bg-secondary text-white shadow-brand'
                : 'bg-card text-text-primary hover:bg-secondary/10 hover:text-secondary'
            }`}
          >
            <Icon name={method?.icon} size={20} />
            <span className="font-body font-medium">{method?.name}</span>
          </button>
        ))}
      </div>
      {/* Active Methodology Content */}
      {currentMethodology && (
        <div className="bg-card rounded-brand shadow-brand overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="aspect-video lg:aspect-square overflow-hidden">
              <Image
                src={currentMethodology?.image}
                alt={currentMethodology?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name={currentMethodology?.icon} size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl">{currentMethodology?.name}</h3>
                  <p className="text-text-secondary font-body">{currentMethodology?.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {currentMethodology?.principles?.map((principle, index) => (
                  <div key={index} className="border-l-4 border-secondary/20 pl-6">
                    <h4 className="font-headline text-lg mb-2">{principle?.title}</h4>
                    <p className="text-text-secondary font-body mb-3 leading-relaxed">
                      {principle?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {principle?.benefits?.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-body"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Training Structure */}
      <div className="bg-muted/10 rounded-brand p-8">
        <div className="text-center mb-8">
          <h3 className="font-headline text-2xl mb-4">Structure d'une séance type</h3>
          <p className="text-text-secondary font-body">
            Chaque séance suit une progression logique pour optimiser vos résultats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingPhases?.map((phase, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Icon name={phase?.icon} size={24} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-cta">
                  {index + 1}
                </div>
              </div>
              
              <h4 className="font-headline text-lg mb-2">{phase?.phase}</h4>
              <p className="text-secondary font-cta text-sm mb-3">{phase?.duration}</p>
              <p className="text-text-secondary font-body text-sm mb-4">
                {phase?.description}
              </p>
              
              <ul className="space-y-1">
                {phase?.activities?.map((activity, activityIndex) => (
                  <li key={activityIndex} className="text-text-secondary text-xs font-body">
                    • {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Scientific Backing */}
      <div className="bg-card rounded-brand shadow-brand p-8">
        <div className="text-center mb-8">
          <h3 className="font-headline text-2xl mb-4">
            Fondements <span className="text-secondary">Scientifiques</span>
          </h3>
          <p className="text-text-secondary font-body">
            Notre approche s'appuie sur les dernières recherches en sciences du sport
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Brain" size={32} className="text-secondary" />
            </div>
            <h4 className="font-headline text-lg mb-3">Neuroplasticité</h4>
            <p className="text-text-secondary font-body text-sm leading-relaxed">
              L'entraînement fonctionnel stimule la création de nouvelles connexions neuronales, 
              améliorant la coordination et l'apprentissage moteur.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Activity" size={32} className="text-secondary" />
            </div>
            <h4 className="font-headline text-lg mb-3">Adaptation Métabolique</h4>
            <p className="text-text-secondary font-body text-sm leading-relaxed">
              Les exercices composés maximisent la dépense énergétique et stimulent 
              le métabolisme pendant et après l'effort.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-secondary" />
            </div>
            <h4 className="font-headline text-lg mb-3">Prévention</h4>
            <p className="text-text-secondary font-body text-sm leading-relaxed">
              Les mouvements fonctionnels renforcent les chaînes musculaires et 
              réduisent significativement les risques de blessures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyDeepDive;