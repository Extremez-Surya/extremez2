"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SkillCard({ skill, isHovered, onHover, onLeave, animationMode }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [particleProps, setParticleProps] = useState([]);

  useEffect(() => {
    // Generate particle properties only once on client side
    if (typeof window !== "undefined") {
      const props = [...Array(5)].map((_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        animateX: Math.random() * 300,
        animateY: Math.random() * 300,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      }));
      setParticleProps(props);
    }
  }, []);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return "from-green-400 to-emerald-500";
    if (proficiency >= 80) return "from-blue-400 to-cyan-500";
    if (proficiency >= 70) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  const getExperienceIcon = (experience) => {
    const years = parseInt(experience);
    if (years >= 4) return "🏆";
    if (years >= 3) return "🥉";
    if (years >= 2) return "🥈";
    return "🥇";
  };

  return (
    <motion.div
      className="group perspective-1000"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className={`relative h-80 w-full cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={`h-full bg-gradient-to-br ${skill.gradient} p-[1px] rounded-2xl group-hover:shadow-2xl transition-all duration-300`}>
            <div className="h-full bg-gray-900/95 rounded-2xl p-6 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="text-4xl"
                    animate={animationMode === "wave" ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <div className="flex items-center gap-2">
                    {skill.trending && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-yellow-400 text-sm"
                      >
                        🔥
                      </motion.div>
                    )}
                    {skill.certifications.length > 0 && (
                      <div className="text-green-400 text-sm">🏅</div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {skill.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm font-medium">Proficiency</span>
                    <span className="text-white font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{ x: [-100, 300] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{skill.projects}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                      {getExperienceIcon(skill.experience)}
                      <span className="text-sm">{skill.experience}</span>
                    </div>
                    <div className="text-xs text-gray-400">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className={`h-full bg-gradient-to-br ${skill.gradient} p-[1px] rounded-2xl`}>
            <div className="h-full bg-gray-900/95 rounded-2xl p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                <div className="text-2xl">{skill.icon}</div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {skill.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {skill.certifications.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Certifications</h4>
                  {skill.certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center gap-2 text-xs text-green-400">
                      <span>🏅</span>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Last Used */}
              <div className="mt-auto">
                <div className="text-xs text-gray-400">
                  Last used: {new Date(skill.lastUsed).toLocaleDateString()}
                </div>
                
                {/* Progress Ring */}
                <div className="flex items-center justify-center mt-4">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-gray-700"
                      />
                      <motion.circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        className="text-blue-400"
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ strokeDasharray: `${skill.proficiency} 100` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{skill.proficiency}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hover Effects */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
        animate={isHovered ? { 
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {isHovered && particleProps.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {particleProps.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
                opacity: 0
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

