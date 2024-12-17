import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, Users, Trophy, Globe2, Book, Code, Stethoscope, Briefcase, Palette, Star, Clock, MapPin, Home, Award } from 'lucide-react';

interface UniversityInfo {
  name: string;
  location: string;
  description: string;
  image: string;
  domains: {
    name: string;
    icon: JSX.Element;
    description: string;
  }[];
  quickFacts: {
    icon: JSX.Element;
    label: string;
    value: string;
  }[];
}

const universities: UniversityInfo[] = [
  {
    name: "University of Ghana",
    location: "Accra, Ghana",
    description: "Ghana's premier university, known for excellence in research and innovation.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    domains: [
      { name: "Medicine", icon: <Stethoscope className="w-5 h-5" />, description: "State-of-the-art medical facilities and research centers" },
      { name: "Computer Science", icon: <Code className="w-5 h-5" />, description: "Modern computing labs and innovative programs" },
      { name: "Business", icon: <Briefcase className="w-5 h-5" />, description: "Industry-focused business education" },
      { name: "Arts & Sciences", icon: <Palette className="w-5 h-5" />, description: "Rich cultural and scientific programs" }
    ],
    quickFacts: [
      { icon: <Users className="w-4 h-4" />, label: "Student Body", value: "38,000+" },
      { icon: <Trophy className="w-4 h-4" />, label: "World Ranking", value: "#10 in Africa" },
      { icon: <Home className="w-4 h-4" />, label: "Campus Life", value: "Vibrant" },
      { icon: <Award className="w-4 h-4" />, label: "Job Placement", value: "85%" }
    ]
  },
  {
    name: "Kwame Nkrumah University",
    location: "Kumasi, Ghana",
    description: "Leading institution in science and technology education in West Africa.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    domains: [
      { name: "Technology", icon: <Code className="w-5 h-5" />, description: "Cutting-edge tech labs and innovation centers" },
      { name: "Engineering", icon: <Building2 className="w-5 h-5" />, description: "Comprehensive engineering programs" },
      { name: "Science", icon: <Book className="w-5 h-5" />, description: "Advanced scientific research facilities" },
      { name: "Mathematics", icon: <Star className="w-5 h-5" />, description: "Strong mathematical foundation" }
    ],
    quickFacts: [
      { icon: <Users className="w-4 h-4" />, label: "Student Body", value: "42,000+" },
      { icon: <Trophy className="w-4 h-4" />, label: "World Ranking", value: "#5 in Africa" },
      { icon: <Home className="w-4 h-4" />, label: "Campus Life", value: "Dynamic" },
      { icon: <Award className="w-4 h-4" />, label: "Job Placement", value: "90%" }
    ]
  },
  {
    name: "Ashesi University",
    location: "Berekuso, Ghana",
    description: "Fostering ethical leadership and innovative thinking in Africa.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    domains: [
      { name: "Computer Science", icon: <Code className="w-5 h-5" />, description: "Innovative computing and software development" },
      { name: "Business", icon: <Briefcase className="w-5 h-5" />, description: "Entrepreneurial business education" },
      { name: "Engineering", icon: <Building2 className="w-5 h-5" />, description: "Practical engineering applications" },
      { name: "Liberal Arts", icon: <Book className="w-5 h-5" />, description: "Well-rounded education approach" }
    ],
    quickFacts: [
      { icon: <Users className="w-4 h-4" />, label: "Student Body", value: "1,200+" },
      { icon: <Trophy className="w-4 h-4" />, label: "World Ranking", value: "#15 in Africa" },
      { icon: <Home className="w-4 h-4" />, label: "Campus Life", value: "Engaging" },
      { icon: <Award className="w-4 h-4" />, label: "Job Placement", value: "95%" }
    ]
  }
];

export default function Universities() {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="universities" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Partner Universities
          </h2>
          <p className="text-lg text-gray-600">
            Explore our network of prestigious educational institutions
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {universities.map((university) => (
            <motion.div
              key={university.name}
              variants={item}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-semibold text-white">{university.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{university.description}</p>
                  <button
                    onClick={() => setSelectedUniversity(selectedUniversity === university.name ? null : university.name)}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-5 h-5" />
                    {selectedUniversity === university.name ? 'Show Less' : 'Explore Programs'}
                  </button>
                </div>

                <AnimatePresence>
                  {selectedUniversity === university.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t border-gray-100">
                        {/* Quick Facts */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {university.quickFacts.map((fact, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                                {fact.icon}
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">{fact.label}</p>
                                <p className="font-semibold text-gray-900">{fact.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Academic Domains */}
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                          Academic Excellence
                        </h4>
                        <div className="grid gap-3">
                          {university.domains.map((domain, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <div className="text-indigo-600">
                                  {domain.icon}
                                </div>
                                <h5 className="font-medium text-gray-900">{domain.name}</h5>
                              </div>
                              <p className="text-sm text-gray-600 ml-7">
                                {domain.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Additional Resources */}
                        <div className="mt-4 flex gap-2">
                          <button className="flex-1 px-3 py-2 text-sm bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                            <Book className="w-4 h-4" />
                            Programs Guide
                          </button>
                          <button className="flex-1 px-3 py-2 text-sm bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            Student Life
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}