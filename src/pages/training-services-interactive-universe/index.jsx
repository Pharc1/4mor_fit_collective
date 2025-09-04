import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Logo from '../../components/Logo';
import ServiceCard from './components/ServiceCard';
import ServiceComparison from './components/ServiceComparison';
import PricingTransparency from './components/PricingTransparency';
import MethodologyDeepDive from './components/MethodologyDeepDive';
import BookingModal from './components/BookingModal';

const TrainingServicesInteractiveUniverse = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeSection, setActiveSection] = useState('services');
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });
  const [isLoading, setIsLoading] = useState(true);

  // Mock services data
  const services = [
    {
      id: 'cross-training',
      name: 'Cross Training',
      shortDescription: 'Entraînement fonctionnel en groupe',
      description: 'Notre programme phare combine force, cardio et mobilité dans des séances dynamiques qui transforment votre condition physique. Chaque séance est unique, adaptée à tous les niveaux.',
      methodology: `Le Cross Training 4mor Fit s'inspire des méthodes françaises d'entraînement fonctionnel, adaptées au contexte sénégalais. Nous combinons des mouvements naturels avec des exercices de renforcement pour développer une condition physique complète.\n\nChaque séance intègre des phases de cardio, de force et de mobilité, permettant un développement harmonieux de toutes les qualités physiques. L'approche communautaire crée une émulation positive où chaque membre progresse à son rythme.`,image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',pricing: '10,000 FCFA/mois',duration: '60 minutes',capacity: '12-15 personnes',level: 'Tous niveaux',frequency: '3-5 fois/semaine',badge: 'Plus populaire',
      hasVideo: true,
      benefits: [
        'Amélioration de la condition physique générale','Renforcement musculaire complet','Développement de l\'endurance cardiovasculaire',
        'Amélioration de la mobilité et flexibilité',
        'Réduction du stress et bien-être mental',
        'Communauté motivante et bienveillante'
      ],
      equipment: [
        'Kettlebells', 'Barres olympiques', 'Haltères', 'Cordes à sauter',
        'Médecine balls', 'Anneaux de suspension', 'Pneus', 'Battle ropes'
      ],
      schedule: [
        { day: 'Lundi', time: '06:00 - 07:00', available: 8, capacity: 15 },
        { day: 'Lundi', time: '18:00 - 19:00', available: 3, capacity: 15 },
        { day: 'Mardi', time: '07:00 - 08:00', available: 12, capacity: 15 },
        { day: 'Mercredi', time: '06:00 - 07:00', available: 6, capacity: 15 },
        { day: 'Mercredi', time: '18:00 - 19:00', available: 1, capacity: 15 },
        { day: 'Jeudi', time: '07:00 - 08:00', available: 9, capacity: 15 },
        { day: 'Vendredi', time: '06:00 - 07:00', available: 11, capacity: 15 },
        { day: 'Samedi', time: '08:00 - 09:00', available: 5, capacity: 15 }
      ],
      trainer: {
        name: 'Coach Mor',
        title: 'Fondateur & Coach Principal',
        bio: `Formé en France aux techniques d'entraînement fonctionnel les plus avancées, Coach Mor a développé une approche unique qui allie excellence technique et accessibilité. Sa philosophie : "Pour l'amour du sport" guide chaque séance.\n\nAvec plus de 8 ans d'expérience, il a accompagné des centaines de personnes dans leur transformation physique et mentale, créant une communauté unie autour des valeurs de dépassement de soi et d'entraide.`,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
        certifications: [
          'Certificat d\'Entraîneur Fonctionnel (France)',
          'Formation CrossFit Level 2',
          'Spécialisation Mobilité et Récupération',
          'Premiers Secours et Sécurité Sportive'
        ]
      },
      testimonials: [
        {
          name: 'Aminata Diallo',
          avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
          rating: 5,
          comment: 'Depuis que j\'ai rejoint 4mor Fit, ma vie a changé. L\'ambiance est incroyable et les résultats sont là !',
          date: 'Il y a 2 semaines'
        },
        {
          name: 'Mamadou Seck',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          rating: 5,
          comment: 'Le meilleur investissement que j\'ai fait pour ma santé. Coach Mor et l\'équipe sont exceptionnels.',
          date: 'Il y a 1 mois'
        },
        {
          name: 'Fatou Ndiaye',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
          rating: 5,
          comment: 'J\'ai perdu 15kg en 6 mois tout en gagnant en force. La communauté 4mor Fit est une vraie famille !',
          date: 'Il y a 3 semaines'
        }
      ]
    },
    {
      id: 'personal-coaching',
      name: 'Coaching Personnel',
      shortDescription: 'Accompagnement individuel sur mesure',
      description: 'Un coaching 100% personnalisé avec Coach Mor pour atteindre vos objectifs spécifiques. Programme adapté, suivi nutritionnel et motivation constante.',
      methodology: `Le coaching personnel 4mor Fit offre une approche entièrement individualisée, basée sur une évaluation complète de votre condition physique, de vos objectifs et de vos contraintes.\n\nChaque programme est conçu spécifiquement pour vous, intégrant vos préférences, votre emploi du temps et vos objectifs personnels. L'accompagnement va au-delà de l'entraînement avec des conseils nutritionnels et un suivi motivationnel constant.`,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      pricing: '25,000 FCFA/séance',
      duration: '60 minutes',
      capacity: '1 personne',
      level: 'Personnalisé',
      frequency: 'Flexible',
      hasVideo: true,
      benefits: [
        'Programme 100% personnalisé',
        'Attention exclusive du coach',
        'Progression accélérée',
        'Flexibilité horaire maximale',
        'Suivi nutritionnel inclus',
        'Adaptation constante du programme'
      ],
      equipment: [
        'Équipement adapté aux objectifs',
        'Matériel de mesure corporelle',
        'Outils de suivi performance',
        'Accessoires spécialisés'
      ],
      schedule: [
        { day: 'Lundi à Vendredi', time: '06:00 - 20:00', available: 'Sur RDV', capacity: 1 },
        { day: 'Samedi', time: '08:00 - 16:00', available: 'Sur RDV', capacity: 1 },
        { day: 'Dimanche', time: '09:00 - 14:00', available: 'Sur RDV', capacity: 1 }
      ],
      trainer: {
        name: 'Coach Mor',
        title: 'Coach Personnel Certifié',
        bio: `Expert en coaching individuel, Coach Mor adapte son approche à chaque personnalité et chaque objectif. Sa formation française lui permet d'offrir un service de coaching de niveau international.\n\nIl excelle dans l'accompagnement de transformations physiques importantes, la préparation d'événements spéciaux et le coaching de dirigeants d'entreprise soucieux de leur forme physique.`,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
        certifications: [
          'Coaching Personnel Avancé (France)',
          'Nutrition Sportive Certifiée',
          'Préparation Physique Spécialisée',
          'Coaching Mental et Motivation'
        ]
      },
      testimonials: [
        {
          name: 'Ousmane Ba',
          avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
          rating: 5,
          comment: 'En 3 mois de coaching avec Mor, j\'ai atteint des objectifs que je pensais impossibles. Service exceptionnel !',
          date: 'Il y a 1 semaine'
        },
        {
          name: 'Aïssatou Thiam',
          avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
          rating: 5,
          comment: 'Le coaching personnel m\'a permis de reprendre confiance en moi. Mor est un coach extraordinaire.',
          date: 'Il y a 2 semaines'
        }
      ]
    },
    {
      id: 'corporate-team-building',
      name: 'Team Building Entreprise',
      shortDescription: 'Cohésion d\'équipe par le sport',
      description: 'Renforcez la cohésion de vos équipes à travers des activités sportives innovantes. Une approche unique qui allie performance collective et bien-être au travail.',
      methodology: `Notre approche du team building corporate s'appuie sur les principes de l'entraînement fonctionnel pour créer des expériences de cohésion d'équipe authentiques et mémorables.\n\nNous concevons des programmes sur mesure qui reflètent les valeurs de votre entreprise tout en offrant une expérience culturellement riche et authentiquement sénégalaise. Chaque activité est pensée pour renforcer la communication, la confiance mutuelle et l'esprit d'équipe.`,image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',pricing: 'Sur devis',duration: '2-8 heures',capacity: '10-50 personnes',level: 'Adapté au groupe',frequency: 'Événementiel',
      hasVideo: true,
      benefits: [
        'Renforcement de la cohésion d\'équipe',
        'Amélioration de la communication',
        'Réduction du stress professionnel',
        'Expérience culturelle authentique',
        'Développement du leadership',
        'Amélioration du bien-être au travail'
      ],
      equipment: [
        'Matériel d\'animation professionnel',
        'Équipements de sécurité',
        'Outils de mesure d\'équipe',
        'Support audiovisuel'
      ],
      schedule: [
        { day: 'Lundi à Vendredi', time: 'Flexible', available: 'Sur demande', capacity: 50 },
        { day: 'Week-end', time: 'Journée complète', available: 'Sur demande', capacity: 50 }
      ],
      trainer: {
        name: 'Équipe 4mor Fit',
        title: 'Spécialistes Team Building',
        bio: `Notre équipe de facilitateurs combine expertise sportive et compétences en animation d'équipe. Formés aux techniques de cohésion de groupe, ils créent des expériences transformatrices.\n\nChaque intervention est co-animée par des coaches expérimentés qui maîtrisent parfaitement l'équilibre entre défi physique, plaisir et objectifs de cohésion d'équipe.`,image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
        certifications: [
          'Animation de Groupes Professionnels','Team Building Sportif Certifié','Facilitation d\'Équipe',
          'Sécurité en Activités de Groupe'
        ]
      },
      testimonials: [
        {
          name: 'Directeur RH - Sonatel',
          avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
          rating: 5,
          comment: 'Une expérience exceptionnelle qui a transformé la dynamique de notre équipe. Résultats visibles dès le lendemain !',
          date: 'Il y a 1 mois'
        },
        {
          name: 'Manager - Ecobank',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
          rating: 5,
          comment: 'L\'approche 4mor Fit est unique. Nos collaborateurs parlent encore de cette journée 6 mois après !',
          date: 'Il y a 2 mois'
        }
      ]
    }
  ];

  const sections = [
    { id: 'services', name: 'Nos Services', icon: 'Dumbbell' },
    { id: 'comparison', name: 'Comparaison', icon: 'GitCompare' },
    { id: 'methodology', name: 'Méthodologie', icon: 'BookOpen' },
    { id: 'pricing', name: 'Tarifs', icon: 'DollarSign' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleBooking = (service) => {
    setBookingModal({ isOpen: true, service });
  };

  const handleBookingConfirm = (bookingData) => {
    console.log('Booking confirmed:', bookingData);
    // Here you would typically send the booking data to your backend
    alert(`Réservation confirmée pour ${bookingData?.service}! Vous recevrez une confirmation par SMS.`);
  };

  const handleWhatsApp = (message) => {
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <Logo 
              size="hero" 
              variant="red"
              showSubtitle={true}
              className="pulse-animation"
            />
          </div>
          <div className="space-y-2">
            <p className="font-body text-red-400 text-lg">
              CHARGEMENT DES CIRCUITS...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services d'Entraînement - 4m'or Fit Collective | Cross Training, Coaching Personnel & Team Building</title>
        <meta name="description" content="Découvrez nos services d'entraînement : Cross Training à 10,000 FCFA/mois, Coaching Personnel et Team Building Entreprise. Méthodologie française, communauté authentique à Dakar." />
        <meta name="keywords" content="cross training dakar, coaching personnel senegal, team building entreprise, fitness dakar, entraînement fonctionnel, 4mor fit" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop"
            alt="Training Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl md:text-6xl text-white mb-6 slide-in-left">
              CROSS-TRAINING <span className="text-red-500">FONCTIONNEL</span>
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl mb-8 leading-relaxed slide-in-left">
              <strong>Kettle bells, cordes ondulatoires, wall balls, slam balls...</strong><br/>
              Circuit d'entraînement qui travaille tout le corps dans sa totalité.<br/>
              <em>Facile à suivre, fun, ludique et efficace. Pour tout le monde.</em>
            </p>
            
            <div className="flex flex-wrap gap-4 slide-in-left">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection('services')}
                iconName="Dumbbell"
                iconPosition="left"
                className="bg-red-600 hover:bg-red-700 font-cta border-2 border-red-500"
              >
                VENEZ VOIR NOS CIRCUITS
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleWhatsApp("Salut! Je voudrais rejoindre le cross-training à Dakar.")}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-cta"
              >
                Contact WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md rounded-brand p-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-cta text-accent mb-2">10,000</div>
              <div className="text-sm font-body">FCFA/mois</div>
              <div className="text-xs text-white/70 mt-1">Cross Training</div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === section?.id
                    ? 'bg-secondary text-white' :'text-text-secondary hover:text-secondary hover:bg-secondary/10'
                }`}
              >
                <Icon name={section?.icon} size={18} />
                <span>{section?.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Services Section */}
        <section id="services" className="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl mb-4">
              Nos <span className="text-secondary">Services</span>
            </h2>
            <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
              Trois approches complémentaires pour répondre à tous vos besoins : 
              entraînement en groupe, coaching individuel et solutions entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services?.map((service) => (
              <ServiceCard
                key={service?.id}
                service={service}
                isExpanded={expandedService === service?.id}
                onToggle={() => handleServiceToggle(service?.id)}
                onBooking={handleBooking}
                onWhatsApp={handleWhatsApp}
              />
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section id="comparison" className="fade-in-up">
          <ServiceComparison
            services={services}
            onSelectService={handleBooking}
          />
        </section>

        {/* Methodology Deep Dive */}
        <section id="methodology" className="fade-in-up">
          <MethodologyDeepDive />
        </section>

        {/* Pricing Transparency */}
        <section id="pricing" className="fade-in-up">
          <PricingTransparency onWhatsApp={handleWhatsApp} />
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-secondary to-accent rounded-brand p-12 text-center text-white fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl mb-4">
            Prêt à transformer votre vie ?
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez la communauté 4mor Fit et découvrez le plaisir de s'entraîner 
            dans une ambiance authentique et motivante.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleBooking(services?.[0])}
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-secondary font-cta"
            >
              Réserver un essai gratuit
            </Button>
            <Link to="/contact-booking-multi-channel-engagement">
              <Button
                variant="ghost"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="text-white hover:bg-white/10 font-cta"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </main>
      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal?.isOpen}
        service={bookingModal?.service}
        onClose={() => setBookingModal({ isOpen: false, service: null })}
        onConfirm={handleBookingConfirm}
      />
      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <Logo 
                  size="medium" 
                  variant="white"
                  showSubtitle={true}
                />
              </div>
              <p className="text-white/80 font-body leading-relaxed mb-6">
                Pour l'amour du sport. Rejoignez la communauté fitness la plus authentique de Dakar 
                et transformez votre vie à travers l'entraînement fonctionnel.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleWhatsApp("Salut! Je voudrais rejoindre la communauté 4mor Fit.")}
                  iconName="MessageCircle"
                  className="text-white hover:bg-white/10"
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-headline text-lg mb-4">Services</h4>
              <ul className="space-y-2 font-body text-white/80">
                <li><Link to="#" className="hover:text-secondary transition-colors">Cross Training</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors">Coaching Personnel</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors">Team Building</Link></li>
                <li><Link to="/location-experience-interactive-venues" className="hover:text-secondary transition-colors">Nos Lieux</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-white/80">
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Dakar, Sénégal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+221 XX XXX XX XX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>contact@4morfit.sn</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60 font-body">
              © {new Date()?.getFullYear()} 4mor Fit Collective. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainingServicesInteractiveUniverse;