"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (scrollTop > lastScrollY && scrollTop > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setIsScrolled(scrollTop > 50);
      setLastScrollY(scrollTop);
    };

    // Mouse tracking for cool effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "👨‍💻" }, 
    { name: "Projects", href: "/projects", icon: "🚀" },
    { name: "Media Services", href: "/services", icon: "🎨" },
    { name: "Digital Services", href: "/digital-services", icon: "💻" },
    { name: "Skills", href: "/skills", icon: "⚡" },
    { name: "Contact", href: "/contact", icon: "📧" }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20' 
          : 'bg-transparent'
      }`}>
        
        {/* Cool Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 transition-opacity duration-1000 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}></div>
          {/* Animated particles */}
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-2 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute top-1 left-2/3 w-1 h-1 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            
            {/* Ultra Cool Logo Section */}
            <Link href="/" className="flex items-center group cursor-pointer relative" style={{ animationDelay: '0.1s' }}>
              <div className="relative p-3 rounded-2xl transition-all duration-700 group-hover:scale-105">
                
                {/* Main Logo Text */}
                <span className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 relative z-20 drop-shadow-lg">
                  Extremez
                </span>
                
                {/* Epic Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-1 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-125 group-hover:-rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/5 via-purple-300/5 to-pink-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1200 transform group-hover:scale-150 blur-md"></div>
                
                {/* Animated Border Lines */}
                <div className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 group-hover:w-[calc(100%-1.5rem)]"></div>
                <div className="absolute top-0 right-3 w-0 h-0.5 bg-gradient-to-l from-pink-400 via-purple-400 to-blue-400 transition-all duration-900 group-hover:w-[calc(100%-1.5rem)]"></div>
                
                {/* Pulsing Indicators */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 border-2 border-green-300/50"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400/30 rounded-full animate-ping"></div>
                
                {/* Corner Sparkles */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300" style={{ animationDelay: '0ms' }}></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300" style={{ animationDelay: '300ms' }}></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300" style={{ animationDelay: '600ms' }}></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300" style={{ animationDelay: '900ms' }}></div>
                
                {/* Floating Text Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-500">
                  <span className="text-xs font-light text-white animate-pulse">Portfolio</span>
                </div>
              </div>
            </Link>

            {/* Epic Desktop Navigation with Incredible Hover Boxes */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href || (pathname === '/' && item.href === '/') || (pathname === '/about' && item.href === '/about');
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-white/70 hover:text-white transition-all duration-700 ease-out text-xs font-medium group overflow-hidden rounded-lg ${
                      hoveredItem === index ? "scale-105 -translate-y-1 text-white z-30" : ""
                    } ${isActive ? "text-blue-400" : ""}`}
                    style={{ 
                      animationDelay: `${0.2 + (index * 0.1)}s`,
                      transform: hoveredItem === index ? 'scale(1.05) translateY(-4px) rotateX(5deg)' : 'scale(1) translateY(0px) rotateX(0deg)',
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-center space-x-1.5 relative z-30">
                      <span className="text-sm">{item.icon}</span>
                      <span className="relative transition-all duration-500 group-hover:text-blue-200 font-medium">
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Ultra Cool 3D Hover Box System */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl transition-all duration-500 transform ${
                      hoveredItem === index ? 'scale-100 opacity-100 rotate-2 shadow-2xl shadow-purple-500/50' : 'scale-75 opacity-0 rotate-0'
                    } -z-10`}></div>
                    
                    {/* Secondary Glow Layer */}
                    <div className={`absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl transition-all duration-700 transform ${
                      hoveredItem === index ? 'scale-110 opacity-100 -rotate-2 shadow-xl shadow-blue-500/30' : 'scale-50 opacity-0 rotate-0'
                    } -z-20 blur-sm`}></div>
                    
                    {/* Outer Space Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-2xl transition-all duration-1000 transform ${
                      hoveredItem === index ? 'scale-125 opacity-100 shadow-2xl' : 'scale-75 opacity-0'
                    } -z-30 blur-lg`}></div>
                    
                    {/* Animated Border Magic */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredItem === index ? 'border-2 border-gradient-to-r from-blue-400/70 via-purple-400/70 to-pink-400/70' : ''
                    } -z-5`}></div>
                    
                    {/* Multi-directional Line Animations */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-500 ${
                      hoveredItem === index || isActive ? 'w-full shadow-lg shadow-purple-400/50' : 'w-0'
                    }`}></div>
                    
                    <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full transition-all duration-700 ${
                      hoveredItem === index ? 'w-full opacity-80 shadow-lg shadow-blue-400/50' : 'w-0 opacity-0'
                    }`}></div>
                    
                    <div className={`absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-600 ${
                      hoveredItem === index ? 'h-full opacity-60' : 'h-0 opacity-0'
                    }`}></div>
                    
                    <div className={`absolute right-0 top-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full transition-all duration-800 ${
                      hoveredItem === index ? 'h-full opacity-40' : 'h-0 opacity-0'
                    }`}></div>
                    
                    {/* Epic Particle System */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      hoveredItem === index ? 'animate-pulse' : ''
                    }`}>
                      {hoveredItem === index && (
                        <>
                          {/* Corner particles */}
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full animate-ping shadow-lg shadow-white/50" style={{ animationDelay: '0ms' }}></div>
                          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50" style={{ animationDelay: '200ms' }}></div>
                          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '400ms' }}></div>
                          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDelay: '600ms' }}></div>
                          
                          {/* Center floating particles */}
                          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                          <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '500ms' }}></div>
                        </>
                      )}
                    </div>
                    
                    {/* Ultra Cool Shimmer Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1200 transform ${
                      hoveredItem === index ? 'translate-x-0 skew-x-12 opacity-100' : '-translate-x-full skew-x-12 opacity-0'
                    } -z-15`}></div>
                    
                    {/* Active State Super Indicator */}
                    {isActive && (
                      <>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-xl shadow-blue-400/70 border-2 border-blue-300/50"></div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400/30 rounded-full animate-ping"></div>
                      </>
                    )}
                    
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 opacity-10 transition-all duration-500 ${
                      hoveredItem === index ? 'opacity-30' : 'opacity-0'
                    }`}>
                      <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute top-3 right-3 w-1 h-1 bg-blue-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-3 w-1 h-1 bg-purple-300 rounded-full"></div>
                      <div className="absolute bottom-3 right-2 w-1 h-1 bg-pink-300 rounded-full"></div>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Epic Mobile Hamburger Button */}
            <button
              className="lg:hidden hamburger-button relative w-10 h-10 flex flex-col justify-center items-center group z-50 rounded-lg transition-all duration-700 hover:scale-110 hover:rotate-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {/* Epic Background Layers */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl transition-all duration-500 ${
                isMobileMenuOpen ? 'scale-110 opacity-100 rotate-45 shadow-2xl shadow-purple-500/50' : 'scale-90 opacity-0 rotate-0'
              }`}></div>
              <div className={`absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl transition-all duration-700 blur-sm ${
                isMobileMenuOpen ? 'scale-125 opacity-100 -rotate-45' : 'scale-75 opacity-0 rotate-0'
              }`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-pink-300/10 rounded-2xl transition-all duration-900 blur-lg ${
                isMobileMenuOpen ? 'scale-150 opacity-100' : 'scale-50 opacity-0'
              }`}></div>
              
              {/* Three Epic Lines with Individual Gradients */}
              <div className={`w-5 h-0.5 rounded-full transition-all duration-400 ease-in-out relative z-10 ${
                isMobileMenuOpen 
                  ? 'rotate-45 translate-y-1.5 bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50' 
                  : 'bg-gradient-to-r from-white to-gray-200 group-hover:from-blue-400 group-hover:to-purple-400 group-hover:shadow-md group-hover:shadow-blue-400/30'
              }`}></div>
              
              <div className={`w-5 h-0.5 rounded-full transition-all duration-400 ease-in-out my-1 relative z-10 ${
                isMobileMenuOpen 
                  ? 'opacity-0 scale-0 rotate-180' 
                  : 'bg-gradient-to-r from-white to-gray-200 group-hover:from-purple-400 group-hover:to-pink-400 group-hover:shadow-md group-hover:shadow-purple-400/30'
              }`}></div>
              
              <div className={`w-5 h-0.5 rounded-full transition-all duration-400 ease-in-out relative z-10 ${
                isMobileMenuOpen 
                  ? '-rotate-45 -translate-y-1.5 bg-gradient-to-r from-pink-400 to-blue-400 shadow-lg shadow-pink-400/50' 
                  : 'bg-gradient-to-r from-white to-gray-200 group-hover:from-pink-400 group-hover:to-blue-400 group-hover:shadow-md group-hover:shadow-pink-400/30'
              }`}></div>
              
              {/* Epic Corner Sparkles */}
              {(isMobileMenuOpen || hoveredItem === 'mobile') && (
                <>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDelay: '400ms' }}></div>
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50" style={{ animationDelay: '600ms' }}></div>
                </>
              )}
              
              {/* Hover state indicator */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                onMouseEnter={() => setHoveredItem('mobile')}
                onMouseLeave={() => setHoveredItem(null)}
              ></div>
            </button>
          </div>
        </div>
      </header>

      {/* Epic Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Enhanced Backdrop */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-black/70 backdrop-blur-lg transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Epic Mobile Menu Panel */}
        <div className={`mobile-menu absolute top-0 right-0 w-80 h-full bg-gradient-to-b from-gray-900/98 via-gray-800/95 to-gray-900/98 backdrop-blur-2xl border-l border-purple-500/50 shadow-2xl transform transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-x-0 scale-100' : 'translate-x-full scale-95'
        }`}>
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/30 mt-16">
            <span className="text-lg font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Navigation
            </span>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse"></div>
          </div>

          {/* Epic Mobile Navigation Links */}
          <nav className="flex flex-col p-4 space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center justify-between p-3 text-white/80 hover:text-white transition-all duration-500 ease-out font-medium group rounded-lg hover:bg-gradient-to-r hover:from-gray-800/80 hover:via-gray-700/60 hover:to-gray-800/80 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${
                    isActive ? "text-blue-400 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/40 shadow-lg shadow-blue-500/30" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isMobileMenuOpen ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.8)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-lg">{item.icon}</div>
                    <div className="flex flex-col">
                      <span className="relative z-10 transition-all duration-500 group-hover:text-blue-300 font-medium text-sm">
                        {item.name}
                      </span>
                      <span className="text-xs text-white/40 group-hover:text-white/60 transition-all duration-300">
                        {item.href === '/' ? 'Welcome page' : `Visit ${item.name.toLowerCase()}`}
                      </span>
                    </div>
                  </div>
                  
                  {/* Epic Arrow with Animation */}
                  <svg 
                    className={`w-6 h-6 transition-all duration-500 ${
                      isActive ? 'text-blue-400 rotate-90' : 'text-white/40 group-hover:text-blue-400 group-hover:translate-x-2 group-hover:scale-110'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  
                  {/* Mobile Epic Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-r-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
