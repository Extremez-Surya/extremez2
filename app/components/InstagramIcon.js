"use client";
import { motion } from "framer-motion";

const InstagramIcon = ({ 
  size = 24, 
  className = "", 
  color = "#E4405F", // Instagram's brand color
  animate = true 
}) => {
  return (
    <motion.div 
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
      whileHover={animate ? { 
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      } : {}}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
          fill={color}
          whileHover={animate ? {
            fill: "#C13584", // Slightly darker on hover
            transition: { duration: 0.2 }
          } : {}}
        />
        <motion.path
          d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
          fill={color}
          whileHover={animate ? {
            fill: "#C13584",
            transition: { duration: 0.2 }
          } : {}}
        />
      </svg>
    </motion.div>
  );
};

export default InstagramIcon;

