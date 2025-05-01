
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-6xl py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DevPath.io</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete learning platform for mastering frontend development skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At DevPath.io, we're on a mission to transform the way people learn frontend development. 
                We believe that learning should be structured, engaging, and accessible to everyone.
              </p>
              <p className="text-muted-foreground">
                Our comprehensive roadmap bridges the gap between traditional coding and modern no-code 
                development, giving you a complete skill set for the ever-evolving tech landscape.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We've created a step-by-step learning journey that combines interactive lessons, 
                hands-on projects, and engaging quizzes to help you master frontend skills.
              </p>
              <p className="text-muted-foreground">
                Our content is thoughtfully crafted by industry experts and educators with years 
                of experience in both teaching and working in the field.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Comprehensive Roadmap</h3>
                <p className="text-sm text-muted-foreground">
                  From basic HTML to advanced no-code tools, our curriculum covers the entire spectrum of frontend development.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Learn by doing with code playgrounds, interactive demos, and hands-on projects that reinforce concepts.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Our gamified learning system helps you track progress, earn badges, and stay motivated throughout your journey.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Expert-Crafted Content</h3>
                <p className="text-sm text-muted-foreground">
                  All lessons and resources are created by industry professionals with real-world experience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Coding to No-Code</h3>
                <p className="text-sm text-muted-foreground">
                  Learn both traditional development and modern no-code approaches to build websites and apps.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Community Support</h3>
                <p className="text-sm text-muted-foreground">
                  Join a vibrant community of learners sharing knowledge and helping each other grow.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Meet The Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our team consists of passionate educators, developers, and designers 
              dedicated to creating the best learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-medium">Team Member {i + 1}</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
