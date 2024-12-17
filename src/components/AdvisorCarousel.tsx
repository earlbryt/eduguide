import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const advisors = [
  {
    name: "Dr. Sarah Mensah",
    role: "Admissions Officer",
    institution: "KNUST",
    department: "College of Engineering",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.9,
    expertise: "Engineering Programs"
  },
  {
    name: "Prof. Matthew Addo",
    role: "Provost",
    institution: "UG Legon",
    department: "College of Medicine",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.8,
    expertise: "Medical Sciences"
  },
  {
    name: "Dr. Elizabeth Owusu",
    role: "Dean of Admissions",
    institution: "Ashesi University",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.9,
    expertise: "Technology Programs"
  },
  {
    name: "Prof. Daniel Koffi",
    role: "Department Head",
    institution: "UG Legon",
    department: "Business School",
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.7,
    expertise: "Business Programs"
  },
  {
    name: "Dr. Abena Osei",
    role: "Director of Admissions",
    institution: "University of Cape Coast",
    department: "Faculty of Social Sciences",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.8,
    expertise: "Social Sciences"
  },
  {
    name: "Prof. Kwame Nkrumah",
    role: "Dean",
    institution: "Ghana Institute of Management",
    department: "School of Technology",
    image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=500&h=700&q=80",
    status: "online",
    rating: 4.9,
    expertise: "Technology & Innovation"
  }
];

// Add prop interface
interface AdvisorCarouselProps {
  onChatOpen: (advisorId: number) => void;
}

export default function AdvisorCarousel({ onChatOpen }: AdvisorCarouselProps) {
  return (
    <section id="advisors" className="relative py-20 overflow-hidden">
      {/* Subtle Neural Network Pattern */}
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-indigo-50">
            <Star className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Expert Academic Guidance
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Connect with Leading Academic Advisors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from admission officers and professors at Ghana's top universities
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {advisors.map((advisor, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-none w-72 px-3 group mb-8"
                >
                  <div className="relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-96 rounded-[2rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-[2rem]"
                      />
                      
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <div className="relative">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-heartbeat"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-1 opacity-75"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-2 opacity-60"></div>
                          </div>
                          <span className="text-xs font-medium">Available Now</span>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 z-20">
                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{advisor.rating}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                        <p className="text-white/90 text-sm mb-2">{advisor.role}</p>
                        <div className="flex items-center space-x-1 text-white/80 text-sm">
                          <span>{advisor.institution}</span>
                          <span>•</span>
                          <span>{advisor.department}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                      <button 
                        onClick={() => onChatOpen(index)} 
                        className="relative group/btn bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 group-hover/btn:bg-[length:400%_400%] animate-gradient-shift"></div>
                        
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-0 group-hover/btn:opacity-70 transition-all duration-500"></div>
                        
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover/btn:translate-x-[150%] transition-all duration-1000 ease-in-out"></div>
                        
                        <div className="relative flex items-center justify-center transform group-hover/btn:scale-110 transition-transform duration-300">
                          <MessageSquare className="w-6 h-6 text-white group-hover/btn:rotate-12 transition-transform duration-300" />
                        </div>

                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none">
                          <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg">
                            <p className="text-sm font-medium text-gray-900 whitespace-nowrap">Chat with Advisor</p>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-full">
                          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping-slow opacity-0 group-hover/btn:opacity-100"></div>
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping-slower opacity-0 group-hover/btn:opacity-100 delay-150"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {advisors.map((advisor, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-none w-72 px-3 group"
                >
                  <div className="relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-96 rounded-[2rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-[2rem]"
                      />
                      
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <div className="relative">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-heartbeat"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-1 opacity-75"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-2 opacity-60"></div>
                          </div>
                          <span className="text-xs font-medium">Available Now</span>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 z-20">
                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{advisor.rating}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                        <p className="text-white/90 text-sm mb-2">{advisor.role}</p>
                        <div className="flex items-center space-x-1 text-white/80 text-sm">
                          <span>{advisor.institution}</span>
                          <span>•</span>
                          <span>{advisor.department}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                      <button 
                        onClick={() => onChatOpen(index)} 
                        className="relative group/btn bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 group-hover/btn:bg-[length:400%_400%] animate-gradient-shift"></div>
                        
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-0 group-hover/btn:opacity-70 transition-all duration-500"></div>
                        
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover/btn:translate-x-[150%] transition-all duration-1000 ease-in-out"></div>
                        
                        <div className="relative flex items-center justify-center transform group-hover/btn:scale-110 transition-transform duration-300">
                          <MessageSquare className="w-6 h-6 text-white group-hover/btn:rotate-12 transition-transform duration-300" />
                        </div>

                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none">
                          <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg">
                            <p className="text-sm font-medium text-gray-900 whitespace-nowrap">Chat with Advisor</p>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-full">
                          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping-slow opacity-0 group-hover/btn:opacity-100"></div>
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping-slower opacity-0 group-hover/btn:opacity-100 delay-150"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes infinite-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-infinite-scroll {
            animation: infinite-scroll 50s linear infinite;
          }

          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes heartbeat {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            25% {
              transform: scale(1.1);
              opacity: 0.8;
            }
            35% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
            60% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes pulse-ring-1 {
            0% {
              transform: scale(1);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 0.75;
            }
          }

          @keyframes pulse-ring-2 {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(2);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 0.6;
            }
          }

          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          .animate-pulse-ring-1 {
            animation: pulse-ring-1 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-pulse-ring-2 {
            animation: pulse-ring-2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            animation-delay: 0.5s;
          }

          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes ping-slow {
            75%, 100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }

          @keyframes ping-slower {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .animate-gradient-shift {
            animation: gradient-shift 3s ease infinite;
            background-size: 200% 200%;
          }

          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-ping-slower {
            animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </section>
  );
} 