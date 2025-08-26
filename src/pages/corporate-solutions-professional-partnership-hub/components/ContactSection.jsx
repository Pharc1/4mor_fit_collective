import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    position: '',
    companySize: '',
    industry: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employés' },
    { value: '11-50', label: '11-50 employés' },
    { value: '51-200', label: '51-200 employés' },
    { value: '201-500', label: '201-500 employés' },
    { value: '500+', label: '500+ employés' }
  ];

  const industryOptions = [
    { value: 'tech', label: 'Technologie' },
    { value: 'finance', label: 'Finance & Banque' },
    { value: 'manufacturing', label: 'Industrie' },
    { value: 'services', label: 'Services' },
    { value: 'healthcare', label: 'Santé' },
    { value: 'education', label: 'Éducation' },
    { value: 'retail', label: 'Commerce' },
    { value: 'other', label: 'Autre' }
  ];

  const serviceOptions = [
    { value: 'team-building', label: 'Team Building Workshops' },
    { value: 'executive-fitness', label: 'Executive Fitness Programs' },
    { value: 'wellness-consulting', label: 'Wellness Consulting' },
    { value: 'custom', label: 'Solution Personnalisée' }
  ];

  const budgetOptions = [
    { value: '50-100k', label: '50,000 - 100,000 FCFA' },
    { value: '100-300k', label: '100,000 - 300,000 FCFA' },
    { value: '300-500k', label: '300,000 - 500,000 FCFA' },
    { value: '500k+', label: '500,000+ FCFA' },
    { value: 'discuss', label: 'À discuter' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'Dès que possible' },
    { value: '1-month', label: 'Dans le mois' },
    { value: '1-3-months', label: '1-3 mois' },
    { value: '3-6-months', label: '3-6 mois' },
    { value: 'planning', label: 'En planification' }
  ];

  const contactMethods = [
    {
      method: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Réponse immédiate pendant les heures ouvrables',
      icon: 'MessageCircle',
      contact: '+221 77 123 45 67',
      action: 'Ouvrir WhatsApp',
      color: 'secondary'
    },
    {
      method: 'phone',
      title: 'Appel Direct',
      description: 'Consultation téléphonique gratuite',
      icon: 'Phone',
      contact: '+221 33 123 45 67',
      action: 'Appeler Maintenant',
      color: 'accent'
    },
    {
      method: 'email',
      title: 'Email Professionnel',
      description: 'Réponse détaillée sous 24h',
      icon: 'Mail',
      contact: 'corporate@4morfit.sn',
      action: 'Envoyer Email',
      color: 'secondary'
    }
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Merci pour votre demande ! Nous vous contacterons sous 24h.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      position: '',
      companySize: '',
      industry: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      preferredContact: 'email'
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour ! Je suis intéressé par vos solutions corporate pour ${formData?.companyName || 'mon entreprise'}. Pouvons-nous discuter ?`
    );
    window.open(`https://wa.me/221771234567?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Headphones" size={16} className="text-secondary" />
            <span className="font-body text-secondary text-sm font-medium">Contact Corporate</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-surface-foreground mb-6">
            Parlons de Votre
            <span className="text-gradient block">Projet d'Équipe</span>
          </h2>
          
          <p className="font-body text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Chaque entreprise est unique. Discutons de vos défis spécifiques et concevons ensemble la solution parfaite pour vos équipes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="font-headline text-2xl text-surface-foreground mb-6">
              Contactez-Nous Directement
            </h3>
            
            {contactMethods?.map((method, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${method?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={method?.icon} size={20} className={`text-${method?.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cta text-primary font-bold mb-1">{method?.title}</h4>
                    <p className="font-body text-text-secondary text-sm mb-3">{method?.description}</p>
                    <p className={`font-body text-${method?.color} text-sm font-medium mb-3`}>{method?.contact}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-${method?.color} text-${method?.color} hover:bg-${method?.color} hover:text-white`}
                      onClick={method?.method === 'whatsapp' ? handleWhatsAppClick : undefined}
                    >
                      {method?.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-card rounded-xl p-6 shadow-brand">
              <h4 className="font-cta text-primary font-bold mb-4">Pourquoi Nous Choisir ?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="font-body text-text-secondary text-sm">Réponse sous 24h garantie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span className="font-body text-text-secondary text-sm">Consultation gratuite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="font-body text-text-secondary text-sm">ROI moyen +45%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span className="font-body text-text-secondary text-sm">75+ entreprises satisfaites</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 shadow-brand-lg">
              <h3 className="font-headline text-2xl text-primary mb-6">
                Demande de Consultation Gratuite
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nom de l'Entreprise"
                    type="text"
                    name="companyName"
                    value={formData?.companyName}
                    onChange={handleInputChange}
                    placeholder="Votre entreprise"
                    required
                  />
                  
                  <Select
                    label="Taille de l'Entreprise"
                    options={companySizeOptions}
                    value={formData?.companySize}
                    onChange={(value) => handleSelectChange('companySize', value)}
                    placeholder="Sélectionnez la taille"
                    required
                  />
                </div>

                <Select
                  label="Secteur d'Activité"
                  options={industryOptions}
                  value={formData?.industry}
                  onChange={(value) => handleSelectChange('industry', value)}
                  placeholder="Sélectionnez votre secteur"
                  required
                />

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nom du Contact"
                    type="text"
                    name="contactName"
                    value={formData?.contactName}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                  />
                  
                  <Input
                    label="Poste/Fonction"
                    type="text"
                    name="position"
                    value={formData?.position}
                    onChange={handleInputChange}
                    placeholder="DRH, CEO, Manager..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Email Professionnel"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                  
                  <Input
                    label="Téléphone"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+221 XX XXX XX XX"
                    required
                  />
                </div>

                {/* Project Information */}
                <Select
                  label="Service d'Intérêt"
                  options={serviceOptions}
                  value={formData?.service}
                  onChange={(value) => handleSelectChange('service', value)}
                  placeholder="Quel service vous intéresse ?"
                  required
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Budget Envisagé"
                    options={budgetOptions}
                    value={formData?.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                    placeholder="Votre budget approximatif"
                  />
                  
                  <Select
                    label="Timeline Souhaitée"
                    options={timelineOptions}
                    value={formData?.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                    placeholder="Quand souhaitez-vous commencer ?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body text-primary text-sm font-medium mb-2">
                    Décrivez Vos Défis & Objectifs
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                    placeholder="Parlez-nous de vos défis d'équipe, objectifs spécifiques, contraintes particulières..."
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block font-body text-primary text-sm font-medium mb-3">
                    Méthode de Contact Préférée
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['email', 'phone', 'whatsapp']?.map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData?.preferredContact === method}
                          onChange={handleInputChange}
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="font-body text-text-secondary text-sm capitalize">
                          {method === 'whatsapp' ? 'WhatsApp' : method === 'email' ? 'Email' : 'Téléphone'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="left"
                    className="bg-secondary hover:bg-secondary/90 text-white font-cta flex-1"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-primary"
                    onClick={handleWhatsAppClick}
                  >
                    WhatsApp Direct
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="font-body text-text-secondary text-xs text-center">
                  Vos informations sont confidentielles et ne seront jamais partagées. 
                  Nous vous contacterons uniquement pour discuter de votre projet.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
            <h3 className="font-headline text-3xl lg:text-4xl text-surface-foreground mb-4">
              Consultation Gratuite Garantie
            </h3>
            <p className="font-body text-surface-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Chaque demande reçoit une réponse personnalisée de Coach Mor sous 24h. 
              Commençons par comprendre vos défis spécifiques.
            </p>
            <div className="flex items-center justify-center space-x-6 text-surface-foreground/60">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span className="font-body text-sm">Réponse 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="font-body text-sm">100% Gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} />
                <span className="font-body text-sm">Confidentiel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;