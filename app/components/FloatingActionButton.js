"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAction, setHoveredAction] = useState(null);

  const actions = [
    {
      id: "quote",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Get Quote",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-400 to-cyan-400",
      action: () => window.open("mailto:vinaybeluga@gmail.com?subject=Quote Request", "_blank")
    },
    {
      id: "call",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Call Us",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-400 to-emerald-400",
      action: () => window.open("tel:+91 9315153552", "_self")
    },
    {
      id: "whatsapp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      ),
      label: "WhatsApp",
      color: "from-emerald-500 to-teal-500",
      hoverColor: "from-emerald-400 to-teal-400",
      action: () => window.open("https://wa.me/9315153552?text=Hello! I'm interested in your services.", "_blank")
    },
    {
      id: "email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Email",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-400 to-pink-400",
      action: () => window.open("mailto:vinaybeluga@gmail.com", "_blank")
    },
    {
      id: "location",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Reach to us",
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-400 to-red-400",
      action: () => window.open("https://maps.app.goo.gl/KxrSxpJ3toVX76NDA", "_blank")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      y: 30,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 30,
      rotate: 180,
      transition: {
        duration: 0.2
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.2, 1], 
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Action Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredAction(action.id)}
                onHoverEnd={() => setHoveredAction(null)}
                onClick={action.action}
                className="flex items-center cursor-pointer group"
              >
                {/* Label */}
                <AnimatePresence>
                  {hoveredAction === action.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 30, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="mr-4 px-4 py-2 bg-slate-900/95 backdrop-blur-md text-white text-sm rounded-xl border border-white/20 whitespace-nowrap shadow-2xl shadow-black/50"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                        <span className="font-medium">{action.label}</span>
                      </div>
                      {/* Arrow */}
                      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-slate-900/95 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Button */}
                <motion.div 
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${
                    hoveredAction === action.id ? action.hoverColor : action.color
                  } flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                  whileHover={{
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3), 0 0 30px rgba(147, 51, 234, 0.2)"
                  }}
                >
                  {/* Background Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={hoveredAction === action.id ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-5 h-5">
                      {action.icon}
                    </div>
                  </motion.div>

                  {/* Particle Effect */}
                  {hoveredAction === action.id && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ 
                            opacity: 1,
                            scale: 0,
                            x: 0,
                            y: 0
                          }}
                          animate={{
                            opacity: [1, 0],
                            scale: [0, 1, 0],
                            x: Math.cos((i * 60) * Math.PI / 180) * 30,
                            y: Math.sin((i * 60) * Math.PI / 180) * 30
                          }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        style={{ width: "56px", height: "56px" }}
      >
        {/* Animated Background */}
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)",
              "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
              "linear-gradient(135deg, #ec4899, #3b82f6, #8b5cf6)",
              "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Icon Container */}
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </motion.div>

        {/* Pulse Rings */}
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"
        />
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl"
        />

        {/* Floating Dots */}
        {!isOpen && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{
                  y: [-15, -25, -15],
                  opacity: [0.6, 1, 0.6],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${30 + i * 15}%`,
                  top: "25%"
                }}
              />
            ))}
          </>
        )}
      </motion.button>
    </div>
  );
}

