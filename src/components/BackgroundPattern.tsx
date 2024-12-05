import React from 'react';

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Color */}
      <div className="absolute inset-0 bg-[#40B4A6]/20"></div>

      {/* Pattern */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.2]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="plus-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15,0L15,30M0,15L30,15" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plus-pattern)" />
        </svg>
      </div>

      {/* Gradient Splashes */}
      <div className="absolute inset-0">
        <div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-indigo-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-purple-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-64 -left-64 w-[40rem] h-[40rem] bg-pink-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-64 -right-64 w-[40rem] h-[40rem] bg-blue-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
      </div>
    </div>
  );
} 