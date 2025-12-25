
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import FeatureVideo from './components/FeatureVideo';
import StatsSection from './components/StatsSection';
import GrowthSection from './components/GrowthSection';
import WorkGrid from './components/WorkGrid';
import ServicesGrid from './components/ServicesGrid';
import LargeCTA from './components/LargeCTA';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';
import PolicyPage from './components/PolicyPage';
import { POLICIES } from './lib/policies';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Call once to handle the initial load if there's a hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // Normalize route for comparison
    const normalizedRoute = route.replace(/^#\/?/, ''); // Removes # or #/

    // Basic Home Route
    if (normalizedRoute === '' || normalizedRoute === '/') {
      return (
        <>
          <Hero />
          <LogoStrip />
          <FeatureVideo />
          <StatsSection />
          <GrowthSection />
          <WorkGrid />
          <ServicesGrid />
          <LargeCTA />
          <ArticlesSection />
        </>
      );
    }

    // Policy Routes
    // The policyKey should be the part after #/ or #
    const policy = POLICIES[normalizedRoute];
    
    if (policy) {
      return <PolicyPage policy={policy} />;
    }

    // Fallback to Home if route not found
    return (
      <div className="min-h-screen pt-40 flex items-center justify-center bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="text-center relative z-10">
          <h2 className="text-4xl font-heading mb-6">404 - PAGE NOT FOUND</h2>
          <p className="text-gray-500 mb-8 font-serif">The page you're looking for doesn't exist or has been moved.</p>
          <a href="#/" className="inline-block px-8 py-3 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
