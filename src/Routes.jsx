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
        <Route path="/" element={<CollectiveStoryPage />} />
        <Route path="/homepage-fitness-movement-portal" element={<HomepageFitnessMovementPortal />} />
        <Route path="/training-services-interactive-universe" element={<TrainingServicesInteractiveUniverse />} />
        <Route path="/collective-story-coach-mor-team" element={<CollectiveStoryPage />} />
        <Route path="/corporate-solutions-professional-partnership-hub" element={<CorporateSolutionsPage />} />
        <Route path="/contact-booking-multi-channel-engagement" element={<ContactBookingPage />} />
        <Route path="/location-experience-interactive-venues" element={<LocationExperienceInteractiveVenues />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
