
import React from 'react';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: Leaf,
      number: "50,000+",
      label: "Pounds of Food Saved",
      description: "Diverted from landfills this month",
      color: "text-green-600"
    },
    {
      icon: Users,
      number: "15,000+",
      label: "People Fed",
      description: "Community members helped",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Success Rate",
      description: "Successful pickups completed",
      color: "text-purple-600"
    },
    {
      icon: Award,
      number: "500+",
      label: "Active Heroes",
      description: "Volunteers making a difference",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Community Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're creating real change in our community and environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className={`${stat.color} mb-4`}>
                <stat.icon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Environmental Impact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      75 Tons CO₂ Prevented
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Equivalent to taking 16 cars off the road for a year
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Growing Movement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      200% increase in participation over the last 6 months
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Award Winner
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Recognized by the City Council for community impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                This Week's Highlights
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Monday</span>
                    <span className="text-primary font-bold">2,100 lbs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Wednesday</span>
                    <span className="text-secondary font-bold">3,200 lbs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Friday</span>
                    <span className="text-accent font-bold">1,800 lbs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
