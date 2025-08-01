"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [trailDots, setTrailDots] = useState([]);

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail dot
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
        opacity: 1
      };
      
      setTrailDots(prev => [...prev, newDot].slice(-8)); // Keep last 8 dots
    };

    // Mouse down/up handlers
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup trail dots
    const trailInterval = setInterval(() => {
      setTrailDots(prev => 
        prev.map(dot => ({ ...dot, opacity: dot.opacity - 0.1 }))
            .filter(dot => dot.opacity > 0)
      );
    }, 50);

    // Detect hoverable elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    const handleMouseEnter = (e) => {
      setIsHovering(true);
      const element = e.target;
      
      // Set cursor variant based on element type
      if (element.tagName === 'A') {
        setCursorVariant('link');
      } else if (element.tagName === 'BUTTON' || element.role === 'button') {
        setCursorVariant('button');
      } else if (['INPUT', 'TEXTAREA'].includes(element.tagName)) {
        setCursorVariant('text');
      } else {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(trailInterval);
      document.body.style.cursor = 'auto';
      
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'link': return isClicking ? 'scale-75' : 'scale-150';
      case 'button': return isClicking ? 'scale-90' : 'scale-125';
      case 'text': return 'scale-75';
      case 'hover': return isClicking ? 'scale-110' : 'scale-125';
      default: return isClicking ? 'scale-75' : 'scale-100';
    }
  };

  const getCursorColor = () => {
    switch (cursorVariant) {
      case 'link': return 'bg-blue-400';
      case 'button': return 'bg-purple-400';
      case 'text': return 'bg-green-400';
      case 'hover': return 'bg-cyan-400';
      default: return 'bg-white';
    }
  };

  const getCursorBorder = () => {
    switch (cursorVariant) {
      case 'link': return 'border-blue-300';
      case 'button': return 'border-purple-300';
      case 'text': return 'border-green-300';
      case 'hover': return 'border-cyan-300';
      default: return 'border-gray-300';
    }
  };

  return (
    <>
      {/* Trail Dots */}
      {trailDots.map((dot, index) => (
        <div
          key={dot.id}
          className="fixed pointer-events-none z-[9999] w-1 h-1 bg-white/40 rounded-full transition-opacity duration-100"
          style={{
            left: dot.x - 2,
            top: dot.y - 2,
            opacity: dot.opacity * (index / trailDots.length),
            transform: `scale(${1 - index * 0.1})`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[10000] w-6 h-6 rounded-full border-2 transition-all duration-200 ease-out mix-blend-difference ${getCursorSize()} ${getCursorColor()} ${getCursorBorder()}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          boxShadow: isHovering ? '0 0 20px rgba(255, 255, 255, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Inner dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full transition-all duration-200 ${isClicking ? 'scale-150' : 'scale-100'}`} />
        
        {/* Pulse ring for special states */}
        {(cursorVariant === 'link' || cursorVariant === 'button') && (
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/30 rounded-full animate-ping`} />
        )}
        
        {/* Rotating ring for text inputs */}
        {cursorVariant === 'text' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-green-400/50 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
        )}
        
        {/* Sparkle effect for hover */}
        {isHovering && (
          <>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -top-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>

      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9999] w-12 h-12 rounded-full border border-white/20 transition-all duration-300 ease-out ${isHovering ? 'scale-150 border-white/40' : 'scale-100'} ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />

      {/* Click ripple effect */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9998] w-16 h-16 border-2 border-white/60 rounded-full animate-ping"
          style={{
            left: mousePosition.x - 32,
            top: mousePosition.y - 32,
          }}
        />
      )}

      {/* Magnetic field effect for buttons */}
      {cursorVariant === 'button' && (
        <div
          className="fixed pointer-events-none z-[9997] w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
          }}
        />
      )}
    </>
  );
}

