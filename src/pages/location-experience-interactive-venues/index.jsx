import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Logo from '../../components/Logo';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveMap from './components/InteractiveMap';
import VenueCard from './components/VenueCard';
import VenueDetails from './components/VenueDetails';
import LocationFilters from './components/LocationFilters';

const LocationExperienceInteractiveVenues = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showVenueDetails, setShowVenueDetails] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    amenities: [],
    transport: [],
    status: ''
  });

  // Mock locations data
  const locations = [
    {
      id: 1,
      name: "4mor Fit Plateau",
      address: "Avenue Léopold Sédar Senghor, Plateau, Dakar",
      coordinates: { lat: 14.6928, lng: -17.4467 },
      status: "open",
      capacity: 25,
      currentCapacity: 18,
      maxCapacity: 25,
      rating: 4.8,
      reviews: 127,
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ],
      description: `Notre centre principal au cœur du Plateau offre une expérience fitness authentique dans un environnement moderne. Avec vue sur la mer et équipements de pointe, c'est l'endroit idéal pour votre transformation physique.`,
      amenities: [
        { name: "Parking gratuit", icon: "Car" },
        { name: "Douches", icon: "Droplets" },
        { name: "Casiers sécurisés", icon: "Lock" },
        { name: "WiFi gratuit", icon: "Wifi" },
        { name: "Climatisation", icon: "Wind" },
        { name: "Équipement professionnel", icon: "Dumbbell" }
      ],
      transportation: [
        { name: "Bus 8, 11", icon: "Bus", details: "Arrêt Place de l'Indépendance (2 min à pied)" },
        { name: "Taxi", icon: "Car", details: "Accès direct depuis toute la ville" },
        { name: "Moto-taxi", icon: "Bike", details: "Point de rassemblement à 50m" }
      ],
      nextClasses: [
        { name: "Cross Training", time: "18:00", instructor: "Coach Mor" },
        { name: "Functional Training", time: "19:30", instructor: "Coach Fatou" }
      ],
      weeklySchedule: [
        {
          day: "Lundi",
          hours: "06:00 - 22:00",
          classes: [
            { name: "Morning Boost", time: "06:30", instructor: "Coach Mor" },
            { name: "Cross Training", time: "18:00", instructor: "Coach Mor" },
            { name: "Functional Training", time: "19:30", instructor: "Coach Fatou" }
          ]
        },
        {
          day: "Mardi",
          hours: "06:00 - 22:00",
          classes: [
            { name: "HIIT Session", time: "07:00", instructor: "Coach Aminata" },
            { name: "Strength Training", time: "18:30", instructor: "Coach Mor" }
          ]
        }
      ],
      equipment: [
        {
          category: "Cardio",
          icon: "Heart",
          items: [
            { name: "Tapis de course", quantity: "4" },
            { name: "Vélos d\'appartement", quantity: "6" },
            { name: "Rameurs", quantity: "3" }
          ]
        },
        {
          category: "Musculation",
          icon: "Dumbbell",
          items: [
            { name: "Haltères", quantity: "Set complet" },
            { name: "Barres olympiques", quantity: "3" },
            { name: "Kettlebells", quantity: "12" }
          ]
        }
      ],
      testimonials: [
        {
          name: "Aminata Diallo",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          memberSince: "Membre depuis 8 mois",
          comment: "L'ambiance au Plateau est incroyable! Coach Mor nous pousse à donner le meilleur de nous-mêmes. J'ai perdu 12kg et gagné en confiance."
        },
        {
          name: "Ibrahima Sarr",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          memberSince: "Membre depuis 1 an",
          comment: "Excellent emplacement, équipements de qualité et une vraie communauté. Les cours de cross training sont parfaits pour mon niveau."
        }
      ]
    },
    {
      id: 2,
      name: "4mor Fit Almadies",
      address: "Route des Almadies, Ngor, Dakar",
      coordinates: { lat: 14.7167, lng: -17.5167 },
      status: "busy",
      capacity: 20,
      currentCapacity: 19,
      maxCapacity: 20,
      rating: 4.7,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ],
      description: `Notre centre des Almadies offre une expérience fitness unique face à l'océan. Parfait pour ceux qui cherchent à combiner entraînement intensif et cadre naturel exceptionnel.`,
      amenities: [
        { name: "Vue océan", icon: "Eye" },
        { name: "Douches", icon: "Droplets" },
        { name: "Casiers", icon: "Lock" },
        { name: "Terrasse extérieure", icon: "Sun" },
        { name: "Équipement moderne", icon: "Dumbbell" }
      ],
      transportation: [
        { name: "Bus 15", icon: "Bus", details: "Arrêt Almadies (5 min à pied)" },
        { name: "Taxi", icon: "Car", details: "20 min depuis le centre-ville" },
        { name: "Voiture", icon: "Car", details: "Parking disponible" }
      ],
      nextClasses: [
        { name: "Beach Training", time: "17:00", instructor: "Coach Aminata" },
        { name: "Sunset Yoga", time: "18:30", instructor: "Coach Aïcha" }
      ],
      weeklySchedule: [
        {
          day: "Lundi",
          hours: "06:00 - 21:00",
          classes: [
            { name: "Beach Training", time: "17:00", instructor: "Coach Aminata" },
            { name: "Sunset Yoga", time: "18:30", instructor: "Coach Aïcha" }
          ]
        }
      ],
      equipment: [
        {
          category: "Outdoor",
          icon: "Sun",
          items: [
            { name: "Pneus d\'entraînement", quantity: "8" },
            { name: "Cordes de bataille", quantity: "4" },
            { name: "Sacs de sable", quantity: "10" }
          ]
        }
      ],
      testimonials: [
        {
          name: "Fatou Ndiaye",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          memberSince: "Membre depuis 6 mois",
          comment: "S'entraîner face à l'océan, c'est magique! L'équipe est formidable et les cours beach training sont uniques à Dakar."
        }
      ]
    },
    {
      id: 3,
      name: "4mor Fit Parcelles",
      address: "Unité 15, Parcelles Assainies, Dakar",
      coordinates: { lat: 14.7833, lng: -17.4333 },
      status: "open",
      capacity: 30,
      currentCapacity: 12,
      maxCapacity: 30,
      rating: 4.6,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ],
      description: `Notre plus grand centre situé aux Parcelles Assainies, conçu pour accueillir la communauté grandissante du quartier. Espace généreux et équipements adaptés à tous les niveaux.`,
      amenities: [
        { name: "Grand espace", icon: "Maximize" },
        { name: "Parking", icon: "Car" },
        { name: "Douches", icon: "Droplets" },
        { name: "Casiers", icon: "Lock" },
        { name: "Espace détente", icon: "Coffee" }
      ],
      transportation: [
        { name: "Bus 7, 12", icon: "Bus", details: "Arrêt Parcelles U15 (1 min à pied)" },
        { name: "Taxi collectif", icon: "Users", details: "Ligne Parcelles-Centre ville" },
        { name: "Moto-taxi", icon: "Bike", details: "Station à proximité" }
      ],
      nextClasses: [
        { name: "Community Training", time: "17:30", instructor: "Coach Moussa" },
        { name: "Ladies Only", time: "19:00", instructor: "Coach Marième" }
      ],
      weeklySchedule: [
        {
          day: "Lundi",
          hours: "06:00 - 22:00",
          classes: [
            { name: "Community Training", time: "17:30", instructor: "Coach Moussa" },
            { name: "Ladies Only", time: "19:00", instructor: "Coach Marième" }
          ]
        }
      ],
      equipment: [
        {
          category: "Fonctionnel",
          icon: "Activity",
          items: [
            { name: "TRX", quantity: "8" },
            { name: "Médecine balls", quantity: "15" },
            { name: "Bosu balls", quantity: "6" }
          ]
        }
      ],
      testimonials: [
        {
          name: "Moussa Ba",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          memberSince: "Membre depuis 4 mois",
          comment: "Très bon centre de quartier. L'ambiance communautaire est ce qui fait la différence. Coach Moussa est excellent!"
        }
      ]
    }
  ];

  const filteredLocations = locations?.filter(location => {
    // Status filter
    if (filters?.status && location?.status !== filters?.status) {
      return false;
    }

    // Amenities filter
    if (filters?.amenities?.length > 0) {
      const locationAmenityIds = location?.amenities?.map(a => {
        // Map amenity names to filter IDs
        if (a?.name?.toLowerCase()?.includes('parking')) return 'parking';
        if (a?.name?.toLowerCase()?.includes('douche')) return 'shower';
        if (a?.name?.toLowerCase()?.includes('casier')) return 'locker';
        if (a?.name?.toLowerCase()?.includes('wifi')) return 'wifi';
        if (a?.name?.toLowerCase()?.includes('climat')) return 'ac';
        if (a?.name?.toLowerCase()?.includes('équipement')) return 'equipment';
        return null;
      })?.filter(Boolean);

      const hasRequiredAmenities = filters?.amenities?.every(amenityId => 
        locationAmenityIds?.includes(amenityId)
      );
      
      if (!hasRequiredAmenities) return false;
    }

    // Transport filter
    if (filters?.transport?.length > 0) {
      const locationTransportIds = location?.transportation?.map(t => {
        if (t?.name?.toLowerCase()?.includes('bus')) return 'bus';
        if (t?.name?.toLowerCase()?.includes('taxi') && !t?.name?.toLowerCase()?.includes('moto')) return 'taxi';
        if (t?.name?.toLowerCase()?.includes('moto')) return 'motorcycle';
        if (t?.name?.toLowerCase()?.includes('pied')) return 'walking';
        return null;
      })?.filter(Boolean);

      const hasRequiredTransport = filters?.transport?.some(transportId => 
        locationTransportIds?.includes(transportId)
      );
      
      if (!hasRequiredTransport) return false;
    }

    return true;
  });

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
  };

  const handleVenueDetails = (venue) => {
    setSelectedVenue(venue);
    setShowVenueDetails(true);
  };

  const handleBooking = (venue) => {
    const message = `Salut! Je voudrais réserver une session au ${venue?.name}. Pouvez-vous m'aider avec les disponibilités?`;
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleClearFilters = () => {
    setFilters({
      amenities: [],
      transport: [],
      status: ''
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nos Lieux d'Entraînement - 4m'or Fit Collective | Centres Fitness à Dakar</title>
        <meta name="description" content="Découvrez nos centres 4m'or Fit à travers Dakar : Plateau, Almadies, Parcelles. Espaces modernes, équipements professionnels, accès facile. Trouvez votre lieu d'entraînement idéal." />
        <meta name="keywords" content="salle sport Dakar, fitness Plateau, gym Almadies, musculation Parcelles, centres fitness Sénégal" />
        <meta property="og:title" content="Nos Lieux d'Entraînement - 4m'or Fit Collective" />
        <meta property="og:description" content="3 centres fitness à Dakar pour votre transformation. Équipements pro, coaches experts, communauté authentique." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/lieux" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-surface to-primary">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="MapPin" size={16} />
                <span>3 Centres à Travers Dakar</span>
              </div>
              
              <h1 className="font-headline text-4xl lg:text-6xl text-white mb-6">
                Nos Lieux
                <span className="block text-secondary">d'Entraînement</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Découvrez nos centres fitness authentiques à travers Dakar. Chaque lieu offre une expérience unique 
                avec équipements professionnels, coaches experts et communauté passionnée.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 font-cta"
                >
                  Réserver un Essai Gratuit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/221123456789?text=Salut! Je voudrais visiter vos centres fitness.', '_blank')}
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
                Carte Interactive
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Explorez nos centres sur la carte et découvrez celui qui vous convient le mieux
              </p>
            </div>

            <InteractiveMap
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
          </div>
        </section>

        {/* Venues Grid Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <div className="lg:hidden mb-6">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Filter"
                    iconPosition="left"
                    onClick={() => setShowFilters(!showFilters)}
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Filtres ({filters?.amenities?.length + filters?.transport?.length + (filters?.status ? 1 : 0)})
                  </Button>
                </div>
                
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                  <LocationFilters
                    filters={filters}
                    onFilterChange={setFilters}
                    onClearFilters={handleClearFilters}
                  />
                </div>
              </div>

              {/* Venues Grid */}
              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-headline text-2xl lg:text-3xl text-primary">
                    Nos Centres ({filteredLocations?.length})
                  </h2>
                  
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Filter" size={16} />
                    <span>{filteredLocations?.length} centre{filteredLocations?.length > 1 ? 's' : ''} trouvé{filteredLocations?.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {filteredLocations?.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredLocations?.map((venue) => (
                      <VenueCard
                        key={venue?.id}
                        venue={venue}
                        isSelected={selectedVenue?.id === venue?.id}
                        onSelect={() => handleVenueDetails(venue)}
                        onBooking={handleBooking}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="font-headline text-xl text-primary mb-2">Aucun centre trouvé</h3>
                    <p className="text-text-secondary mb-4">
                      Aucun centre ne correspond à vos critères de recherche.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Effacer les filtres
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
                Une Communauté, Trois Lieux
              </h2>
              <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                Chaque centre 4mor Fit offre la même philosophie d'entraînement authentique 
                avec des spécificités locales qui enrichissent votre expérience fitness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={32} className="text-secondary" />
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Plateau</h3>
                <p className="text-text-secondary">
                  Centre-ville dynamique, parfait pour les professionnels. Vue mer et équipements premium.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Waves" size={32} className="text-secondary" />
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Almadies</h3>
                <p className="text-text-secondary">
                  Face à l'océan, idéal pour les entraînements outdoor et sessions beach training uniques.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Parcelles</h3>
                <p className="text-text-secondary">
                  Grand espace communautaire, ambiance familiale et programmes adaptés à tous les âges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-secondary to-accent">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-headline text-3xl lg:text-4xl text-white mb-4">
              Prêt à Commencer Votre Transformation?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Choisissez votre centre préféré et rejoignez la communauté 4mor Fit. 
              Premier cours gratuit pour découvrir notre approche unique.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-secondary border-white hover:bg-white/90 font-cta"
              >
                Réserver Maintenant
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('https://wa.me/221123456789', '_blank')}
                className="text-white hover:bg-white/10 font-cta"
              >
                +221 12 345 67 89
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="mb-4">
                  <Logo 
                    size="small" 
                    variant="white"
                    showSubtitle={true}
                  />
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Pour l'amour du sport. Trois centres à Dakar pour votre transformation physique et mentale.
                </p>
                <div className="flex space-x-4">
                  <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

              <div>
                <h4 className="font-headline text-lg text-white mb-4">Nos Centres</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Plateau - Centre-ville</li>
                  <li>Almadies - Face océan</li>
                  <li>Parcelles - Communautaire</li>
                </ul>
              </div>

              <div>
                <h4 className="font-headline text-lg text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>+221 12 345 67 89</li>
                  <li>info@4morfit.sn</li>
                  <li>Dakar, Sénégal</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} 4mor Fit Collective. Tous droits réservés.</p>
            </div>
          </div>
        </footer>

        {/* Venue Details Modal */}
        {showVenueDetails && selectedVenue && (
          <VenueDetails
            venue={selectedVenue}
            onClose={() => setShowVenueDetails(false)}
          />
        )}
      </div>
    </>
  );
};

export default LocationExperienceInteractiveVenues;