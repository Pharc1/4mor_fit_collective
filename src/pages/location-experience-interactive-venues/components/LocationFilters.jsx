import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const amenityOptions = [
    { id: 'parking', name: 'Parking', icon: 'Car' },
    { id: 'shower', name: 'Douches', icon: 'Droplets' },
    { id: 'locker', name: 'Casiers', icon: 'Lock' },
    { id: 'wifi', name: 'WiFi', icon: 'Wifi' },
    { id: 'ac', name: 'Climatisation', icon: 'Wind' },
    { id: 'equipment', name: 'Équipement Pro', icon: 'Dumbbell' }
  ];

  const transportOptions = [
    { id: 'bus', name: 'Bus', icon: 'Bus' },
    { id: 'taxi', name: 'Taxi', icon: 'Car' },
    { id: 'motorcycle', name: 'Moto-taxi', icon: 'Bike' },
    { id: 'walking', name: 'À pied', icon: 'MapPin' }
  ];

  const statusOptions = [
    { id: 'open', name: 'Ouvert', color: 'text-success' },
    { id: 'busy', name: 'Occupé', color: 'text-warning' },
    { id: 'closed', name: 'Fermé', color: 'text-error' }
  ];

  const handleAmenityToggle = (amenityId) => {
    const newAmenities = filters?.amenities?.includes(amenityId)
      ? filters?.amenities?.filter(id => id !== amenityId)
      : [...filters?.amenities, amenityId];
    
    onFilterChange({ ...filters, amenities: newAmenities });
  };

  const handleTransportToggle = (transportId) => {
    const newTransport = filters?.transport?.includes(transportId)
      ? filters?.transport?.filter(id => id !== transportId)
      : [...filters?.transport, transportId];
    
    onFilterChange({ ...filters, transport: newTransport });
  };

  const handleStatusToggle = (status) => {
    onFilterChange({ ...filters, status: filters?.status === status ? '' : status });
  };

  const hasActiveFilters = filters?.amenities?.length > 0 || filters?.transport?.length > 0 || filters?.status;

  return (
    <div className="bg-card rounded-brand shadow-brand p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline text-xl text-primary">Filtres</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-primary"
          >
            Effacer tout
          </Button>
        )}
      </div>
      {/* Status Filter */}
      <div className="mb-6">
        <h4 className="font-body font-medium text-primary mb-3">Statut</h4>
        <div className="flex flex-wrap gap-2">
          {statusOptions?.map((status) => (
            <button
              key={status?.id}
              onClick={() => handleStatusToggle(status?.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters?.status === status?.id
                  ? 'bg-secondary text-white' :'bg-surface text-text-secondary hover:bg-secondary/10 hover:text-primary'
              }`}
            >
              <span className={filters?.status !== status?.id ? status?.color : ''}>
                {status?.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Amenities Filter */}
      <div className="mb-6">
        <h4 className="font-body font-medium text-primary mb-3">Équipements</h4>
        <div className="grid grid-cols-2 gap-2">
          {amenityOptions?.map((amenity) => (
            <button
              key={amenity?.id}
              onClick={() => handleAmenityToggle(amenity?.id)}
              className={`flex items-center space-x-2 p-3 rounded-lg text-sm transition-colors ${
                filters?.amenities?.includes(amenity?.id)
                  ? 'bg-secondary/10 text-secondary border border-secondary' :'bg-surface text-text-secondary hover:bg-secondary/5 hover:text-primary border border-transparent'
              }`}
            >
              <Icon 
                name={amenity?.icon} 
                size={16} 
                className={filters?.amenities?.includes(amenity?.id) ? 'text-secondary' : 'text-text-secondary'} 
              />
              <span>{amenity?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Transport Filter */}
      <div className="mb-6">
        <h4 className="font-body font-medium text-primary mb-3">Transport</h4>
        <div className="grid grid-cols-2 gap-2">
          {transportOptions?.map((transport) => (
            <button
              key={transport?.id}
              onClick={() => handleTransportToggle(transport?.id)}
              className={`flex items-center space-x-2 p-3 rounded-lg text-sm transition-colors ${
                filters?.transport?.includes(transport?.id)
                  ? 'bg-secondary/10 text-secondary border border-secondary' :'bg-surface text-text-secondary hover:bg-secondary/5 hover:text-primary border border-transparent'
              }`}
            >
              <Icon 
                name={transport?.icon} 
                size={16} 
                className={filters?.transport?.includes(transport?.id) ? 'text-secondary' : 'text-text-secondary'} 
              />
              <span>{transport?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <h4 className="font-body font-medium text-primary mb-2">Filtres actifs</h4>
          <div className="flex flex-wrap gap-1">
            {filters?.amenities?.map((amenityId) => {
              const amenity = amenityOptions?.find(a => a?.id === amenityId);
              return (
                <span key={amenityId} className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                  <Icon name={amenity?.icon} size={12} />
                  <span>{amenity?.name}</span>
                </span>
              );
            })}
            {filters?.transport?.map((transportId) => {
              const transport = transportOptions?.find(t => t?.id === transportId);
              return (
                <span key={transportId} className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                  <Icon name={transport?.icon} size={12} />
                  <span>{transport?.name}</span>
                </span>
              );
            })}
            {filters?.status && (
              <span className="inline-flex items-center bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                {statusOptions?.find(s => s?.id === filters?.status)?.name}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilters;