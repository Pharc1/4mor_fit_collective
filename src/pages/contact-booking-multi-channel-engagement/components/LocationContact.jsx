import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationContact = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: "4mor Fit Plateau",
      address: "Avenue Léopold Sédar Senghor, près de la Place de l'Indépendance",
      landmark: "Face à l\'Hôtel Terrou-Bi",
      phone: "+221 12 345 67 89",
      whatsapp: "+221 12 345 67 89",
      coordinates: { lat: 14.6937, lng: -17.4441 },
      hours: {
        weekdays: "06h00 - 21h00",
        saturday: "07h00 - 20h00",
        sunday: "08h00 - 18h00"
      },
      services: ["Cross Training", "Coaching Personnel", "Corporate"],
      manager: "Fatou Diop",
      features: ["Parking gratuit", "Vestiaires", "Douches", "WiFi"]
    },
    {
      id: 2,
      name: "4mor Fit Almadies",
      address: "Route des Almadies, Zone résidentielle",
      landmark: "Près du Sea Plaza",
      phone: "+221 12 345 67 90",
      whatsapp: "+221 12 345 67 90",
      coordinates: { lat: 14.7392, lng: -17.5297 },
      hours: {
        weekdays: "06h00 - 21h00",
        saturday: "07h00 - 20h00",
        sunday: "08h00 - 18h00"
      },
      services: ["Cross Training", "Coaching Personnel"],
      manager: "Mamadou Fall",
      features: ["Vue sur mer", "Terrasse extérieure", "Parking sécurisé", "Café"]
    },
    {
      id: 3,
      name: "4mor Fit Parcelles",
      address: "Unité 15, près du marché Parcelles Assainies",
      landmark: "À côté de la station Total",
      phone: "+221 12 345 67 91",
      whatsapp: "+221 12 345 67 91",
      coordinates: { lat: 14.7644, lng: -17.4138 },
      hours: {
        weekdays: "06h00 - 21h00",
        saturday: "07h00 - 20h00",
        sunday: "08h00 - 18h00"
      },
      services: ["Cross Training", "Cours Collectifs"],
      manager: "Aïssatou Sow",
      features: ["Accès facile", "Transport public", "Équipement neuf", "Climatisation"]
    }
  ];

  const handleWhatsAppContact = (location) => {
    const message = `Salut! Je souhaite des informations sur ${location?.name}. Pouvez-vous m'aider?`;
    window.open(`https://wa.me/${location?.whatsapp?.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirections = (location) => {
    const { lat, lng } = location?.coordinates;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-white mb-4">
            Nos Lieux d'Entraînement
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-3xl mx-auto">
            Trois centres stratégiquement situés à Dakar pour vous offrir 
            la meilleure accessibilité. Chaque lieu a sa propre personnalité 
            tout en maintenant la qualité 4mor Fit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations?.map((location, index) => (
            <div
              key={location?.id}
              className={`bg-card rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                activeLocation === index
                  ? 'border-secondary shadow-brand-lg transform scale-105'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-cta text-xl text-primary">{location?.name}</h3>
                  <div className={`w-3 h-3 rounded-full ${
                    activeLocation === index ? 'bg-secondary' : 'bg-gray-400'
                  }`}></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm text-primary">{location?.address}</p>
                      <p className="font-body text-xs text-text-secondary">{location?.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="User" size={16} className="text-accent" />
                    <p className="font-body text-sm text-primary">Manager: {location?.manager}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} className="text-green-500" />
                    <p className="font-body text-sm text-primary">Lun-Ven: {location?.hours?.weekdays}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {location?.services?.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-body rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e?.stopPropagation();
                      handleWhatsAppContact(location);
                    }}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white flex-1"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e?.stopPropagation();
                      handleDirections(location);
                    }}
                    iconName="Navigation"
                    className="text-accent hover:bg-accent/10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Location View */}
        <div className="bg-card rounded-xl p-8 border border-border shadow-brand">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="space-y-4">
              <h3 className="font-cta text-xl text-primary">
                {locations?.[activeLocation]?.name}
              </h3>
              <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={locations?.[activeLocation]?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${locations?.[activeLocation]?.coordinates?.lat},${locations?.[activeLocation]?.coordinates?.lng}&z=15&output=embed`}
                  className="w-full h-full"
                />
              </div>
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleDirections(locations?.[activeLocation])}
                iconName="Navigation"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                Obtenir l'Itinéraire
              </Button>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                  <div>
                    <p className="font-body text-primary">{locations?.[activeLocation]?.address}</p>
                    <p className="font-body text-sm text-text-secondary">{locations?.[activeLocation]?.landmark}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <p className="font-body text-primary">{locations?.[activeLocation]?.phone}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="User" size={20} className="text-purple-500" />
                  <p className="font-body text-primary">Manager: {locations?.[activeLocation]?.manager}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-cta text-lg text-primary">Horaires d'Ouverture</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-text-secondary">Lundi - Vendredi</span>
                    <span className="font-body text-primary">{locations?.[activeLocation]?.hours?.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-text-secondary">Samedi</span>
                    <span className="font-body text-primary">{locations?.[activeLocation]?.hours?.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-text-secondary">Dimanche</span>
                    <span className="font-body text-primary">{locations?.[activeLocation]?.hours?.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-cta text-lg text-primary">Services Disponibles</h4>
                <div className="flex flex-wrap gap-2">
                  {locations?.[activeLocation]?.services?.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary/10 text-secondary font-body text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-cta text-lg text-primary">Équipements</h4>
                <div className="grid grid-cols-2 gap-2">
                  {locations?.[activeLocation]?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="font-body text-sm text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="default"
                  onClick={() => handleWhatsAppContact(locations?.[activeLocation])}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 text-white font-cta flex-1"
                >
                  Contacter ce Centre
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDirections(locations?.[activeLocation])}
                  iconName="Navigation"
                  className="border-accent text-accent hover:bg-accent hover:text-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;