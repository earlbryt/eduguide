import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header - Fixed */}
            <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-10 px-6 py-4 border-b border-gray-100">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 pr-10">{title}</h2>
            </div>

            {/* Content - Scrollable if needed */}
            <div className="overflow-y-auto overscroll-contain h-full pt-[4.5rem] pb-20">
              <div className="px-6 space-y-6">
                {children}
              </div>
            </div>

            {/* Footer Gradient - Fixed */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
