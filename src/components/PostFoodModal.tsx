import React, { useState } from 'react';
import { X, Upload, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useFoodContext } from '@/contexts/FoodContext';
import { useToast } from '@/hooks/use-toast';

interface PostFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostFoodModal = ({ isOpen, onClose }: PostFoodModalProps) => {
  const { addListing } = useFoodContext();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    business: '',
    description: '',
    servings: '',
    category: 'Ready Meals',
    pickupTime: '',
    address: '',
    phone: '',
    image: null as File | null
  });

  // Helper function to calculate time left
  const calculateTimeLeft = (pickupTime: string) => {
    const now = new Date();
    const pickup = new Date(pickupTime);
    const diffInHours = Math.abs(pickup.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return `${Math.round(diffInHours * 60)} minutes`;
    } else if (diffInHours < 24) {
      return `${Math.round(diffInHours)} hours`;
    } else {
      return `${Math.round(diffInHours / 24)} days`;
    }
  };

  // Helper function to get emoji based on category
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'Ready Meals': return '🍽️';
      case 'Baked Goods': return '🥐';
      case 'Fresh Produce': return '🥬';
      case 'Dairy': return '🥛';
      default: return '🍴';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate random coordinates near San Francisco for demo
    const lat = 37.7749 + (Math.random() - 0.5) * 0.1;
    const lng = -122.4194 + (Math.random() - 0.5) * 0.1;
    
    // Calculate distance (mock calculation)
    const distance = `${(Math.random() * 2 + 0.2).toFixed(1)} miles`;
    
    // Determine status based on time left
    const timeLeft = calculateTimeLeft(formData.pickupTime);
    const hoursLeft = parseFloat(timeLeft);
    const status = hoursLeft < 2 ? 'urgent' : 'available';

    const newListing = {
      title: formData.title,
      business: formData.business,
      distance: distance,
      timeLeft: timeLeft,
      servings: formData.servings,
      image: getCategoryEmoji(formData.category),
      category: formData.category,
      status: status as 'available' | 'urgent',
      phone: formData.phone,
      lat: lat,
      lng: lng,
      address: formData.address,
      description: formData.description,
      pickupTime: formData.pickupTime
    };

    addListing(newListing);
    
    toast({
      title: "Food Posted Successfully!",
      description: "Your food listing is now available for people to claim.",
    });
    
    onClose();
    setFormData({
      title: '',
      business: '',
      description: '',
      servings: '',
      category: 'Ready Meals',
      pickupTime: '',
      address: '',
      phone: '',
      image: null
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Post Available Food</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Fresh Sandwiches"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your business name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Describe the food items..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servings *
                </label>
                <input
                  type="text"
                  name="servings"
                  value={formData.servings}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 15-20 people"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="Ready Meals">Ready Meals</option>
                  <option value="Baked Goods">Baked Goods</option>
                  <option value="Fresh Produce">Fresh Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Pickup By *
                </label>
                <input
                  type="datetime-local"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your contact number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Pickup Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Full pickup address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="inline h-4 w-4 mr-1" />
                Photo (Optional)
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Post Food
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostFoodModal;
