"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Vinay Kumar",
      company: "NV Collections",
      role: "Full Stack Developer",
      image: "/assets/vinay.jpg",
      rating: 5,
      text: "Their creative assets and print solutions blend perfectly with our digital platforms. Seamless integration with our site and backend systems was key to enhancing our brand delivery.",
      service: "Digital Prints & Backend Integration",
    },
    {
      id: 2,
      name: "Bhupender Suryavanshi",
      company: "NV Collections",
      role: "Client & Market Operations Head",
      image: "/assets/bhupender.png",
      rating: 5,
      text: "Their end-to-end support from concept to manufacturing helped us meet tight deadlines. Exceptional quality, timely execution, and strong visual impact — just what our clients expect!",
      service: "Client Solutions & Manufacturing Prints",
    },
    {
      id: 3,
      name: "Vijay Laxmi",
      company: "NV Collections",
      role: "Social Media Strategist",
      image: "/assets/vijay.jpeg",
      rating: 5,
      text: "The visually rich content and print designs have transformed our online presence. Engagement has skyrocketed, and the consistency across platforms is exactly what we needed.",
      service: "Social Media Graphics & Print Design",
    },
    {
      id: 4,
      name: "Rudra Budsar",
      company: "Student BCAS",
      role: "Promotion Manager",
      image: "/assets/RB.png",
      rating: 5,
      text: "Their team's dedication to creating impactful social media graphics and print designs was exceptional. They truly understood our vision and delivered results that exceeded expectations, significantly boosting our promotional efforts.",
      service: "Promotion Manager & Social Media Head"
    },
  ];

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm blur-target">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Our Great Testimonials
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Main Testimonial Display */}
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
              >
                <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar and Info */}
                    <div className="text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 shadow-lg border-4 border-blue-400/30 ${
                          testimonials[currentIndex].image.startsWith(
                            "/assets/"
                          )
                            ? "overflow-hidden"
                            : "flex items-center justify-center text-4xl"
                        }`}
                      >
                        {testimonials[currentIndex].image.startsWith(
                          "/assets/"
                        ) ? (
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <span>{testimonials[currentIndex].image}</span>
                            <span className="ml-2 text-base font-bold text-white/80 hidden md:inline-block">
                              {testimonials[currentIndex].company
                                .split(" ")
                                .map((w) => w[0])
                                .join("")}
                            </span>
                          </>
                        )}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-purple-300 mb-1 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-blue-200 text-sm mb-4 font-semibold">
                        {testimonials[currentIndex].company}
                      </p>
                      {/* Rating Stars */}
                      <div className="flex justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-yellow-400 text-lg drop-shadow-lg"
                            >
                              ⭐
                            </motion.span>
                          )
                        )}
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500 font-semibold shadow-lg">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="text-6xl text-blue-400/30 mb-4">
                          &ldquo;
                        </div>
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4 italic font-serif drop-shadow-lg">
                          {testimonials[currentIndex].text}
                        </p>
                        <div className="text-6xl text-blue-400/30 text-right">
                          &rdquo;
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800/70 transition-colors border border-gray-700/50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                      : "bg-gray-600/50 hover:bg-gray-500/70"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800/70 transition-colors border border-gray-700/50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Autoplay Indicator */}
          <div className="flex items-center justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoplay ? "bg-green-400" : "bg-gray-500"
                }`}
              />
              <span>{isAutoplay ? "Auto-playing" : "Paused"}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
