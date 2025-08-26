import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTransparency = ({ onWhatsApp }) => {
  const pricingBreakdown = [
    {
      service: "Cross Training",
      price: "10,000 FCFA",
      period: "par mois",
      features: [
        "Accès illimité aux séances",
        "Suivi personnalisé",
        "Communauté active",
        "Équipements professionnels"
      ],
      popular: true
    },
    {
      service: "Coaching Personnel",
      price: "25,000 FCFA",
      period: "par séance",
      features: [
        "Séance individuelle 1h",
        "Programme personnalisé",
        "Suivi nutritionnel",
        "Flexibilité horaire"
      ]
    },
    {
      service: "Team Building",
      price: "Sur devis",
      period: "par équipe",
      features: [
        "Programme sur mesure",
        "Animation professionnelle",
        "Matériel inclus",
        "Rapport d\'activité"
      ]
    }
  ];

  const valuePropositions = [
    {
      icon: "Heart",
      title: "Accessible à tous",
      description: "10,000 FCFA/mois rend l'entraînement de qualité accessible aux budgets modestes"
    },
    {
      icon: "Award",
      title: "Qualité française",
      description: "Méthodologie d'entraînement française avec Coach Mor certifié"
    },
    {
      icon: "Users",
      title: "Communauté forte",
      description: "Rejoignez une communauté motivante qui vous pousse vers vos objectifs"
    },
    {
      icon: "Target",
      title: "Résultats garantis",
      description: "Approche scientifique et suivi personnalisé pour des résultats mesurables"
    }
  ];

  const handleWhatsAppInquiry = () => {
    const message = "Salut! Je voudrais en savoir plus sur vos tarifs et les options de paiement disponibles.";
    onWhatsApp(message);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl mb-4">
          Transparence <span className="text-secondary">Tarifaire</span>
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
          Chez 4mor Fit, nous croyons en la transparence totale. Découvrez nos tarifs 
          clairs et notre mission de démocratiser le fitness de qualité à Dakar.
        </p>
      </div>
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingBreakdown?.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-card rounded-brand shadow-brand p-8 transition-all duration-300 hover:shadow-brand-lg ${
              plan?.popular ? 'border-2 border-secondary' : ''
            }`}
          >
            {plan?.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-cta">
                  Plus populaire
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="font-headline text-xl mb-2">{plan?.service}</h3>
              <div className="mb-4">
                <span className="text-3xl font-cta text-secondary">{plan?.price}</span>
                <span className="text-text-secondary font-body ml-2">{plan?.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan?.features?.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-text-secondary font-body">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan?.popular ? "default" : "outline"}
              fullWidth
              onClick={handleWhatsAppInquiry}
              iconName="MessageCircle"
              iconPosition="left"
              className={plan?.popular ? "bg-secondary hover:bg-secondary/90" : "border-secondary text-secondary hover:bg-secondary hover:text-white"}
            >
              Demander info
            </Button>
          </div>
        ))}
      </div>
      {/* Value Propositions */}
      <div className="bg-muted/10 rounded-brand p-8">
        <div className="text-center mb-8">
          <h3 className="font-headline text-2xl mb-4">
            Pourquoi choisir <span className="text-secondary">4mor Fit</span> ?
          </h3>
          <p className="text-text-secondary font-body">
            Notre mission : rendre l'entraînement de qualité accessible à tous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions?.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={value?.icon} size={24} className="text-secondary" />
              </div>
              <h4 className="font-headline text-lg mb-2">{value?.title}</h4>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Payment Options */}
      <div className="bg-card rounded-brand shadow-brand p-8">
        <div className="text-center mb-6">
          <h3 className="font-headline text-2xl mb-2">Options de paiement</h3>
          <p className="text-text-secondary font-body">
            Nous facilitons votre engagement avec des options flexibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-muted/10 rounded-lg">
            <Icon name="CreditCard" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="font-body font-medium mb-2">Paiement mensuel</h4>
            <p className="text-text-secondary text-sm">
              10,000 FCFA chaque mois, résiliable à tout moment
            </p>
          </div>

          <div className="text-center p-6 bg-muted/10 rounded-lg">
            <Icon name="Banknote" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-body font-medium mb-2">Paiement trimestriel</h4>
            <p className="text-text-secondary text-sm">
              28,000 FCFA pour 3 mois (économie de 2,000 FCFA)
            </p>
          </div>

          <div className="text-center p-6 bg-muted/10 rounded-lg">
            <Icon name="Smartphone" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="font-body font-medium mb-2">Mobile Money</h4>
            <p className="text-text-secondary text-sm">
              Orange Money, Wave, Free Money acceptés
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="default"
            onClick={handleWhatsAppInquiry}
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-secondary hover:bg-secondary/90"
          >
            Discuter des options de paiement
          </Button>
        </div>
      </div>
      {/* Guarantee */}
      <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-brand p-8 text-center">
        <Icon name="Shield" size={48} className="text-secondary mx-auto mb-4" />
        <h3 className="font-headline text-2xl mb-4">Garantie satisfaction</h3>
        <p className="text-text-secondary font-body text-lg mb-6 max-w-2xl mx-auto">
          Pas satisfait après votre première semaine ? Nous vous remboursons intégralement. 
          Notre engagement : votre réussite avant tout.
        </p>
        <Button
          variant="outline"
          onClick={handleWhatsAppInquiry}
          iconName="MessageCircle"
          iconPosition="left"
          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          En savoir plus sur notre garantie
        </Button>
      </div>
    </div>
  );
};

export default PricingTransparency;