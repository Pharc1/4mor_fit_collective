import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'team-building',
      title: 'Team Building Workshops',
      subtitle: 'Cohésion par l\'Action',
      description: `Nos ateliers de team building combinent l'entraînement fonctionnel avec des défis collaboratifs authentiques. Chaque session est conçue pour renforcer la communication, la confiance mutuelle et l'esprit d'équipe à travers des exercices physiques adaptés à tous les niveaux.`,duration: '2-8 heures',participants: '8-50 personnes',price: 'À partir de 75,000 FCFA',
      benefits: [
        'Amélioration de la communication inter-équipes','Renforcement de la confiance mutuelle','Développement du leadership naturel','Réduction du stress collectif'
      ],
      outcomes: [
        '+65% communication efficace','+40% résolution de conflits','+55% motivation collective'
      ],
      icon: 'Users',image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg'
    },
    {
      id: 'executive-fitness',title: 'Executive Fitness Programs',subtitle: 'Leadership par l\'Exemple',
      description: `Programmes personnalisés pour dirigeants et cadres supérieurs, intégrant condition physique, gestion du stress et performance mentale. Coach Mor adapte son expertise française aux besoins spécifiques des leaders d'entreprise.`,duration: '3-12 mois',participants: '1-10 dirigeants',price: 'À partir de 150,000 FCFA/mois',
      benefits: [
        'Amélioration de l\'endurance décisionnelle',
        'Gestion optimisée du stress professionnel',
        'Renforcement de la présence leadership',
        'Équilibre vie professionnelle/personnelle'
      ],
      outcomes: [
        '+70% énergie quotidienne',
        '+45% gestion du stress',
        '+60% confiance en soi'
      ],
      icon: 'Crown',
      image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg'
    },
    {
      id: 'wellness-consulting',
      title: 'Wellness Consulting',
      subtitle: 'Culture d\'Entreprise Saine',
      description: `Consultation complète pour intégrer une culture de bien-être dans votre organisation. Analyse des besoins, conception de programmes sur mesure et accompagnement dans la mise en place d'initiatives wellness durables.`,duration: '1-6 mois',participants: 'Toute l\'organisation',
      price: 'Sur devis personnalisé',
      benefits: [
        'Réduction de l\'absentéisme',
        'Amélioration de la productivité',
        'Renforcement de l\'image employeur',
        'Diminution du turnover'
      ],
      outcomes: [
        '-30% absentéisme',
        '+50% satisfaction employés',
        '+35% rétention talents'
      ],
      icon: 'Heart',
      image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Briefcase" size={16} className="text-secondary" />
            <span className="font-body text-secondary text-sm font-medium">Nos Solutions</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-primary mb-6">
            Services Corporate
            <span className="text-gradient block">Sur Mesure</span>
          </h2>
          
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Chaque entreprise est unique. Nos solutions s'adaptent à votre culture, vos objectifs et vos contraintes pour créer des expériences transformatrices authentiques.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-secondary text-white shadow-brand'
                  : 'bg-card text-text-secondary hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              <Icon name={service?.icon} size={18} />
              <span>{service?.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-card rounded-2xl shadow-brand overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Service Image */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <img
                src={services?.[activeService]?.image}
                alt={services?.[activeService]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Floating Price */}
              <div className="absolute top-6 right-6 bg-accent rounded-xl px-4 py-2">
                <p className="font-cta text-primary text-sm font-bold">{services?.[activeService]?.price}</p>
              </div>
            </div>

            {/* Service Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-2">
                    {services?.[activeService]?.title}
                  </h3>
                  <p className="font-cta text-secondary text-lg mb-4">
                    {services?.[activeService]?.subtitle}
                  </p>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {services?.[activeService]?.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <Icon name="Clock" size={20} className="text-secondary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Durée</p>
                    <p className="font-cta text-primary text-sm">{services?.[activeService]?.duration}</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4">
                    <Icon name="Users" size={20} className="text-secondary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Participants</p>
                    <p className="font-cta text-primary text-sm">{services?.[activeService]?.participants}</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4">
                    <Icon name="Target" size={20} className="text-secondary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">ROI Moyen</p>
                    <p className="font-cta text-accent text-sm">+45%</p>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-cta text-primary text-lg mb-4">Bénéfices Clés</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services?.[activeService]?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                          <Icon name="Check" size={12} className="text-secondary" />
                        </div>
                        <p className="font-body text-text-secondary text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="font-cta text-primary text-lg mb-4">Résultats Mesurés</h4>
                  <div className="flex flex-wrap gap-3">
                    {services?.[activeService]?.outcomes?.map((outcome, index) => (
                      <div key={index} className="bg-accent/10 rounded-full px-4 py-2">
                        <p className="font-body text-accent text-sm font-medium">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                  >
                    Planifier Consultation
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Discuter sur WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;