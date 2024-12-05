import React from 'react';
import { Building, Star } from 'lucide-react';

const universities = [
  {
    name: "University of Ghana",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80",
    programs: 150,
    rating: 4.8
  },
  {
    name: "Kwame Nkrumah University",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80",
    programs: 120,
    rating: 4.7
  },
  {
    name: "Ashesi University",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80",
    programs: 45,
    rating: 4.9
  }
];

export default function Universities() {
  return (
    <section className="py-20 relative">
      {/* Neural Network Pattern Background */}
      <div className="absolute inset-0 -z-10">
        {/* Neural Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
      </div>

      {/* Rest of your Universities content */}
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Universities</h2>
          <p className="text-xl text-gray-600">Learn from Ghana's top educational institutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Building className="w-12 h-12 text-indigo-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">{university.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{university.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{university.programs}+ Programs</span>
                <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition">
                  View Programs
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-200">
            View All Universities
          </button>
        </div>
      </div>
    </section>
  );
}