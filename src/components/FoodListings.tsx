
import React from 'react';
import { Clock, MapPin, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useFoodContext } from '@/contexts/FoodContext';

const FoodListings = () => {
  const { listings, claimListing, claimedItems } = useFoodContext();

  const handleClaim = (id: number, businessPhone: string) => {
    if (claimedItems.includes(id)) return;
    
    claimListing(id);
    alert(`Food claimed! Contact ${businessPhone} for pickup details.`);
  };

  const getStatusColor = (status: string, id: number) => {
    if (claimedItems.includes(id) || status === 'claimed') {
      return 'bg-gray-100 text-gray-600';
    }
    switch (status) {
      case 'urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const getButtonText = (status: string, id: number) => {
    if (claimedItems.includes(id)) return 'You Claimed This!';
    if (status === 'claimed') return 'Already Claimed';
    return 'Claim for Pickup';
  };

  return (
    <section id="food-listings" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Available Food Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time listings from local businesses ready to share their surplus food
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{listing.imageEmoji}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status, listing.id)}`}>
                    {claimedItems.includes(listing.id) ? 'Claimed by You' :
                     listing.status === 'urgent' ? 'Urgent' : 
                     listing.status === 'claimed' ? 'Claimed' : 'Available'}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {listing.title}
                </h3>
                
                <p className="text-gray-600 font-medium mb-4">
                  {listing.business}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {listing.distance}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {listing.timeLeft} remaining
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Serves {listing.servings}
                  </div>
                  {(claimedItems.includes(listing.id) || listing.status !== 'claimed') && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {listing.phone}
                    </div>
                  )}
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={listing.status === 'claimed' && !claimedItems.includes(listing.id)}
                  variant={listing.status === 'claimed' && !claimedItems.includes(listing.id) ? 'secondary' : 'default'}
                  onClick={() => handleClaim(listing.id, listing.phone)}
                >
                  {getButtonText(listing.status, listing.id)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Load More Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodListings;
