
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FoodListing {
  id: number;
  title: string;
  business: string;
  distance: string;
  timeLeft: string;
  servings: string;
  image: string;
  category: string;
  status: 'available' | 'urgent' | 'claimed';
  phone: string;
  lat: number;
  lng: number;
  address: string;
  description?: string;
  pickupTime: string;
}

interface FoodContextType {
  listings: FoodListing[];
  addListing: (listing: Omit<FoodListing, 'id'>) => void;
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

// Sample initial listings
const initialListings: FoodListing[] = [
  {
    id: 1,
    title: "Fresh Sandwiches & Wraps",
    business: "Corner Deli",
    distance: "0.4 miles",
    timeLeft: "3 hours",
    servings: "15-20 people",
    image: "🥪",
    category: "Ready Meals",
    status: "available",
    phone: "(555) 123-4567",
    lat: 37.7749,
    lng: -122.4194,
    address: "123 Main St, San Francisco, CA",
    pickupTime: "2024-06-20T18:00"
  },
  {
    id: 2,
    title: "Assorted Pastries",
    business: "Morning Glory Bakery",
    distance: "0.8 miles", 
    timeLeft: "1.5 hours",
    servings: "25-30 people",
    image: "🥐",
    category: "Baked Goods",
    status: "urgent",
    phone: "(555) 234-5678",
    lat: 37.7849,
    lng: -122.4094,
    address: "456 Oak Ave, San Francisco, CA",
    pickupTime: "2024-06-20T16:30"
  },
  {
    id: 3,
    title: "Fresh Produce Mix",
    business: "Green Valley Market",
    distance: "1.2 miles",
    timeLeft: "5 hours",
    servings: "10-15 people",
    image: "🥬",
    category: "Fresh Produce",
    status: "available",
    phone: "(555) 345-6789",
    lat: 37.7649,
    lng: -122.4294,
    address: "789 Pine St, San Francisco, CA",
    pickupTime: "2024-06-20T20:00"
  },
  {
    id: 4,
    title: "Pizza Slices",
    business: "Tony's Pizza Palace",
    distance: "0.6 miles",
    timeLeft: "2 hours",
    servings: "20-25 people",
    image: "🍕",
    category: "Ready Meals",
    status: "claimed",
    phone: "(555) 456-7890",
    lat: 37.7749,
    lng: -122.4094,
    address: "321 Elm St, San Francisco, CA",
    pickupTime: "2024-06-20T17:00"
  }
];

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [listings, setListings] = useState<FoodListing[]>(initialListings);
  const [claimedItems, setClaimedItems] = useState<number[]>([]);

  const addListing = (newListing: Omit<FoodListing, 'id'>) => {
    const id = Math.max(...listings.map(l => l.id), 0) + 1;
    setListings(prev => [...prev, { ...newListing, id }]);
  };

  const claimListing = (id: number) => {
    if (!claimedItems.includes(id)) {
      setClaimedItems(prev => [...prev, id]);
    }
  };

  return (
    <FoodContext.Provider value={{ listings, addListing, claimListing, claimedItems }}>
      {children}
    </FoodContext.Provider>
  );
};
