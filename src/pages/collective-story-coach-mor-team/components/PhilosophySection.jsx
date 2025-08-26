import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 1,
      title: "Pour l\'Amour du Sport",
      subtitle: "La Passion Avant Tout",
      description: `Le premier sens de "4mor" - FOR MORE - représente notre amour inconditionnel pour le sport et le mouvement.\n\nNous croyons que la passion authentique est le moteur de toute transformation durable. Chaque séance, chaque exercice, chaque goutte de sueur est guidée par cet amour profond du dépassement de soi.`,
      icon: "Heart",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      stats: [
        { value: "500+", label: "Membres Passionnés" },
        { value: "100%", label: "Engagement Authentique" }
      ]
    },
    {
      id: 2,
      title: "Dédié à Mor",
      subtitle: "Leadership & Expertise",
      description: `Le deuxième sens honore Coach Mor, notre fondateur et guide spirituel du mouvement.\n\nFormé en France avec les meilleures certifications internationales, Mor incarne l'excellence technique alliée à l'authenticité sénégalaise. Son leadership inspire chaque membre à donner le meilleur de lui-même.`,
      icon: "Crown",
      color: "accent",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      stats: [
        { value: "8+", label: "Années d\'Expertise" },
        { value: "France", label: "Formation Elite" }
      ]
    },
    {
      id: 3,
      title: "Toujours Plus Fort",
      subtitle: "Dépassement Continu",
      description: `Le troisième sens de "4mor" - FOR MORE - symbolise notre quête perpétuelle du dépassement.\n\nNous ne nous contentons jamais du statu quo. Chaque jour est une opportunité de devenir plus fort, plus résilient, plus uni en tant que communauté. C'est l'essence même de notre croissance collective.`,
      icon: "TrendingUp",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      stats: [
        { value: "∞", label: "Potentiel de Croissance" },
        { value: "24/7", label: "Mentalité de Progrès" }
      ]
    }
  ];

  const coreValues = [
    {
      icon: "Users",
      title: "Communauté",
      description: "L\'union fait la force - ensemble nous sommes plus forts"
    },
    {
      icon: "Target",
      title: "Excellence",
      description: "Standards élevés dans chaque aspect de notre approche"
    },
    {
      icon: "Heart",
      title: "Authenticité",
      description: "Rester vrai à nos racines et à nos valeurs sénégalaises"
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "Techniques modernes adaptées à notre contexte local"
    },
    {
      icon: "Shield",
      title: "Intégrité",
      description: "Transparence et honnêteté dans toutes nos interactions"
    },
    {
      icon: "Globe",
      title: "Accessibilité",
      description: "Fitness de qualité accessible à tous les backgrounds"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl text-primary mb-6">
            Les Trois Sens de
            <span className="text-gradient block">4mor</span>
          </h2>
          <p className="text-text-secondary text-lg font-body max-w-3xl mx-auto">
            Notre philosophie repose sur trois piliers fondamentaux qui définissent 
            notre approche unique du fitness et de la communauté.
          </p>
        </div>

        {/* Philosophy Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4">
          {philosophies?.map((philosophy, index) => (
            <button
              key={philosophy?.id}
              onClick={() => setActivePhilosophy(index)}
              className={`px-6 py-4 rounded-xl font-body font-medium transition-all duration-300 ${
                activePhilosophy === index
                  ? `bg-${philosophy?.color} text-white shadow-brand`
                  : 'bg-card text-text-secondary hover:bg-card/80 border border-border'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={philosophy?.icon} 
                  size={20} 
                  className={activePhilosophy === index ? 'text-white' : `text-${philosophy?.color}`}
                />
                <span>{philosophy?.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Philosophy Content */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${philosophies?.[activePhilosophy]?.color}/10 flex items-center justify-center`}>
                    <Icon 
                      name={philosophies?.[activePhilosophy]?.icon} 
                      size={24} 
                      className={`text-${philosophies?.[activePhilosophy]?.color}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl text-primary">
                      {philosophies?.[activePhilosophy]?.title}
                    </h3>
                    <p className={`text-${philosophies?.[activePhilosophy]?.color} font-body font-medium`}>
                      {philosophies?.[activePhilosophy]?.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-text-secondary font-body leading-relaxed whitespace-pre-line">
                  {philosophies?.[activePhilosophy]?.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex space-x-8">
                {philosophies?.[activePhilosophy]?.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-headline text-${philosophies?.[activePhilosophy]?.color} mb-1`}>
                      {stat?.value}
                    </div>
                    <div className="text-text-secondary font-body text-sm">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={philosophies?.[activePhilosophy]?.image}
                  alt={philosophies?.[activePhilosophy]?.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-brand border border-border max-w-xs">
                <Icon name="Quote" size={20} className={`text-${philosophies?.[activePhilosophy]?.color} mb-2`} />
                <p className="text-primary font-body text-sm italic">
                  "Construisons ensemble des corps solides et des esprits forts"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div>
          <h3 className="font-headline text-3xl text-primary text-center mb-12">
            Nos Valeurs Fondamentales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues?.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <Icon name={value?.icon} size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg text-primary mb-2">
                      {value?.title}
                    </h4>
                    <p className="text-text-secondary font-body text-sm">
                      {value?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;