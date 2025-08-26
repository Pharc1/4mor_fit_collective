import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const BookingScheduler = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);

  const services = [
    { value: '', label: 'Choisissez un service' },
    { value: 'trial', label: 'Essai Gratuit Cross Training' },
    { value: 'consultation', label: 'Consultation Coaching Personnel' },
    { value: 'corporate-demo', label: 'Démonstration Corporate' },
    { value: 'assessment', label: 'Évaluation Fitness Gratuite' }
  ];

  const locations = [
    { value: '', label: 'Sélectionnez un lieu' },
    { value: 'plateau', label: '4mor Fit Plateau' },
    { value: 'almadies', label: '4mor Fit Almadies' },
    { value: 'parcelles', label: '4mor Fit Parcelles' }
  ];

  const timeSlots = [
    { value: '', label: 'Choisissez un horaire' },
    { value: '06:00', label: '06h00 - 07h00' },
    { value: '07:00', label: '07h00 - 08h00' },
    { value: '08:00', label: '08h00 - 09h00' },
    { value: '09:00', label: '09h00 - 10h00' },
    { value: '10:00', label: '10h00 - 11h00' },
    { value: '17:00', label: '17h00 - 18h00' },
    { value: '18:00', label: '18h00 - 19h00' },
    { value: '19:00', label: '19h00 - 20h00' },
    { value: '20:00', label: '20h00 - 21h00' }
  ];

  // Generate next 14 days for booking
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      const dayName = date?.toLocaleDateString('fr-FR', { weekday: 'long' });
      const dateString = date?.toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
      
      dates?.push({
        value: date?.toISOString()?.split('T')?.[0],
        label: `${dayName?.charAt(0)?.toUpperCase() + dayName?.slice(1)} ${dateString}`
      });
    }
    
    return [{ value: '', label: 'Sélectionnez une date' }, ...dates];
  };

  const availableDates = generateAvailableDates();

  const handleBooking = async () => {
    if (!selectedService || !selectedLocation || !selectedDate || !selectedTime) {
      return;
    }

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSelectedService('');
        setSelectedLocation('');
        setSelectedDate('');
        setSelectedTime('');
        setBookingStatus(null);
      }, 5000);
    }, 2000);
  };

  const handleWhatsAppBooking = () => {
    const serviceLabel = services?.find(s => s?.value === selectedService)?.label;
    const locationLabel = locations?.find(l => l?.value === selectedLocation)?.label;
    const dateLabel = availableDates?.find(d => d?.value === selectedDate)?.label;
    const timeLabel = timeSlots?.find(t => t?.value === selectedTime)?.label;

    const message = `Salut! Je souhaite réserver:\n\nService: ${serviceLabel}\nLieu: ${locationLabel}\nDate: ${dateLabel}\nHeure: ${timeLabel}\n\nPouvez-vous confirmer ma réservation?`;
    
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const isFormValid = selectedService && selectedLocation && selectedDate && selectedTime;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
            Réservation Directe
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Planifiez votre essai gratuit, consultation ou démonstration corporate 
            en quelques clics. Confirmation immédiate par WhatsApp.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border shadow-brand">
          <div className="space-y-8">
            {/* Service Selection */}
            <div className="space-y-4">
              <h3 className="font-cta text-xl text-primary flex items-center space-x-2">
                <Icon name="Calendar" size={20} className="text-secondary" />
                <span>Planifiez votre Session</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Type de Service"
                  options={services}
                  value={selectedService}
                  onChange={setSelectedService}
                  required
                />
                <Select
                  label="Lieu d'Entraînement"
                  options={locations}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  required
                />
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Date Souhaitée"
                options={availableDates}
                value={selectedDate}
                onChange={setSelectedDate}
                required
              />
              <Select
                label="Créneau Horaire"
                options={timeSlots}
                value={selectedTime}
                onChange={setSelectedTime}
                required
              />
            </div>

            {/* Booking Summary */}
            {isFormValid && (
              <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
                <h4 className="font-cta text-lg text-primary mb-4 flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-secondary" />
                  <span>Résumé de votre Réservation</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-body text-text-secondary">Service:</span>
                    <p className="font-body text-primary">{services?.find(s => s?.value === selectedService)?.label}</p>
                  </div>
                  <div>
                    <span className="font-body text-text-secondary">Lieu:</span>
                    <p className="font-body text-primary">{locations?.find(l => l?.value === selectedLocation)?.label}</p>
                  </div>
                  <div>
                    <span className="font-body text-text-secondary">Date:</span>
                    <p className="font-body text-primary">{availableDates?.find(d => d?.value === selectedDate)?.label}</p>
                  </div>
                  <div>
                    <span className="font-body text-text-secondary">Heure:</span>
                    <p className="font-body text-primary">{timeSlots?.find(t => t?.value === selectedTime)?.label}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {bookingStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start space-x-3">
                <Icon name="CheckCircle" size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-cta text-lg text-green-800 mb-2">Réservation Confirmée!</h4>
                  <p className="font-body text-green-700 mb-3">
                    Votre session a été réservée avec succès. Vous recevrez une confirmation 
                    par WhatsApp dans les prochaines minutes.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Icon name="Clock" size={16} />
                    <span>Arrivez 15 minutes avant votre session</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleBooking}
                loading={isBooking}
                disabled={!isFormValid}
                iconName="Calendar"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-white font-cta flex-1"
              >
                {isBooking ? 'Réservation...' : 'Confirmer la Réservation'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppBooking}
                disabled={!isFormValid}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white font-cta flex-1"
              >
                Réserver via WhatsApp
              </Button>
            </div>

            {/* Booking Notes */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <h4 className="font-cta text-lg text-primary flex items-center space-x-2">
                <Icon name="Info" size={20} className="text-accent" />
                <span>Informations Importantes</span>
              </h4>
              <ul className="space-y-2 text-sm font-body text-text-secondary">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Essai gratuit valable une seule fois par personne</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Apportez une tenue de sport et une bouteille d'eau</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Arrivée recommandée 15 minutes avant la session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Annulation possible jusqu'à 2h avant la session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingScheduler;