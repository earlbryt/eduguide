import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              EduGuide
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">How it works</a>
            <a href="#universities" className="text-gray-600 hover:text-indigo-600 transition">Universities</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition">
              Log in
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}