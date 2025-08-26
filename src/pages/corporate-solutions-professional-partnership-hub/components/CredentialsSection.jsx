import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
  const credentials = [
    {
      title: 'Certification BPJEPS France',
      issuer: 'Ministère des Sports, France',
      year: '2019',
      description: 'Brevet Professionnel de la Jeunesse, de l\'Éducation Populaire et du Sport - Spécialité Activités de la Forme',
      icon: 'Award',
      verified: true
    },
    {
      title: 'Formation Functional Training',
      issuer: 'INSEP Paris',
      year: '2020',
      description: 'Formation avancée en entraînement fonctionnel et préparation physique moderne',
      icon: 'Dumbbell',
      verified: true
    },
    {
      title: 'Certification Team Building',
      issuer: 'École Supérieure de Commerce Paris',
      year: '2021',
      description: 'Spécialisation en dynamiques de groupe et cohésion d\'équipe en entreprise',
      icon: 'Users',
      verified: true
    },
    {
      title: 'Formation Premiers Secours',
      issuer: 'Croix-Rouge Française',
      year: '2022',
      description: 'PSC1 - Prévention et Secours Civiques de niveau 1, renouvelé annuellement',
      icon: 'Heart',
      verified: true
    }
  ];

  const experience = [
    {
      role: 'Coach Sportif Professionnel',
      company: 'Clubs Premium Paris',
      period: '2019-2022',
      achievements: [
        'Encadrement de 200+ clients individuels',
        'Programmes corporate pour 15 entreprises',
        'Spécialisation functional training'
      ]
    },
    {
      role: 'Consultant Team Building',
      company: 'Entreprises Françaises',
      period: '2020-2022',
      achievements: [
        'Interventions dans 25+ entreprises',
        'Formation de 500+ collaborateurs',
        'ROI moyen +40% sur projets'
      ]
    },
    {
      role: 'Fondateur 4mor Fit Collective',
      company: 'Dakar, Sénégal',
      period: '2022-Présent',
      achievements: [
        '1000+ membres actifs',
        '50+ partenariats corporate',
        'Expansion 3 centres Dakar'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'DRH, TotalEnergies Sénégal',
      company: 'TotalEnergies',
      testimonial: `"Coach Mor combine parfaitement son expertise française avec une compréhension profonde de notre culture locale. Nos équipes ont gagné en cohésion et en performance."`,
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      name: 'Abdoulaye Ndiaye',
      role: 'CEO, Sonatel Digital',
      company: 'Sonatel',
      testimonial: `"L'approche de 4mor Fit a révolutionné notre gestion d'équipe. Les résultats sur la productivité et le bien-être sont mesurables et durables."`,
      rating: 5,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      name: 'Sophie Martin',
      role: 'Directrice Opérations, CFAO',
      company: 'CFAO Group',
      testimonial: `"Un professionnel exceptionnel qui sait adapter ses méthodes françaises au contexte africain. Nos dirigeants sont transformés."`,
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
    }
  ];

  const stats = [
    { number: '4+', label: 'Années Expérience France', icon: 'MapPin' },
    { number: '3+', label: 'Années Dakar', icon: 'Home' },
    { number: '75+', label: 'Entreprises Accompagnées', icon: 'Building2' },
    { number: '2000+', label: 'Professionnels Formés', icon: 'Users' }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Shield" size={16} className="text-secondary" />
            <span className="font-body text-secondary text-sm font-medium">Expertise Certifiée</span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-6xl text-surface-foreground mb-6">
            Coach Mor
            <span className="text-gradient block">Références & Expertise</span>
          </h2>
          
          <p className="font-body text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Une expertise française reconnue, adaptée avec succès au contexte sénégalais pour des résultats exceptionnels en entreprise.
          </p>
        </div>

        {/* Coach Profile */}
        <div className="bg-card rounded-2xl shadow-brand-lg overflow-hidden mb-16">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Coach Photo */}
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg"
                alt="Coach Mor - Fondateur 4mor Fit Collective"
                className="w-full h-64 lg:h-full min-h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Coach Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-headline text-2xl text-primary mb-1">Coach Mor</h3>
                  <p className="font-body text-secondary text-sm mb-2">Fondateur & Directeur Technique</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} className="text-accent" />
                      <span className="font-body text-text-secondary text-xs">Paris → Dakar</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} className="text-accent" />
                      <span className="font-body text-text-secondary text-xs">7+ ans expérience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-3xl text-primary mb-4">Certifications Professionnelles</h3>
                  <div className="space-y-4">
                    {credentials?.map((credential, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={credential?.icon} size={20} className="text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-cta text-primary font-bold">{credential?.title}</h4>
                            {credential?.verified && (
                              <Icon name="CheckCircle" size={16} className="text-accent" />
                            )}
                          </div>
                          <p className="font-body text-secondary text-sm mb-1">{credential?.issuer} • {credential?.year}</p>
                          <p className="font-body text-text-secondary text-sm">{credential?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="font-cta text-primary text-lg mb-4">Expérience en Chiffres</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {stats?.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name={stat?.icon} size={18} className="text-accent" />
                        </div>
                        <div>
                          <p className="font-accent text-accent text-xl font-bold">{stat?.number}</p>
                          <p className="font-body text-text-secondary text-xs">{stat?.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="font-headline text-3xl lg:text-4xl text-surface-foreground text-center mb-12">
            Parcours Professionnel
          </h3>
          
          <div className="space-y-6">
            {experience?.map((exp, index) => (
              <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-brand">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <h4 className="font-cta text-primary text-lg font-bold mb-1">{exp?.role}</h4>
                    <p className="font-body text-secondary text-sm mb-2">{exp?.company}</p>
                    <p className="font-body text-text-secondary text-xs">{exp?.period}</p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h5 className="font-body text-primary text-sm font-medium mb-3">Réalisations Clés</h5>
                    <div className="space-y-2">
                      {exp?.achievements?.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                            <Icon name="Check" size={10} className="text-accent" />
                          </div>
                          <p className="font-body text-text-secondary text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Leader Testimonials */}
        <div>
          <h3 className="font-headline text-3xl lg:text-4xl text-surface-foreground text-center mb-12">
            Témoignages Dirigeants
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <blockquote className="font-body text-text-secondary text-sm leading-relaxed italic">
                    "{testimonial?.testimonial}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-accent text-white text-sm font-bold">
                        {testimonial?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-cta text-primary text-sm font-bold">{testimonial?.name}</p>
                      <p className="font-body text-text-secondary text-xs">{testimonial?.role}</p>
                      <p className="font-body text-secondary text-xs">{testimonial?.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
            <h3 className="font-headline text-3xl lg:text-4xl text-surface-foreground mb-4">
              Une Expertise à Votre Service
            </h3>
            <p className="font-body text-surface-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Bénéficiez de l'expérience française de Coach Mor adaptée aux réalités de votre entreprise sénégalaise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-cta text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Rencontrer Coach Mor</span>
              </button>
              
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl font-cta text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="FileText" size={20} />
                <span>CV Complet PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;