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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
                alt="Advisor"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-white">
              <div className="text-lg font-semibold">Dr. Sarah</div>
              <div className="text-sm opacity-90">Computer Science Advisor • University of Ghana</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Sample messages */}
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-white rounded-xl flex items-center border shadow-sm">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-transparent outline-none"
              />
              <div className="flex items-center px-3 space-x-2">
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
            <button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 