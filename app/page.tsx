
import React from 'react';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import FeatureVideo from '../components/FeatureVideo';
import StatsSection from '../components/StatsSection';
import GrowthSection from '../components/GrowthSection';
import WorkGrid from '../components/WorkGrid';
import ServicesGrid from '../components/ServicesGrid';
import LargeCTA from '../components/LargeCTA';
import ArticlesSection from '../components/ArticlesSection';

export default function Home() {
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
