"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsShowcase() {
  const [selectedSkill, setSelectedSkill] = useState("React.js");
  const [hoveredProject, setHoveredProject] = useState(null);

  const skillProjects = {
    "React.js": [
      {
        id: 1,
        name: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with React, Redux, and Stripe integration",
        complexity: "Advanced",
        duration: "3 months",
        tech: ["React", "Redux", "Stripe", "Node.js"],
        features: ["Payment Integration", "Admin Dashboard", "Real-time Updates"],
        image: "🛒",
        demo: "#",
        github: "#"
      },
      {
        id: 2,
        name: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with real-time data",
        complexity: "Intermediate",
        duration: "2 months",
        tech: ["React", "Chart.js", "Firebase", "Material-UI"],
        features: ["Real-time Analytics", "Multi-platform", "Custom Reports"],
        image: "📊",
        demo: "#",
        github: "#"
      },
      {
        id: 3,
        name: "Task Management App",
        description: "Collaborative task management application with team features",
        complexity: "Intermediate",
        duration: "1.5 months",
        tech: ["React", "Context API", "Socket.io", "Express"],
        features: ["Real-time Collaboration", "Team Management", "File Sharing"],
        image: "✅",
        demo: "#",
        github: "#"
      }
    ],
    "Next.js": [
      {
        id: 4,
        name: "Corporate Website",
        description: "High-performance corporate website with SSG and SEO optimization",
        complexity: "Advanced",
        duration: "2 months",
        tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
        features: ["SEO Optimized", "Performance", "CMS Integration"],
        image: "🏢",
        demo: "#",
        github: "#"
      },
      {
        id: 5,
        name: "Blog Platform",
        description: "Modern blog platform with MDX support and dynamic routing",
        complexity: "Intermediate",
        duration: "1 month",
        tech: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
        features: ["MDX Support", "Dynamic Routes", "Comment System"],
        image: "📝",
        demo: "#",
        github: "#"
      }
    ],
    "Node.js": [
      {
        id: 6,
        name: "REST API Server",
        description: "Scalable REST API with authentication and rate limiting",
        complexity: "Advanced",
        duration: "2.5 months",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        features: ["Authentication", "Rate Limiting", "API Documentation"],
        image: "🔗",
        demo: "#",
        github: "#"
      },
      {
        id: 7,
        name: "Real-time Chat App",
        description: "Real-time chat application with multiple rooms and file sharing",
        complexity: "Intermediate",
        duration: "1.5 months",
        tech: ["Node.js", "Socket.io", "Redis", "MongoDB"],
        features: ["Real-time Messaging", "File Sharing", "Multiple Rooms"],
        image: "💬",
        demo: "#",
        github: "#"
      }
    ],
    "MongoDB": [
      {
        id: 8,
        name: "Data Analytics Platform",
        description: "Data analytics platform with advanced aggregation pipelines",
        complexity: "Advanced",
        duration: "3 months",
        tech: ["MongoDB", "Node.js", "Express", "Chart.js"],
        features: ["Advanced Queries", "Data Visualization", "Export Features"],
        image: "📈",
        demo: "#",
        github: "#"
      }
    ],
    "AWS": [
      {
        id: 9,
        name: "Serverless Image Processor",
        description: "Serverless image processing service using AWS Lambda and S3",
        complexity: "Advanced",
        duration: "1 month",
        tech: ["AWS Lambda", "S3", "CloudFront", "API Gateway"],
        features: ["Auto Scaling", "CDN", "Image Optimization"],
        image: "🖼️",
        demo: "#",
        github: "#"
      }
    ]
  };

  const skills = Object.keys(skillProjects);
  const currentProjects = skillProjects[selectedSkill] || [];

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case "Advanced": return "from-red-500 to-pink-600";
      case "Intermediate": return "from-yellow-500 to-orange-600";
      case "Beginner": return "from-green-500 to-emerald-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getComplexityIcon = (complexity) => {
    switch (complexity) {
      case "Advanced": return "🔥";
      case "Intermediate": return "⚡";
      case "Beginner": return "🌱";
      default: return "⭐";
    }
  };

  const totalProjects = Object.values(skillProjects).flat().length;
  const avgComplexity = Object.values(skillProjects).flat()
    .reduce((acc, project) => {
      const score = project.complexity === "Advanced" ? 3 : 
                   project.complexity === "Intermediate" ? 2 : 1;
      return acc + score;
    }, 0) / totalProjects;

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
            Projects
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world projects demonstrating practical application of my technical skills
          </p>
        </motion.div>

        {/* Skill Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill, index) => {
            const projectCount = skillProjects[skill].length;
            return (
              <motion.button
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedSkill(skill)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedSkill === skill
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white transform scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:scale-105"
                }`}
              >
                <span>{skill}</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {projectCount}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedSkill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${getComplexityColor(project.complexity)} p-[1px] rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="bg-gray-900/95 rounded-2xl p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-4xl"
                      animate={hoveredProject === project.id ? {
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {project.image}
                    </motion.div>
                    
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${getComplexityColor(project.complexity)} text-white`}>
                        {getComplexityIcon(project.complexity)} {project.complexity}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Key Features</div>
                      <div className="space-y-1">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="space-y-3">
                    {/* Stats */}
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-gray-400">Duration: {project.duration}</div>
                      <div className="text-blue-400">{selectedSkill}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.button
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.button>
                      <motion.button
                        className="flex-1 py-2 px-4 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        GitHub
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute -inset-1 bg-gradient-to-r ${getComplexityColor(project.complexity)} rounded-2xl blur opacity-20 -z-10`}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Project Portfolio Overview</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{totalProjects}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Object.values(skillProjects).flat().filter(p => p.complexity === "Advanced").length}
              </div>
              <div className="text-gray-400">Advanced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {skills.length}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {Math.round(avgComplexity * 10) / 10}
              </div>
              <div className="text-gray-400">Avg Complexity</div>
            </div>
          </div>

          {/* Technology Distribution */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Technology Distribution</h4>
            {skills.map((skill, index) => {
              const projectCount = skillProjects[skill].length;
              const percentage = (projectCount / totalProjects) * 100;
              
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-24 text-sm text-gray-300">{skill}</div>
                  <div className="flex-1 relative">
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 h-full w-6 bg-white/30 blur-sm"
                          animate={{ x: [-24, 100] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            delay: index * 0.3
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-16 text-sm text-gray-400 text-right">
                    {projectCount} ({Math.round(percentage)}%)
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Projects */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Recent Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.values(skillProjects).flat()
                .filter(p => p.complexity === "Advanced")
                .slice(0, 3)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/30 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{project.image}</div>
                      <div>
                        <div className="text-white font-medium">{project.name}</div>
                        <div className="text-gray-400 text-xs">{project.duration}</div>
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">{project.description}</div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

