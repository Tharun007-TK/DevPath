
import React from 'react';
import RoadmapHero from '@/components/RoadmapHero';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import ProgressStats from '@/components/ProgressStats';
import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <RoadmapHero />
        <RoadmapTimeline />
        <ProgressStats />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
