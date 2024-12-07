import React from 'react';
import { Droplets, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

export function Footer() {
  return (
    <footer className="bg-dark-400 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Droplets className="h-6 w-6 text-red-500" /> */}
              <Logo h="8" w="8" />
              <span className="text-xl font-bold text-white">BloodLink</span>
            </div>
            <p className="text-sm">Building a stronger, healthier community.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">How It Works</a></li>
              <li><a href="#" className="hover:text-red-500">FAQs</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-red-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-red-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-red-500"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BloodLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}