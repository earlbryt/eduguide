import React from 'react';
import { Building, Users, GraduationCap, Star } from 'lucide-react';

const stats = [
  {
    icon: Building,
    value: "50+",
    label: "Partner Universities"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Students Guided"
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Programs Available"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating"
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-2 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50">
                <Icon className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}