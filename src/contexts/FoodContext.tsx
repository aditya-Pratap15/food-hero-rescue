
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FoodListing {
  id: number;
  title: string;
  business: string;
  description: string;
  servings: string;
  category: string;
  pickupTime: string;
  address: string;
  phone: string;
  image: File | null;
  distance: string;
  timeLeft: string;
  status: 'available' | 'urgent' | 'claimed';
  imageEmoji: string;
  lat?: number;
  lng?: number;
}

interface FoodContextType {
  listings: FoodListing[];
  addListing: (listing: Omit<FoodListing, 'id' | 'distance' | 'timeLeft' | 'status' | 'imageEmoji' | 'lat' | 'lng'>) => void;
  claimListing: (id: number) => void;
  claimedItems: number[];
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFoodContext must be used within a FoodProvider');
  }
  return context;
};

const getEmojiForCategory = (category: string): string => {
  switch (category) {
    case 'Ready Meals': return '🥪';
    case 'Baked Goods': return '🥐';
    case 'Fresh Produce': return '🥬';
    case 'Dairy': return '🥛';
    default: return '🍽️';
  }
};

const calculateTimeLeft = (pickupTime: string): string => {
  const now = new Date();
  const pickup = new Date(pickupTime);
  const diffInHours = Math.max(0, (pickup.getTime() - now.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return `${Math.round(diffInHours * 60)} minutes`;
  }
  return `${Math.round(diffInHours)} hours`;
};

const getRandomCoordinates = () => {
  // Generate random coordinates around San Francisco area
  const baseLat = 37.7749;
  const baseLng = -122.4194;
  const radius = 0.05; // roughly 5km radius
  
  return {
    lat: baseLat + (Math.random() - 0.5) * radius,
    lng: baseLng + (Math.random() - 0.5) * radius
  };
};

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [claimedItems, setClaimedItems] = useState<number[]>([]);
  
  // Initial sample listings
  const [listings, setListings] = useState<FoodListing[]>([
    {
      id: 1,
      title: "Fresh Sandwiches & Wraps",
      business: "Corner Deli",
      description: "Assorted sandwiches and wraps",
      servings: "15-20 people",
      category: "Ready Meals",
      pickupTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
      address: "123 Main St, San Francisco",
      phone: "(555) 123-4567",
      image: null,
      distance: "0.4 miles",
      timeLeft: "3 hours",
      status: "available",
      imageEmoji: "🥪",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 2,
      title: "Assorted Pastries",
      business: "Morning Glory Bakery",
      description: "Fresh baked pastries",
      servings: "25-30 people",
      category: "Baked Goods",
      pickupTime: new Date(Date.now() + 1.5 * 60 * 60 * 1000).toISOString(),
      address: "456 Baker St, San Francisco",
      phone: "(555) 234-5678",
      image: null,
      distance: "0.8 miles",
      timeLeft: "1.5 hours",
      status: "urgent",
      imageEmoji: "🥐",
      lat: 37.7849,
      lng: -122.4094
    },
    {
      id: 3,
      title: "Fresh Produce Mix",
      business: "Green Valley Market",
      description: "Mixed fresh vegetables and fruits",
      servings: "10-15 people",
      category: "Fresh Produce",
      pickupTime: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
      address: "789 Green St, San Francisco",
      phone: "(555) 345-6789",
      image: null,
      distance: "1.2 miles",
      timeLeft: "5 hours",
      status: "available",
      imageEmoji: "🥬",
      lat: 37.7649,
      lng: -122.4294
    }
  ]);

  const addListing = (newListing: Omit<FoodListing, 'id' | 'distance' | 'timeLeft' | 'status' | 'imageEmoji' | 'lat' | 'lng'>) => {
    const coordinates = getRandomCoordinates();
    const timeLeft = calculateTimeLeft(newListing.pickupTime);
    const status = parseInt(timeLeft) <= 2 ? 'urgent' : 'available';
    
    const listing: FoodListing = {
      ...newListing,
      id: Date.now(), // Simple ID generation
      distance: `${(Math.random() * 2 + 0.1).toFixed(1)} miles`, // Random distance
      timeLeft,
      status,
      imageEmoji: getEmojiForCategory(newListing.category),
      lat: coordinates.lat,
      lng: coordinates.lng
    };
    
    setListings(prev => [listing, ...prev]);
  };

  const claimListing = (id: number) => {
    setClaimedItems(prev => [...prev, id]);
  };

  return (
    <FoodContext.Provider value={{ listings, addListing, claimListing, claimedItems }}>
      {children}
    </FoodContext.Provider>
  );
};
