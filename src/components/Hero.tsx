
import React from 'react';
import { ArrowRight, Users, Leaf, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Save Food,{' '}
              <span className="text-primary">Save Lives</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect surplus food from local businesses with volunteers and NGOs. 
              Together, we can reduce waste and help feed our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Find Food Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Become a Hero
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Reduce Waste</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Help Community</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Act Fast</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">Today's Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold">1,247</p>
                    <p className="text-sm opacity-90">Meals Saved</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">89</p>
                    <p className="text-sm opacity-90">Active Heroes</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🍞</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Fresh Bread & Pastries</h4>
                    <p className="text-sm text-gray-600">Sunny Bakery • 0.3 miles away</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Available
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🥗</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Fresh Salads</h4>
                    <p className="text-sm text-gray-600">Green Garden Café • 0.7 miles away</p>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    2h left
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
