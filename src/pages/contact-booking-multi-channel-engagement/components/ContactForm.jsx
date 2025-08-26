import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    company: '',
    message: '',
    preferredContact: 'whatsapp'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'cross-training', label: 'Cross Training (10,000 FCFA/mois)' },
    { value: 'personal-coaching', label: 'Coaching Personnel' },
    { value: 'corporate', label: 'Solutions Corporate' },
    { value: 'trial', label: 'Essai Gratuit' },
    { value: 'general', label: 'Information Générale' }
  ];

  const contactMethodOptions = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Appel Téléphonique' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          company: '',
          message: '',
          preferredContact: 'whatsapp'
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Salut! Je suis ${formData?.name}.\n\nService souhaité: ${formData?.service}\nTéléphone: ${formData?.phone}\nEmail: ${formData?.email}\n\nMessage: ${formData?.message}`;
    const whatsappUrl = `https://wa.me/221123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl lg:text-4xl text-primary">
                Formulaire de Contact
              </h2>
              <p className="font-body text-lg text-text-secondary">
                Remplissez ce formulaire et nous vous contacterons dans les plus brefs délais. 
                Choisissez votre méthode de contact préférée.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nom Complet"
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Téléphone"
                  type="tel"
                  name="phone"
                  placeholder="+221 XX XXX XX XX"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
                <Select
                  label="Service Souhaité"
                  options={serviceOptions}
                  value={formData?.service}
                  onChange={(value) => handleSelectChange('service', value)}
                  required
                />
              </div>

              {formData?.service === 'corporate' && (
                <Input
                  label="Nom de l'Entreprise"
                  type="text"
                  name="company"
                  placeholder="Nom de votre entreprise"
                  value={formData?.company}
                  onChange={handleInputChange}
                />
              )}

              <Select
                label="Méthode de Contact Préférée"
                options={contactMethodOptions}
                value={formData?.preferredContact}
                onChange={(value) => handleSelectChange('preferredContact', value)}
              />

              <div>
                <label className="block font-body text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez vos besoins, objectifs ou questions..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg font-body text-primary placeholder-text-secondary focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <p className="font-body text-green-800">
                    Message envoyé avec succès! Nous vous contacterons bientôt.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-secondary hover:bg-secondary/90 text-white font-cta flex-1"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSubmit}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white font-cta flex-1"
                >
                  Envoyer via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl text-primary">
                Informations de Contact
              </h3>
              <p className="font-body text-text-secondary">
                Plusieurs moyens de nous joindre selon vos préférences
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Contact */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-brand">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cta text-lg text-primary mb-2">WhatsApp Business</h4>
                    <p className="font-body text-text-secondary mb-3">
                      Notre canal principal - Réponse garantie en moins de 30 minutes
                    </p>
                    <div className="space-y-2">
                      <p className="font-body text-sm text-primary">+221 12 345 67 89</p>
                      <p className="font-body text-xs text-text-secondary">
                        Disponible: Lun-Sam 6h00-21h00, Dim 8h00-18h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-brand">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cta text-lg text-primary mb-2">Email Professionnel</h4>
                    <p className="font-body text-text-secondary mb-3">
                      Pour les demandes corporate et partenariats
                    </p>
                    <div className="space-y-2">
                      <p className="font-body text-sm text-primary">contact@4morfit.sn</p>
                      <p className="font-body text-xs text-text-secondary">
                        Réponse sous 24h ouvrées
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-brand">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cta text-lg text-primary mb-2">Appel Direct</h4>
                    <p className="font-body text-text-secondary mb-3">
                      Pour les urgences et consultations immédiates
                    </p>
                    <div className="space-y-2">
                      <p className="font-body text-sm text-primary">+221 12 345 67 89</p>
                      <p className="font-body text-xs text-text-secondary">
                        Heures d'appel: Lun-Ven 9h00-18h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;