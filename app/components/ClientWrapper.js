"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import GlobalProtection from "./GlobalProtection";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [startAnimations, setStartAnimations] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Start animations after a short delay once loading is complete
    setTimeout(() => {
      setStartAnimations(true);
      // Add the animation class to body to trigger all animations
      document.body.classList.add('start-animations');
    }, 200);
  };

  return (
    <>
      <GlobalProtection />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`${isLoading ? 'invisible' : 'visible'} ${startAnimations ? 'animations-active' : ''}`}>
        {children}
      </div>
    </>
  );
}

