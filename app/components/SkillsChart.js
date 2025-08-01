"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SkillsChart({ skills }) {
  const [chartType, setChartType] = useState("radar"); // radar, bar, bubble

  const categories = [...new Set(skills.map(skill => skill.category))];
  const categoryData = categories.map(category => {
    const categorySkills = skills.filter(skill => skill.category === category);
    const avgProficiency = categorySkills.reduce((acc, skill) => acc + skill.proficiency, 0) / categorySkills.length;
    const totalProjects = categorySkills.reduce((acc, skill) => acc + skill.projects, 0);
    
    return {
      category,
      proficiency: avgProficiency,
      projects: totalProjects,
      count: categorySkills.length,
      skills: categorySkills
    };
  });

  const maxProficiency = Math.max(...categoryData.map(d => d.proficiency));
  const maxProjects = Math.max(...categoryData.map(d => d.projects));

  const getCategoryColor = (category) => {
    const colors = {
      frontend: "from-blue-400 to-cyan-500",
      backend: "from-green-400 to-emerald-500",
      database: "from-purple-400 to-violet-500",
      cloud: "from-yellow-400 to-orange-500",
      devops: "from-red-400 to-pink-500",
      design: "from-pink-400 to-rose-500",
      animation: "from-indigo-400 to-purple-500",
      "3d": "from-cyan-400 to-blue-500",
      styling: "from-emerald-400 to-teal-500",
      tools: "from-orange-400 to-red-500"
    };
    return colors[category] || "from-gray-400 to-gray-500";
  };

  const RadarChart = () => {
    const centerX = 250;
    const centerY = 250;
    const radius = 180;
    const angleStep = (2 * Math.PI) / categoryData.length;

    const getPointPosition = (index, value) => {
      const angle = index * angleStep - Math.PI / 2;
      const distance = (value / 100) * radius;
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance
      };
    };

    const getLabelPosition = (index) => {
      const angle = index * angleStep - Math.PI / 2;
      const distance = radius + 40;
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance
      };
    };

    return (
      <div className="relative">
        <svg width="500" height="500" className="mx-auto">
          {/* Background gradient */}
          <defs>
            <radialGradient id="radarBg" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.2)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="url(#radarBg)"
          />

          {/* Grid circles with labels */}
          {[20, 40, 60, 80, 100].map((value, i) => (
            <g key={i}>
              <circle
                cx={centerX}
                cy={centerY}
                r={(value / 100) * radius}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                strokeDasharray={i === 4 ? "none" : "5,5"}
              />
              <text
                x={centerX + 10}
                y={centerY - (value / 100) * radius + 5}
                className="fill-gray-400 text-xs"
              >
                {value}%
              </text>
            </g>
          ))}

          {/* Grid lines */}
          {categoryData.map((_, index) => {
            const labelPos = getLabelPosition(index);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={labelPos.x}
                y2={labelPos.y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            );
          })}

          {/* Data polygon with gradient */}
          <defs>
            <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
            </linearGradient>
          </defs>

          <motion.polygon
            points={categoryData.map((data, index) => {
              const pos = getPointPosition(index, data.proficiency);
              return `${pos.x},${pos.y}`;
            }).join(" ")}
            fill="url(#polygonGradient)"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Data points with enhanced styling */}
          {categoryData.map((data, index) => {
            const pos = getPointPosition(index, data.proficiency);
            return (
              <motion.g key={data.category}>
                {/* Outer glow */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r="12"
                  fill="rgba(59, 130, 246, 0.3)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                />
                {/* Main point */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r="8"
                  fill="rgba(59, 130, 246, 0.9)"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.5, fill: "rgba(147, 51, 234, 0.9)" }}
                  className="cursor-pointer"
                />
                {/* Value label on hover */}
                <motion.text
                  x={pos.x}
                  y={pos.y - 20}
                  textAnchor="middle"
                  className="fill-white text-xs font-bold opacity-0 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {Math.round(data.proficiency)}%
                </motion.text>
              </motion.g>
            );
          })}

          {/* Enhanced labels */}
          {categoryData.map((data, index) => {
            const pos = getLabelPosition(index);
            return (
              <motion.g key={data.category}>
                {/* Label background */}
                <motion.rect
                  x={pos.x - 35}
                  y={pos.y - 10}
                  width="70"
                  height="20"
                  rx="10"
                  fill="rgba(0, 0, 0, 0.7)"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                />
                {/* Label text */}
                <motion.text
                  x={pos.x}
                  y={pos.y + 3}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {data.category}
                </motion.text>
              </motion.g>
            );
          })}

          {/* Center point */}
          <circle
            cx={centerX}
            cy={centerY}
            r="4"
            fill="rgba(255, 255, 255, 0.8)"
          />
        </svg>
      </div>
    );
  };

  const BarChart = () => {
    const [hoveredBar, setHoveredBar] = useState(null);

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Chart header */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Proficiency by Category</h3>
          <p className="text-gray-400 text-sm">Hover over bars for detailed information</p>
        </div>

        {categoryData
          .sort((a, b) => b.proficiency - a.proficiency)
          .map((data, index) => (
          <motion.div
            key={data.category}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
            onMouseEnter={() => setHoveredBar(data.category)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
              {/* Category info */}
              <div className="w-32 flex-shrink-0">
                <div className="text-base font-semibold text-white capitalize mb-1">
                  {data.category}
                </div>
                <div className="text-xs text-gray-400">
                  {data.count} skills • {data.projects} projects
                </div>
              </div>

              {/* Bar container */}
              <div className="flex-1 relative">
                {/* Background bar */}
                <div className="h-12 bg-gray-700/50 rounded-lg overflow-hidden relative">
                  {/* Animated bar */}
                  <motion.div
                    className={`h-full bg-gradient-to-r ${getCategoryColor(data.category)} relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: `${data.proficiency}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >


                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredBar === data.category ? 0.3 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Grid lines */}
                  {[25, 50, 75].map((line) => (
                    <div
                      key={line}
                      className="absolute top-0 h-full w-px bg-gray-600/50"
                      style={{ left: `${line}%` }}
                    />
                  ))}
                </div>

                {/* Percentage label */}
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <span className="text-white text-sm font-bold bg-black/50 px-2 py-1 rounded">
                    {Math.round(data.proficiency)}%
                  </span>
                </motion.div>

                {/* Detailed tooltip on hover */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg p-3 min-w-max z-10"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{
                    opacity: hoveredBar === data.category ? 1 : 0,
                    y: hoveredBar === data.category ? 0 : 10,
                    scale: hoveredBar === data.category ? 1 : 0.9
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="text-white text-sm font-semibold mb-1">
                    {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
                  </div>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div>Proficiency: {Math.round(data.proficiency)}%</div>
                    <div>Skills: {data.count}</div>
                    <div>Projects: {data.projects}</div>
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                </motion.div>
              </div>

              {/* Rank indicator */}
              <div className="w-12 text-center">
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Scale reference */}
        <div className="mt-8 p-4 bg-gray-800/20 rounded-lg">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full opacity-60"></div>
            {[25, 50, 75].map((mark) => (
              <div
                key={mark}
                className="absolute top-0 h-full w-px bg-gray-300"
                style={{ left: `${mark}%` }}
              />
            ))}
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">
            Proficiency Scale
          </div>
        </div>
      </div>
    );
  };

  const BubbleChart = () => {
    const svgWidth = 800;
    const svgHeight = 500;
    const padding = 80;

    // Calculate bubble positions using a better layout algorithm
    const getBubbleLayout = () => {
      const bubbles = categoryData.map((data, index) => {
        // Size based on proficiency (min 30, max 80)
        const radius = Math.max(30, (data.proficiency / 100) * 80);

        // Calculate grid positions with better spacing
        const cols = Math.ceil(Math.sqrt(categoryData.length));
        const rows = Math.ceil(categoryData.length / cols);

        const cellWidth = (svgWidth - 2 * padding) / cols;
        const cellHeight = (svgHeight - 2 * padding) / rows;

        const col = index % cols;
        const row = Math.floor(index / cols);

        // Center bubbles in their cells
        const x = padding + col * cellWidth + cellWidth / 2;
        const y = padding + row * cellHeight + cellHeight / 2;

        return {
          ...data,
          x,
          y,
          radius,
          index
        };
      });

      return bubbles;
    };

    const bubbles = getBubbleLayout();

    return (
      <div className="relative w-full h-[500px] overflow-hidden">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-full"
        >
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Bubbles */}
          {bubbles.map((bubble, index) => {
            const gradientId = `bubble-gradient-${bubble.category}`;
            const colorClass = getCategoryColor(bubble.category);

            return (
              <motion.g key={bubble.category}>
                {/* Gradient definition */}
                <defs>
                  <radialGradient id={gradientId} cx="30%" cy="30%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="70%" stopColor="rgba(59, 130, 246, 0.4)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                  </radialGradient>
                </defs>

                {/* Outer glow */}
                <motion.circle
                  cx={bubble.x}
                  cy={bubble.y}
                  r={bubble.radius + 10}
                  fill="rgba(59, 130, 246, 0.1)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                />

                {/* Main bubble */}
                <motion.circle
                  cx={bubble.x}
                  cy={bubble.y}
                  r={bubble.radius}
                  fill={`url(#${gradientId})`}
                  stroke="rgba(59, 130, 246, 0.8)"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="cursor-pointer"
                />

                {/* Category name */}
                <motion.text
                  x={bubble.x}
                  y={bubble.y - 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white text-sm font-bold pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {bubble.category.charAt(0).toUpperCase() + bubble.category.slice(1)}
                </motion.text>

                {/* Proficiency percentage */}
                <motion.text
                  x={bubble.x}
                  y={bubble.y + 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-blue-200 text-xs font-semibold pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {Math.round(bubble.proficiency)}%
                </motion.text>

                {/* Skills count */}
                <motion.text
                  x={bubble.x}
                  y={bubble.y + 22}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-300 text-xs pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  {bubble.count} skills
                </motion.text>


              </motion.g>
            );
          })}

          {/* Chart title */}
          <motion.text
            x={svgWidth / 2}
            y={30}
            textAnchor="middle"
            className="fill-white text-lg font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Skills Proficiency Bubble Chart
          </motion.text>

          {/* Legend */}
          <motion.text
            x={svgWidth / 2}
            y={svgHeight - 20}
            textAnchor="middle"
            className="fill-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Bubble size represents proficiency level • Hover for details
          </motion.text>
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Skills Analytics</h2>
        
        {/* Chart Type Selector */}
        <div className="flex gap-4 mb-6">
          {["radar", "bar", "bubble"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                chartType === type
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <motion.div
        key={chartType}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${chartType === 'bubble' ? 'min-h-[500px]' : 'min-h-[400px]'} flex items-center justify-center`}
      >
        {chartType === "radar" && <RadarChart />}
        {chartType === "bar" && <BarChart />}
        {chartType === "bubble" && <BubbleChart />}
      </motion.div>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {categoryData.map((data, index) => (
          <motion.div
            key={data.category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg"
          >
            <div className={`w-4 h-4 rounded bg-gradient-to-r ${getCategoryColor(data.category)}`} />
            <div>
              <div className="text-white text-sm font-medium capitalize">{data.category}</div>
              <div className="text-gray-400 text-xs">
                {data.count} skills • {Math.round(data.proficiency)}% avg
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gray-800/30 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{categoryData.length}</div>
          <div className="text-gray-400 text-sm">Categories</div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg">
          <div className="text-2xl font-bold text-green-400">
            {Math.round(categoryData.reduce((acc, cat) => acc + cat.proficiency, 0) / categoryData.length)}%
          </div>
          <div className="text-gray-400 text-sm">Avg Proficiency</div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">
            {categoryData.reduce((acc, cat) => acc + cat.projects, 0)}
          </div>
          <div className="text-gray-400 text-sm">Total Projects</div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">
            {categoryData.reduce((acc, cat) => acc + cat.count, 0)}
          </div>
          <div className="text-gray-400 text-sm">Total Skills</div>
        </div>
      </div>
    </div>
  );
}

