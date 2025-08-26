import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MissionStatement = () => {
  const missionPillars = [
    {
      title: "Corps Solides",
      description: "Développer la force physique à travers des méthodes d\'entraînement fonctionnel éprouvées",
      icon: "Dumbbell",
      color: "secondary",
      details: [
        "Techniques françaises adaptées au contexte sénégalais",
        "Programmes personnalisés selon les objectifs",
        "Suivi professionnel et mesure des progrès",
        "Équipements modernes et sécurisés"
      ]
    },
    {
      title: "Esprits Forts",
      description: "Cultiver la résilience mentale et la confiance en soi à travers le dépassement collectif",
      icon: "Brain",
      color: "accent",
      details: [
        "Développement de la discipline personnelle",
        "Renforcement de la confiance en soi",
        "Gestion du stress et de la pression",
        "Mentalité de croissance continue"
      ]
    },
    {
      title: "Énergie Collective",
      description: "Créer une synergie communautaire où chaque membre inspire et motive les autres",
      icon: "Users",
      color: "secondary",
      details: [
        "Entraînements en groupe motivants",
        "Soutien mutuel entre membres",
        "Événements communautaires réguliers",
        "Réseau de soutien authentique"
      ]
    }
  ];

  const visionPoints = [
    {
      icon: "Globe",
      title: "Expansion Régionale",
      description: "Étendre notre modèle à travers l\'Afrique de l\'Ouest d\'ici 2030"
    },
    {
      icon: "GraduationCap",
      title: "Académie de Formation",
      description: "Former la prochaine génération de coachs fitness africains"
    },
    {
      icon: "Smartphone",
      title: "Innovation Digitale",
      description: "Développer des solutions technologiques pour l\'accompagnement fitness"
    },
    {
      icon: "Handshake",
      title: "Partenariats Stratégiques",
      description: "Collaborer avec institutions pour démocratiser l\'accès au fitness"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/221123456789?text=Je suis inspiré par votre mission et je veux faire partie de 4mor Fit Collective', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-surface to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mission Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Target" size={20} className="text-secondary" />
            <span className="text-secondary font-body text-sm font-medium">Notre Mission</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-white mb-8 leading-tight">
            Construisons Ensemble
            <span className="text-gradient block">Des Corps Solides</span>
            <span className="text-accent block">Et Des Esprits Forts</span>
          </h2>
          
          <p className="text-gray-300 text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
            À travers l'énergie collective, nous transformons des individus en une communauté 
            résiliente qui dépasse ses limites et inspire le changement positif à Dakar et au-delà.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {missionPillars?.map((pillar, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-secondary/50 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 bg-${pillar?.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${pillar?.color}/30 transition-colors duration-300`}>
                <Icon name={pillar?.icon} size={32} className={`text-${pillar?.color}`} />
              </div>
              
              <h3 className="font-headline text-2xl text-white mb-4">
                {pillar?.title}
              </h3>
              
              <p className="text-gray-300 font-body mb-6 leading-relaxed">
                {pillar?.description}
              </p>
              
              <ul className="space-y-3">
                {pillar?.details?.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className={`text-${pillar?.color} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-400 font-body text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Icon name="Eye" size={20} className="text-accent" />
                <span className="text-accent font-body text-sm font-medium">Notre Vision 2030</span>
              </div>
              
              <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-6">
                Révolutionner le Fitness
                <span className="text-secondary block">en Afrique de l'Ouest</span>
              </h3>
              
              <p className="text-text-secondary font-body text-lg mb-8 leading-relaxed">
                Nous envisageons un avenir où le fitness de qualité n'est plus un privilège, 
                mais un droit accessible à tous. Notre modèle unique sera la référence 
                pour l'industrie du fitness en Afrique francophone.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {visionPoints?.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={point?.icon} size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-headline text-lg text-primary mb-1">
                        {point?.title}
                      </h4>
                      <p className="text-text-secondary font-body text-sm">
                        {point?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Vision 4mor Fit Collective"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-brand border border-border">
                <div className="text-center">
                  <div className="text-2xl font-headline text-secondary">2030</div>
                  <div className="text-sm font-body text-text-secondary">Vision Cible</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-brand border border-border">
                <div className="text-center">
                  <div className="text-2xl font-headline text-accent">10K+</div>
                  <div className="text-sm font-body text-text-secondary">Membres Futurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700">
          <Icon name="Rocket" size={48} className="text-secondary mx-auto mb-6" />
          
          <h3 className="font-headline text-3xl lg:text-4xl text-white mb-6">
            Rejoignez Notre Mission
          </h3>
          
          <p className="text-gray-300 font-body text-lg mb-8 max-w-2xl mx-auto">
            Que vous soyez un individu cherchant la transformation personnelle ou une entreprise 
            visant l'excellence collective, nous avons une place pour vous dans notre mouvement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppContact}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-secondary hover:bg-secondary/90 text-white font-cta"
            >
              Commencer Mon Parcours
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Building2"
              iconPosition="left"
              className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
            >
              Solutions Entreprise
            </Button>
          </div>
          
          {/* Mission Quote */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <blockquote className="text-xl lg:text-2xl font-body italic text-gray-300 mb-4">
              "Pour l'amour du sport, nous construisons plus que des corps - 
              nous forgeons des caractères et créons une communauté."
            </blockquote>
            <cite className="text-accent font-headline text-lg">
              - Coach Mor, Fondateur 4mor Fit Collective
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;