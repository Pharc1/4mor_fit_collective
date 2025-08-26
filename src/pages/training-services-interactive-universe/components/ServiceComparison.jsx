import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ services, onSelectService }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev?.includes(serviceId)) {
        return prev?.filter(id => id !== serviceId);
      } else if (prev?.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const compareFeatures = [
    { key: 'pricing', label: 'Prix', icon: 'DollarSign' },
    { key: 'duration', label: 'Durée', icon: 'Clock' },
    { key: 'capacity', label: 'Capacité', icon: 'Users' },
    { key: 'level', label: 'Niveau', icon: 'Target' },
    { key: 'frequency', label: 'Fréquence', icon: 'Calendar' },
    { key: 'equipment', label: 'Équipements', icon: 'Dumbbell' }
  ];

  const selectedServiceData = services?.filter(service => 
    selectedServices?.includes(service?.id)
  );

  return (
    <div className="bg-card rounded-brand shadow-brand p-6">
      <div className="text-center mb-8">
        <h3 className="font-headline text-2xl mb-2">Comparer nos services</h3>
        <p className="text-text-secondary font-body">
          Sélectionnez jusqu'à 3 services pour les comparer
        </p>
      </div>
      {/* Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services?.map((service) => (
          <div
            key={service?.id}
            onClick={() => toggleService(service?.id)}
            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              selectedServices?.includes(service?.id)
                ? 'border-secondary bg-secondary/5' :'border-border hover:border-secondary/50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                selectedServices?.includes(service?.id)
                  ? 'border-secondary bg-secondary' :'border-gray-300'
              }`}>
                {selectedServices?.includes(service?.id) && (
                  <Icon name="Check" size={12} className="text-white" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-body font-medium">{service?.name}</h4>
                <p className="text-sm text-text-secondary">{service?.pricing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Comparison Table */}
      {selectedServiceData?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-2 font-headline text-lg">Caractéristiques</th>
                {selectedServiceData?.map((service) => (
                  <th key={service?.id} className="text-center py-4 px-2 min-w-[200px]">
                    <div className="space-y-2">
                      <h4 className="font-headline text-lg">{service?.name}</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSelectService(service)}
                        className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                      >
                        Choisir
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareFeatures?.map((feature) => (
                <tr key={feature?.key} className="border-b border-border/50">
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <Icon name={feature?.icon} size={18} className="text-secondary" />
                      <span className="font-body font-medium">{feature?.label}</span>
                    </div>
                  </td>
                  {selectedServiceData?.map((service) => (
                    <td key={service?.id} className="py-4 px-2 text-center">
                      <span className="text-text-secondary font-body">
                        {service?.[feature?.key] || 'N/A'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedServiceData?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="GitCompare" size={48} className="text-text-secondary mx-auto mb-4" />
          <p className="text-text-secondary font-body">
            Sélectionnez des services ci-dessus pour commencer la comparaison
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceComparison;