import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/221123456789?text=Salut! Je suis intéressé par 4mor Fit Collective', '_blank');
  };

  return (
    <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-lg transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl lg:text-6xl text-white leading-tight">
                Contactez-nous
                <span className="block text-secondary">Aujourd'hui</span>
              </h1>
              <p className="font-body text-lg lg:text-xl text-gray-300 leading-relaxed">
                Prêt à rejoindre la communauté fitness la plus authentique de Dakar ? 
                Contactez-nous via WhatsApp, planifiez votre essai gratuit ou demandez 
                des informations sur nos services corporate.
              </p>
            </div>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span className="font-cta text-accent">Réponse Rapide</span>
                </div>
                <p className="font-body text-sm text-gray-400">
                  Réponse WhatsApp en moins de 30 minutes
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Icon name="Users" size={20} className="text-accent" />
                  <span className="font-cta text-accent">Communauté Active</span>
                </div>
                <p className="font-body text-sm text-gray-400">
                  Plus de 500 membres actifs
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-white font-cta"
              >
                WhatsApp Direct
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-cta"
              >
                Essai Gratuit
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-cta text-lg text-white">WhatsApp Business</h3>
                  <p className="font-body text-sm text-gray-400">Réponse immédiate</p>
                </div>
              </div>
              <p className="font-body text-gray-300 mb-4">
                Notre canal de communication principal pour tous vos besoins
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="ExternalLink"
                iconPosition="right"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                +221 12 345 67 89
              </Button>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-cta text-lg text-white">Email Professionnel</h3>
                  <p className="font-body text-sm text-gray-400">Pour les entreprises</p>
                </div>
              </div>
              <p className="font-body text-gray-300 mb-4">
                Demandes corporate et partenariats professionnels
              </p>
              <Button
                variant="outline"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                contact@4morfit.sn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;