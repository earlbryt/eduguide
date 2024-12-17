import React from 'react';
import { MessageSquare } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative group/btn bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Gradient background with animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 group-hover/btn:bg-[length:400%_400%] animate-gradient-shift"></div>
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-0 group-hover/btn:opacity-70 transition-all duration-500"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover/btn:translate-x-[150%] transition-all duration-1000 ease-in-out"></div>
        
        {/* Button content */}
        <div className="relative flex items-center justify-center transform group-hover/btn:scale-110 transition-transform duration-300">
          <MessageSquare className="w-6 h-6 text-white group-hover/btn:rotate-12 transition-transform duration-300" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-gray-900 whitespace-nowrap">Chat with Advisors</p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping-slow opacity-0 group-hover/btn:opacity-100"></div>
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping-slower opacity-0 group-hover/btn:opacity-100 delay-150"></div>
        </div>
      </div>
    </button>
  );
} 