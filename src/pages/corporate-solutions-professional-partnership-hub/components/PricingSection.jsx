import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const packages = [
    {
      id: 'starter',
      name: 'Starter Team',
      subtitle: 'Découverte Team Building',
      price: '75,000',
      period: 'Session unique',
      description: 'Parfait pour tester notre approche avec votre équipe',
      duration: '4 heures',
      participants: '8-15 personnes',
      popular: false,
      features: [
        'Session team building interactive',
        'Évaluation dynamiques équipe',
        'Exercices functional training adaptés',
        'Débriefing et recommandations',
        'Rapport post-session',
        'Suivi 1 semaine'
      ],
      notIncluded: [
        'Coaching individuel dirigeants',
        'Programme personnalisé long terme',
        'Matériel spécialisé'
      ],
      color: 'secondary',
      icon: 'Play'
    },
    {
      id: 'standard',
      name: 'Corporate Plus',
      subtitle: 'Programme Complet',
      price: '350,000',
      period: '3 mois',
      description: 'Solution complète pour transformation durable',
      duration: '12 semaines',
      participants: '15-30 personnes',
      popular: true,
      features: [
        'Diagnostic organisationnel complet',
        '12 sessions team building progressives',
        'Coaching individuel 3 dirigeants',
        'Programme wellness personnalisé',
        'Matériel training professionnel',
        'Rapports mensuels détaillés',
        'Suivi performance continue',
        'Hotline WhatsApp dédiée'
      ],
      notIncluded: [
        'Interventions sur site client',
        'Formation formateurs internes'
      ],
      color: 'accent',
      icon: 'Zap'
    },
    {
      id: 'premium',
      name: 'Enterprise Elite',
      subtitle: 'Transformation Totale',
      price: 'Sur Devis',
      period: '6-12 mois',
      description: 'Solution sur mesure pour grandes organisations',
      duration: 'Flexible',
      participants: '30+ personnes',
      popular: false,
      features: [
        'Audit culture entreprise approfondi',
        'Programme multi-sites possible',
        'Coaching exécutif personnalisé',
        'Formation formateurs internes',
        'Interventions sur site client',
        'Matériel premium inclus',
        'Dashboard performance temps réel',
        'Support 24/7 dédié',
        'Garantie résultats ROI',
        'Certification équipes internes'
      ],
      notIncluded: [],
      color: 'secondary',
      icon: 'Crown'
    }
  ];

  const addOns = [
    {
      name: 'Coaching Dirigeant Individuel',
      price: '25,000 FCFA/mois',
      description: 'Sessions personnalisées pour dirigeants',
      icon: 'User'
    },
    {
      name: 'Intervention Sur Site',
      price: '15,000 FCFA/session',
      description: 'Déplacement dans vos locaux',
      icon: 'MapPin'
    },
    {
      name: 'Matériel Training Premium',
      price: '50,000 FCFA/mois',
      description: 'Équipement professionnel inclus',
      icon: 'Dumbbell'
    },
    {
      name: 'Reporting Avancé',
      price: '10,000 FCFA/mois',
      description: 'Tableaux de bord personnalisés',
      icon: 'BarChart3'
    }
  ];

  const faqs = [
    {
      question: 'Comment calculez-vous le ROI de vos interventions ?',
      answer: 'Nous mesurons des indicateurs précis : productivité, absentéisme, turnover, satisfaction employés, cohésion équipe. Nos clients observent en moyenne +45% de ROI sur 6 mois.'
    },
    {
      question: 'Vos programmes s\'adaptent-ils à notre culture d\'entreprise ?',
      answer: 'Absolument. Coach Mor combine son expertise française avec une compréhension profonde de la culture sénégalaise. Chaque programme est personnalisé selon vos valeurs et contraintes.'
    },
    {
      question: 'Quelle est la durée minimum d\'engagement ?',
      answer: 'Aucun engagement minimum. Vous pouvez commencer par une session découverte. Cependant, les transformations durables nécessitent généralement 3-6 mois.'
    },
    {
      question: 'Intervenez-vous dans nos locaux ou dans vos centres ?',
      answer: 'Les deux options sont possibles. Interventions sur site pour plus de commodité, ou dans nos centres 4mor Fit pour une expérience immersive complète.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="DollarSign" size={16} className="text-accent" />
            <span className="font-body text-accent text-sm font-medium">Tarification Transparente</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-primary mb-6">
            Packages Corporate
            <span className="text-gradient block">Sur Mesure</span>
          </h2>
          
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Des solutions flexibles adaptées à votre budget et vos objectifs. Investissement transparent, résultats garantis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages?.map((pkg) => (
            <div
              key={pkg?.id}
              className={`relative bg-card rounded-2xl shadow-brand overflow-hidden transition-all duration-300 ${
                pkg?.popular ? 'ring-2 ring-accent scale-105' : 'hover:shadow-brand-lg'
              }`}
            >
              {/* Popular Badge */}
              {pkg?.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-accent text-primary px-6 py-2 rounded-full font-cta text-sm font-bold">
                    Plus Populaire
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-${pkg?.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={pkg?.icon} size={24} className={`text-${pkg?.color}`} />
                  </div>
                  
                  <h3 className="font-headline text-2xl text-primary mb-2">{pkg?.name}</h3>
                  <p className={`font-cta text-${pkg?.color} text-lg mb-4`}>{pkg?.subtitle}</p>
                  
                  <div className="mb-4">
                    {pkg?.price === 'Sur Devis' ? (
                      <div className="font-accent text-4xl text-primary font-bold">Sur Devis</div>
                    ) : (
                      <>
                        <div className="font-accent text-4xl text-primary font-bold">
                          {pkg?.price}
                          <span className="text-lg text-text-secondary font-normal"> FCFA</span>
                        </div>
                        <p className="font-body text-text-secondary text-sm">{pkg?.period}</p>
                      </>
                    )}
                  </div>
                  
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {pkg?.description}
                  </p>
                </div>

                {/* Package Details */}
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background rounded-lg p-3">
                      <Icon name="Clock" size={16} className={`text-${pkg?.color} mx-auto mb-1`} />
                      <p className="font-body text-xs text-text-secondary mb-1">Durée</p>
                      <p className="font-cta text-primary text-sm">{pkg?.duration}</p>
                    </div>
                    <div className="bg-background rounded-lg p-3">
                      <Icon name="Users" size={16} className={`text-${pkg?.color} mx-auto mb-1`} />
                      <p className="font-body text-xs text-text-secondary mb-1">Participants</p>
                      <p className="font-cta text-primary text-sm">{pkg?.participants}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 bg-${pkg?.color}/20 rounded-full flex items-center justify-center mt-0.5`}>
                        <Icon name="Check" size={12} className={`text-${pkg?.color}`} />
                      </div>
                      <p className="font-body text-text-secondary text-sm">{feature}</p>
                    </div>
                  ))}
                  
                  {pkg?.notIncluded?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 opacity-50">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="X" size={12} className="text-gray-400" />
                      </div>
                      <p className="font-body text-gray-400 text-sm line-through">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg?.popular ? "default" : "outline"}
                  fullWidth
                  size="lg"
                  className={pkg?.popular 
                    ? "bg-accent hover:bg-accent/90 text-primary font-cta" 
                    : `border-${pkg?.color} text-${pkg?.color} hover:bg-${pkg?.color} hover:text-white font-cta`
                  }
                  onClick={() => setSelectedPackage(pkg?.id)}
                >
                  {pkg?.price === 'Sur Devis' ? 'Demander Devis' : 'Choisir ce Package'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h3 className="font-headline text-3xl lg:text-4xl text-primary text-center mb-12">
            Options Complémentaires
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns?.map((addon, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={addon?.icon} size={20} className="text-secondary" />
                </div>
                <h4 className="font-cta text-primary font-bold mb-2">{addon?.name}</h4>
                <p className="font-accent text-accent text-lg font-bold mb-2">{addon?.price}</p>
                <p className="font-body text-text-secondary text-sm">{addon?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="font-headline text-3xl lg:text-4xl text-primary text-center mb-12">
            Questions Fréquentes
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs?.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand">
                <h4 className="font-cta text-primary text-lg font-bold mb-3">{faq?.question}</h4>
                <p className="font-body text-text-secondary leading-relaxed">{faq?.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
            <h3 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
              Prêt à Investir dans Vos Équipes ?
            </h3>
            <p className="font-body text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Chaque investissement dans vos équipes génère un retour mesurable. Commençons par une consultation gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-white font-cta"
              >
                Calculer Votre ROI
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                Consultation Gratuite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;