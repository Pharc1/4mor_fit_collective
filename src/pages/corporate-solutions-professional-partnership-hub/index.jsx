import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import MethodologySection from './components/MethodologySection';
import CredentialsSection from './components/CredentialsSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';

const CorporateSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Solutions Corporate - 4mor Fit Collective | Team Building & Wellness Entreprise Dakar</title>
        <meta 
          name="description" 
          content="Transformez vos équipes avec 4mor Fit Collective. Team building authentique, executive fitness et wellness consulting. Expertise française, culture sénégalaise. ROI +45% garanti." 
        />
        <meta name="keywords" content="team building dakar, corporate wellness senegal, formation équipe entreprise, coach mor, functional training corporate, wellness consulting dakar" />
        <meta property="og:title" content="Solutions Corporate - 4mor Fit Collective" />
        <meta property="og:description" content="Team building et wellness corporate à Dakar. Expertise française de Coach Mor pour des équipes plus fortes et performantes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4morfit.sn/corporate-solutions-professional-partnership-hub" />
        <link rel="canonical" href="https://4morfit.sn/corporate-solutions-professional-partnership-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <CaseStudiesSection />
          <MethodologySection />
          <CredentialsSection />
          <PricingSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="font-accent text-white text-xl font-bold">4</span>
                  </div>
                  <div>
                    <span className="font-accent text-2xl text-white tracking-tight">4mor</span>
                    <span className="font-body text-sm text-gray-300 ml-1">Fit Collective</span>
                  </div>
                </div>
                <p className="font-body text-gray-300 leading-relaxed mb-6 max-w-md">
                  Transformez vos équipes avec l'expertise française de Coach Mor et l'authenticité culturelle de Dakar. Pour l'amour du sport et la force collective.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">FR</span>
                    </div>
                    <span className="font-body text-gray-300 text-sm">Expertise Française</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary text-xs font-bold">SN</span>
                    </div>
                    <span className="font-body text-gray-300 text-sm">Culture Locale</span>
                  </div>
                </div>
              </div>

              {/* Contact Corporate */}
              <div>
                <h4 className="font-cta text-white text-lg font-bold mb-4">Contact Corporate</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-secondary text-xs">📞</span>
                    </div>
                    <span className="font-body text-gray-300 text-sm">+221 33 123 45 67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-secondary text-xs">💬</span>
                    </div>
                    <span className="font-body text-gray-300 text-sm">+221 77 123 45 67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-secondary text-xs">✉️</span>
                    </div>
                    <span className="font-body text-gray-300 text-sm">corporate@4morfit.sn</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-cta text-white text-lg font-bold mb-4">Solutions</h4>
                <div className="space-y-2">
                  <p className="font-body text-gray-300 text-sm hover:text-accent cursor-pointer transition-colors">Team Building</p>
                  <p className="font-body text-gray-300 text-sm hover:text-accent cursor-pointer transition-colors">Executive Fitness</p>
                  <p className="font-body text-gray-300 text-sm hover:text-accent cursor-pointer transition-colors">Wellness Consulting</p>
                  <p className="font-body text-gray-300 text-sm hover:text-accent cursor-pointer transition-colors">Formation Sur Mesure</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="font-body text-gray-400 text-sm">
                © {new Date()?.getFullYear()} 4mor Fit Collective. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="font-body text-gray-400 text-sm">Dakar, Sénégal</span>
                <span className="font-body text-accent text-sm font-medium">Pour l'amour du sport</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CorporateSolutionsPage;