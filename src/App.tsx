import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Universities from './components/Universities';
import Footer from './components/Footer';
import AdvisorCarousel from './components/AdvisorCarousel';
import FloatingChat from './components/FloatingChat';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedAdvisorId, setSelectedAdvisorId] = useState<number | null>(null);

  const handleChatOpen = (advisorId: number) => {
    setSelectedAdvisorId(advisorId);
    setIsChatOpen(true);
  };

  const handleFloatingChatOpen = () => {
    setSelectedAdvisorId(null);
    setIsChatOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="absolute top-1/3 -left-96 w-[50rem] h-[50rem] bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -right-96 w-[45rem] h-[45rem] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>

        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
        <div className="absolute -bottom-64 -right-64 w-[45rem] h-[45rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <div className="relative">
            <Hero />
          </div>
          <div className="relative">
            <AdvisorCarousel onChatOpen={handleChatOpen} />
          </div>
          <div className="relative">
            <Features />
          </div>
          <div className="relative">
            <Universities />
          </div>
        </main>
        <Footer />
      </div>
      
      <FloatingChat 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        advisorId={selectedAdvisorId ?? undefined}
      />
      {!isChatOpen && <FloatingActionButton onClick={handleFloatingChatOpen} />}
    </div>
  );
}

export default App;