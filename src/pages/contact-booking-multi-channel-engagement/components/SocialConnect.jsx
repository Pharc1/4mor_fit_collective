import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@4morfit",
      followers: "12.5K",
      description: "Photos et vidéos d\'entraînement quotidiennes",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: "Instagram",
      url: "https://instagram.com/4morfit"
    },
    {
      name: "Facebook",
      handle: "4mor Fit Collective",
      followers: "8.2K",
      description: "Communauté et événements",
      color: "bg-blue-600",
      icon: "Facebook",
      url: "https://facebook.com/4morfit"
    },
    {
      name: "TikTok",
      handle: "@4morfit",
      followers: "25.8K",
      description: "Défis fitness et motivation",
      color: "bg-black",
      icon: "Music",
      url: "https://tiktok.com/@4morfit"
    },
    {
      name: "YouTube",
      handle: "4mor Fit Collective",
      followers: "3.1K",
      description: "Tutoriels et séances complètes",
      color: "bg-red-600",
      icon: "Play",
      url: "https://youtube.com/@4morfit"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      caption: "Session matinale intense avec l\'équipe! 💪 #4morfit #crosstraining #dakar",
      likes: 234,
      comments: 18,
      timeAgo: "2h"
    },
    {
      id: 2,
      platform: "TikTok",
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&h=400&fit=crop",
      caption: "Défi burpees 30 secondes! Qui peut faire mieux? 🔥",
      likes: 1205,
      comments: 89,
      timeAgo: "5h"
    },
    {
      id: 3,
      platform: "Facebook",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      caption: "Merci à tous pour cette superbe session corporate avec l\'équipe de Sonatel! 🙌",
      likes: 156,
      comments: 23,
      timeAgo: "1j"
    },
    {
      id: 4,
      platform: "YouTube",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
      caption: "Nouvelle vidéo: \'Cross Training pour débutants - 20 minutes'",
      likes: 89,
      comments: 12,
      timeAgo: "2j"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppCommunity = () => {
    const message = "Salut! Je souhaite rejoindre la communauté WhatsApp 4mor Fit pour recevoir les updates et conseils fitness.";
    window.open(`https://wa.me/221123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-white mb-4">
            Rejoignez Notre Communauté
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-3xl mx-auto">
            Suivez-nous sur les réseaux sociaux pour du contenu fitness quotidien, 
            des défis communautaires et des conseils d'experts. Plus de 50,000 membres 
            nous font confiance!
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialPlatforms?.map((platform, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
              onClick={() => handleSocialClick(platform?.url)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${platform?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={platform?.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <p className="font-cta text-lg text-white">{platform?.followers}</p>
                    <p className="font-body text-xs text-gray-400">followers</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-cta text-lg text-white mb-1">{platform?.name}</h3>
                  <p className="font-body text-sm text-gray-400 mb-2">{platform?.handle}</p>
                  <p className="font-body text-xs text-gray-500">{platform?.description}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Suivre
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Posts Feed */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-cta text-2xl text-white mb-2">
              Dernières Publications
            </h3>
            <p className="font-body text-gray-400">
              Découvrez notre contenu récent et l'activité de notre communauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts?.map((post) => (
              <div
                key={post?.id}
                className="bg-card rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src={post?.image}
                      alt={`Post ${post?.platform}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-body rounded-full">
                      {post?.platform}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-body rounded-full">
                      {post?.timeAgo}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className="font-body text-sm text-gray-300 line-clamp-2">
                    {post?.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{post?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{post?.comments}</span>
                      </div>
                    </div>
                    <button className="text-secondary hover:text-secondary/80 transition-colors">
                      <Icon name="ExternalLink" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Community */}
        <div className="mt-12 bg-green-900/20 rounded-xl p-8 border border-green-700/30">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            
            <div>
              <h3 className="font-cta text-2xl text-white mb-2">
                Communauté WhatsApp Exclusive
              </h3>
              <p className="font-body text-gray-300 max-w-2xl mx-auto">
                Rejoignez notre groupe WhatsApp privé pour recevoir des conseils fitness quotidiens, 
                des défis exclusifs, et échanger avec plus de 500 membres actifs de la communauté 4mor Fit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Users" size={20} className="text-green-400" />
                </div>
                <p className="font-body text-sm text-gray-300">500+ Membres</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Zap" size={20} className="text-green-400" />
                </div>
                <p className="font-body text-sm text-gray-300">Conseils Quotidiens</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Trophy" size={20} className="text-green-400" />
                </div>
                <p className="font-body text-sm text-gray-300">Défis Exclusifs</p>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppCommunity}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-green-600 hover:bg-green-700 text-white font-cta"
            >
              Rejoindre la Communauté WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;