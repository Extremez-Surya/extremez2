"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      id: "basic",
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: isAnnual ? 199 : 299,
      originalPrice: isAnnual ? 299 : 399,
      features: [
        "Basic vinyl prints (up to 5 sq ft)",
        "Standard installation",
        "2 design revisions",
        "48-hour turnaround",
        "Email support",
        "1-year warranty"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: "🚀"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Ideal for growing businesses with regular needs",
      price: isAnnual ? 599 : 799,
      originalPrice: isAnnual ? 799 : 999,
      features: [
        "Premium vinyl prints (up to 20 sq ft)",
        "Professional installation",
        "5 design revisions",
        "24-hour turnaround",
        "Priority phone support",
        "2-year warranty",
        "Free maintenance check",
        "Digital mockups included"
      ],
      popular: true,
      color: "from-blue-500 to-purple-500",
      icon: "⭐"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: isAnnual ? 1299 : 1599,
      originalPrice: isAnnual ? 1599 : 1999,
      features: [
        "Unlimited vinyl prints & signage",
        "Premium installation & setup",
        "Unlimited revisions",
        "Same-day turnaround",
        "Dedicated account manager",
        "5-year warranty",
        "Monthly maintenance",
        "3D mockups & AR preview",
        "Bulk discount pricing",
        "Custom branding solutions"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500",
      icon: "👑"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900/20 backdrop-blur-sm blur-target">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our signature quality and support.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-600 rounded-full p-1 focus:outline-none"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
              />
            </motion.button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 25%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 bg-gray-900/60' 
                  : selectedPlan === plan.id
                    ? 'border-gray-600/50 bg-gray-900/50'
                    : 'border-gray-700/50 bg-gray-900/40 hover:border-gray-600/50'
              } backdrop-blur-lg shadow-2xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />

              <div className="relative p-8">
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center text-3xl mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  {plan.originalPrice > plan.price && (
                    <div className="text-sm text-gray-500 line-through">${plan.originalPrice}</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-900/50 text-white hover:bg-gray-800/70 border border-gray-700/50'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Looking for something specific? We offer custom packages tailored to your unique requirements. 
            Contact us for a personalized quote.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

