import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Séance de cross training matinale avec l'équipe ! 💪\n#4morFit #CrossTraining #Dakar #FitnessFamily",
      likes: 245,
      comments: 18,
      timestamp: "Il y a 2 heures",
      type: "image"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Team building Orange Sénégal réussi ! 🔥\nMerci pour votre confiance 🙏\n#TeamBuilding #Corporate #4morFit",
      likes: 189,
      comments: 12,
      timestamp: "Il y a 5 heures",
      type: "image"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Transformation incroyable d'Aminata ! 6 mois de détermination 👏\n#Transformation #Success #Motivation",
      likes: 312,
      comments: 25,
      timestamp: "Il y a 8 heures",
      type: "image"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Coach Mor partage ses secrets d'entraînement 🎯\nRendez-vous ce soir pour la session technique !\n#CoachMor #Technique",
      likes: 156,
      comments: 8,
      timestamp: "Il y a 12 heures",
      type: "video"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Nouvelle semaine, nouveaux défis ! 💯\nQui est prêt pour le WOD de demain ?\n#NewWeek #Challenge #Ready",
      likes: 203,
      comments: 15,
      timestamp: "Il y a 1 jour",
      type: "image"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Ambiance de folie lors de notre session du weekend ! 🎉\nLa famille 4mor Fit au complet 👨‍👩‍👧‍👦\n#Weekend #Family #Fun",
      likes: 278,
      comments: 22,
      timestamp: "Il y a 2 jours",
      type: "image"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://instagram.com/4morfit', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/221123456789?text=J\'ai vu vos posts Instagram, je veux rejoindre 4mor Fit !', '_blank');
  };

  const openPostModal = (post) => {
    setSelectedPost(post);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Instagram" size={32} color="var(--color-secondary)" />
            <h2 className="font-headline text-4xl lg:text-6xl text-primary">
              Notre Communauté
            </h2>
          </div>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Suivez notre quotidien, nos transformations et l'énergie de la communauté 4mor Fit.\nChaque jour, de nouveaux moments inspirants à partager.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts?.map((post) => (
            <div
              key={post?.id}
              className="relative group cursor-pointer bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => openPostModal(post)}
            >
              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post?.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Video Indicator */}
                {post?.type === 'video' && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={16} color="white" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={20} />
                      <span className="font-body text-sm">{post?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={20} />
                      <span className="font-body text-sm">{post?.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <p className="font-body text-sm text-text-primary line-clamp-2 mb-2">
                  {post?.caption?.split('\n')?.[0]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">
                    {post?.timestamp}
                  </span>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span className="text-xs">{post?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span className="text-xs">{post?.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Actions */}
        <div className="text-center">
          <div className="bg-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-headline text-3xl text-white mb-4">
              Rejoignez notre communauté Instagram
            </h3>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Plus de 10K followers nous font confiance pour leur dose quotidienne de motivation.\nSoyez les premiers à découvrir nos nouveautés et transformations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleInstagramClick}
                className="bg-secondary hover:bg-secondary/90 text-white font-cta"
                iconName="Instagram"
                iconPosition="left"
              >
                Suivre @4morfit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="border-accent text-accent hover:bg-accent hover:text-primary font-cta"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-primary/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="font-accent text-white text-lg font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-cta text-primary">4mor_fit_collective</h4>
                  <p className="font-body text-xs text-text-secondary">Dakar, Sénégal</p>
                </div>
              </div>
              <button
                onClick={closePostModal}
                className="p-2 hover:bg-background rounded-full transition-colors duration-200"
              >
                <Icon name="X" size={20} color="var(--color-text-secondary)" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-0">
              <Image
                src={selectedPost?.image}
                alt="Instagram post"
                className="w-full aspect-square object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <button className="hover:scale-110 transition-transform duration-200">
                      <Icon name="Heart" size={24} color="var(--color-secondary)" />
                    </button>
                    <button className="hover:scale-110 transition-transform duration-200">
                      <Icon name="MessageCircle" size={24} color="var(--color-text-secondary)" />
                    </button>
                    <button className="hover:scale-110 transition-transform duration-200">
                      <Icon name="Share" size={24} color="var(--color-text-secondary)" />
                    </button>
                  </div>
                  <span className="font-body text-sm text-text-secondary">
                    {selectedPost?.timestamp}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="font-body text-sm text-text-primary">
                    <span className="font-medium">4mor_fit_collective</span> {selectedPost?.caption}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>{selectedPost?.likes} mentions J'aime</span>
                  <span>{selectedPost?.comments} commentaires</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;