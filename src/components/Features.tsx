import React, { useState } from 'react';
import { Brain, Target, Users, Star, ArrowRight, Sparkles, Globe, BookOpen, ChevronRight, GraduationCap, Award, Check, MapPin, School, Search, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const features = [
  {
    id: 'explore',
    title: 'Explore Programs',
    description: 'Discover and explore prestigious academic programs tailored to your interests and career aspirations across Ghana\'s top universities.',
    icon: <Target className="w-6 h-6" />,
    modalContent: {
      title: 'Explore Academic Programs',
      sections: [
        {
          title: 'Program Details',
          icon: <GraduationCap className="w-5 h-5" />,
          items: [
            'Program curriculum',
            'Duration and format',
            'Admission requirements',
            'Career prospects'
          ]
        },
        {
          title: 'University Information',
          icon: <School className="w-5 h-5" />,
          items: [
            'University overview',
            'Rankings and accreditation',
            'Campus life and facilities',
            'Support services'
          ]
        }
      ]
    }
  },
  {
    id: 'guidance',
    title: 'Expert Academic Guidance',
    description: 'Connect directly with distinguished professors and admission officers who will guide you through your academic journey.',
    icon: <Brain className="w-6 h-6" />,
    modalContent: {
      title: 'Expert Academic Guidance',
      sections: [
        {
          title: 'One-on-One Mentorship',
          icon: <Users className="w-5 h-5" />,
          items: [
            'Personalized guidance and support',
            'Regular check-ins and progress tracking',
            'Career development and planning',
            'Networking opportunities'
          ]
        },
        {
          title: 'Admission Strategy',
          icon: <Award className="w-5 h-5" />,
          items: [
            'Application review and feedback',
            'Interview preparation and coaching',
            'Admission strategy development',
            'Scholarship and financial aid guidance'
          ]
        }
      ]
    }
  },
  {
    id: 'career',
    title: 'Career Excellence',
    description: 'Map your path to success with insights into emerging career opportunities, industry trends, and professional development.',
    icon: <Globe className="w-6 h-6" />,
    modalContent: {
      title: 'Career Excellence',
      sections: [
        {
          title: 'Career Insights',
          icon: <MapPin className="w-5 h-5" />,
          items: [
            'Emerging career opportunities',
            'Industry trends and analysis',
            'Job market outlook and salary ranges',
            'Professional development and growth'
          ]
        },
        {
          title: 'Professional Development',
          icon: <Search className="w-5 h-5" />,
          items: [
            'Skill development and training',
            'Networking and mentorship opportunities',
            'Career coaching and guidance',
            'Resume building and interview preparation'
          ]
        }
      ]
    }
  },
  {
    id: 'roadmap',
    title: 'Personalized Roadmap',
    description: 'Receive a customized academic plan based on your goals, strengths, and aspirations, backed by expert insights.',
    icon: <BookOpen className="w-6 h-6" />,
    modalContent: {
      title: 'Personalized Academic Roadmap',
      sections: [
        {
          title: 'Academic Planning',
          icon: <Calendar className="w-5 h-5" />,
          items: [
            'Customized academic plan development',
            'Course selection and scheduling',
            'Progress tracking and monitoring',
            'Goal achievement support'
          ]
        },
        {
          title: 'Goal Achievement',
          icon: <Clock className="w-5 h-5" />,
          items: [
            'Goal setting and achievement strategies',
            'Regular progress check-ins and feedback',
            'Accountability and support system',
            'Celebrating milestones and successes'
          ]
        }
      ]
    }
  }
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-purple-50/30"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 animate-[move_20s_linear_infinite] opacity-10"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%234338ca\' fill-opacity=\'0.49\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Premium Header Section */}
        <div className="text-center mb-16 sm:mb-24 relative">
          <div className="inline-block">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
            
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 group hover:shadow-lg transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Your Academic Success Journey
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
              Expert Guidance for 
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Your Future</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100/50 -rotate-1"></div>
              </span>
              <span className="absolute -top-2 -right-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn">
              Access world-class academic guidance and resources to make informed decisions about your educational journey
            </p>
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="mb-4 inline-block p-3 bg-indigo-100 rounded-xl text-indigo-600">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  <button
                    onClick={() => setSelectedFeature(feature.id)}
                    className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="font-medium">Learn More</span>
                    <div className="p-1 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      <Modal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        title={features.find(f => f.id === selectedFeature)?.modalContent.title || ''}
      >
        <div className="space-y-8">
          {features
            .find(f => f.id === selectedFeature)
            ?.modalContent.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      key={itemIndex}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-indigo-50/50 transition-colors group"
                    >
                      <div className="mt-1 p-2 rounded-lg bg-white shadow-sm group-hover:shadow group-hover:bg-indigo-500 transition-all">
                        <Star className="w-4 h-4 text-indigo-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

          <div className="sticky bottom-0 pt-6">
            <button
              onClick={() => setSelectedFeature(null)}
              className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center justify-center gap-3 font-medium shadow-lg shadow-indigo-500/20"
            >
              <span>Get Started Now</span>
              <div className="p-1 bg-white/20 rounded-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}