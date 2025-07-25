import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and description */}
        <div className="mb-6">
          <a href="#hero" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            LEWIS
          </a>
          <p className="mt-2 text-gray-400 max-w-md">
            Full Stack Developer specializing in creating dynamic software solutions using modern technologies.
          </p>
        </div>
        
        {/* Links section - side by side on mobile */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:flex lg:justify-end lg:space-x-16">
          <div>
            <h4 className="font-bold mb-2 text-gray-300">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-2 text-gray-300">Connect</h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="https://github.com/lewismosage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/lewismosage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/lewismosage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-2 sm:mb-0">
              &copy; {currentYear} Lewis Mosage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;