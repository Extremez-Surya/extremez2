"use client";

import { useState, useEffect, useMemo } from "react";

export default function BackgroundEffects({ variant = "default" }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [binaryStreams, setBinaryStreams] = useState([]);

  useEffect(() => {
    setIsClient(true);

    const generateBinaryStreams = () => {
      if (typeof window === "undefined") return;

      const streamArray = [];
      const streamCount = Math.floor((dimensions.width || window.innerWidth) / 60); // More streams
      const binaryChars = ["0", "1"];
      const codingChars = ["<", ">", "/", "{", "}", "(", ")", "[", "]", ";", ":", "=", "+", "-", "*", "&", "%", "$", "#", "@"];

      for (let i = 0; i < streamCount; i++) {
        const characters = [];
        const streamLength = Math.random() * 25 + 15; // Longer streams

        for (let j = 0; j < streamLength; j++) {
          const useCodingChar = Math.random() < 0.4; // More coding characters
          const char = useCodingChar
            ? codingChars[Math.floor(Math.random() * codingChars.length)]
            : binaryChars[Math.floor(Math.random() * binaryChars.length)];

          characters.push({
            char,
            opacity: Math.random() * 0.9 + 0.3, // More visible
            glowIntensity: Math.random() * 0.8 + 0.6, // More glow
          });
        }

        streamArray.push({
          id: i,
          x: i * 60 + Math.random() * 30, // Closer spacing
          y: Math.random() * -800 - 200, // Start higher
          characters,
          speed: Math.random() * 3 + 1.5, // Faster speed
          fontSize: Math.random() * 8 + 14, // Larger text
          isHighlighted: Math.random() < 0.15, // More highlights
        });
      }
      setBinaryStreams(streamArray);
    };

    const animateBinaryStreams = () => {
      setBinaryStreams((prevStreams) =>
        prevStreams.map((stream) => {
          let newY = stream.y + stream.speed;

          if (newY > (dimensions.height || window.innerHeight) + 300) {
            newY = Math.random() * -800 - 200; // Start higher

            const binaryChars = ["0", "1"];
            const codingChars = ["<", ">", "/", "{", "}", "(", ")", "[", "]", ";", ":", "=", "+", "-", "*", "&", "%", "$", "#", "@"];
            const newCharacters = [];
            const streamLength = Math.random() * 25 + 15; // Longer streams

            for (let j = 0; j < streamLength; j++) {
              const useCodingChar = Math.random() < 0.4; // More coding characters
              const char = useCodingChar
                ? codingChars[Math.floor(Math.random() * codingChars.length)]
                : binaryChars[Math.floor(Math.random() * binaryChars.length)];

              newCharacters.push({
                char,
                opacity: Math.random() * 0.9 + 0.3, // More visible
                glowIntensity: Math.random() * 0.8 + 0.6, // More glow
              });
            }

            return {
              ...stream,
              y: newY,
              characters: newCharacters,
              speed: Math.random() * 3 + 1.5, // Faster speed
              isHighlighted: Math.random() < 0.15, // More highlights
            };
          }

          return { ...stream, y: newY };
        })
      );
    };

    const streamTimer = setInterval(animateBinaryStreams, 40); // Smoother animation
    setTimeout(generateBinaryStreams, 100);

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setTimeout(generateBinaryStreams, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(streamTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const binaryStreamElements = useMemo(() => {
    if (!isClient || binaryStreams.length === 0) return [];

    return binaryStreams.map((stream) => (
      <div
        key={stream.id}
        className="absolute font-mono"
        style={{
          left: stream.x,
          top: stream.y,
          fontSize: `${stream.fontSize}px`,
          lineHeight: `${stream.fontSize * 1.2}px`,
          color: stream.isHighlighted ? "#00ff41" : "#0099ff", // Matrix green and bright blue
          textShadow: stream.isHighlighted
            ? "0 0 15px #00ff41, 0 0 25px #00ff41, 0 0 35px #00ff41"
            : "0 0 8px #0099ff, 0 0 15px #0099ff",
          filter: "blur(0.2px)",
          willChange: "transform",
          fontWeight: stream.isHighlighted ? "bold" : "normal",
        }}
      >
        {stream.characters.map((character, index) => (
          <div
            key={index}
            style={{
              opacity: character.opacity * (1 - (index / stream.characters.length) * 0.6), // Less fade
              textShadow: stream.isHighlighted
                ? `0 0 ${character.glowIntensity * 20}px #00ff41`
                : `0 0 ${character.glowIntensity * 12}px #0099ff`,
              transition: "opacity 0.1s ease-out",
            }}
          >
            {character.char}
          </div>
        ))}
      </div>
    ));
  }, [binaryStreams, isClient]);

  const getBackgroundGradient = () => {
    switch (variant) {
      case "about":
        return `
          radial-gradient(ellipse 80% 50% at 50% 0%, 
            rgba(59, 130, 246, 0.08) 0%, 
            rgba(29, 78, 216, 0.05) 25%, 
            rgba(30, 58, 138, 0.03) 50%, 
            transparent 70%
          ),
          linear-gradient(180deg, 
            rgba(59, 130, 246, 0.04) 0%, 
            rgba(29, 78, 216, 0.02) 30%, 
            transparent 60%
          )
        `;
      default:
        return `
          radial-gradient(ellipse 80% 50% at 50% 0%, 
            rgba(59, 130, 246, 0.08) 0%, 
            rgba(29, 78, 216, 0.05) 25%, 
            rgba(30, 58, 138, 0.03) 50%, 
            transparent 70%
          ),
          linear-gradient(180deg, 
            rgba(59, 130, 246, 0.04) 0%, 
            rgba(29, 78, 216, 0.02) 30%, 
            transparent 60%
          )
        `;
    }
  };

  return (
    <>
      {/* Blue gradient light effect */}
      <div className="absolute inset-0 pointer-events-none blur-target">
        <div
          className="w-full h-full"
          style={{ background: getBackgroundGradient() }}
        />
      </div>

      {/* Animated binary rain background */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden blur-target">
          {binaryStreamElements}
        </div>
      )}
    </>
  );
}

