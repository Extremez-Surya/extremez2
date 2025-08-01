"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ExperienceTimeline({ skills }) {
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Create timeline data based on skills and experience
  const timelineData = [
    {
      period: "2024",
      title: "Advanced Full-Stack Mastery",
      skills: skills.filter(skill => new Date(skill.lastUsed).getFullYear() === 2024),
      highlights: [
        "Mastered Next.js 15 with App Router",
        "Advanced React patterns and optimization",
        "Cloud deployment and DevOps practices",
        "3D web experiences with Three.js"
      ],
      color: "from-blue-500 to-purple-600",
      icon: "🚀"
    },
    {
      period: "2023",
      title: "Modern Framework Adoption",
      skills: skills.filter(skill => {
        const lastUsed = new Date(skill.lastUsed);
        return lastUsed.getFullYear() === 2023 || 
               (skill.experience.includes("3+") && lastUsed.getFullYear() >= 2023);
      }),
      highlights: [
        "Transitioned to TypeScript for better code quality",
        "Implemented design systems with Tailwind CSS",
        "Built scalable Node.js applications",
        "Introduced animation libraries"
      ],
      color: "from-green-500 to-emerald-600",
      icon: "📈"
    },
    {
      period: "2022",
      title: "Frontend Specialization",
      skills: skills.filter(skill => 
        skill.category === "frontend" && 
        (skill.experience.includes("2+") || skill.experience.includes("3+") || skill.experience.includes("4+"))
      ),
      highlights: [
        "Deep dive into React ecosystem",
        "Responsive design mastery",
        "Component-driven development",
        "Performance optimization techniques"
      ],
      color: "from-purple-500 to-pink-600",
      icon: "🎨"
    },
    {
      period: "2021",
      title: "Foundation Building",
      skills: skills.filter(skill => 
        ["HTML", "CSS", "JavaScript", "Git"].some(tech => 
          skill.technologies.includes(tech) || skill.name.includes(tech)
        )
      ),
      highlights: [
        "Solid JavaScript fundamentals",
        "CSS architecture and methodologies",
        "Version control with Git",
        "Basic backend concepts"
      ],
      color: "from-yellow-500 to-orange-600",
      icon: "🏗️"
    }
  ];

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024-06",
      skills: ["React.js", "JavaScript", "TypeScript"]
    },
    {
      name: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "2024-03",
      skills: ["Node.js", "JavaScript", "Express.js"]
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2023-11",
      skills: ["MongoDB", "Database Design"]
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023-08",
      skills: ["AWS", "Cloud Computing"]
    }
  ];

  const filteredTimeline = selectedPeriod === "all" 
    ? timelineData 
    : timelineData.filter(item => item.period === selectedPeriod);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Experience Timeline</h2>
        <p className="text-gray-400 mb-6">
          My journey through different technologies and milestones over the years
        </p>

        {/* Period Filter */}
        <div className="flex flex-wrap gap-3">
          {["all", ...timelineData.map(item => item.period)].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedPeriod === period
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60"
              }`}
            >
              {period === "all" ? "All Years" : period}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

        <div className="space-y-12">
          {filteredTimeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-8"
              onMouseEnter={() => setHoveredItem(item.period)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl z-10`}
                whileHover={{ scale: 1.1 }}
                animate={hoveredItem === item.period ? { 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
                } : {}}
              >
                {item.icon}
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0"
                  animate={hoveredItem === item.period ? {
                    scale: [1, 1.5],
                    opacity: [0, 0.3, 0]
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 transition-all duration-300 ${
                    hoveredItem === item.period ? "bg-gray-800/70 border-blue-500/50" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <div className="text-sm text-gray-400">{item.period}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                      {item.skills.length} Skills
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Mastered</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.slice(0, 8).map((skill, i) => (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.gradient || 'from-gray-600 to-gray-700'} text-white flex items-center gap-1`}
                        >
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                          <span className="opacity-70">({skill.proficiency}%)</span>
                        </motion.div>
                      ))}
                      {item.skills.length > 8 && (
                        <div className="px-3 py-1 rounded-full text-xs text-gray-400 bg-gray-700/50">
                          +{item.skills.length - 8} more
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 text-2xl mb-1">🏅</div>
                  <div className="text-xs text-gray-400">
                    {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">Skill Evolution</h3>
        <div className="space-y-4">
          {["Frontend", "Backend", "Database", "DevOps", "Design"].map((category, index) => {
            const categorySkills = skills.filter(skill => 
              skill.category.toLowerCase() === category.toLowerCase()
            );
            const avgProficiency = categorySkills.length > 0 
              ? categorySkills.reduce((acc, skill) => acc + skill.proficiency, 0) / categorySkills.length
              : 0;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-20 text-sm text-gray-300">{category}</div>
                <div className="flex-1 relative">
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${avgProficiency}%` }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
                    >
                      <motion.div
                        className="absolute top-0 right-0 h-full w-8 bg-white/30 blur-sm"
                        animate={{ x: [-32, 100] }}
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
                <div className="w-12 text-sm text-gray-400 text-right">
                  {Math.round(avgProficiency)}%
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

