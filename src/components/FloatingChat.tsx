import { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, GraduationCap, Brain } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Welcome to EduGuide's AI Academic Advisor! I'm here to help you explore universities, programs, and guide you through your educational journey. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: "🎓 I understand you're looking for guidance. Our AI system is being enhanced with the latest educational insights and university data. Soon, you'll be able to get personalized recommendations for universities, programs, and career paths. Please check back soon!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-50">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(192, 132, 252, 0.3) 0%, transparent 50%),
              repeating-linear-gradient(45deg, 
                rgba(99, 102, 241, 0.1) 0px, 
                rgba(99, 102, 241, 0.1) 1px, 
                transparent 1px, 
                transparent 8px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 16px 16px'
          }}
        />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-indigo-100 shadow-sm z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-indigo-600" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">AI Academic Advisor</h2>
                <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full border border-indigo-500/20 flex items-center gap-1">
                  <span className="flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    <span>Smart Guidance</span>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    EduGuide AI
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <span>24/7</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-bounce-slow">
            <div className="relative">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-full pt-24 pb-20 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    relative max-w-[85%] px-4 py-3 rounded-2xl shadow-sm
                    ${message.role === 'user' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white border border-indigo-100'
                    }
                  `}
                >
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                  <span 
                    className={`
                      block text-[11px] mt-1
                      ${message.role === 'user' ? 'text-indigo-200' : 'text-gray-400'}
                    `}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="relative max-w-[85%] px-4 py-3 rounded-2xl bg-white border border-indigo-100 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Container */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-indigo-100 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-end gap-2">
            <div className="flex-grow">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustTextareaHeight(e);
                }}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="w-full resize-none rounded-xl border border-indigo-200 bg-indigo-50/50 px-4 py-3 text-[15px] leading-relaxed placeholder:text-gray-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 appearance-none"
                style={{ maxHeight: '120px' }}
                rows={1}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="flex-none rounded-xl bg-indigo-600 p-3 text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-indigo-200 disabled:opacity-50 disabled:hover:bg-indigo-600 disabled:hover:shadow-none"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-gray-400">
            Press Enter to send, Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}