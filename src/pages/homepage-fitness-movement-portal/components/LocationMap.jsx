import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "4mor Fit Plateau",
      address: "Avenue Léopold Sédar Senghor, Plateau, Dakar",
      coordinates: { lat: 14.6928, lng: -17.4467 },
      type: "Studio Principal",
      features: ["Cross Training", "Personal Coaching", "Équipements Premium"],
      schedule: {
        "Lundi-Vendredi": "06:00 - 22:00",
        "Samedi": "08:00 - 20:00",
        "Dimanche": "09:00 - 18:00"
      },
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      capacity: "50 personnes",
      parking: true,
      whatsappMessage: "Je veux des informations sur le studio Plateau"
    },
    {
      id: 2,
      name: "4mor Fit Almadies",
      address: "Route des Almadies, Ngor, Dakar",
      coordinates: { lat: 14.7645, lng: -17.5230 },
      type: "Studio Secondaire",
      features: ["Cross Training", "Team Building", "Espace Outdoor"],
      schedule: {
        "Lundi-Vendredi": "07:00 - 21:00",
        "Samedi": "09:00 - 19:00",
        "Dimanche": "10:00 - 17:00"
      },
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600",
      capacity: "30 personnes",
      parking: true,
      whatsappMessage: "Je veux des informations sur le studio Almadies"
    },
    {
      id: 3,
      name: "4mor Fit Sacré-Cœur",
      address: "Rue 6, Sacré-Cœur 3, Dakar",
      coordinates: { lat: 14.7169, lng: -17.4676 },
      type: "Studio Communautaire",
      features: ["Cross Training", "Sessions Étudiants", "Tarifs Préférentiels"],
      schedule: {
        "Lundi-Vendredi": "06:30 - 21:30",
        "Samedi": "08:30 - 19:30",
        "Dimanche": "09:30 - 17:30"
      },
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
      capacity: "40 personnes",
      parking: false,
      whatsappMessage: "Je veux des informations sur le studio Sacré-Cœur"
    }
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(selectedLocation?.id === location?.id ? null : location);
  };

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/221123456789?text=${encodedMessage}`, '_blank');
  };

  const handleDirectionsClick = (coordinates) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates?.lat},${coordinates?.lng}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-6xl text-primary mb-4">
            Nos Lieux
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Trois studios stratégiquement situés à Dakar pour vous offrir\nle meilleur accès à votre transformation fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl overflow-hidden shadow-brand-lg">
              <div className="h-96 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="4mor Fit Locations Dakar"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=14.6928,-17.4467&z=12&output=embed"
                  className="w-full h-full"
                />
                
                {/* Custom Location Pins Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {locations?.map((location, index) => (
                    <div
                      key={location?.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer transition-all duration-300 ${
                        selectedLocation?.id === location?.id ? 'scale-125 z-10' : 'hover:scale-110'
                      }`}
                      style={{
                        left: `${30 + index * 20}%`,
                        top: `${40 + index * 15}%`
                      }}
                      onClick={() => handleLocationClick(location)}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                        selectedLocation?.id === location?.id 
                          ? 'bg-secondary' :'bg-accent hover:bg-secondary'
                      }`}>
                        <Icon name="MapPin" size={16} color="white" />
                      </div>
                      {selectedLocation?.id === location?.id && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {location?.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Legend */}
              <div className="p-4 bg-surface">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="font-body text-sm text-white">Studio Principal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="font-body text-sm text-white">Studios Secondaires</span>
                    </div>
                  </div>
                  <Link to="/location-experience-interactive-venues">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-white"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Vue Détaillée
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Locations List */}
          <div className="order-1 lg:order-2 space-y-6">
            {locations?.map((location) => (
              <div
                key={location?.id}
                className={`bg-card rounded-xl overflow-hidden shadow-brand transition-all duration-300 cursor-pointer ${
                  selectedLocation?.id === location?.id 
                    ? 'ring-2 ring-secondary shadow-brand-lg transform scale-105' 
                    : 'hover:shadow-brand-lg hover:transform hover:-translate-y-1'
                }`}
                onClick={() => handleLocationClick(location)}
              >
                <div className="flex">
                  {/* Location Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={location?.image}
                      alt={location?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Location Info */}
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-cta text-lg text-primary mb-1">
                          {location?.name}
                        </h3>
                        <p className="font-body text-sm text-text-secondary">
                          {location?.type}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {location?.parking && (
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                            <Icon name="Car" size={12} color="var(--color-accent)" />
                          </div>
                        )}
                        <Icon 
                          name={selectedLocation?.id === location?.id ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          color="var(--color-text-secondary)" 
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MapPin" size={14} color="var(--color-text-secondary)" />
                      <p className="font-body text-sm text-text-secondary line-clamp-1">
                        {location?.address}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{location?.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>06:00 - 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedLocation?.id === location?.id && (
                  <div className="border-t border-border p-4 bg-background/50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-cta text-sm text-primary mb-2">Services</h4>
                        <ul className="space-y-1">
                          {location?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={12} color="var(--color-secondary)" />
                              <span className="font-body text-xs text-text-primary">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule */}
                      <div>
                        <h4 className="font-cta text-sm text-primary mb-2">Horaires</h4>
                        <div className="space-y-1">
                          {Object.entries(location?.schedule)?.map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                              <span className="font-body text-xs text-text-secondary">{day}</span>
                              <span className="font-body text-xs text-text-primary">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          handleWhatsAppClick(location?.whatsappMessage);
                        }}
                        className="bg-secondary hover:bg-secondary/90 text-white flex-1"
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Contacter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          handleDirectionsClick(location?.coordinates);
                        }}
                        className="border-accent text-accent hover:bg-accent hover:text-primary flex-1"
                        iconName="Navigation"
                        iconPosition="left"
                      >
                        Itinéraire
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-headline text-3xl text-white mb-4">
              Trouvez le studio le plus proche
            </h3>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Trois emplacements stratégiques à Dakar pour vous accompagner\ndans votre parcours fitness, où que vous soyez.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/location-experience-interactive-venues">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                  iconName="MapPin"
                  iconPosition="left"
                >
                  Explorer Tous les Lieux
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleWhatsAppClick("Je veux visiter un studio 4mor Fit")}
                className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
                iconName="Calendar"
                iconPosition="left"
              >
                Planifier une Visite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;