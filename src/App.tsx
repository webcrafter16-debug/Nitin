/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Agency Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { PortfolioIndexPage } from './pages/PortfolioIndexPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Portfolio Concept Demos
import { CleaningDemo } from './pages/demos/CleaningDemo';
import { PlumbingDemo } from './pages/demos/PlumbingDemo';
import { DentalDemo } from './pages/demos/DentalDemo';
import { RestaurantDemo } from './pages/demos/RestaurantDemo';
import { SalonDemo } from './pages/demos/SalonDemo';
import { FitnessDemo } from './pages/demos/FitnessDemo';
import { RoofingDemo } from './pages/demos/RoofingDemo';
import { ElectricianDemo } from './pages/demos/ElectricianDemo';
import { LandscapingDemo } from './pages/demos/LandscapingDemo';
import { SummitMultiPageDemo } from './pages/demos/SummitMultiPageDemo';
import { EcommerceStoreDemo } from './pages/demos/EcommerceStoreDemo';

// Layout wrapper to show agency navbar and footer on agency pages
const AppContent: React.FC = () => {
  const location = useLocation();
  const isDemoRoute = 
    location.pathname.startsWith('/portfolio/demo') || 
    location.pathname.startsWith('/ecommerce-demo');

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {!isDemoRoute && <Navbar />}
      
      <main className="flex-1">
        <Routes>
          {/* Agency Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioIndexPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Working Portfolio Concept Demos */}
          <Route path="/portfolio/demo/sparklecraft-cleaning" element={<CleaningDemo />} />
          <Route path="/portfolio/demo/apex-plumbing" element={<PlumbingDemo />} />
          <Route path="/portfolio/demo/lumina-dental" element={<DentalDemo />} />
          <Route path="/portfolio/demo/osteria-rustica" element={<RestaurantDemo />} />
          <Route path="/portfolio/demo/velvet-sage-salon" element={<SalonDemo />} />
          <Route path="/portfolio/demo/ironforge-gym" element={<FitnessDemo />} />
          <Route path="/portfolio/demo/ironpeak-roofing" element={<RoofingDemo />} />
          <Route path="/portfolio/demo/voltmaster-electrical" element={<ElectricianDemo />} />
          <Route path="/portfolio/demo/verdant-landscapes" element={<LandscapingDemo />} />
          <Route path="/portfolio/demo/summit-regional/*" element={<SummitMultiPageDemo />} />
          
          {/* E-Commerce Demo */}
          <Route path="/ecommerce-demo" element={<EcommerceStoreDemo />} />

          {/* Custom 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isDemoRoute && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </CurrencyProvider>
  );
}
