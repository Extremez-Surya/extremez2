"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import BackgroundEffects from "../components/BackgroundEffects";
import SkillCard from "../components/SkillCard";
import SkillsChart from "../components/SkillsChart";
import ExperienceTimeline from "../components/ExperienceTimeline";
import TechnologyStack from "../components/TechnologyStack";
import CertificationsSection from "../components/CertificationsSection";
import SkillsComparison from "../components/SkillsComparison";


export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [selectedView, setSelectedView] = useState("grid"); // grid, chart, timeline
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("proficiency");
  const [animationMode, setAnimationMode] = useState("wave");
  const observerRef = useRef();

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const skills = [
    // Frontend Technologies
    {
      id: 1,
      name: "React.js",
      category: "frontend",
      proficiency: 95,
      experience: "4+ years",
      projects: 25,
      description: "Advanced React development with hooks, context, and performance optimization",
      icon: "⚛️",
      color: "#61DAFB",
      gradient: "from-blue-400 to-cyan-400",
      technologies: ["JSX", "Hooks", "Context API", "Redux", "React Router"],
      certifications: ["React Developer Certification"],
      lastUsed: "2024-12-20",
      trending: true
    },
    {
      id: 2,
      name: "Next.js",
      category: "frontend",
      proficiency: 92,
      experience: "3+ years",
      projects: 18,
      description: "Full-stack React framework with SSR, SSG, and API routes",
      icon: "▲",
      color: "#000000",
      gradient: "from-gray-800 to-black",
      technologies: ["App Router", "Server Components", "API Routes", "Middleware"],
      certifications: [],
      lastUsed: "2024-12-20",
      trending: true
    },
    {
      id: 3,
      name: "TypeScript",
      category: "frontend",
      proficiency: 88,
      experience: "3+ years",
      projects: 20,
      description: "Strongly typed JavaScript for scalable applications",
      icon: "🔷",
      color: "#3178C6",
      gradient: "from-blue-600 to-blue-800",
      technologies: ["Type Guards", "Generics", "Decorators", "Modules"],
      certifications: [],
      lastUsed: "2024-12-18",
      trending: true
    },
    {
      id: 4,
      name: "Vue.js",
      category: "frontend",
      proficiency: 85,
      experience: "2+ years",
      projects: 12,
      description: "Progressive JavaScript framework for building user interfaces",
      icon: "🖖",
      color: "#4FC08D",
      gradient: "from-green-400 to-emerald-500",
      technologies: ["Composition API", "Vuex", "Vue Router", "Nuxt.js"],
      certifications: [],
      lastUsed: "2024-11-15",
      trending: false
    },
    {
      id: 5,
      name: "Tailwind CSS",
      category: "styling",
      proficiency: 93,
      experience: "3+ years",
      projects: 22,
      description: "Utility-first CSS framework for rapid UI development",
      icon: "🎨",
      color: "#06B6D4",
      gradient: "from-cyan-400 to-teal-500",
      technologies: ["JIT", "Custom Plugins", "Responsive Design", "Dark Mode"],
      certifications: [],
      lastUsed: "2024-12-20",
      trending: true
    },
    {
      id: 6,
      name: "Sass/SCSS",
      category: "styling",
      proficiency: 89,
      experience: "4+ years",
      projects: 30,
      description: "CSS preprocessor with variables, mixins, and nesting",
      icon: "💅",
      color: "#CF649A",
      gradient: "from-pink-400 to-rose-500",
      technologies: ["Mixins", "Variables", "Partials", "Functions"],
      certifications: [],
      lastUsed: "2024-12-10",
      trending: false
    },
    // Backend Technologies
    {
      id: 7,
      name: "Node.js",
      category: "backend",
      proficiency: 87,
      experience: "3+ years",
      projects: 15,
      description: "JavaScript runtime for building scalable network applications",
      icon: "🟢",
      color: "#339933",
      gradient: "from-green-500 to-emerald-600",
      technologies: ["Express.js", "Nest.js", "Koa.js", "Fastify"],
      certifications: ["Node.js Certified Developer"],
      lastUsed: "2024-12-18",
      trending: true
    },
    {
      id: 8,
      name: "Python",
      category: "backend",
      proficiency: 82,
      experience: "2+ years",
      projects: 10,
      description: "Versatile programming language for web development and data science",
      icon: "🐍",
      color: "#3776AB",
      gradient: "from-blue-500 to-indigo-600",
      technologies: ["Django", "Flask", "FastAPI", "NumPy", "Pandas"],
      certifications: [],
      lastUsed: "2024-11-30",
      trending: true
    },
    {
      id: 9,
      name: "MongoDB",
      category: "database",
      proficiency: 85,
      experience: "3+ years",
      projects: 16,
      description: "NoSQL database for modern applications",
      icon: "🍃",
      color: "#47A248",
      gradient: "from-green-600 to-lime-600",
      technologies: ["Aggregation", "Indexing", "Atlas", "Compass"],
      certifications: ["MongoDB Certified Developer"],
      lastUsed: "2024-12-15",
      trending: true
    },
    {
      id: 10,
      name: "PostgreSQL",
      category: "database",
      proficiency: 79,
      experience: "2+ years",
      projects: 8,
      description: "Advanced open-source relational database",
      icon: "🐘",
      color: "#336791",
      gradient: "from-blue-700 to-indigo-800",
      technologies: ["SQL", "PL/pgSQL", "Triggers", "Views"],
      certifications: [],
      lastUsed: "2024-11-20",
      trending: false
    },
    // Tools & Platforms
    {
      id: 11,
      name: "Git & GitHub",
      category: "tools",
      proficiency: 91,
      experience: "4+ years",
      projects: 35,
      description: "Version control and collaborative development",
      icon: "🔧",
      color: "#F05032",
      gradient: "from-orange-500 to-red-500",
      technologies: ["Git Flow", "GitHub Actions", "Pull Requests", "Branching"],
      certifications: [],
      lastUsed: "2024-12-20",
      trending: true
    },
    {
      id: 12,
      name: "Docker",
      category: "devops",
      proficiency: 76,
      experience: "2+ years",
      projects: 12,
      description: "Containerization platform for application deployment",
      icon: "🐳",
      color: "#2496ED",
      gradient: "from-blue-500 to-cyan-600",
      technologies: ["Containers", "Images", "Docker Compose", "Volumes"],
      certifications: [],
      lastUsed: "2024-12-05",
      trending: true
    },
    {
      id: 13,
      name: "AWS",
      category: "cloud",
      proficiency: 73,
      experience: "1.5+ years",
      projects: 8,
      description: "Amazon Web Services cloud platform",
      icon: "☁️",
      color: "#FF9900",
      gradient: "from-orange-400 to-yellow-500",
      technologies: ["EC2", "S3", "Lambda", "CloudFront", "RDS"],
      certifications: ["AWS Cloud Practitioner"],
      lastUsed: "2024-11-25",
      trending: true
    },
    {
      id: 14,
      name: "Figma",
      category: "design",
      proficiency: 84,
      experience: "3+ years",
      projects: 20,
      description: "Collaborative design and prototyping tool",
      icon: "🎨",
      color: "#F24E1E",
      gradient: "from-red-500 to-pink-500",
      technologies: ["Prototyping", "Design Systems", "Components", "Auto Layout"],
      certifications: [],
      lastUsed: "2024-12-12",
      trending: true
    },
    {
      id: 15,
      name: "Framer Motion",
      category: "animation",
      proficiency: 87,
      experience: "2+ years",
      projects: 14,
      description: "Production-ready motion library for React",
      icon: "🎭",
      color: "#0055FF",
      gradient: "from-blue-600 to-purple-600",
      technologies: ["Gestures", "Layout Animations", "Shared Layouts", "Scroll Triggers"],
      certifications: [],
      lastUsed: "2024-12-20",
      trending: true
    },
    {
      id: 16,
      name: "Three.js",
      category: "3d",
      proficiency: 71,
      experience: "1+ years",
      projects: 5,
      description: "JavaScript 3D library for creating immersive experiences",
      icon: "🎯",
      color: "#000000",
      gradient: "from-purple-600 to-indigo-700",
      technologies: ["WebGL", "Shaders", "Animations", "Physics"],
      certifications: [],
      lastUsed: "2024-10-30",
      trending: true
    }
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: "🎯", count: skills.length },
    { id: "frontend", name: "Frontend", icon: "🖥️", count: skills.filter(s => s.category === "frontend").length },
    { id: "backend", name: "Backend", icon: "⚙️", count: skills.filter(s => s.category === "backend").length },
    { id: "database", name: "Database", icon: "🗄️", count: skills.filter(s => s.category === "database").length },
    { id: "cloud", name: "Cloud", icon: "☁️", count: skills.filter(s => s.category === "cloud").length },
    { id: "devops", name: "DevOps", icon: "🔧", count: skills.filter(s => s.category === "devops").length },
    { id: "design", name: "Design", icon: "🎨", count: skills.filter(s => s.category === "design").length },
    { id: "animation", name: "Animation", icon: "🎭", count: skills.filter(s => s.category === "animation").length },
    { id: "3d", name: "3D/WebGL", icon: "🎯", count: skills.filter(s => s.category === "3d").length },
    { id: "styling", name: "Styling", icon: "💅", count: skills.filter(s => s.category === "styling").length },
    { id: "tools", name: "Tools", icon: "🛠️", count: skills.filter(s => s.category === "tools").length }
  ];

  // Filter and sort skills
  const filteredSkills = skills
    .filter(skill => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "proficiency":
          return b.proficiency - a.proficiency;
        case "name":
          return a.name.localeCompare(b.name);
        case "recent":
          return new Date(b.lastUsed) - new Date(a.lastUsed);
        case "projects":
          return b.projects - a.projects;
        default:
          return 0;
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = {
    totalSkills: skills.length,
    avgProficiency: Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length),
    totalProjects: skills.reduce((acc, skill) => acc + skill.projects, 0),
    yearsExperience: 4
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-black overflow-hidden select-none">
        <BackgroundEffects variant="skills" />
        
        <Header />
        
        {isLoaded && (
          <main className="relative z-10">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20">
              <div className="max-w-7xl mx-auto text-center">
                {/* Animated Gradient Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative mb-8"
                >
                  {/* Background blur layer */}
                  <div className="absolute inset-0 blur-3xl opacity-30">
                    <span className="block text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      My Skills
                    </span>
                  </div>
                  
                  {/* Main text layer */}
                  <div className="relative">
                    <span className="block text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight">
                      My Skills
                    </span>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mt-4 transform origin-left"
                    />
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Exploring the technologies that power modern digital experiences. 
                  From frontend frameworks to cloud platforms, here's my technical journey.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                  {[
                    { label: "Skills", value: stats.totalSkills, icon: "🎯" },
                    { label: "Avg. Proficiency", value: `${stats.avgProficiency}%`, icon: "📊" },
                    { label: "Projects", value: stats.totalProjects, icon: "🚀" },
                    { label: "Years Experience", value: stats.yearsExperience, icon: "⏳" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* View Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  {["grid", "chart", "timeline"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setSelectedView(view)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedView === view
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60"
                      }`}
                    >
                      {view.charAt(0).toUpperCase() + view.slice(1)} View
                    </button>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Search and Filter Controls */}
            <section className="px-6 py-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col lg:flex-row gap-6 mb-8"
                >
                  {/* Search Bar */}
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search skills, technologies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        🔍
                      </div>
                    </div>
                  </div>

                  {/* Sort Controls */}
                  <div className="flex gap-4">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="proficiency">Sort by Proficiency</option>
                      <option value="name">Sort by Name</option>
                      <option value="recent">Sort by Recent</option>
                      <option value="projects">Sort by Projects</option>
                    </select>
                  </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap gap-3 mb-12"
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:scale-105"
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Skills Content */}
            <section className="px-6 pb-20">
              <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                  {selectedView === "grid" && (
                    <motion.div
                      key="grid"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                      {filteredSkills.map((skill, index) => (
                        <motion.div
                          key={skill.id}
                          variants={itemVariants}
                          data-index={index}
                          ref={el => {
                            if (el && observerRef.current) {
                              observerRef.current.observe(el);
                            }
                          }}
                        >
                          <SkillCard
                            skill={skill}
                            isHovered={hoveredSkill === skill.id}
                            onHover={() => setHoveredSkill(skill.id)}
                            onLeave={() => setHoveredSkill(null)}
                            animationMode={animationMode}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {selectedView === "chart" && (
                    <motion.div
                      key="chart"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <SkillsChart skills={filteredSkills} />
                    </motion.div>
                  )}

                  {selectedView === "timeline" && (
                    <motion.div
                      key="timeline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ExperienceTimeline skills={filteredSkills} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {filteredSkills.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-2">No skills found</h3>
                    <p className="text-gray-400">Try adjusting your search or filters</p>
                  </motion.div>
                )}
              </div>
            </section>

            {/* Additional Sections */}
            <TechnologyStack />
            <CertificationsSection />
            <SkillsComparison />

          </main>
        )}

        <Footer />
      </div>
    </PageWrapper>
  );
}

