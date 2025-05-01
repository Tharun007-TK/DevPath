
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const { toast } = useToast();
  
  const handleSignUp = () => {
    toast({
      title: "Coming Soon",
      description: "Sign up functionality will be available in a future update.",
    });
  };
  
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Frontend Journey?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of learners mastering frontend development from code to no-code tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="px-8" onClick={handleSignUp}>
            Create Free Account
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent text-white border-white hover:bg-white/10">
            View Full Curriculum
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
