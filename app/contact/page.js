"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import BackgroundEffects from "../components/BackgroundEffects";
import FloatingActionButton from "../components/FloatingActionButton";
import DiscordIcon from "../components/DiscordIcon";
import WhatsAppIcon from "../components/WhatsAppIcon";
import InstagramIcon from "../components/InstagramIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import YouTubeIcon from "../components/YouTubeIcon";
import GitHubIcon from "../components/GitHubIcon";
import GlobeIcon from "../components/GlobeIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [currentTime, setCurrentTime] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
  const [particles, setParticles] = useState([]);
  const [emailValidation, setEmailValidation] = useState({
    isValid: true,
    message: "",
  });
  const formRef = useRef();
  const mapRef = useRef();

  const typingTexts = [
    "Let's create something amazing together! 🚀",
    "Ready to bring your ideas to life? ✨",
    "Your next project starts here... 💡",
    "Transform your vision into reality! 🎨",
    "Innovation meets excellence! 🌟",
  ];

  // Typing animation effect
  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = typingTexts[currentTextIndex];

      if (!isDeleting) {
        setTypingText(currentText.substring(0, currentCharIndex + 1));
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        setTypingText(currentText.substring(0, currentCharIndex - 1));
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        }
      }
    };

    const interval = setInterval(typeText, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  // Update current time
  useEffect(() => {
    setCurrentTime(new Date()); // Set initial time on client
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Particle animation
  useEffect(() => {
    const generateParticles = () => {
      if (typeof window === "undefined") return;

      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    // Only generate particles on client side
    if (typeof window !== "undefined") {
      generateParticles();
      window.addEventListener("resize", generateParticles);
      return () => window.removeEventListener("resize", generateParticles);
    }
  }, []);

  // Intersection Observer for map
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailValidation({ isValid: true, message: "" });
    } else if (!emailRegex.test(email)) {
      setEmailValidation({
        isValid: false,
        message: "Please enter a valid email address",
      });
    } else {
      setEmailValidation({ isValid: true, message: "Valid email ✓" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") {
      validateEmail(value);
    }

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
          services: [],
        });

        // Clear success message after 8 seconds
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        setSubmitStatus("error");
        console.error('Form submission error:', result.error);

        // Clear error message after 6 seconds
        setTimeout(() => setSubmitStatus(null), 6000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus("error");

      // Clear error message after 6 seconds
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91 93151 53552",
      description: "Mon-Fri 9AM-6PM IST",
      color: "from-blue-500 to-cyan-500",
      action: () => window.open("tel:+91 9315153552", "_self"),
    },
    {
      icon: "📧",
      title: "Email",
      value: "vinaybeluga@gmail.com",
      description: "Response within 24 hours",
      color: "from-purple-500 to-pink-500",
      action: () => window.open("mailto:vinaybeluga@gmail.com", "_self"),
    },
    {
      icon: <GlobeIcon size={48} />,
      title: "Location",
      value: "Delhi, India",
      description: "Available for meetings",
      color: "from-green-500 to-emerald-500",
      action: () =>
        window.open("https://maps.google.com/?q=28.616889,77.048861", "_blank"),
    },
    {
      icon: <WhatsAppIcon size={48} />,
      title: "WhatsApp",
      value: "+91 93151 53552",
      description: "Quick chat anytime",
      color: "from-orange-500 to-red-500",
      action: () => window.open("https://wa.me/9315153552", "_blank"),
    },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
    "E-commerce",
    "AI/ML Solutions",
    "Consulting",
  ];

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
  ];

  const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3+ months"];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: "🚀" },
    { label: "Happy Clients", value: "98%", icon: "😊" },
    { label: "Countries Served", value: "25+", icon: "🌍" },
    { label: "Years Experience", value: "5+", icon: "⭐" },
  ];

  const socialLinks = [
    {
      icon: <DiscordIcon size={24} />,
      name: "Discord",
      url: "https://discord.gg/k4HCMSHSea",
      color: "hover:text-indigo-400",
    },
    {
      icon: <WhatsAppIcon size={24} />,
      name: "WhatsApp",
      url: "https://wa.me/9315153552",
      color: "hover:text-green-400",
    },
    {
      icon: <InstagramIcon size={24} />,
      name: "Instagram",
      url: "https://www.instagram.com/vinni_ily_143/",
      color: "hover:text-pink-400",
    },
    {
      icon: <LinkedInIcon size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/the-extremez/",
      color: "hover:text-blue-300",
    },
    {
      icon: <YouTubeIcon size={24} />,
      name: "YouTube",
      url: "https://www.youtube.com/@theextremez2.0?sub_confirmation=1",
      color: "hover:text-red-400",
    },
    {
      icon: <GitHubIcon size={24} />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-300",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes! We provide ongoing maintenance, updates, and support packages. Our team is always available to help with any issues or improvements you need.",
    },
    {
      question: "What's your development process?",
      answer:
        "We follow an agile methodology with regular check-ins, prototyping, and iterative development. You'll be involved throughout the entire process.",
    },
    {
      question: "Can you work with existing teams?",
      answer:
        "Absolutely! We're experienced in collaborating with existing development teams and can seamlessly integrate into your workflow.",
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundEffects />

        {/* Animated particles */}
        <div className="fixed inset-0 pointer-events-none z-5">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              animate={{
                x: [particle.x, particle.x + particle.speedX * 100],
                y: [particle.y, particle.y + particle.speedY * 100],
                opacity: [particle.opacity, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <Header />

        <main className="relative z-10 pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                {/* Status Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-purple-300 font-medium">
                    Available for Projects
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    Online Now
                  </span>
                  <div className="text-sm text-gray-400">
                    {currentTime
                      ? currentTime.toLocaleTimeString()
                      : "--:--:-- --"}
                  </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  className="text-5xl md:text-7xl font-black mb-4 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent blur-sm">
                    Let's Connect
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </motion.h1>

                {/* Typing Animation */}
                <motion.div
                  className="text-xl md:text-2xl font-bold text-gray-300 mb-6 min-h-[50px] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    {typingText}
                  </span>
                  <span className="animate-pulse ml-1 text-purple-400">|</span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Ready to turn your ideas into reality? Let's discuss your
                  project and create something extraordinary together.
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2">{stat.icon}</div>
                        <div className="font-bold text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Methods Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={method.action}
                  >
                    <motion.div
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${method.color} bg-opacity-10 border border-gray-700/50 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm overflow-hidden`}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <motion.div
                        className="text-4xl mb-4 text-center flex justify-center items-center"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {typeof method.icon === 'string' ? (
                          <span>{method.icon}</span>
                        ) : (
                          method.icon
                        )}
                      </motion.div>

                      <h3 className="text-xl font-bold text-center mb-2 group-hover:text-purple-300 transition-colors">
                        {method.title}
                      </h3>

                      <p className="text-white font-semibold text-center mb-2">
                        {method.value}
                      </p>

                      <p className="text-gray-400 text-sm text-center">
                        {method.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form & Info Tabs */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
                  {[
                    { id: "form", name: "Contact Form", icon: "📝" },
                    { id: "info", name: "Company Info", icon: "🏢" },
                    { id: "faq", name: "FAQ", icon: "❓" },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{tab.icon}</span>
                      {tab.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Contact Form Tab */}
                {activeTab === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  >
                    {/* Form */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="relative bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50"
                      >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Start Your Project
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 text-white placeholder-gray-400"
                              placeholder="Your full name"
                            />
                          </motion.div>

                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border transition-all duration-300 text-white placeholder-gray-400 ${
                                emailValidation.isValid
                                  ? "border-gray-600/50 focus:border-purple-500"
                                  : "border-red-500"
                              }`}
                              placeholder="your.email@example.com"
                            />
                            {formData.email && (
                              <p
                                className={`text-sm mt-1 ${
                                  emailValidation.isValid
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                {emailValidation.message}
                              </p>
                            )}
                          </motion.div>
                        </div>

                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <label className="block text-sm font-medium mb-2 text-gray-300">
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 text-white placeholder-gray-400"
                            placeholder="What's your project about?"
                          />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 text-white"
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </motion.div>

                          <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-sm font-medium mb-2 text-gray-300">
                              Timeline
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 text-white"
                            >
                              <option value="">Select timeline</option>
                              {timelines.map((timeline) => (
                                <option key={timeline} value={timeline}>
                                  {timeline}
                                </option>
                              ))}
                            </select>
                          </motion.div>
                        </div>

                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <label className="block text-sm font-medium mb-2 text-gray-300">
                            Services Interested In
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {services.map((service) => (
                              <motion.label
                                key={service}
                                className="flex items-center space-x-2 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <input
                                  type="checkbox"
                                  value={service}
                                  checked={formData.services.includes(service)}
                                  onChange={handleInputChange}
                                  className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                                />
                                <span className="text-sm text-gray-300">
                                  {service}
                                </span>
                              </motion.label>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <label className="block text-sm font-medium mb-2 text-gray-300">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                          />
                        </motion.div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <span>🚀</span>
                              Send Message
                            </>
                          )}
                        </motion.button>

                        {/* Success/Error Messages */}
                        <AnimatePresence>
                          {submitStatus === "success" && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                            >
                              <span className="text-2xl mr-2">🎉</span>
                              Message sent successfully! You'll receive a confirmation email and I'll respond within 24 hours.
                            </motion.div>
                          )}
                          {submitStatus === "error" && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                            >
                              <span className="text-2xl mr-2">❌</span>
                              Failed to send message. Please try again or contact me directly at vinaybeluga@gmail.com
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {/* Interactive Map */}
                      <div ref={mapRef} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50">
                          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            📍 Our Location
                          </h3>

                          {isMapLoaded ? (
                            <motion.div
                              className="w-full h-64 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl flex items-center justify-center border border-gray-700/50"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                            >
                              <iframe
                                title="Google Map Location"
                                src="https://www.google.com/maps?q=28.616889,77.048861&z=16&output=embed"
                                width="100%"
                                height="100%"
                                style={{
                                  border: 0,
                                  borderRadius: "0.75rem",
                                  minHeight: "16rem",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <motion.button
                                  className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  onClick={() =>
                                    window.open(
                                      "https://maps.google.com/?q=28.616889,77.048861",
                                      "_blank"
                                    )
                                  }
                                >
                                  View in Google Maps
                                </motion.button>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="w-full h-64 bg-gray-800/50 rounded-xl flex items-center justify-center">
                              <motion.div
                                className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50">
                          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            🌐 Follow Us
                          </h3>

                          <div className="grid grid-cols-3 gap-4">
                            {socialLinks.map((social, index) => (
                              <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-400/60 transition-all duration-300 ${social.color}`}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="text-2xl mb-1 flex justify-center items-center">
                                  {typeof social.icon === 'string' ? (
                                    <span>{social.icon}</span>
                                  ) : (
                                    social.icon
                                  )}
                                </div>
                                <span className="text-xs">{social.name}</span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Company Info Tab */}
                {activeTab === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                      <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50">
                        <div className="text-center mb-6">
                          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            About Extremez
                          </h3>
                          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            We're a passionate team of designers and developers
                            creating exceptional digital experiences
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h4 className="text-xl font-bold text-purple-300">
                              Our Mission
                            </h4>
                            <p className="text-gray-300">
                              To transform innovative ideas into powerful
                              digital solutions that drive business growth and
                              create meaningful user experiences.
                            </p>
                          </motion.div>

                          <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <h4 className="text-xl font-bold text-pink-300">
                              Our Vision
                            </h4>
                            <p className="text-gray-300">
                              To be the leading force in digital innovation,
                              setting new standards for creativity, quality, and
                              client satisfaction.
                            </p>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[
                            {
                              icon: "🎯",
                              title: "Expertise",
                              desc: "Cutting-edge technologies and best practices",
                            },
                            {
                              icon: "⚡",
                              title: "Speed",
                              desc: "Fast delivery without compromising quality",
                            },
                            {
                              icon: "🤝",
                              title: "Partnership",
                              desc: "Collaborative approach to your success",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={item.title}
                              className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="text-3xl mb-3">{item.icon}</div>
                              <h5 className="font-bold text-purple-300 mb-2">
                                {item.title}
                              </h5>
                              <p className="text-gray-400 text-sm">
                                {item.desc}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* FAQ Tab */}
                {activeTab === "faq" && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                      <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50">
                        <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Frequently Asked Questions
                        </h3>

                        <div className="space-y-4">
                          {faqs.map((faq, index) => (
                            <motion.div
                              key={index}
                              className="border border-gray-700/50 rounded-xl p-6 bg-gray-800/30"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <h4 className="text-lg font-bold text-purple-300 mb-3">
                                {faq.question}
                              </h4>
                              <p className="text-gray-300">{faq.answer}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Quick Actions */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40 flex items-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("tel:+91 9315153552", "_self")}
                >
                  <span>📞</span>
                  Call Now
                </motion.button>

                <motion.button
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#e879f9",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab("form")}
                >
                  <span>✉️</span>
                  Send Message
                </motion.button>

                <motion.button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://wa.me/9315153552", "_blank")
                  }
                >
                  <WhatsAppIcon size={20} />
                  WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
        <FloatingActionButton />
      </div>
    </PageWrapper>
  );
}

