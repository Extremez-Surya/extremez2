"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ServiceModal({ service, isOpen, onClose }) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className={`relative p-8 bg-gradient-to-br ${service.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-xl text-white/90 max-w-2xl">{service.longDescription || service.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">{service.stats.projects}</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-pink-400">{service.stats.satisfaction}</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{service.deliveryTime}</div>
                    <div className="text-sm text-gray-400">Delivery Time</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">99%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-4 bg-white/5 rounded-lg"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {[
                      "Initial consultation and requirement analysis",
                      "Design concept and approval process",
                      "Development and quality assurance",
                      "Delivery and ongoing support"
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-4 bg-slate-800/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {index + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Preview */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="text-sm">Sample Project {item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('tel:+91 9315153552', '_self')}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg text-lg flex items-center justify-center gap-2"
                    >
                      📞 Call for Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('mailto:vinaybeluga@gmail.com', '_self')}
                      className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg flex items-center justify-center gap-2"
                    >
                      ✉️ Email Us
                    </motion.button>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    Free consultation • Custom pricing • 24/7 support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

