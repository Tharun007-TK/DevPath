
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
              <span className="font-bold text-xl">DevPath.io</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your journey from code to no-code mastery starts here.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Learning Paths</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Frontend Basics</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Javascript Frameworks</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">CSS & Styling</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">No-Code Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">Tutorials</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">Documentation</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevPath.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
