import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ locations, selectedLocation, onLocationSelect }) => {
  const [mapView, setMapView] = useState('satellite');

  const handleLocationClick = (location) => {
    onLocationSelect(location);
  };

  const handleDirectionsClick = (location) => {
    const query = encodeURIComponent(`${location?.name}, ${location?.address}, Dakar, Sénégal`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <div className="relative w-full h-96 lg:h-[500px] bg-surface rounded-brand overflow-hidden shadow-brand">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-brand">
          <div className="flex space-x-1">
            <button
              onClick={() => setMapView('satellite')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                mapView === 'satellite' ?'bg-secondary text-white' :'text-text-secondary hover:text-primary'
              }`}
            >
              Satellite
            </button>
            <button
              onClick={() => setMapView('terrain')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                mapView === 'terrain' ?'bg-secondary text-white' :'text-text-secondary hover:text-primary'
              }`}
            >
              Terrain
            </button>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          iconName="Navigation"
          className="bg-background/90 backdrop-blur-sm border-border"
        >
          Ma Position
        </Button>
      </div>
      {/* Google Maps Embed */}
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        title="4mor Fit Collective Locations - Dakar"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=14.6937,-17.4441&z=12&output=embed"
        className="w-full h-full"
      />
      {/* Location Pins Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {locations?.map((location, index) => (
          <div
            key={location?.id}
            className="absolute pointer-events-auto"
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            <button
              onClick={() => handleLocationClick(location)}
              className={`relative group transition-all duration-300 ${
                selectedLocation?.id === location?.id ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              {/* Pin */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-brand-lg transition-colors ${
                selectedLocation?.id === location?.id
                  ? 'bg-secondary text-white' :'bg-background text-secondary border-2 border-secondary'
              }`}>
                <Icon name="MapPin" size={16} />
              </div>
              
              {/* Pulse Animation */}
              {selectedLocation?.id === location?.id && (
                <div className="absolute inset-0 w-8 h-8 bg-secondary/30 rounded-full animate-ping" />
              )}
              
              {/* Location Label */}
              <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-background/95 backdrop-blur-sm rounded text-xs font-medium whitespace-nowrap shadow-brand transition-opacity ${
                selectedLocation?.id === location?.id || 'group-hover:opacity-100 opacity-0'
              }`}>
                {location?.name}
              </div>
            </button>
          </div>
        ))}
      </div>
      {/* Selected Location Info Card */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 lg:left-4 lg:right-auto lg:w-80 bg-background/95 backdrop-blur-sm rounded-brand p-4 shadow-brand-lg">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-headline text-lg text-primary">{selectedLocation?.name}</h3>
              <p className="text-text-secondary text-sm">{selectedLocation?.address}</p>
            </div>
            <button
              onClick={() => onLocationSelect(null)}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          <div className="flex items-center space-x-4 mb-3">
            <div className="flex items-center space-x-1 text-sm">
              <Icon name="Clock" size={14} className="text-secondary" />
              <span className="text-text-secondary">Ouvert maintenant</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Icon name="Users" size={14} className="text-secondary" />
              <span className="text-text-secondary">{selectedLocation?.capacity} places</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="flex-1 bg-secondary hover:bg-secondary/90"
            >
              Réserver
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Navigation"
              onClick={() => handleDirectionsClick(selectedLocation)}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Itinéraire
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;