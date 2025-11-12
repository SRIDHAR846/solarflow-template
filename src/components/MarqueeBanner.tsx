import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, User } from "lucide-react";

export const MarqueeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const text = "A Trusted Partner for Renewable Energy Solutions | Empanelled Vendor for TANGEDCO and MNRE New Subsidiray Scheme";
  
  useEffect(() => {
    // Show avatar after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-expand message after 1 second
      setTimeout(() => setIsExpanded(true), 1000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 left-8 z-50 flex items-end gap-4">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative flex-shrink-0 order-1"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-yellow-400"
            />
            
            {/* Avatar circle */}
            <div 
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-4 border-white shadow-xl flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                boxShadow: '0 8px 32px rgba(250, 204, 21, 0.6), 0 0 0 4px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Human avatar icon */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <User className="w-10 h-10 text-yellow-400" strokeWidth={2.5} />
              </div>
            </div>
            
            {/* Notification badge */}
            {!isExpanded && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
                style={{
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.6)',
                }}
              >
                <span className="text-white text-xs font-bold">1</span>
              </motion.div>
            )}
          </motion.div>

          {/* Message Bubble */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.8 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                className="relative order-2 max-w-sm bg-white rounded-2xl rounded-bl-sm p-5 shadow-2xl border border-gray-200"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
                <div className="pr-8">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">☀️</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">King Power Systems</p>
                      <p className="text-xs text-gray-500">Just now</p>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed mt-3">
                    {text}
                  </p>
                </div>
                {/* Triangle pointer - pointing to avatar */}
                <div 
                  className="absolute -left-2 bottom-6 w-4 h-4 bg-white rotate-45 border-l border-b border-gray-200"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
