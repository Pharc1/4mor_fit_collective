import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamProfiles = () => {
  const [activeProfile, setActiveProfile] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Mor Diop",
      role: "Fondateur & Coach Principal",
      specialization: "Fitness Fonctionnel & Leadership",
      experience: "8+ années",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Coach Mor est le visionnaire derrière 4mor Fit Collective. Formé en France avec des certifications internationales, il a révolutionné l'approche du fitness à Dakar.\n\nSa philosophie unique combine l'excellence technique française avec l'authenticité et l'accessibilité sénégalaise. Il croit fermement que le fitness de qualité doit être accessible à tous, peu importe le background économique.`,
      certifications: ["Formation France Elite", "Fitness Fonctionnel Certifié", "Leadership Sportif"],
      quote: "Le sport unit les cœurs et transforme les vies. C\'est pour cela que nous existons.",
      social: {
        instagram: "@coach_mor_4mor",
        whatsapp: "+221123456789"
      }
    },
    {
      id: 2,
      name: "Aminata Sall",
      role: "Coach Spécialisée Femmes",
      specialization: "Fitness Féminin & Nutrition",
      experience: "5+ années",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Aminata apporte une expertise unique dans l'accompagnement des femmes vers leurs objectifs fitness. Spécialisée en nutrition sportive et en entraînement adapté.\n\nElle comprend les défis spécifiques des femmes actives de Dakar et développe des programmes personnalisés qui respectent les contraintes familiales et professionnelles.`,
      certifications: ["Nutrition Sportive", "Coach Fitness Féminin", "Wellness Holistique"],
      quote: "Chaque femme mérite de se sentir forte et confiante dans son corps.",
      social: {
        instagram: "@aminata_4mor_fit",
        whatsapp: "+221123456790"
      }
    },
    {
      id: 3,
      name: "Ibrahima Kane",
      role: "Coach Performance",
      specialization: "Préparation Physique & Récupération",
      experience: "6+ années",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Ibrahima est notre expert en performance et récupération. Ancien athlète de haut niveau, il comprend les exigences de la préparation physique optimale.\n\nIl développe des programmes intensifs pour les athlètes et les professionnels qui cherchent à maximiser leurs performances tout en minimisant les risques de blessures.`,
      certifications: ["Préparation Physique", "Récupération Sportive", "Kinésiologie"],
      quote: "La performance naît de la constance, pas de l'intensité ponctuelle.",
      social: {
        instagram: "@ibrahima_performance",whatsapp: "+221123456791"
      }
    },
    {
      id: 4,
      name: "Fatou Diagne",role: "Coordinatrice Communauté",specialization: "Engagement & Événements",experience: "4+ années",image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Fatou est l'âme de notre communauté. Elle organise tous nos événements, challenges et initiatives qui renforcent l'esprit collectif de 4mor.\n\nGrâce à son énergie contagieuse et son sens de l'organisation, elle transforme chaque séance en moment de partage et de motivation mutuelle.`,
      certifications: ["Management Événementiel", "Communication Digitale", "Animation Communautaire"],
      quote: "Une communauté forte crée des individus plus forts.",
      social: {
        instagram: "@fatou_4mor_community",whatsapp: "+221123456792"
      }
    }
  ];

  const handleWhatsAppContact = (phone) => {
    window.open(`https://wa.me/${phone?.replace('+', '')}?text=Salut! Je souhaite en savoir plus sur vos services 4mor Fit`, '_blank');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl text-white mb-6">
            Notre Équipe
          </h2>
          <p className="text-gray-300 text-lg font-body max-w-2xl mx-auto">
            Des experts passionnés unis par la même vision : 
            démocratiser le fitness de qualité à Dakar et au-delà.
          </p>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers?.map((member, index) => (
            <div
              key={member?.id}
              className={`cursor-pointer transition-all duration-500 ${
                activeProfile === index ? 'transform scale-105' : 'opacity-75 hover:opacity-90'
              }`}
              onClick={() => setActiveProfile(index)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-brand border border-border card-hover">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-headline text-xl text-white mb-1">{member?.name}</h3>
                    <p className="text-accent text-sm font-body">{member?.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-text-secondary font-body">
                      {member?.experience}
                    </div>
                    <div className="flex space-x-2">
                      <Icon name="Instagram" size={16} className="text-secondary" />
                      <Icon name="MessageCircle" size={16} className="text-accent" />
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm font-body">
                    {member?.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Team Carousel */}
        <div className="lg:hidden mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {teamMembers?.map((member, index) => (
              <div
                key={member?.id}
                className={`flex-shrink-0 w-64 cursor-pointer transition-all duration-300 ${
                  activeProfile === index ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => setActiveProfile(index)}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-brand border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-headline text-lg text-white mb-1">{member?.name}</h3>
                      <p className="text-accent text-xs font-body">{member?.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Profile Details */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Profile Image & Basic Info */}
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={teamMembers?.[activeProfile]?.image}
                  alt={teamMembers?.[activeProfile]?.name}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="font-headline text-2xl text-primary mb-2">
                  {teamMembers?.[activeProfile]?.name}
                </h3>
                <p className="text-secondary font-body font-medium mb-2">
                  {teamMembers?.[activeProfile]?.role}
                </p>
                <p className="text-text-secondary font-body text-sm mb-4">
                  {teamMembers?.[activeProfile]?.specialization}
                </p>
                
                <div className="flex justify-center lg:justify-start space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWhatsAppContact(teamMembers?.[activeProfile]?.social?.whatsapp)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-primary"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Instagram"
                    className="text-secondary hover:text-secondary/80"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h4 className="font-headline text-xl text-primary mb-4">À Propos</h4>
                <p className="text-text-secondary font-body leading-relaxed whitespace-pre-line">
                  {teamMembers?.[activeProfile]?.bio}
                </p>
              </div>

              {/* Quote */}
              <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg">
                <Icon name="Quote" size={24} className="text-secondary mb-3" />
                <p className="text-primary font-body italic text-lg">
                  "{teamMembers?.[activeProfile]?.quote}"
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-headline text-xl text-primary mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {teamMembers?.[activeProfile]?.certifications?.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg"
                    >
                      <span className="text-accent font-body text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Badge */}
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-4 rounded-xl">
                  <Icon name="Award" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-headline text-secondary">
                    {teamMembers?.[activeProfile]?.experience}
                  </div>
                  <div className="text-text-secondary font-body text-sm">
                    d'expérience professionnelle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {teamMembers?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProfile(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProfile === index ? 'bg-secondary' : 'bg-border hover:bg-border/60'
              }`}
              aria-label={`Voir le profil de ${teamMembers?.[index]?.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;