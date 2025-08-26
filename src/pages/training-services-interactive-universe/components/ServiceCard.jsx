import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle, onBooking, onWhatsApp }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleWhatsAppClick = () => {
    const message = `Salut! Je suis intéressé par ${service?.name}. Pouvez-vous me donner plus d'informations?`;
    onWhatsApp(message);
  };

  return (
    <div className={`bg-card rounded-brand shadow-brand transition-all duration-500 overflow-hidden ${
      isExpanded ? 'col-span-full' : ''
    }`}>
      {/* Service Header */}
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={service?.image}
            alt={service?.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-headline text-2xl text-white mb-2">{service?.name}</h3>
              <p className="text-white/90 text-sm font-body">{service?.shortDescription}</p>
            </div>
            {service?.badge && (
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-cta">
                {service?.badge}
              </span>
            )}
          </div>
        </div>

        {/* Pricing Badge */}
        {service?.pricing && (
          <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-lg">
            <span className="font-cta text-lg">{service?.pricing}</span>
          </div>
        )}
      </div>
      {/* Service Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Clock" size={16} />
              <span className="text-sm font-body">{service?.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Users" size={16} />
              <span className="text-sm font-body">{service?.capacity}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Target" size={16} />
              <span className="text-sm font-body">{service?.level}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {isExpanded ? 'Réduire' : 'En savoir plus'}
          </Button>
        </div>

        <p className="text-text-secondary font-body mb-4">{service?.description}</p>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            size="sm"
            onClick={() => onBooking(service)}
            iconName="Calendar"
            iconPosition="left"
            className="bg-secondary hover:bg-secondary/90"
          >
            Réserver
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppClick}
            iconName="MessageCircle"
            iconPosition="left"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            WhatsApp
          </Button>
          {service?.hasVideo && (
            <Button
              variant="ghost"
              size="sm"
              iconName="Play"
              iconPosition="left"
            >
              Voir vidéo
            </Button>
          )}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-8 border-t border-border pt-8">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-muted/10 rounded-lg p-1">
              {['overview', 'schedule', 'trainer', 'testimonials']?.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-body transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-secondary text-white' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  {tab === 'overview' && 'Aperçu'}
                  {tab === 'schedule' && 'Horaires'}
                  {tab === 'trainer' && 'Coach'}
                  {tab === 'testimonials' && 'Témoignages'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-headline text-lg mb-3">Méthodologie</h4>
                    <p className="text-text-secondary font-body leading-relaxed">
                      {service?.methodology}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-headline text-lg mb-3">Bénéfices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service?.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-text-secondary font-body">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {service?.equipment && (
                    <div>
                      <h4 className="font-headline text-lg mb-3">Équipements</h4>
                      <div className="flex flex-wrap gap-2">
                        {service?.equipment?.map((item, index) => (
                          <span
                            key={index}
                            className="bg-muted/20 text-text-secondary px-3 py-1 rounded-full text-sm font-body"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'schedule' && (
                <div className="space-y-4">
                  <h4 className="font-headline text-lg">Horaires de la semaine</h4>
                  <div className="grid gap-3">
                    {service?.schedule?.map((slot, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted/10 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Calendar" size={20} className="text-secondary" />
                          </div>
                          <div>
                            <p className="font-body font-medium">{slot?.day}</p>
                            <p className="text-text-secondary text-sm">{slot?.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-text-secondary">Places disponibles</p>
                          <p className="font-cta text-accent">{slot?.available}/{slot?.capacity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'trainer' && service?.trainer && (
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={service?.trainer?.image}
                        alt={service?.trainer?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline text-xl mb-2">{service?.trainer?.name}</h4>
                      <p className="text-secondary font-body mb-2">{service?.trainer?.title}</p>
                      <p className="text-text-secondary font-body leading-relaxed">
                        {service?.trainer?.bio}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-headline text-lg mb-3">Certifications</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service?.trainer?.certifications?.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon name="Award" size={16} className="text-accent" />
                          <span className="text-text-secondary font-body">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  {service?.testimonials?.map((testimonial, index) => (
                    <div key={index} className="bg-muted/10 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial?.avatar}
                            alt={testimonial?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h5 className="font-body font-medium">{testimonial?.name}</h5>
                            <div className="flex space-x-1">
                              {[...Array(5)]?.map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={14}
                                  className={i < testimonial?.rating ? 'text-accent fill-current' : 'text-gray-300'}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-text-secondary font-body italic">
                            "{testimonial?.comment}"
                          </p>
                          <p className="text-xs text-text-secondary mt-2">{testimonial?.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;