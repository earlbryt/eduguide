import React, { useState } from 'react';
import { Brain, Target, Users, Star, ArrowRight, Sparkles, Globe, BookOpen, ChevronRight, GraduationCap, Award, Check } from 'lucide-react';

const features = [
  {
    icon: Brain,
    secondaryIcon: Sparkles,
    title: "Explore Programs",
    description: "Discover and explore prestigious academic programs tailored to your interests and career aspirations across Ghana's top universities.",
    stats: "200+ Programs Available",
    gradient: "from-blue-500 to-indigo-600",
    action: "Browse Programs",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Personalized program recommendations",
      "Detailed course curriculum",
      "Industry connections"
    ]
  },
  {
    icon: Users,
    secondaryIcon: Star,
    title: "Expert Academic Guidance",
    description: "Connect directly with distinguished professors and admission officers who will guide you through your academic journey.",
    stats: "50+ Expert Advisors",
    gradient: "from-indigo-500 to-purple-600",
    action: "Meet Our Advisors",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "One-on-one mentorship",
      "Admission strategy planning",
      "Career path guidance"
    ]
  },
  {
    icon: Target,
    secondaryIcon: Globe,
    title: "Career Excellence",
    description: "Map your path to success with insights into emerging career opportunities, industry trends, and professional development.",
    stats: "100+ Career Paths",
    gradient: "from-purple-500 to-pink-600",
    action: "Explore Careers",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Industry trend analysis",
      "Skill development roadmap",
      "Networking opportunities"
    ]
  },
  {
    icon: BookOpen,
    secondaryIcon: ChevronRight,
    title: "Personalized Roadmap",
    description: "Receive a customized academic plan based on your goals, strengths, and aspirations, backed by expert insights.",
    stats: "95% Success Rate",
    gradient: "from-pink-500 to-rose-600",
    action: "Start Journey",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Custom study plans",
      "Progress tracking",
      "Goal achievement support"
    ]
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
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

      <div className="container mx-auto px-8 max-w-7xl">
        {/* Premium Header Section */}
        <div className="text-center mb-24 relative">
          <div className="inline-block">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
            
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 group hover:shadow-lg transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Your Academic Success Journey
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const SecondaryIcon = feature.secondaryIcon;
            const isActive = activeFeature === index;

            return (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Animated Background Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
                
                {/* Card Container */}
                <div className={`
                  relative bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-500
                  ${isActive ? 'shadow-2xl shadow-indigo-200/50 scale-[1.02]' : 'shadow-lg'}
                  group-hover:shadow-2xl group-hover:shadow-indigo-200/50
                  border border-transparent group-hover:border-indigo-100
                  overflow-hidden
                `}>
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="relative p-8">
                    {/* Feature Icon */}
                    <div className="absolute -top-6 -left-6 transform group-hover:-rotate-12 transition-transform duration-300">
                      <div className={`
                        w-24 h-24 rounded-3xl bg-gradient-to-r ${feature.gradient}
                        p-0.5 transform transition-all duration-500
                        group-hover:scale-110 group-hover:shadow-lg
                      `}>
                        <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            group-hover:translate-x-full transform -translate-x-full transition-transform duration-1000">
                          </div>
                          <Icon className={`w-12 h-12 text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-16 pt-4">
                      <h3 className={`
                        text-2xl font-bold mb-3 transition-all duration-300
                        text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}
                      `}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="space-y-3 mb-6">
                        {feature.highlights.map((highlight, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center space-x-2 group/item"
                          >
                            <div className={`
                              w-5 h-5 rounded-full flex items-center justify-center
                              bg-gradient-to-r ${feature.gradient} group-hover/item:scale-110
                              transition-transform duration-300
                            `}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats Badge */}
                      <div className="mb-6">
                        <div className={`
                          inline-flex items-center rounded-full px-4 py-2
                          bg-gradient-to-r ${feature.gradient} group-hover:shadow-lg
                          transition-all duration-300
                        `}>
                          <Award className="w-4 h-4 text-white mr-2" />
                          <span className="text-sm font-medium text-white">{feature.stats}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="group/btn relative w-full overflow-hidden rounded-xl transition-all duration-300">
                        <div className={`
                          absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-90
                          group-hover/btn:opacity-100 transition-opacity
                        `}></div>
                        <div className="relative px-6 py-3 flex items-center justify-between">
                          <span className="font-semibold text-white">{feature.action}</span>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center
                            group-hover/btn:bg-white/30 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white transform 
                              group-hover/btn:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Floating Secondary Icon */}
                    <div className="absolute top-4 right-4 transform group-hover:rotate-12 transition-transform duration-300">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        bg-gradient-to-r ${feature.gradient} group-hover:shadow-lg
                        transition-all duration-300
                      `}>
                        <SecondaryIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}