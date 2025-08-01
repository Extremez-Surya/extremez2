"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TechnologyStack() {
  const [activeStack, setActiveStack] = useState("frontend");
  const [hoveredTech, setHoveredTech] = useState(null);
  const [animationMode, setAnimationMode] = useState("orbit");

  const techStacks = {
    frontend: {
      title: "Frontend Development",
      icon: "🖥️",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        {
          name: "React.js",
          icon: "⚛️",
          level: 95,
          description: "Component-based UI library",
          projects: 25,
          ecosystem: ["Next.js", "Gatsby", "React Native"]
        },
        {
          name: "TypeScript",
          icon: "🔷",
          level: 88,
          description: "Typed JavaScript at scale",
          projects: 20,
          ecosystem: ["TSX", "Type Guards", "Decorators"]
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          level: 93,
          description: "Utility-first CSS framework",
          projects: 22,
          ecosystem: ["JIT Mode", "Plugins", "Components"]
        },
        {
          name: "Framer Motion",
          icon: "🎭",
          level: 87,
          description: "Production-ready animations",
          projects: 14,
          ecosystem: ["Layout Animations", "Gestures", "SVG"]
        },
        {
          name: "Vue.js",
          icon: "💚",
          level: 85,
          description: "Progressive JavaScript framework",
          projects: 12,
          ecosystem: ["Nuxt.js", "Vuex", "Composition API"]
        },
        {
          name: "Sass/SCSS",
          icon: "💅",
          level: 89,
          description: "CSS with superpowers",
          projects: 30,
          ecosystem: ["Mixins", "Variables", "Partials"]
        }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      technologies: [
        {
          name: "Node.js",
          icon: "🟢",
          level: 87,
          description: "JavaScript runtime environment",
          projects: 15,
          ecosystem: ["Express.js", "Nest.js", "Fastify"]
        },
        {
          name: "Python",
          icon: "🐍",
          level: 82,
          description: "Versatile programming language",
          projects: 10,
          ecosystem: ["Django", "Flask", "FastAPI"]
        },
        {
          name: "RESTful APIs",
          icon: "🔗",
          level: 90,
          description: "API design and implementation",
          projects: 18,
          ecosystem: ["OpenAPI", "Swagger", "Postman"]
        },
        {
          name: "GraphQL",
          icon: "📊",
          level: 76,
          description: "Query language for APIs",
          projects: 8,
          ecosystem: ["Apollo", "Relay", "Prisma"]
        },
        {
          name: "Microservices",
          icon: "🏗️",
          level: 79,
          description: "Distributed architecture",
          projects: 6,
          ecosystem: ["Docker", "Kubernetes", "API Gateway"]
        }
      ]
    },
    database: {
      title: "Database & Storage",
      icon: "🗄️",
      color: "from-purple-500 to-violet-500",
      technologies: [
        {
          name: "MongoDB",
          icon: "🍃",
          level: 85,
          description: "NoSQL document database",
          projects: 16,
          ecosystem: ["Atlas", "Compass", "Aggregation"]
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          level: 79,
          description: "Advanced relational database",
          projects: 8,
          ecosystem: ["PL/pgSQL", "JSON", "Extensions"]
        },
        {
          name: "Redis",
          icon: "🔴",
          level: 74,
          description: "In-memory data structure",
          projects: 12,
          ecosystem: ["Caching", "Sessions", "Pub/Sub"]
        },
        {
          name: "Firebase",
          icon: "🔥",
          level: 81,
          description: "Backend-as-a-Service platform",
          projects: 10,
          ecosystem: ["Firestore", "Auth", "Functions"]
        },
        {
          name: "Prisma",
          icon: "⚡",
          level: 77,
          description: "Next-generation ORM",
          projects: 7,
          ecosystem: ["Schema", "Studio", "Migrate"]
        }
      ]
    },
    devops: {
      title: "DevOps & Deployment",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      technologies: [
        {
          name: "Docker",
          icon: "🐳",
          level: 76,
          description: "Containerization platform",
          projects: 12,
          ecosystem: ["Compose", "Swarm", "Registry"]
        },
        {
          name: "AWS",
          icon: "☁️",
          level: 73,
          description: "Cloud computing platform",
          projects: 8,
          ecosystem: ["EC2", "S3", "Lambda", "CloudFront"]
        },
        {
          name: "Vercel",
          icon: "▲",
          level: 89,
          description: "Frontend deployment platform",
          projects: 18,
          ecosystem: ["Edge Functions", "Analytics", "Domains"]
        },
        {
          name: "GitHub Actions",
          icon: "🔧",
          level: 82,
          description: "CI/CD automation",
          projects: 15,
          ecosystem: ["Workflows", "Runners", "Marketplace"]
        },
        {
          name: "Nginx",
          icon: "🌐",
          level: 71,
          description: "Web server and reverse proxy",
          projects: 6,
          ecosystem: ["Load Balancing", "SSL", "Caching"]
        }
      ]
    },
    tools: {
      title: "Development Tools",
      icon: "🛠️",
      color: "from-yellow-500 to-orange-500",
      technologies: [
        {
          name: "VS Code",
          icon: "💻",
          level: 95,
          description: "Code editor and IDE",
          projects: 50,
          ecosystem: ["Extensions", "Debugging", "IntelliSense"]
        },
        {
          name: "Git & GitHub",
          icon: "🔧",
          level: 91,
          description: "Version control system",
          projects: 35,
          ecosystem: ["Branching", "Pull Requests", "Actions"]
        },
        {
          name: "Figma",
          icon: "🎨",
          level: 84,
          description: "Design and prototyping tool",
          projects: 20,
          ecosystem: ["Components", "Auto Layout", "Plugins"]
        },
        {
          name: "Webpack",
          icon: "📦",
          level: 78,
          description: "Module bundler",
          projects: 14,
          ecosystem: ["Loaders", "Plugins", "Dev Server"]
        },
        {
          name: "ESLint",
          icon: "🔍",
          level: 86,
          description: "JavaScript linting utility",
          projects: 28,
          ecosystem: ["Rules", "Configs", "Plugins"]
        },
        {
          name: "Jest",
          icon: "🧪",
          level: 80,
          description: "JavaScript testing framework",
          projects: 16,
          ecosystem: ["Mocking", "Snapshots", "Coverage"]
        }
      ]
    }
  };

  const currentStack = techStacks[activeStack];

  // Animation variants for different modes
  const orbitVariants = {
    animate: (i) => ({
      rotate: 360,
      transition: {
        duration: 20 + i * 2,
        repeat: Infinity,
        ease: "linear"
      }
    })
  };

  const floatVariants = {
    animate: (i) => ({
      y: [-10, 10, -10],
      transition: {
        duration: 2 + i * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  const pulseVariants = {
    animate: (i) => ({
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5 + i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.1
      }
    })
  };

  const getAnimationVariants = () => {
    switch (animationMode) {
      case "orbit": return orbitVariants;
      case "float": return floatVariants;
      case "pulse": return pulseVariants;
      default: return {};
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of technologies, tools, and frameworks I work with
          </p>
        </motion.div>

        {/* Stack Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(techStacks).map(([key, stack], index) => (
            <motion.button
              key={key}
              onClick={() => setActiveStack(key)}
              className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                activeStack === key
                  ? `bg-gradient-to-r ${stack.color} text-white shadow-lg transform scale-105`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:scale-105"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{stack.icon}</span>
              <span>{stack.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Animation Mode Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {["orbit", "float", "pulse"].map((mode) => (
            <button
              key={mode}
              onClick={() => setAnimationMode(mode)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                animationMode === mode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          key={activeStack}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-gradient-to-br ${currentStack.color} p-[1px] rounded-3xl mb-12`}
        >
          <div className="bg-gray-900/95 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{currentStack.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{currentStack.title}</h3>
              <div className="text-gray-400">
                {currentStack.technologies.length} Technologies
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentStack.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={getAnimationVariants()}
                  animate="animate"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                    {/* Tech Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="text-3xl"
                          animate={hoveredTech === tech.name ? {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-400">{tech.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Proficiency</span>
                        <span className="text-sm font-bold text-white">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${currentStack.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{tech.projects}</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{tech.ecosystem.length}</div>
                        <div className="text-xs text-gray-400">Tools</div>
                      </div>
                    </div>

                    {/* Ecosystem */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 font-medium">Ecosystem</div>
                      <div className="flex flex-wrap gap-1">
                        {tech.ecosystem.map((tool, i) => (
                          <motion.span
                            key={tool}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-xl blur opacity-20 -z-10"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {currentStack.technologies.length}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Math.round(currentStack.technologies.reduce((acc, tech) => acc + tech.level, 0) / currentStack.technologies.length)}%
              </div>
              <div className="text-gray-400">Avg Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {currentStack.technologies.reduce((acc, tech) => acc + tech.projects, 0)}
              </div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {currentStack.technologies.reduce((acc, tech) => acc + tech.ecosystem.length, 0)}
              </div>
              <div className="text-gray-400">Ecosystem Tools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

