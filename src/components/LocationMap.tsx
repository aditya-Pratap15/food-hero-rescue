
import React from 'react';
import GoogleMap from './GoogleMap';
import { useFoodContext } from '@/contexts/FoodContext';

const LocationMap = () => {
  const { listings } = useFoodContext();

  // Convert listings to map markers
  const foodLocations = listings
    .filter(listing => listing.lat && listing.lng)
    .map(listing => ({
      lat: listing.lat!,
      lng: listing.lng!,
      title: listing.business,
      info: `
        <div style="padding: 8px;">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">${listing.title}</h3>
          <p style="margin: 0; color: #666;">${listing.business} • ${listing.distance}</p>
          <p style="margin: 4px 0 0 0; color: ${listing.status === 'urgent' ? '#dc2626' : '#16a34a'}; font-weight: bold;">
            ${listing.status === 'urgent' ? 'Urgent - ' + listing.timeLeft + ' left' : 'Available'}
          </p>
        </div>
      `
    }));

  const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Food Locations Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See available food on the map and find the closest options
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: '500px' }}>
          <GoogleMap
            center={center}
            zoom={13}
            markers={foodLocations}
            className="w-full h-full"
          />
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            🗺️ <strong>Tip:</strong> Click on the markers to see more details about available food items
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
