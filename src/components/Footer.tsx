import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-10 w-10 text-indigo-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">EduGuide</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering students to make informed decisions about their academic future through premium guidance and support.
            </p>
            <div className="flex space-x-6 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Universities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Programs</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-lg flex items-center space-x-2">
                <span>Accra, Ghana</span>
              </li>
              <li className="text-gray-300 text-lg">
                <a href="mailto:info@eduguide.com" className="hover:text-indigo-400 transition-colors duration-300">
                  info@eduguide.com
                </a>
              </li>
              <li className="text-gray-300 text-lg">
                <a href="tel:+233201234567" className="hover:text-indigo-400 transition-colors duration-300">
                  +233 20 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg">&copy; {new Date().getFullYear()} EduGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}