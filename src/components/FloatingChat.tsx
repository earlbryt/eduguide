import React, { useState } from 'react';
import { MessageSquare, X, Send, Image as ImageIcon, Paperclip, Smile } from 'lucide-react';

interface FloatingChatProps {
  isOpen: boolean;
  onClose: () => void;
  advisorId?: number;
}

export default function FloatingChat({ isOpen, onClose, advisorId }: FloatingChatProps) {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-stretch justify-center animate-fadeIn">
      <div className="bg-white w-full flex flex-col animate-slideIn">
        {/* Chat Header */}
        <div className="p-6 border-b flex items-center justify-between bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient">
          <div className="flex items-center space-x-6">
            <button 
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-300 hover:rotate-90 transform"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
                    alt="Advisor"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <div className="text-white">
                <div className="text-xl font-semibold">Dr. Sarah</div>
                <div className="text-sm opacity-90 font-medium">Computer Science Advisor • University of Ghana</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 text-white text-sm py-1.5 px-3 rounded-full">
              Online
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
          {/* Sample messages */}
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center space-x-4 max-w-6xl mx-auto">
            <div className="flex-1 bg-gray-50 rounded-2xl flex items-center border border-gray-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-6 py-4 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <div className="flex items-center px-4 space-x-2">
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2.5 rounded-xl hover:bg-indigo-50 group">
                  <ImageIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2.5 rounded-xl hover:bg-indigo-50 group">
                  <Paperclip className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2.5 rounded-xl hover:bg-indigo-50 group">
                  <Smile className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
            <button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 