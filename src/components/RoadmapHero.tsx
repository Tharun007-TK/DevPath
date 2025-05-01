
import React from 'react';
import { Button } from '@/components/ui/button';

const RoadmapHero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Frontend Development Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A guided roadmap from coding fundamentals to no-code design mastery
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="px-8">Start Learning</Button>
            <Button size="lg" variant="outline" className="px-8">Explore Roadmap</Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Learning Paths</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">24+</div>
              <div className="text-sm text-muted-foreground">Interactive Modules</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Hands-on Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Practice Quizzes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapHero;
