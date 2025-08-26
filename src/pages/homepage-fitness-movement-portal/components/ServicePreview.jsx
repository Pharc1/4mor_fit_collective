import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServicePreview = () => {
  const services = [
    {
      id: 1,
      title: "Cross Training",
      subtitle: "Entraînement Collectif",
      price: "10,000 FCFA",
      period: "/mois",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Séances en groupe dynamiques",
        "Entraînement fonctionnel complet",
        "Coaching expert de Mor",
        "Communauté motivante",
        "Équipements professionnels"
      ],
      icon: "Users",
      popular: true,
      whatsappMessage: "Je veux rejoindre les séances de Cross Training collectif"
    },
    {
      id: 2,
      title: "Personal Coaching",
      subtitle: "Accompagnement Individuel",
      price: "Sur Devis",
      period: "/séance",
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Programme personnalisé",
        "Attention individuelle",
        "Objectifs sur mesure",
        "Suivi nutritionnel",
        "Flexibilité horaire"
      ],
      icon: "User",
      popular: false,
      whatsappMessage: "Je souhaite des informations sur le coaching personnel"
    },
    {
      id: 3,
      title: "Corporate Team Building",
      subtitle: "Solutions Entreprises",
      price: "Package",
      period: "sur mesure",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Cohésion d\'équipe",
        "Activités team building",
        "Programmes wellness",
        "Événements corporate",
        "ROI mesurable"
      ],
      icon: "Building2",
      popular: false,
      whatsappMessage: "Nous cherchons des solutions team building pour notre entreprise"
    }
  ];

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/221123456789?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-6xl text-primary mb-4">
            Nos Services
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Découvrez nos solutions fitness adaptées à tous les niveaux et tous les objectifs.\nDe l'entraînement collectif au coaching corporate, nous avons ce qu'il vous faut.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-2 ${
                service?.popular ? 'ring-2 ring-secondary' : ''
              }`}
            >
              {/* Popular Badge */}
              {service?.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-cta">
                    Populaire
                  </div>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon name={service?.icon} size={24} color="white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-headline text-2xl text-primary mb-1">
                    {service?.title}
                  </h3>
                  <p className="font-body text-text-secondary">
                    {service?.subtitle}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-accent text-3xl text-secondary">
                      {service?.price}
                    </span>
                    <span className="font-body text-text-secondary">
                      {service?.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} color="var(--color-secondary)" className="mt-1 flex-shrink-0" />
                        <span className="font-body text-sm text-text-primary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    variant={service?.popular ? "default" : "outline"}
                    fullWidth
                    onClick={() => handleWhatsAppClick(service?.whatsappMessage)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className={service?.popular ? "bg-secondary hover:bg-secondary/90 text-white" : "border-secondary text-secondary hover:bg-secondary hover:text-white"}
                  >
                    Contacter via WhatsApp
                  </Button>
                  
                  <Link to="/training-services-interactive-universe">
                    <Button
                      variant="ghost"
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="text-text-secondary hover:text-secondary"
                    >
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-headline text-3xl text-white mb-4">
              Prêt à transformer votre vie ?
            </h3>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Rejoignez plus de 500 membres qui ont déjà choisi 4mor Fit Collective pour leur parcours fitness.\nCommencez votre transformation dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleWhatsAppClick("Je veux commencer mon essai gratuit avec 4mor Fit Collective")}
                className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                iconName="Play"
                iconPosition="left"
              >
                Essai Gratuit Maintenant
              </Button>
              <Link to="/contact-booking-multi-channel-engagement">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Réserver une Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;