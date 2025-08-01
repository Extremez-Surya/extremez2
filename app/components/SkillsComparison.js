"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SkillsComparison() {
  const [comparisonMode, setComparisonMode] = useState("industry"); // industry, peers, growth
  const [selectedMetric, setSelectedMetric] = useState("proficiency");

  const skillsData = [
    {
      name: "React.js",
      myLevel: 95,
      industryAvg: 78,
      peerAvg: 85,
      growthRate: 15,
      marketDemand: 92,
      salary: 85,
      jobOpenings: 12500,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "TypeScript",
      myLevel: 88,
      industryAvg: 72,
      peerAvg: 80,
      growthRate: 25,
      marketDemand: 89,
      salary: 88,
      jobOpenings: 8900,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Node.js",
      myLevel: 87,
      industryAvg: 74,
      peerAvg: 82,
      growthRate: 18,
      marketDemand: 86,
      salary: 82,
      jobOpenings: 7800,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Next.js",
      myLevel: 92,
      industryAvg: 68,
      peerAvg: 75,
      growthRate: 35,
      marketDemand: 91,
      salary: 90,
      jobOpenings: 5200,
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Tailwind CSS",
      myLevel: 93,
      industryAvg: 65,
      peerAvg: 72,
      growthRate: 42,
      marketDemand: 85,
      salary: 75,
      jobOpenings: 4100,
      color: "from-cyan-400 to-teal-500"
    },
    {
      name: "MongoDB",
      myLevel: 85,
      industryAvg: 69,
      peerAvg: 76,
      growthRate: 22,
      marketDemand: 81,
      salary: 79,
      jobOpenings: 3600,
      color: "from-green-600 to-lime-600"
    },
    {
      name: "AWS",
      myLevel: 73,
      industryAvg: 71,
      peerAvg: 74,
      growthRate: 28,
      marketDemand: 94,
      salary: 95,
      jobOpenings: 15600,
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "Docker",
      myLevel: 76,
      industryAvg: 66,
      peerAvg: 71,
      growthRate: 31,
      marketDemand: 87,
      salary: 86,
      jobOpenings: 6700,
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const getComparisonValue = (skill, mode) => {
    switch (mode) {
      case "industry":
        return skill.industryAvg;
      case "peers":
        return skill.peerAvg;
      case "growth":
        return skill.growthRate;
      default:
        return skill.industryAvg;
    }
  };

  const getMetricValue = (skill, metric) => {
    switch (metric) {
      case "proficiency":
        return skill.myLevel;
      case "demand":
        return skill.marketDemand;
      case "salary":
        return skill.salary;
      case "openings":
        return Math.round(skill.jobOpenings / 1000);
      default:
        return skill.myLevel;
    }
  };

  const getMetricLabel = (metric) => {
    switch (metric) {
      case "proficiency":
        return "Proficiency %";
      case "demand":
        return "Market Demand %";
      case "salary":
        return "Salary Index";
      case "openings":
        return "Job Openings (k)";
      default:
        return "Proficiency %";
    }
  };

  const getBenchmarkLabel = (mode) => {
    switch (mode) {
      case "industry":
        return "Industry Average";
      case "peers":
        return "Peer Average";
      case "growth":
        return "Growth Rate %";
      default:
        return "Industry Average";
    }
  };

  const getPerformanceColor = (myValue, compareValue, mode) => {
    const diff = mode === "growth" ? myValue : (myValue - compareValue);
    if (diff > 15) return "text-green-400";
    if (diff > 5) return "text-blue-400";
    if (diff > -5) return "text-yellow-400";
    return "text-red-400";
  };

  const getPerformanceIcon = (myValue, compareValue, mode) => {
    const diff = mode === "growth" ? myValue : (myValue - compareValue);
    if (diff > 15) return "🚀";
    if (diff > 5) return "📈";
    if (diff > -5) return "➡️";
    return "📉";
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
            Skills
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Comparison
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How my skills stack up against industry standards and market trends
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 mb-12"
        >
          {/* Comparison Mode */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-3">Compare Against</label>
            <div className="flex gap-3">
              {[
                { id: "industry", label: "Industry", icon: "🏭" },
                { id: "peers", label: "Peers", icon: "👥" },
                { id: "growth", label: "Growth", icon: "📈" }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setComparisonMode(mode.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    comparisonMode === mode.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60"
                  }`}
                >
                  <span>{mode.icon}</span>
                  <span>{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Metric Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-3">Metric</label>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="proficiency">Proficiency Level</option>
              <option value="demand">Market Demand</option>
              <option value="salary">Salary Impact</option>
              <option value="openings">Job Openings</option>
            </select>
          </div>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                {getMetricLabel(selectedMetric)} vs {getBenchmarkLabel(comparisonMode)}
              </h3>
              <div className="space-y-4">
                {skillsData.map((skill, index) => {
                  const myValue = getMetricValue(skill, selectedMetric);
                  const compareValue = getComparisonValue(skill, comparisonMode);
                  const maxValue = Math.max(myValue, compareValue, 100);

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={getPerformanceColor(myValue, compareValue, comparisonMode)}>
                            {getPerformanceIcon(myValue, compareValue, comparisonMode)}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {myValue} vs {compareValue}
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        {/* My Level */}
                        <div className="h-6 bg-gray-700 rounded-lg overflow-hidden mb-1">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} relative`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(myValue / maxValue) * 100}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          >
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs font-bold">
                              {myValue}
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Comparison Level */}
                        <div className="h-3 bg-gray-700/50 rounded-lg overflow-hidden">
                          <motion.div
                            className="h-full bg-gray-500 relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${(compareValue / maxValue) * 100}%` }}
                            transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                          >
                            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white text-xs">
                              {compareValue}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Radar Chart Visualization */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid */}
                  {[20, 40, 60, 80, 100].map((value, i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={(value / 100) * 80}
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Axes */}
                  {skillsData.slice(0, 6).map((_, index) => {
                    const angle = (index * 60) - 90;
                    const x = 100 + Math.cos(angle * Math.PI / 180) * 80;
                    const y = 100 + Math.sin(angle * Math.PI / 180) * 80;
                    return (
                      <line
                        key={index}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* My Skills Polygon */}
                  <motion.polygon
                    points={skillsData.slice(0, 6).map((skill, index) => {
                      const angle = (index * 60) - 90;
                      const value = getMetricValue(skill, selectedMetric);
                      const distance = (value / 100) * 80;
                      const x = 100 + Math.cos(angle * Math.PI / 180) * distance;
                      const y = 100 + Math.sin(angle * Math.PI / 180) * distance;
                      return `${x},${y}`;
                    }).join(" ")}
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />

                  {/* Comparison Polygon */}
                  <motion.polygon
                    points={skillsData.slice(0, 6).map((skill, index) => {
                      const angle = (index * 60) - 90;
                      const value = getComparisonValue(skill, comparisonMode);
                      const distance = (value / 100) * 80;
                      const x = 100 + Math.cos(angle * Math.PI / 180) * distance;
                      const y = 100 + Math.sin(angle * Math.PI / 180) * distance;
                      return `${x},${y}`;
                    }).join(" ")}
                    fill="rgba(156, 163, 175, 0.1)"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Labels */}
                  {skillsData.slice(0, 6).map((skill, index) => {
                    const angle = (index * 60) - 90;
                    const x = 100 + Math.cos(angle * Math.PI / 180) * 95;
                    const y = 100 + Math.sin(angle * Math.PI / 180) * 95;
                    return (
                      <text
                        key={skill.name}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white text-xs font-medium"
                      >
                        {skill.name.split('.')[0]}
                      </text>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-xs text-gray-300">My Level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-gray-500 border-dashed rounded"></div>
                    <span className="text-xs text-gray-300">{getBenchmarkLabel(comparisonMode)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Top Performers */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">🏆 Top Performers</h3>
            <div className="space-y-3">
              {skillsData
                .sort((a, b) => getMetricValue(b, selectedMetric) - getMetricValue(a, selectedMetric))
                .slice(0, 3)
                .map((skill, index) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className={`text-lg ${index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}`}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{skill.name}</div>
                      <div className="text-gray-400 text-sm">
                        {getMetricValue(skill, selectedMetric)} {getMetricLabel(selectedMetric)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Growth Opportunities */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">📈 Growth Opportunities</h3>
            <div className="space-y-3">
              {skillsData
                .filter(skill => skill.growthRate > 25)
                .sort((a, b) => b.growthRate - a.growthRate)
                .slice(0, 3)
                .map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="text-lg">🚀</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{skill.name}</div>
                      <div className="text-green-400 text-sm">+{skill.growthRate}% growth</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Market Leaders */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">💼 Market Leaders</h3>
            <div className="space-y-3">
              {skillsData
                .sort((a, b) => b.marketDemand - a.marketDemand)
                .slice(0, 3)
                .map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="text-lg">📊</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{skill.name}</div>
                      <div className="text-blue-400 text-sm">{skill.marketDemand}% demand</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

