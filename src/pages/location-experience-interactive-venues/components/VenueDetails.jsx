import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VenueDetails = ({ venue, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const tabs = [
    { id: 'overview', name: 'Aperçu', icon: 'Home' },
    { id: 'schedule', name: 'Horaires', icon: 'Calendar' },
    { id: 'equipment', name: 'Équipements', icon: 'Dumbbell' },
    { id: 'testimonials', name: 'Avis', icon: 'MessageSquare' }
  ];

  const handleWhatsAppContact = () => {
    const message = `Salut! Je voudrais réserver une session au ${venue?.name}. Pouvez-vous m'aider?`;
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirections = () => {
    const query = encodeURIComponent(`${venue?.name}, ${venue?.address}, Dakar, Sénégal`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background rounded-brand shadow-brand-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-headline text-2xl text-primary">{venue?.name}</h2>
            <p className="text-text-secondary flex items-center mt-1">
              <Icon name="MapPin" size={16} className="mr-1" />
              {venue?.address}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-80px)]">
          {/* Image Gallery */}
          <div className="lg:w-1/2 relative">
            <div className="h-64 lg:h-full relative overflow-hidden">
              <Image
                src={venue?.images?.[selectedImageIndex]}
                alt={`${venue?.name} - Vue ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {venue?.images?.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex(prev => 
                      prev === 0 ? venue?.images?.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex(prev => 
                      prev === venue?.images?.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                {selectedImageIndex + 1} / {venue?.images?.length}
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex space-x-2 p-4 overflow-x-auto">
              {venue?.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === selectedImageIndex ? 'border-secondary' : 'border-border'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab?.id
                      ? 'text-secondary border-b-2 border-secondary' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Status & Capacity */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        venue?.status === 'open' ?'bg-success/10 text-success' 
                          : venue?.status === 'busy' ?'bg-warning/10 text-warning' :'bg-error/10 text-error'
                      }`}>
                        {venue?.status === 'open' ? 'Ouvert maintenant' : venue?.status === 'busy' ? 'Occupé' : 'Fermé'}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {venue?.currentCapacity}/{venue?.maxCapacity} personnes
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < venue?.rating ? 'text-accent fill-current' : 'text-border'}
                        />
                      ))}
                      <span className="text-sm text-text-secondary ml-1">({venue?.reviews})</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-body font-semibold text-primary mb-2">Description</h3>
                    <p className="text-text-secondary leading-relaxed">{venue?.description}</p>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="font-body font-semibold text-primary mb-3">Équipements & Services</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {venue?.amenities?.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Icon name={amenity?.icon} size={16} className="text-secondary" />
                          <span className="text-text-secondary">{amenity?.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transportation */}
                  <div>
                    <h3 className="font-body font-semibold text-primary mb-3">Accès & Transport</h3>
                    <div className="space-y-2">
                      {venue?.transportation?.map((transport, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                          <Icon name={transport?.icon} size={20} className="text-secondary" />
                          <div>
                            <div className="font-medium text-primary text-sm">{transport?.name}</div>
                            <div className="text-xs text-text-secondary">{transport?.details}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div className="space-y-4">
                  <h3 className="font-body font-semibold text-primary">Horaires de la Semaine</h3>
                  {venue?.weeklySchedule?.map((day, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-primary">{day?.day}</h4>
                        <span className="text-sm text-text-secondary">{day?.hours}</span>
                      </div>
                      <div className="space-y-2">
                        {day?.classes?.map((classItem, classIndex) => (
                          <div key={classIndex} className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                              <span className="font-medium text-primary">{classItem?.name}</span>
                              <span className="text-text-secondary">• {classItem?.instructor}</span>
                            </div>
                            <span className="text-text-secondary">{classItem?.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'equipment' && (
                <div className="space-y-4">
                  <h3 className="font-body font-semibold text-primary">Équipements Disponibles</h3>
                  {venue?.equipment?.map((category, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3 flex items-center">
                        <Icon name={category?.icon} size={20} className="text-secondary mr-2" />
                        {category?.category}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category?.items?.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between text-sm">
                            <span className="text-text-secondary">{item?.name}</span>
                            <span className="text-primary font-medium">{item?.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-4">
                  <h3 className="font-body font-semibold text-primary">Avis des Membres</h3>
                  {venue?.testimonials?.map((testimonial, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Image
                          src={testimonial?.avatar}
                          alt={testimonial?.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-primary text-sm">{testimonial?.name}</h4>
                              <p className="text-xs text-text-secondary">{testimonial?.memberSince}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)]?.map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={12}
                                  className={i < testimonial?.rating ? 'text-accent fill-current' : 'text-border'}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">{testimonial?.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="border-t border-border p-6">
              <div className="flex space-x-3">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="flex-1 bg-secondary hover:bg-secondary/90"
                >
                  Réserver une Session
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  onClick={handleWhatsAppContact}
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  iconName="Navigation"
                  onClick={handleDirections}
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  Itinéraire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;