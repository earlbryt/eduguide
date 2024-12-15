import React from 'react';
import { ArrowRight, Sparkles, Brain, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        
        Geometric Patterns
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Neural Network Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-2 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            {/* Floating Badge */}
            <div className="absolute -top-12 left-4 md:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-xl border border-indigo-50 flex items-center space-x-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                AI-Powered Education
              </span>
            </div>

            {/* Main Content */}
            <h1 className="text-6xl font-bold leading-tight mb-6">
              <span className="block mb-2">Discover Your</span>
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Perfect Academic
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8" fill="none">
                  <path d="M1 5.5C100 2.5 200 2.5 399 5.5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="5.5" x2="399" y2="5.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4F46E5"/>
                      <stop offset="0.5" stopColor="#9333EA"/>
                      <stop offset="1" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="block mt-2">Journey</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect with university advisors and leverage AI-powered insights to make informed decisions about your academic future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative w-full sm:w-auto px-6 sm:px-6 py-3 bg-indigo-600 text-white rounded-2xl text-base sm:text-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-200 flex items-center justify-center overflow-hidden">
                <span className="absolute inset-0 w-3 bg-white/20 skew-x-[20deg] group-hover:animate-shine"></span>
                <span className="relative flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                </span>
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-6 py-3 bg-white text-indigo-600 rounded-2xl text-base sm:text-lg font-semibold hover:bg-indigo-50 transition border border-indigo-100 flex items-center justify-center group">
                <Globe className="mr-2 h-5 w-5" />
                Explore Universities
                <Sparkles className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-3xl font-bold text-pink-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Interactive Elements */}
          <div className="relative">
            {/* Decorative Background Elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
            
            {/* Main Content Container */}
            <div className="relative">
              {/* Premium Badge */}
              <div className="absolute -top-6 right-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-xl transform -rotate-2 z-20">
                <span className="text-sm font-semibold">Premium Guidance</span>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-indigo-50/50 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/50">
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                      alt="Students discussing"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                      alt="University campus"
                      className="rounded-2xl shadow-lg w-full h-32 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                      alt="Graduation ceremony"
                      className="rounded-2xl shadow-lg w-full h-32 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      alt="Group study"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Interactive Features Display */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-indigo-50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-gray-900">AI Matching</div>
                    </div>
                    <div className="text-sm text-gray-600">Personalized program recommendations</div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-indigo-50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-gray-900">Expert Network</div>
                    </div>
                    <div className="text-sm text-gray-600">Direct access to advisors</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-16 top-1/3 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-all duration-300 border border-indigo-50 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Smart Matching</div>
                    <div className="text-sm text-gray-600">98% accuracy rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-16 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-all duration-300 border border-indigo-50 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Premium Support</div>
                    <div className="text-sm text-gray-600">24/7 guidance</div>
                  </div>
                </div>
              </div>

              {/* Active Users Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-xl px-6 py-3 flex items-center space-x-3 border border-indigo-50">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                    alt="Advisor 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                    alt="Advisor 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                    alt="Advisor 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-indigo-600 font-semibold">50+ </span>
                  <span className="text-gray-600">advisors online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}