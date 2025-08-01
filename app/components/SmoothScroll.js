"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Custom smooth scroll with reduced movement
    const smoothScroll = (target, duration = 800) => {
      const targetPosition = target.offsetTop - 80; // Account for header height
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      // Easing function for smooth animation
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Override default scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          smoothScroll(target);
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Custom wheel event for reduced scroll distance
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY || e.detail || e.wheelDelta;
      const scrollAmount = delta * 0.5; // Reduce scroll speed by 50%
      
      window.scrollBy({
        top: scrollAmount,
        behavior: 'auto'
      });
    };

    // Apply smooth scrolling with reduced movement
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    // Add passive event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

