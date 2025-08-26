import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingModal = ({ isOpen, onClose, service, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    experience: '',
    goals: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const experienceOptions = [
    { value: 'beginner', label: 'Débutant - Première fois' },
    { value: 'intermediate', label: 'Intermédiaire - Quelques mois d\'expérience' },
    { value: 'advanced', label: 'Avancé - Plus d\'un an d\'expérience' },
    { value: 'expert', label: 'Expert - Plusieurs années d\'expérience' }
  ];

  const timeSlots = [
    { value: '06:00', label: '06:00 - Réveil énergique' },
    { value: '07:00', label: '07:00 - Matinal dynamique' },
    { value: '08:00', label: '08:00 - Avant le travail' },
    { value: '12:00', label: '12:00 - Pause déjeuner' },
    { value: '17:00', label: '17:00 - Fin de journée' },
    { value: '18:00', label: '18:00 - Après le travail' },
    { value: '19:00', label: '19:00 - Soirée active' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    if (!formData?.preferredDate) {
      newErrors.preferredDate = 'La date est requise';
    }

    if (!formData?.preferredTime) {
      newErrors.preferredTime = 'L\'heure est requise';
    }

    if (!formData?.experience) {
      newErrors.experience = 'Le niveau d\'expérience est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onConfirm({
        service: service?.name,
        ...formData,
        bookingId: `BK${Date.now()}`,
        status: 'pending'
      });
      
      onClose();
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const message = `Salut! Je souhaite réserver une séance de ${service?.name}.\n\nMes informations:\n- Nom: ${formData?.name || '[À remplir]'}\n- Téléphone: ${formData?.phone || '[À remplir]'}\n- Date souhaitée: ${formData?.preferredDate || '[À remplir]'}\n- Heure souhaitée: ${formData?.preferredTime || '[À remplir]'}\n\nMerci!`;
    
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-card rounded-brand shadow-brand-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-headline text-2xl">Réserver une séance</h2>
            <p className="text-text-secondary font-body">
              {service?.name} - {service?.pricing}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted/20 rounded-lg transition-colors duration-300"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nom complet"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                error={errors?.name}
                placeholder="Votre nom complet"
                required
              />
              
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                error={errors?.email}
                placeholder="votre@email.com"
                required
              />
            </div>

            <Input
              label="Téléphone"
              type="tel"
              name="phone"
              value={formData?.phone}
              onChange={handleInputChange}
              error={errors?.phone}
              placeholder="+221 XX XXX XX XX"
              required
            />
          </div>

          {/* Booking Details */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg">Détails de la réservation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Date souhaitée"
                type="date"
                name="preferredDate"
                value={formData?.preferredDate}
                onChange={handleInputChange}
                error={errors?.preferredDate}
                min={new Date()?.toISOString()?.split('T')?.[0]}
                required
              />
              
              <Select
                label="Heure souhaitée"
                options={timeSlots}
                value={formData?.preferredTime}
                onChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                error={errors?.preferredTime}
                placeholder="Choisir un créneau"
                required
              />
            </div>

            <Select
              label="Niveau d'expérience"
              options={experienceOptions}
              value={formData?.experience}
              onChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
              error={errors?.experience}
              placeholder="Sélectionner votre niveau"
              required
            />
          </div>

          {/* Goals and Message */}
          <div className="space-y-4">
            <Input
              label="Objectifs (optionnel)"
              type="text"
              name="goals"
              value={formData?.goals}
              onChange={handleInputChange}
              placeholder="Ex: Perte de poids, renforcement musculaire..."
            />

            <div>
              <label className="block text-sm font-medium font-body mb-2">
                Message additionnel (optionnel)
              </label>
              <textarea
                name="message"
                value={formData?.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none font-body"
                placeholder="Questions ou informations supplémentaires..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="Calendar"
              iconPosition="left"
              className="bg-secondary hover:bg-secondary/90 flex-1"
            >
              {isSubmitting ? 'Réservation...' : 'Confirmer la réservation'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppBooking}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white flex-1"
            >
              Réserver via WhatsApp
            </Button>
          </div>
        </form>

        {/* Service Info */}
        <div className="bg-muted/10 p-6 border-t border-border">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Info" size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h4 className="font-body font-medium mb-2">Informations importantes</h4>
              <ul className="text-text-secondary text-sm font-body space-y-1">
                <li>• Confirmation par SMS dans les 2h</li>
                <li>• Annulation gratuite jusqu'à 4h avant</li>
                <li>• Première séance d'essai gratuite</li>
                <li>• Apportez une serviette et une bouteille d'eau</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;