
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import FeatureVideo from './components/FeatureVideo';
import StatsSection from './components/StatsSection';
import GrowthSection from './components/GrowthSection';
import WorkGrid from './components/WorkGrid';
import ServicesGrid from './components/ServicesGrid';
import LargeCTA from './components/LargeCTA';
import ArticlesSection from './components/ArticlesSection';
import PolicyPageWrapper from './components/PolicyPageWrapper';

const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const HomePage = () => (
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

const NotFoundPage = () => (
  <div className="min-h-screen pt-40 flex items-center justify-center bg-grid relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    <div className="text-center relative z-10 px-4">
      <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">404</h2>
      <p className="text-gray-500 mb-8 font-serif text-lg">The page you're looking for doesn't exist.</p>
      <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
        Back to Home
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-black selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<PolicyPageWrapper />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
