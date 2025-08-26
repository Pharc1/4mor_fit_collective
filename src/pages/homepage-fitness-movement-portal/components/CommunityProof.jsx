import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const memberTransformations = [
    {
      id: 1,
      name: "Aminata Diallo",
      age: 28,
      profession: "Développeuse Web",
      beforeImage: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: `Avant 4mor Fit, j'étais sédentaire et stressée par mon travail.\nEn 6 mois, j'ai non seulement transformé mon corps mais aussi ma confiance en moi.\nL'ambiance familiale et l'expertise de Coach Mor ont fait toute la différence.`,
      results: "12kg perdus, +40% force",
      duration: "6 mois",
      rating: 5
    },
    {
      id: 2,
      name: "Mamadou Sarr",
      age: 35,
      profession: "Chef d\'Entreprise",
      beforeImage: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: `Le cross training m'a redonné l'énergie nécessaire pour gérer mon entreprise.\nL'approche collective de 4mor Fit crée une émulation incroyable.\nJe recommande à tous les entrepreneurs qui veulent performer.`,
      results: "15kg muscle, -8% graisse",
      duration: "8 mois",
      rating: 5
    },
    {
      id: 3,
      name: "Fatou Ndiaye",
      age: 24,
      profession: "Étudiante",
      beforeImage: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: `Avec un budget étudiant, 4mor Fit était la solution parfaite.\n10,000 FCFA pour un coaching de qualité internationale, c'est incroyable.\nJ'ai trouvé ma famille fitness ici.`,
      results: "Forme olympique atteinte",
      duration: "4 mois",
      rating: 5
    }
  ];

  const corporateClients = [
    {
      id: 1,
      company: "Orange Sénégal",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
      testimonial: `4mor Fit a révolutionné notre approche du team building.\nNos équipes sont plus soudées et plus performantes depuis nos sessions.`,
      contact: "Directeur RH",
      results: "+25% cohésion équipe",
      participants: "150 employés"
    },
    {
      id: 2,
      company: "Sonatel",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200",
      testimonial: `L'expertise de Coach Mor et l'authenticité de l'approche 4mor Fit\nont créé une dynamique exceptionnelle dans nos équipes.`,
      contact: "Manager Formation",
      results: "+30% motivation",
      participants: "200 employés"
    },
    {
      id: 3,
      company: "Ecobank",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      testimonial: `Un investissement rentable pour le bien-être de nos collaborateurs.\nLes résultats sur la productivité sont mesurables.`,
      contact: "DRH",
      results: "+20% productivité",
      participants: "100 employés"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % memberTransformations?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [memberTransformations?.length]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/221123456789?text=Je veux rejoindre la communauté 4mor Fit et commencer ma transformation', '_blank');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-6xl text-white mb-4">
            Nos Réussites
          </h2>
          <p className="font-body text-lg text-white/80 max-w-3xl mx-auto">
            Découvrez les transformations inspirantes de notre communauté\net la confiance que nous accordent les entreprises de Dakar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Member Transformations */}
          <div>
            <h3 className="font-headline text-3xl text-white mb-8 text-center">
              Transformations Membres
            </h3>
            
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-brand-lg">
              <div className="p-8">
                {/* Member Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={memberTransformations?.[currentTestimonial]?.afterImage}
                      alt={memberTransformations?.[currentTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-cta text-xl text-primary">
                      {memberTransformations?.[currentTestimonial]?.name}
                    </h4>
                    <p className="font-body text-text-secondary text-sm">
                      {memberTransformations?.[currentTestimonial]?.profession}, {memberTransformations?.[currentTestimonial]?.age} ans
                    </p>
                  </div>
                </div>

                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <Image
                      src={memberTransformations?.[currentTestimonial]?.beforeImage}
                      alt="Avant transformation"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <span className="font-body text-sm text-text-secondary">Avant</span>
                  </div>
                  <div className="text-center">
                    <Image
                      src={memberTransformations?.[currentTestimonial]?.afterImage}
                      alt="Après transformation"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <span className="font-body text-sm text-secondary font-medium">Après</span>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="mb-6">
                  <p className="font-body text-text-primary leading-relaxed italic">
                    "{memberTransformations?.[currentTestimonial]?.testimonial}"
                  </p>
                </blockquote>

                {/* Results */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="font-accent text-2xl text-secondary">
                      {memberTransformations?.[currentTestimonial]?.results}
                    </div>
                    <div className="font-body text-sm text-text-secondary">Résultats</div>
                  </div>
                  <div className="text-center">
                    <div className="font-accent text-2xl text-accent">
                      {memberTransformations?.[currentTestimonial]?.duration}
                    </div>
                    <div className="font-body text-sm text-text-secondary">Durée</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      color={i < memberTransformations?.[currentTestimonial]?.rating ? "var(--color-accent)" : "var(--color-border)"}
                      className="fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 pb-6">
                {memberTransformations?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-secondary scale-125' : 'bg-border hover:bg-text-secondary'
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Clients */}
          <div>
            <h3 className="font-headline text-3xl text-white mb-8 text-center">
              Clients Corporate
            </h3>
            
            <div className="space-y-6">
              {corporateClients?.map((client) => (
                <div key={client?.id} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={client?.logo}
                      alt={client?.company}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-cta text-lg text-primary mb-1">
                        {client?.company}
                      </h4>
                      <p className="font-body text-sm text-text-secondary mb-3">
                        {client?.contact}
                      </p>
                      <blockquote className="font-body text-text-primary text-sm italic mb-4">
                        "{client?.testimonial}"
                      </blockquote>
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary font-medium">
                          {client?.results}
                        </span>
                        <span className="text-text-secondary">
                          {client?.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/corporate-solutions-professional-partnership-hub">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
                  iconName="Building2"
                  iconPosition="left"
                >
                  Solutions Corporate
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-headline text-3xl text-white mb-4">
              Votre transformation commence ici
            </h3>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Rejoignez une communauté qui croit en votre potentiel.\nCommencez votre parcours avec 4mor Fit Collective dès aujourd'hui.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary/90 text-white font-cta"
              iconName="Users"
              iconPosition="left"
            >
              Rejoindre la Communauté
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityProof;