"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What's the typical turnaround time for projects?",
      answer: "Our standard turnaround time varies by service: vinyl prints (24-48 hours), wall murals (2-3 days), digital signage (3-5 days), and custom projects (5-10 days). Rush orders are available for urgent needs with expedited processing."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes! We offer professional installation for all our products. Our certified technicians ensure proper mounting, alignment, and finishing. Installation is included in most packages, and we provide detailed care instructions."
    },
    {
      question: "What materials do you use for outdoor signage?",
      answer: "We use premium weather-resistant materials including marine-grade vinyl, UV-resistant inks, aluminum composites, and specialized outdoor adhesives. All outdoor products come with warranties against fading and weathering."
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer: "Absolutely! Our design team works closely with your brand standards, including color codes, fonts, logos, and style guides. We ensure all deliverables maintain brand consistency and professional quality."
    },
    {
      question: "What's included in your warranty?",
      answer: "Our warranty covers material defects, printing quality, and installation issues. Vinyl products have a 2-year warranty, digital displays include 3-year coverage, and structural components are covered for 5 years."
    },
    {
      question: "Do you offer bulk pricing for multiple locations?",
      answer: "Yes! We provide attractive volume discounts for multi-location businesses, franchise operations, and large orders. Our enterprise packages include dedicated project management and standardized deployment across all sites."
    },
    {
      question: "Can I see a preview before production?",
      answer: "Definitely! We provide detailed digital mockups, color proofs, and for complex projects, 3D renderings or AR previews. You can request revisions until you're completely satisfied before we proceed to production."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major credit cards, bank transfers, checks, and offer flexible payment terms for enterprise clients. For large projects, we can arrange milestone-based payments with 50% upfront and balance on completion."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-900/10 backdrop-blur-sm blur-target">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.3)" }}
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      className="w-5 h-5 text-blue-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 mb-4" />
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

