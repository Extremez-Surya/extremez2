"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentChar, setCurrentChar] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const sequence = "console.log('Hello World');";

  useEffect(() => {
    const duration = 1500; // Reduced from 2000ms to 1500ms
    const interval = 60; // Faster updates
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Update typing animation
        const charIndex = Math.floor((newProgress / 100) * sequence.length);
        setCurrentChar(sequence.substring(0, charIndex));

        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 300);
          }, 300); // Reduced delay
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Vinay Kumar
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Simple Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        </div>

        {/* Typing animation */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 mb-6">
          <div className="text-left font-mono text-sm">
            <span className="text-green-400">
              {currentChar}
              <span className="animate-pulse text-green-400 ml-1">|</span>
            </span>
          </div>
        </div>

        {/* Simple progress bar */}
        <div className="w-72 mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-gray-400 text-xs mt-2 font-mono">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}

