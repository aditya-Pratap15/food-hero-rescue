
import React, { useState } from 'react';
import { Heart, MapPin, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PostFoodModal from './PostFoodModal';

const Header = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FoodRescue</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#impact" className="text-gray-600 hover:text-primary transition-colors">
                Impact
              </a>
              <a href="#volunteer" className="text-gray-600 hover:text-primary transition-colors">
                Volunteer
              </a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <MapPin className="h-4 w-4 mr-2" />
                Set Location
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowPostModal(true)}
              >
                Post Food
              </Button>
            </div>
          </div>
        </div>
      </header>

      <PostFoodModal 
        isOpen={showPostModal} 
        onClose={() => setShowPostModal(false)} 
      />
    </>
  );
};

export default Header;
