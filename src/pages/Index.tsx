
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FoodListings from '@/components/FoodListings';
import LocationMap from '@/components/LocationMap';
import HowItWorks from '@/components/HowItWorks';
import ImpactStats from '@/components/ImpactStats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FoodListings />
      <LocationMap />
      <HowItWorks />
      <ImpactStats />
      <Footer />
    </div>
  );
};

export default Index;
