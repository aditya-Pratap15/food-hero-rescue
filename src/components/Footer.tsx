
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary rounded-lg p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FoodRescue</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting surplus food with those who need it most. Building stronger, more sustainable communities one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">For Volunteers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sign Up</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Food</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">For Businesses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Register</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post Food</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>hello@foodrescue.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>(555) 123-FOOD</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Your City, Your State</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FoodRescue. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
