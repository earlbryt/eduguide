import React, { useState, useEffect } from 'react';
import { Building, Star, Users, BookOpen, Trophy, ArrowRight, MapPin, Sparkles } from 'lucide-react';

const universities = [
  {
    name: "University of Ghana",
    logo: "/universities/uog-logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    location: "Accra, Ghana",
    programs: 150,
    rating: 4.8,
    students: "38,000+",
    established: 1948,
    achievements: "Top 10 in Africa",
    description: "Ghana's premier university, known for excellence in research and innovation.",
    specialties: ["Medicine", "Engineering", "Business", "Arts"],
    colors: {
      primary: "from-blue-600 to-indigo-600",
      secondary: "from-blue-400 to-indigo-400"
    }
  },
  {
    name: "Kwame Nkrumah University",
    logo: "/universities/knust-logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    location: "Kumasi, Ghana",
    programs: 120,
    rating: 4.7,
    students: "42,000+",
    established: 1952,
    achievements: "Best Technical University",
    description: "Leading institution in science and technology education in West Africa.",
    specialties: ["Technology", "Engineering", "Science", "Mathematics"],
    colors: {
      primary: "from-purple-600 to-pink-600",
      secondary: "from-purple-400 to-pink-400"
    }
  },
  {
    name: "Ashesi University",
    logo: "/universities/ashesi-logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    location: "Berekuso, Ghana",
    programs: 45,
    rating: 4.9,
    students: "1,200+",
    established: 2002,
    achievements: "Most Innovative",
    description: "Fostering ethical leadership and innovative thinking in Africa.",
    specialties: ["Computer Science", "Business", "Engineering", "Liberal Arts"],
    colors: {
      primary: "from-emerald-600 to-teal-600",
      secondary: "from-emerald-400 to-teal-400"
    }
  }
];

export default function Universities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 animate-[move_20s_linear_infinite] opacity-10"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%234338ca\' fill-opacity=\'0.49\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-7xl">
        {/* Animated Header Section */}
        <div className="text-center mb-24 relative">
          <div className="inline-block relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
            
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-wider uppercase mb-3 block animate-fadeIn">
              World-Class Education
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slideUp relative">
              Partner Universities
              <span className="absolute -top-2 -right-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 animate-fadeIn max-w-2xl mx-auto">
              Learn from Ghana's most prestigious educational institutions
            </p>
          </div>
        </div>

        {/* Universities Grid with Premium Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 ${
                selectedUniversity === index ? 'md:col-span-3' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedUniversity(selectedUniversity === index ? null : index)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'none'
              }}
            >
              <div className={`
                relative overflow-hidden rounded-2xl transition-all duration-500
                ${hoveredIndex === index ? 'shadow-2xl shadow-indigo-200' : 'shadow-lg'}
                ${selectedUniversity === index ? 'md:grid md:grid-cols-2 gap-8' : ''}
                group-hover:shadow-2xl group-hover:shadow-indigo-200
              `}>
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r ${university.colors.primary} opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Card Content with Glass Effect */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 h-full">
                  {/* University Image */}
                  <div className="relative mb-6 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {university.name}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1.5 text-sm font-medium text-white">{university.rating}</span>
                        </div>
                        <div className="flex items-center text-white/90">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{university.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid with Animated Hover */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="relative overflow-hidden group/stat rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r ${university.colors.primary} opacity-0 group-hover/stat:opacity-10 transition-opacity"></div>
                      <div className="relative bg-gray-50 rounded-xl p-4 group-hover/stat:bg-white transition-colors">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-indigo-600" />
                          <span className="text-sm font-medium text-gray-600">Programs</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {university.programs}+
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden group/stat rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r ${university.colors.primary} opacity-0 group-hover/stat:opacity-10 transition-opacity"></div>
                      <div className="relative bg-gray-50 rounded-xl p-4 group-hover/stat:bg-white transition-colors">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-indigo-600" />
                          <span className="text-sm font-medium text-gray-600">Students</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {university.students}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content with Animations */}
                  <div className={`
                    transition-all duration-500 overflow-hidden
                    ${selectedUniversity === index ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}
                  `}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                        <p className="text-gray-600">{university.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {university.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className={`
                                px-3 py-1 rounded-full text-sm relative overflow-hidden group/tag
                                hover:scale-105 transform transition-all duration-300
                              `}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r ${university.colors.primary} opacity-10"></div>
                              <span className="relative text-transparent bg-clip-text bg-gradient-to-r ${university.colors.primary}">
                                {specialty}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-600">{university.achievements}</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Action Button */}
                  <div className="mt-6">
                    <button className={`
                      group/btn relative w-full overflow-hidden rounded-xl
                      px-6 py-3 bg-gradient-to-r ${university.colors.primary}
                      text-white transition-all duration-300
                      hover:shadow-lg hover:shadow-indigo-200/50
                      focus:ring-4 focus:ring-indigo-200
                    `}>
                      <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                      <div className="relative flex items-center justify-center space-x-2">
                        <span className="font-semibold">Explore Programs</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Call to Action */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-20 -z-10"></div>
          <button className="
            relative group inline-flex items-center px-8 py-4
            bg-gradient-to-r from-indigo-600 to-purple-600
            hover:from-indigo-500 hover:to-purple-500
            text-white rounded-xl
            transform hover:-translate-y-1
            transition-all duration-300
            focus:ring-4 focus:ring-indigo-200
          ">
            <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></div>
            <span className="relative text-lg font-semibold mr-2">View All Universities</span>
            <ArrowRight className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}