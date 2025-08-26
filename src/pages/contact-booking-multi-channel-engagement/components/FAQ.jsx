import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      category: "Général",
      questions: [
        {
          question: "Qu\'est-ce que 4mor Fit Collective?",
          answer: `4mor Fit Collective est la communauté fitness la plus authentique de Dakar, fondée par Coach Mor. Nous démocratisons l'accès au fitness fonctionnel de haute qualité avec un abonnement accessible à 10,000 FCFA/mois.\n\nNotre mission est de construire des corps solides et des esprits forts à travers l'entraînement collectif et l'entraide communautaire.`
        },
        {
          question: "Où êtes-vous situés à Dakar?",
          answer: `Nous avons trois centres stratégiquement situés:\n\n• 4mor Fit Plateau - Avenue Léopold Sédar Senghor (face Hôtel Terrou-Bi)\n• 4mor Fit Almadies - Route des Almadies (près du Sea Plaza)\n• 4mor Fit Parcelles - Unité 15 (à côté de la station Total)\n\nChaque centre offre la même qualité d'entraînement avec des équipements modernes.`
        },
        {
          question: "Quels sont vos horaires d\'ouverture?",
          answer: `Nos horaires sont adaptés à votre rythme de vie:\n\n• Lundi à Vendredi: 06h00 - 21h00\n• Samedi: 07h00 - 20h00\n• Dimanche: 08h00 - 18h00\n\nNous proposons des créneaux tôt le matin pour les lève-tôt et tard le soir pour ceux qui finissent le travail.`
        }
      ]
    },
    {
      category: "Tarifs & Abonnements",
      questions: [
        {
          question: "Combien coûte l\'abonnement mensuel?",
          answer: `Notre abonnement Cross Training est de 10,000 FCFA/mois, sans engagement de durée.\n\nCe tarif inclut:\n• Accès illimité aux trois centres\n• Tous les cours collectifs\n• Suivi personnalisé de progression\n• Accès à la communauté WhatsApp\n• Événements communautaires mensuels`
        },
        {
          question: "Y a-t-il des frais d\'inscription?",
          answer: `Non, aucun frais d'inscription! Nous croyons en la transparence totale.\n\nVous payez uniquement:\n• 10,000 FCFA pour votre premier mois\n• Aucun frais caché\n• Aucun engagement de durée\n• Possibilité d'arrêter à tout moment`
        },
        {
          question: "Proposez-vous des tarifs étudiants ou familiaux?",
          answer: `Oui! Nous avons des tarifs spéciaux:\n\n• Étudiants: 8,000 FCFA/mois (sur présentation de la carte)\n• Famille (2+ membres): 15% de réduction\n• Corporate (5+ employés): Tarifs dégressifs\n• Parrainage: 1 mois gratuit pour chaque nouveau membre parrainé`
        }
      ]
    },
    {
      category: "Entraînement & Services",
      questions: [
        {
          question: "Qu\'est-ce que le Cross Training?",
          answer: `Le Cross Training est une méthode d'entraînement fonctionnel qui combine:\n\n• Cardio haute intensité\n• Renforcement musculaire\n• Mobilité et flexibilité\n• Mouvements naturels du corps\n\nNos séances de 45-60 minutes sont adaptées à tous les niveaux, du débutant à l'athlète confirmé.`
        },
        {
          question: "Faut-il avoir de l\'expérience pour commencer?",
          answer: `Absolument pas! Notre philosophie est "accessible à tous, partout".\n\n• Séance d'évaluation gratuite pour les débutants\n• Mouvements adaptés à votre niveau\n• Coaches formés pour l'accompagnement personnalisé\n• Progression graduelle et sécurisée\n• Communauté bienveillante et encourageante`
        },
        {
          question: "Proposez-vous du coaching personnel?",
          answer: `Oui! Coach Mor et son équipe offrent:\n\n• Coaching personnel (25,000 FCFA/séance)\n• Plans d'entraînement personnalisés\n• Suivi nutritionnel\n• Préparation physique spécialisée\n• Coaching à domicile (sur demande)\n\nContactez-nous pour une consultation gratuite.`
        }
      ]
    },
    {
      category: "Corporate & Entreprises",
      questions: [
        {
          question: "Quels services proposez-vous aux entreprises?",
          answer: `Nos solutions corporate incluent:\n\n• Team building fitness (à partir de 50,000 FCFA/session)\n• Programmes wellness en entreprise\n• Cours collectifs sur site\n• Challenges inter-équipes\n• Formations bien-être au travail\n• Abonnements corporate avec tarifs dégressifs`
        },
        {
          question: "Comment organiser un team building?",
          answer: `C'est simple:\n\n1. Contactez-nous par email: contact@4morfit.sn\n2. Consultation gratuite pour définir vos besoins\n3. Proposition personnalisée sous 48h\n4. Organisation clé en main\n\nNous nous occupons de tout: matériel, animation, collations post-entraînement.`
        }
      ]
    },
    {
      category: "Pratique",
      questions: [
        {
          question: "Comment puis-je vous contacter?",
          answer: `Plusieurs moyens de nous joindre:\n\n• WhatsApp: +221 12 345 67 89 (réponse < 30min)\n• Email: contact@4morfit.sn\n• Téléphone: +221 12 345 67 89\n• Visite directe dans nos centres\n• Réseaux sociaux: @4morfit sur Instagram, Facebook, TikTok`
        },
        {
          question: "Puis-je annuler ou reporter une séance?",
          answer: `Oui, avec nos conditions flexibles:\n\n• Annulation jusqu'à 2h avant la séance\n• Report possible via WhatsApp\n• Séances ratées récupérables dans le mois\n• Pause abonnement possible (vacances, maladie)\n• Aucune pénalité pour les annulations justifiées`
        },
        {
          question: "Que dois-je apporter pour mon premier cours?",
          answer: `Pour votre essai gratuit, apportez:\n\n• Tenue de sport confortable\n• Chaussures de sport\n• Bouteille d'eau\n• Serviette\n• Bonne humeur!\n\nNous fournissons tout l'équipement d'entraînement. Vestiaires et douches disponibles sur place.`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemId)) {
      newOpenItems?.delete(itemId);
    } else {
      newOpenItems?.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  const handleWhatsAppContact = () => {
    const message = "Salut! J'ai une question qui n'est pas dans votre FAQ. Pouvez-vous m'aider?";
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-primary mb-4">
            Questions Fréquentes
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions. Si vous ne trouvez pas 
            ce que vous cherchez, contactez-nous directement sur WhatsApp.
          </p>
        </div>

        <div className="space-y-8">
          {faqData?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="HelpCircle" size={20} className="text-white" />
                </div>
                <h3 className="font-cta text-xl text-primary">{category?.category}</h3>
              </div>

              <div className="space-y-3">
                {category?.questions?.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems?.has(itemId);

                  return (
                    <div
                      key={questionIndex}
                      className="bg-card rounded-lg border border-border overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-body text-primary font-medium pr-4">
                          {item?.question}
                        </span>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className={`text-secondary transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen 
                            ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-4 border-t border-border">
                          <div className="pt-4">
                            {item?.answer?.split('\n')?.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className={`font-body text-text-secondary leading-relaxed ${
                                  idx > 0 ? 'mt-3' : ''
                                }`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-secondary/5 rounded-xl p-8 border border-secondary/20 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h3 className="font-cta text-xl text-primary">
              Vous ne trouvez pas votre réponse?
            </h3>
            <p className="font-body text-text-secondary max-w-md mx-auto">
              Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions 
              spécifiques en moins de 30 minutes.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-cta transition-colors duration-300"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Poser une Question</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;