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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50">
      {/* Enhanced Background Pattern with Educational Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
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
      <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-white/10 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Academic Advisor</h2>
                <span className="px-2 py-0.5 text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 flex items-center gap-1">
                  <Brain className="w-3 h-3" />
                  AI-Powered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Powered by</p>
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EduGuide AI</span>
              </div>
            </div>
          </div>
          <div className="animate-bounce">
            <GraduationCap className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-full overflow-y-auto pt-28 pb-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] backdrop-blur-sm ${
                    message.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-sm'
                      : 'bg-gray-100/90 dark:bg-white/10 text-gray-900 dark:text-white rounded-2xl rounded-tl-sm'
                  } px-6 py-4 shadow-sm hover:scale-[1.02] transition-transform`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs mt-2 opacity-60">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100/90 dark:bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse`}
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/20 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-end gap-4">
            <div className="flex-grow bg-gray-100 dark:bg-white/5 rounded-2xl">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about universities, programs, or career guidance..."
                className="w-full bg-transparent border-none outline-none resize-none px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl shadow-lg transition-colors hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}