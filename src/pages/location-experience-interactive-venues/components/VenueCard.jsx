import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VenueCard = ({ venue, isSelected, onSelect, onBooking }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === venue?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? venue?.images?.length - 1 : prev - 1
    );
  };

  const handleWhatsAppContact = () => {
    const message = `Salut! Je suis intéressé par le centre ${venue?.name}. Pouvez-vous me donner plus d'informations?`;
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className={`bg-card rounded-brand shadow-brand transition-all duration-300 overflow-hidden cursor-pointer ${
        isSelected ? 'ring-2 ring-secondary shadow-brand-lg' : 'hover:shadow-brand-lg'
      }`}
      onClick={onSelect}
    >
      {/* Image Gallery */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image
          src={venue?.images?.[currentImageIndex]}
          alt={`${venue?.name} - Vue ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Image Navigation */}
        {venue?.images?.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e?.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-colors"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={(e) => {
                e?.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-colors"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {venue?.images?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-secondary' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            venue?.status === 'open' ?'bg-success text-success-foreground' 
              : venue?.status === 'busy' ?'bg-warning text-warning-foreground' :'bg-error text-error-foreground'
          }`}>
            {venue?.status === 'open' ? 'Ouvert' : venue?.status === 'busy' ? 'Occupé' : 'Fermé'}
          </div>
        </div>
        
        {/* Capacity Badge */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-primary">
          {venue?.currentCapacity}/{venue?.maxCapacity}
        </div>
      </div>
      {/* Venue Information */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-headline text-xl text-primary mb-1">{venue?.name}</h3>
            <p className="text-text-secondary text-sm flex items-center">
              <Icon name="MapPin" size={14} className="mr-1" />
              {venue?.address}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < venue?.rating ? 'text-accent fill-current' : 'text-border'}
              />
            ))}
            <span className="text-sm text-text-secondary ml-1">({venue?.reviews})</span>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-3">
          {venue?.amenities?.slice(0, 4)?.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 text-xs text-text-secondary">
              <Icon name={amenity?.icon} size={12} className="text-secondary" />
              <span>{amenity?.name}</span>
            </div>
          ))}
          {venue?.amenities?.length > 4 && (
            <span className="text-xs text-text-secondary">+{venue?.amenities?.length - 4} autres</span>
          )}
        </div>
        
        {/* Transportation */}
        <div className="mb-4">
          <h4 className="font-body font-medium text-sm text-primary mb-2">Accès Transport</h4>
          <div className="flex flex-wrap gap-2">
            {venue?.transportation?.map((transport, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs bg-surface px-2 py-1 rounded">
                <Icon name={transport?.icon} size={12} className="text-secondary" />
                <span className="text-text-secondary">{transport?.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Classes */}
        <div className="mb-4">
          <h4 className="font-body font-medium text-sm text-primary mb-2">Prochains Cours</h4>
          <div className="space-y-2">
            {venue?.nextClasses?.slice(0, 2)?.map((classItem, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-primary font-medium">{classItem?.name}</span>
                </div>
                <div className="text-text-secondary text-xs">
                  {classItem?.time} • {classItem?.instructor}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            onClick={(e) => {
              e?.stopPropagation();
              onBooking(venue);
            }}
            className="flex-1 bg-secondary hover:bg-secondary/90"
          >
            Réserver
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="MessageCircle"
            onClick={(e) => {
              e?.stopPropagation();
              handleWhatsAppContact();
            }}
            className="border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;