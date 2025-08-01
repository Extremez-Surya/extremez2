"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
    
    // Cleanup
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, 
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg shadow-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <Link href="/" className="flex items-center animate-fade-in-left group cursor-pointer" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-300">
                Extremez
              </span>
              {/* Animated underline for logo */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></div>
              {/* Pulsing dot */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
          </Link>

          {/* Enhanced Navigation Links */}
          <nav className="flex items-center gap-8">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/') || (pathname === '/about' && item.href === '/about');
              const isExternal = item.href.startsWith('http');
              
              if (isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-white/70 hover:text-white transition-all duration-500 ease-out text-sm font-medium animate-fade-in-right group overflow-hidden ${
                      hoveredItem === index ? "scale-110 -translate-y-1 text-white" : ""
                    } ${isActive ? "text-blue-400" : ""}`}
                    style={{ 
                      animationDelay: `${0.2 + (index * 0.1)}s`,
                      transform: hoveredItem === index ? 'scale(1.1) translateY(-4px)' : 'scale(1) translateY(0px)'
                    }}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-blue-300">
                      {item.name}
                    </span>
                    
                    {/* Enhanced hover background effect with ripple */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg transition-all duration-500 -z-10 blur-sm ${
                      hoveredItem === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}></div>
                    
                    {/* Animated underline with gradient */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-500 ${
                      hoveredItem === index || isActive ? 'w-full' : 'w-0'
                    }`}></div>
                    
                    {/* Enhanced glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 rounded-lg transition-all duration-500 -z-20 blur-md ${
                      hoveredItem === index ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                    }`}></div>
                    
                    {/* Sparkle effect on hover */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      hoveredItem === index ? 'animate-pulse' : ''
                    }`}>
                      {hoveredItem === index && (
                        <>
                          <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                          <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                          <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                          <div className="absolute bottom-0 right-0 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
                        </>
                      )}
                    </div>
                    
                    {/* Slide-in effect from different directions */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ${
                      hoveredItem === index ? 'translate-x-0' : '-translate-x-full'
                    } -z-30`}></div>
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-white/70 hover:text-white transition-all duration-500 ease-out text-sm font-medium animate-fade-in-right group overflow-hidden ${
                    hoveredItem === index ? "scale-110 -translate-y-1 text-white" : ""
                  } ${isActive ? "text-blue-400" : ""}`}
                  style={{ 
                    animationDelay: `${0.2 + (index * 0.1)}s`,
                    transform: hoveredItem === index ? 'scale(1.1) translateY(-4px)' : 'scale(1) translateY(0px)'
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-blue-300">
                    {item.name}
                  </span>
                  
                  {/* Enhanced hover background effect with ripple */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg transition-all duration-500 -z-10 blur-sm ${
                    hoveredItem === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}></div>
                  
                  {/* Animated underline with gradient */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-500 ${
                    hoveredItem === index || isActive ? 'w-full' : 'w-0'
                  }`}></div>
                  
                  {/* Enhanced glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 rounded-lg transition-all duration-500 -z-20 blur-md ${
                    hoveredItem === index ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                  }`}></div>
                  
                  {/* Sparkle effect on hover */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    hoveredItem === index ? 'animate-pulse' : ''
                  }`}>
                    {hoveredItem === index && (
                      <>
                        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                        <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                        <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
                      </>
                    )}
                  </div>
                  
                  {/* Slide-in effect from different directions */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ${
                    hoveredItem === index ? 'translate-x-0' : '-translate-x-full'
                  } -z-30`}></div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

