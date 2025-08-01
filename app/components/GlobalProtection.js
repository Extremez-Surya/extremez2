"use client";

import { useEffect } from "react";

export default function GlobalProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy keyboard shortcuts
    const handleKeyDown = (e) => {
      // Disable Ctrl+C (Copy)
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+A (Select All)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+K (Console - Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+V (Paste)
      if (e.ctrlKey && e.key === 'v') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+X (Cut)
      if (e.ctrlKey && e.key === 'x') {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable printing
    const handleBeforePrint = (e) => {
      e.preventDefault();
      return false;
    };

    // Console warning message
    const showConsoleWarning = () => {
      console.clear();
      console.log(
        "%c🚫 STOP!",
        "color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
      );
      console.log(
        "%cThis is a browser feature intended for developers. Content is protected by copyright.",
        "color: red; font-size: 16px; font-weight: bold;"
      );
      console.log(
        "%cUnauthorized copying or access is prohibited.",
        "color: orange; font-size: 14px;"
      );
    };

    // Detect developer tools
    let devtools = {
      open: false,
      orientation: null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          showConsoleWarning();
          // Optional: Redirect or disable page
          // window.location.href = "about:blank";
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Disable image saving
    const handleImageEvents = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragover', handleImageEvents);
    document.addEventListener('drop', handleImageEvents);
    window.addEventListener('beforeprint', handleBeforePrint);

    // Show initial console warning
    showConsoleWarning();

    // Disable console functions (advanced protection)
    try {
      Object.defineProperty(console, 'log', { value: () => {} });
      Object.defineProperty(console, 'warn', { value: () => {} });
      Object.defineProperty(console, 'error', { value: () => {} });
      Object.defineProperty(console, 'info', { value: () => {} });
      Object.defineProperty(console, 'debug', { value: () => {} });
    } catch (e) {
      // Silently fail if console modification is blocked
    }

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('dragover', handleImageEvents);
      document.removeEventListener('drop', handleImageEvents);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);

  return null; // This component doesn't render anything
}

