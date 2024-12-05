import React from 'react';

export default function GradientSplashes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Hero Section Splashes */}
      <div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Advisor Section Splashes */}
      <div className="absolute top-[50vh] -left-32 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-[60vh] -right-32 w-[35rem] h-[35rem] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>

      {/* Features Section Splashes */}
      <div className="absolute top-[120vh] left-1/4 w-[25rem] h-[25rem] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
      <div className="absolute top-[140vh] right-1/4 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

      {/* Bottom Section Splashes */}
      <div className="absolute bottom-0 -left-64 w-[45rem] h-[45rem] bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-32 -right-64 w-[40rem] h-[40rem] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
} 