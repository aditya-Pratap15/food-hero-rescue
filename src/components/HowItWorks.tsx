
import React from 'react';
import { Store, Hand, Truck, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Store,
      title: "Businesses Post",
      description: "Restaurants and stores post their surplus food with pickup details",
      color: "bg-blue-500"
    },
    {
      icon: Hand,
      title: "Volunteers Claim",
      description: "Food rescue heroes claim available items for pickup",
      color: "bg-primary"
    },
    {
      icon: Truck,
      title: "Quick Pickup",
      description: "Fast coordination ensures food stays fresh during transfer",
      color: "bg-secondary"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Food reaches those in need while reducing environmental waste",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How FoodRescue Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 4-step process that transforms food waste into community support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200">
                    <div className="absolute right-0 top-0 w-3 h-3 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
                <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of food rescue heroes making their communities better, one meal at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start as Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Register Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
