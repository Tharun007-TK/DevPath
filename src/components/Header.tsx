
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { toast } = useToast();

  const handleSignIn = () => {
    toast({
      title: "Coming Soon",
      description: "Sign in functionality will be available in a future update.",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
            <span className="font-bold text-xl hidden md:inline-block">DevPath.io</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Roadmap</Link>
            <Link to="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Resources</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={handleSignIn}>Sign In</Button>
          <Button size="sm" onClick={handleSignIn}>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
