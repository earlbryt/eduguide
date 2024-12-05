import React from 'react';
import { Brain, Target, Users, Star, ArrowRight, Sparkles, Globe, BookOpen, ChevronRight, GraduationCap, Award } from 'lucide-react';

const features = [
  {
    icon: Brain,
    secondaryIcon: Sparkles,
    title: "Explore Programs",
    description: "Discover and explore prestigious academic programs tailored to your interests and career aspirations across Ghana's top universities.",
    stats: "200+ Programs Available",
    gradient: "from-blue-500 to-indigo-600",
    action: "Browse Programs",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    secondaryIcon: Star,
    title: "Expert Academic Guidance",
    description: "Connect directly with distinguished professors and admission officers who will guide you through your academic journey.",
    stats: "50+ Expert Advisors",
    gradient: "from-indigo-500 to-purple-600",
    action: "Meet Our Advisors",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Target,
    secondaryIcon: Globe,
    title: "Career Excellence",
    description: "Map your path to success with insights into emerging career opportunities, industry trends, and professional development.",
    stats: "100+ Career Paths",
    gradient: "from-purple-500 to-pink-600",
    action: "Explore Careers",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: BookOpen,
    secondaryIcon: ChevronRight,
    title: "Personalized Roadmap",
    description: "Receive a customized academic plan based on your goals, strengths, and aspirations, backed by expert insights.",
    stats: "95% Success Rate",
    gradient: "from-pink-500 to-rose-600",
    action: "Start Journey",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Features() {
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

      <div className="container mx-auto px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-4 py-2 mb-6">
            <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Your Academic Success Journey
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Guidance for Your Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access world-class academic guidance and resources to make informed decisions about your educational journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const SecondaryIcon = feature.secondaryIcon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group-hover:-translate-y-1 overflow-hidden">
                  {/* Image Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative p-8">
                    {/* Large Icon */}
                    <div className="absolute -top-6 -left-6">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${feature.gradient} p-0.5 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                        <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transform -translate-x-full transition-transform duration-1000"></div>
                          <Icon className="w-12 h-12 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-16 pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      
                      {/* Stats Badge */}
                      <div className="mb-6">
                        <div className="inline-flex items-center bg-indigo-50 rounded-full px-3 py-1">
                          <Award className="w-4 h-4 text-indigo-600 mr-1" />
                          <span className="text-sm font-medium text-indigo-600">{feature.stats}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="group/btn bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl px-4 py-3 transition-all duration-300 w-full">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-indigo-600">{feature.action}</span>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover/btn:shadow-md transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-indigo-600 transform group-hover/btn:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Floating Secondary Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full flex items-center justify-center">
                        <SecondaryIcon className="w-5 h-5 text-indigo-600" />
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