import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Amadou Diallo",
      role: "Membre Fondateur",
      company: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      testimonial: `Quand j'ai découvert 4mor en 2020, je cherchais plus qu'une salle de sport. Je voulais une communauté authentique.\n\nCoach Mor a créé quelque chose d'unique à Dakar - un espace où l'excellence technique rencontre l'accessibilité. Les trois sens de 4mor résonnent parfaitement avec ma vision du sport : passion, leadership et dépassement continu.`,
      rating: 5,
      joinDate: "Membre depuis 2020",
      achievement: "Transformation complète en 18 mois",
      videoUrl: "https://example.com/video1"
    },
    {
      id: 2,
      name: "Fatima Ndiaye",
      role: "Responsable RH",
      company: "Orange Sénégal",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      testimonial: `En tant que professionnelle occupée, j'avais besoin d'un programme fitness qui s'adapte à mon rythme.\n\nL'approche de 4mor Fit Collective dépasse mes attentes. L'expertise française de Coach Mor combinée à la chaleur sénégalaise crée un environnement parfait pour les femmes actives comme moi.`,
      rating: 5,
      joinDate: "Membre depuis 2021",
      achievement: "Équilibre vie pro/fitness trouvé",
      videoUrl: "https://example.com/video2"
    },
    {
      id: 3,
      name: "Moussa Ba",
      role: "Directeur Commercial",
      company: "Sonatel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      testimonial: `Nous avons choisi 4mor pour nos team-buildings d'entreprise et les résultats sont exceptionnels.\n\nL'équipe de Coach Mor comprend parfaitement les enjeux corporatifs tout en maintenant cette authenticité qui fait leur force. Nos équipes reviennent transformées et plus soudées.`,
      rating: 5,
      joinDate: "Partenaire depuis 2023",
      achievement: "15 team-buildings réussis",
      videoUrl: "https://example.com/video3"
    },
    {
      id: 4,
      name: "Aïssatou Seck",
      role: "Étudiante",
      company: "Université Cheikh Anta Diop",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      testimonial: `Avec un budget étudiant, je pensais que le fitness de qualité n'était pas pour moi.\n\n4mor a prouvé le contraire ! 10,000 FCFA par mois pour un encadrement professionnel et une communauté incroyable. C'est exactement ce que signifie 'accessible à tous, partout'.`,
      rating: 5,
      joinDate: "Membre depuis 2022",
      achievement: "Confiance en soi retrouvée",
      videoUrl: "https://example.com/video4"
    },
    {
      id: 5,
      name: "Cheikh Diop",
      role: "Ancien Athlète",
      company: "Reconversion Professionnelle",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      testimonial: `Après ma carrière sportive, je cherchais un nouveau défi. Coach Mor m'a montré que le fitness fonctionnel pouvait être ma nouvelle passion.\n\nL'expertise technique est au niveau international, mais l'esprit reste profondément sénégalais. C'est cette combinaison qui fait la magie de 4mor.`,
      rating: 5,
      joinDate: "Membre depuis 2021",
      achievement: "Nouvelle carrière dans le fitness",
      videoUrl: "https://example.com/video5"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/221123456789?text=Salut! Je suis inspiré par les témoignages et je veux rejoindre 4mor Fit Collective', '_blank');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl text-white mb-6">
            Témoignages
            <span className="text-accent block">de Notre Communauté</span>
          </h2>
          <p className="text-gray-300 text-lg font-body max-w-2xl mx-auto">
            Découvrez comment 4mor Fit Collective transforme des vies à travers 
            les histoires authentiques de nos membres.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border mb-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Testimonial Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Rating Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, index) => (
                  <Icon key={index} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-text-primary font-body text-lg lg:text-xl leading-relaxed whitespace-pre-line">
                "{testimonials?.[activeTestimonial]?.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <div className="relative">
                  <Image
                    src={testimonials?.[activeTestimonial]?.image}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-headline text-xl text-primary">
                    {testimonials?.[activeTestimonial]?.name}
                  </h4>
                  <p className="text-secondary font-body font-medium">
                    {testimonials?.[activeTestimonial]?.role}
                  </p>
                  <p className="text-text-secondary font-body text-sm">
                    {testimonials?.[activeTestimonial]?.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Member Stats & Info */}
            <div className="space-y-6">
              {/* Member Photo */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={testimonials?.[activeTestimonial]?.image}
                  alt={testimonials?.[activeTestimonial]?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300 group">
                    <Icon name="Play" size={24} className="text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-secondary" />
                    <span className="text-secondary font-body text-sm font-medium">
                      {testimonials?.[activeTestimonial]?.joinDate}
                    </span>
                  </div>
                  <p className="text-text-secondary font-body text-sm">
                    {testimonials?.[activeTestimonial]?.achievement}
                  </p>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleWhatsAppContact}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-accent text-accent hover:bg-accent hover:text-primary"
                >
                  Rejoindre la Communauté
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Thumbnail Navigation */}
          <div className="flex space-x-4 overflow-x-auto pb-2 lg:pb-0">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => handleTestimonialChange(index)}
                className={`flex-shrink-0 relative transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'opacity-100 scale-105' :'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeTestimonial === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span className="font-body text-sm">
                {isAutoPlaying ? 'Pause' : 'Lecture'}
              </span>
            </button>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials?.length) % testimonials?.length)}
                className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={16} />
              </button>
              <button
                onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials?.length)}
                className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'w-8 bg-secondary' :'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;