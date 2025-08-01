"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date()); // Set initial time only on client

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearInterval(timer);
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const contactInfo = [
    { 
      icon: "📞", 
      label: "+91 93151 53552", 
      href: "tel:+919315153552",
      color: "text-orange-400"
    },
    { 
      icon: "📧", 
      label: "vinaybeluga@gmail.com", 
      href: "mailto:vinaybeluga@gmail.com",
      color: "text-blue-400"
    },
    { 
      icon: "🏠", 
      label: "New Delhi, India-110059", 
      href: "#",
      color: "text-green-400"
    }
  ];

  if (!isClient) {
    return null;
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          
          {/* Left Section - Portfolio Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Vinay's Portfolio</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Keep Rising</span>
                <span className="text-red-400 text-xl animate-bounce">🚀</span>
                <span className="text-gray-400">Connect with me!</span>
              </div>
            </div>

            {/* Live Time Card */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 font-bold">Live Time</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Current Time (IST):</span>
                <span className="text-white font-mono font-semibold">
                  {currentTime ? currentTime.toLocaleTimeString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour12: true
                  }) : '--:--:-- --'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
            
            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300 group border border-gray-700/40 hover:border-gray-600/60"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{contact.icon}</span>
                  <span className={`${contact.color} group-hover:text-white transition-colors duration-300 font-medium`}>
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom - Creative & Short */}
        <div className="border-t border-gray-800/50 pt-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl">💻</span>
              <p className="text-gray-400">
                Designed With <span className="text-red-400 text-lg animate-pulse">❤️</span> By{" "}
                <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Vinay Kumar
                </span>
              </p>
              <span className="text-xl">☕</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} • Made with passion and lots of coffee • All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

