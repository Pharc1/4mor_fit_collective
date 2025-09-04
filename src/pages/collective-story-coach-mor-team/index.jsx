import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import TeamProfiles from './components/TeamProfiles';
import PhilosophySection from './components/PhilosophySection';
import TestimonialsSection from './components/TestimonialsSection';
import ImpactMetrics from './components/ImpactMetrics';
import MissionStatement from './components/MissionStatement';

const CollectiveStoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Notre Histoire - Coach Mor & L'Équipe 4m'or Fit Collective</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire authentique de Coach Mor et son équipe. De la formation française d'élite à la démocratisation du fitness fonctionnel à Dakar. Une communauté unie par la passion du sport." 
        />
        <meta name="keywords" content="Coach Mor, 4mor Fit Collective, fitness Dakar, entraîneur français, équipe fitness, histoire collective, sport Sénégal" />
        <meta property="og:title" content="Notre Histoire - Coach Mor & L'Équipe 4m'or Fit Collective" />
        <meta property="og:description" content="L'histoire inspirante de Coach Mor et de son équipe passionnée qui révolutionne le fitness à Dakar" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/histoire" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Coach Mor Introduction */}
          <HeroSection />
          
          {/* Journey Timeline from France to Dakar */}
          <JourneyTimeline />
          
          {/* Team Member Profiles */}
          <TeamProfiles />
          
          {/* Philosophy - Three Meanings of 4mor */}
          <PhilosophySection />
          
          {/* Community Testimonials */}
          <TestimonialsSection />
          
          {/* Impact Metrics and Community Stats */}
          <ImpactMetrics />
          
          {/* Mission Statement and Vision */}
          <MissionStatement />
        </main>
      </div>
    </>
  );
};

export default CollectiveStoryPage;