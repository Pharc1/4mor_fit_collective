import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageFitnessMovementPortal from './pages/homepage-fitness-movement-portal';
import TrainingServicesInteractiveUniverse from './pages/training-services-interactive-universe';
import CollectiveStoryPage from './pages/collective-story-coach-mor-team';
import CorporateSolutionsPage from './pages/corporate-solutions-professional-partnership-hub';
import ContactBookingPage from './pages/contact-booking-multi-channel-engagement';
import LocationExperienceInteractiveVenues from './pages/location-experience-interactive-venues';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageFitnessMovementPortal />} />
        <Route path="/accueil" element={<HomepageFitnessMovementPortal />} />
        <Route path="/services" element={<TrainingServicesInteractiveUniverse />} />
        <Route path="/histoire" element={<CollectiveStoryPage />} />
        <Route path="/entreprises" element={<CorporateSolutionsPage />} />
        <Route path="/contact" element={<ContactBookingPage />} />
        <Route path="/lieux" element={<LocationExperienceInteractiveVenues />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
