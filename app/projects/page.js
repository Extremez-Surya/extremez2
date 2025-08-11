"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import BackgroundEffects from "../components/BackgroundEffects";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingParticles, setFloatingParticles] = useState([]);

  // Project data with multiple categories and features
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Makeover Cosmetics - Luxury E-Commerce",
        category: "fullstack",
        tags: ["Odoo", "E-Commerce", "Luxury Brand", "Cosmetics", "Perfumes"],
        description:
          "A premium luxury cosmetics and perfume e-commerce platform featuring branded makeup items, fragrances, and beauty products with sophisticated design and seamless shopping experience.",
        longDescription:
          "Developed and launched Makeover Cosmetics, a high-end luxury e-commerce platform specializing in premium cosmetics, branded perfumes, and beauty products. The platform features an elegant design that reflects the luxury brand identity, comprehensive product catalog with detailed descriptions, secure payment processing, inventory management, and customer account features. Built to provide a premium shopping experience for discerning customers seeking quality beauty products.",
        images: ["/assets/MOC1.png"],
        liveUrl: "https://makeovercosmetics.odoo.com/",
        githubUrl: null, // Private/Commercial project
        features: [
          "Luxury Brand Design",
          "Product Catalog",
          "Secure Payments",
          "Inventory Management",
          "Customer Accounts",
          "Mobile Responsive",
          "SEO Optimized",
        ],
        technologies: [
          "Odoo",
          "Python",
          "PostgreSQL",
          "JavaScript",
          "CSS3",
          "HTML5",
        ],
        status: "live",
        duration: "2 months",
        role: "Full Stack Developer & Designer",
        teamSize: "Solo Project",
      },
      {
        id: 2,
        title: "Bhupender Kumar's Portfolio",
        category: "fullstack",
        tags: ["Next.js", "React", "Portfolio", "Responsive", "Modern Design"],
        description:
          "A modern and professional portfolio website built with Next.js for Bhupender Kumar, showcasing his skills, projects, and experience as a freelancer.",
        longDescription:
          "Developed a sleek and professional portfolio website for Bhupender Kumar using Next.js and React. The portfolio features a modern design with smooth animations, responsive layout, project showcase, skills section, and contact information. The website is optimized for performance and SEO, providing an excellent user experience across all devices. It effectively presents Bhupender's freelance services and professional background.",
        images: ["/assets/MOC2.png"],
        liveUrl: "https://freelancerbk.vercel.app/",
        githubUrl: null, // Client project
        features: [
          "Modern Portfolio Design",
          "Responsive Layout",
          "Smooth Animations",
          "Project Showcase",
          "Skills Section",
          "Contact Form",
          "SEO Optimized",
          "Fast Loading",
        ],
        technologies: [
          "Next.js",
          "React",
          "JavaScript",
          "CSS3",
          "HTML5",
          "Vercel",
        ],
        status: "live",
        duration: "3 weeks",
        role: "Full Stack Developer & Designer",
        teamSize: "Solo Project",
      },
      {
        id: 3,
        title: "Extremez - Personal Portfolio",
        category: "frontend",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Portfolio",
          "Responsive",
          "Vanilla JS",
        ],
        description:
          "My original personal portfolio website built with vanilla HTML, CSS, and JavaScript, showcasing my early web development skills and projects.",
        longDescription:
          "Extremez represents my first professional portfolio website, built entirely with vanilla HTML, CSS, and JavaScript. This project demonstrates fundamental web development skills including responsive design, interactive elements, smooth scrolling, and modern UI/UX principles. The website features a clean and professional design with sections for about, skills, projects, and contact information. It serves as a testament to my journey in web development and showcases the evolution of my coding skills.",
        images: [
          "/assets/MOC3.png", // Using existing image as placeholder
        ],
        liveUrl: "https://extremez.vercel.app/",
        githubUrl: null, // Personal project
        features: [
          "Vanilla JavaScript",
          "Responsive Design",
          "Smooth Scrolling",
          "Interactive Elements",
          "Modern UI/UX",
          "Clean Code",
          "Cross-browser Compatible",
          "Mobile Optimized",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Responsive Design",
          "Vercel",
        ],
        status: "live",
        duration: "1 month",
        role: "Frontend Developer & Designer",
        teamSize: "Solo Project",
      },
      {
        id: 4,
        title: "AIO - All-in-One Platform",
        category: "fullstack",
        tags: ["Next.js", "React", "All-in-One", "Dashboard", "Modern UI"],
        description:
          "A comprehensive all-in-one platform built with Next.js, featuring multiple integrated tools and services in a unified dashboard interface.",
        longDescription:
          "AIO (All-in-One) is a comprehensive platform that integrates multiple tools and services into a single, cohesive dashboard. Built with Next.js and React, this project demonstrates advanced frontend development skills with modern UI/UX design principles. The platform features a clean, intuitive interface that allows users to access various tools and functionalities from one central location, improving productivity and user experience.",
        images: ["/assets/MOC4.png"],
        liveUrl: "https://aio-iota.vercel.app/",
        githubUrl: null,
        features: [
          "Unified Dashboard",
          "Multiple Tool Integration",
          "Modern UI/UX",
          "Responsive Design",
          "Fast Performance",
          "User-friendly Interface",
          "Clean Code Architecture",
          "Scalable Design",
        ],
        technologies: [
          "Next.js",
          "React",
          "JavaScript",
          "CSS3",
          "HTML5",
          "Vercel",
        ],
        status: "live",
        duration: "6 weeks",
        role: "Full Stack Developer & Designer",
        teamSize: "Solo Project",
      },
      {
        id: 5,
        title: "Discord Bot Website",
        category: "frontend",
        tags: ["Discord", "Bot", "Landing Page", "Interactive", "Gaming"],
        description:
          "A modern and interactive landing page for a Discord bot, featuring engaging animations, bot features showcase, and integration guides.",
        longDescription:
          "Developed a captivating landing page for a Discord bot service, designed to attract and inform users about the bot's capabilities. The website features modern animations, interactive elements, comprehensive feature descriptions, setup guides, and user testimonials. Built with a gaming-focused aesthetic to appeal to the Discord community, the site effectively communicates the bot's value proposition and encourages user adoption.",
        images: ["/assets/MOC5.png"],
        liveUrl: "https://discord-bot-website-peach.vercel.app/",
        githubUrl: null,
        features: [
          "Interactive Landing Page",
          "Bot Features Showcase",
          "Setup Instructions",
          "Gaming Aesthetic",
          "Smooth Animations",
          "Responsive Design",
          "Call-to-Action Buttons",
          "Community Focus",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Animations",
          "Responsive Design",
          "Vercel",
        ],
        status: "live",
        duration: "2 weeks",
        role: "Frontend Developer & Designer",
        teamSize: "Solo Project",
      },
      {
        id: 6,
        title: "PG Details - Accommodation Finder",
        category: "fullstack",
        tags: ["Accommodation", "PG", "Search", "Booking", "Real Estate"],
        description:
          "A comprehensive platform for finding and booking paying guest accommodations, featuring detailed listings, search filters, and booking management.",
        longDescription:
          "PG Details is a specialized platform designed to help students and working professionals find suitable paying guest accommodations. The website features comprehensive property listings with detailed information, advanced search and filtering options, image galleries, contact information, and booking management. Built with user experience in mind, the platform simplifies the process of finding and securing accommodation in various cities.",
        images: ["/assets/MOC6.png"],
        liveUrl: "https://pgdetails.vercel.app/",
        githubUrl: null,
        features: [
          "Property Listings",
          "Advanced Search Filters",
          "Detailed Property Info",
          "Image Galleries",
          "Contact Management",
          "Location-based Search",
          "Responsive Design",
          "User-friendly Interface",
        ],
        technologies: [
          "Next.js",
          "React",
          "JavaScript",
          "CSS3",
          "HTML5",
          "Vercel",
        ],
        status: "live",
        duration: "4 weeks",
        role: "Full Stack Developer & Designer",
        teamSize: "Solo Project",
      },
    ],
    []
  );

  // Filter categories with counts
  const categories = [
    { id: "all", name: "All Projects", icon: "🚀", count: projects.length },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: "💻",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: "🎨",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: "📱",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      name: "AI/ML",
      icon: "🤖",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "blockchain",
      name: "Blockchain",
      icon: "⛓️",
      count: projects.filter((p) => p.category === "blockchain").length,
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: "📊",
      count: projects.filter((p) => p.category === "analytics").length,
    },
  ];

  // Filter projects based on active filter and search term
  const filteredProjects = projects
    .filter((project) => {
      const matchesFilter =
        activeFilter === "all" || project.category === activeFilter;
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "oldest":
          return a.id - b.id;
        case "category":
          return a.category.localeCompare(b.category);
        default: // 'recent'
          return b.id - a.id;
      }
    });

  // Status color helper
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/50";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50";
      case "planning":
        return "bg-blue-500/20 text-blue-300 border-blue-500/50";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "🔄";
      case "planning":
        return "📋";
      default:
        return "⏳";
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ["hero", "filters", "projects", "journey", "cta"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-cycle project images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = {};
        projects.forEach((project) => {
          if (project.images.length > 1) {
            newIndex[project.id] =
              ((prev[project.id] || 0) + 1) % project.images.length;
          }
        });
        return { ...prev, ...newIndex };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projects]);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const particles = [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 10,
        animationDuration: 3 + Math.random() * 4,
      }));
      setFloatingParticles(particles);
    }
  }, []);

  return (
    <PageWrapper>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
              <div
                className="absolute inset-0 w-20 h-20 border-4 border-cyan-500/20 border-r-cyan-500 rounded-full animate-spin mx-auto"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              ></div>
            </div>
            <div className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Loading Projects...
            </div>
            <div className="mt-2 text-gray-400 text-sm">
              Preparing something amazing
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-x-hidden relative">
        <BackgroundEffects />

        {/* Interactive Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Interactive cursor glow */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-full blur-3xl transition-all duration-1000 pointer-events-none"
            style={{
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
            }}
          ></div>

          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "50px 50px",
              animation: "slideGrid 20s linear infinite",
            }}
          ></div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {floatingParticles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <Header />

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative pt-20 z-10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div
            className={`relative max-w-6xl mx-auto px-6 text-center transform transition-all duration-1000 z-10 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-12">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-purple-400/30 mb-8 group hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  Portfolio 2025 • {projects.length} Projects
                </span>
                <span className="text-xs px-2 py-1 bg-green-400/20 text-green-300 rounded-full">
                  Live
                </span>
              </div>

              {/* Main Title with 3D Effect */}
              <div className="relative mb-8">
                <h1 className="text-7xl md:text-9xl font-black mb-6 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent blur-sm">
                    My Projects
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    My Projects
                  </span>
                </h1>

                {/* Animated underline */}
                <div className="relative mx-auto w-48 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-pulse blur-sm"></div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="relative mb-8">
                <p className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Innovative Solutions
                  </span>{" "}
                  & Creative Ideas
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Crafted with passion, built with precision
                </p>
              </div>
            </div>

            {/* Enhanced Description Box */}
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative z-10">
                  Explore my portfolio of cutting-edge projects showcasing
                  expertise in
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    full-stack development
                  </span>
                  ,
                  <span className="text-pink-400 font-semibold">
                    {" "}
                    AI/ML solutions
                  </span>
                  , and
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    innovative technologies
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  number: projects.length,
                  label: "Projects",
                  icon: "🚀",
                  color: "purple",
                },
                {
                  number: projects.filter((p) => p.status === "completed")
                    .length,
                  label: "Completed",
                  icon: "✅",
                  color: "green",
                },
                {
                  number: [...new Set(projects.flatMap((p) => p.technologies))]
                    .length,
                  label: "Technologies",
                  icon: "⚡",
                  color: "blue",
                },
                {
                  number: "50+",
                  label: "Features Built",
                  icon: "🔧",
                  color: "cyan",
                },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 hover:scale-110 hover:border-purple-400/50 transition-all duration-500 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/5 to-${stat.color}-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {stat.icon}
                      </div>
                      <div
                        className={`text-3xl font-black text-${stat.color}-400 mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span className="relative flex items-center gap-3 z-10">
                  <span>Explore Projects</span>
                  <span className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">
                    👀
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-400/20 to-purple-600/0 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              </button>

              <Link href="/about">
                <button className="group relative px-10 py-5 border-2 border-cyan-400 rounded-2xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/40 overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <span className="relative flex items-center gap-3 z-10">
                    <span>About Me</span>
                    <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      👨‍💻
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section id="filters" className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.filters
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Search and Controls */}
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 group-hover:border-purple-400/30 transition-all duration-500">
                      <div className="flex items-center p-4">
                        <div className="text-2xl p-2 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          🔍
                        </div>
                        <input
                          type="text"
                          placeholder="Search projects, technologies, or features..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg px-4 py-2"
                        />
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm("")}
                            className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sort and View Controls */}
                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer hover:border-purple-400/30 transition-all duration-300 pr-10"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="oldest">Oldest First</option>
                      <option value="alphabetical">A-Z</option>
                      <option value="category">By Category</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      ⏷
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-purple-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      ⊞
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-purple-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-start gap-3 mb-4">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 overflow-hidden ${
                      activeFilter === category.id
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-2xl shadow-purple-500/40"
                        : "bg-black/40 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-white hover:border-purple-400/50"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 transition-all duration-500 rounded-2xl ${
                        activeFilter !== category.id &&
                        "opacity-0 group-hover:opacity-100"
                      }`}
                    ></div>

                    <span className="relative z-10 flex items-center gap-3">
                      <span
                        className={`text-xl transition-all duration-300 ${
                          activeFilter === category.id
                            ? "scale-110 rotate-12"
                            : "group-hover:scale-110 group-hover:rotate-12"
                        }`}
                      >
                        {category.icon}
                      </span>
                      <span>{category.name}</span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                          activeFilter === category.id
                            ? "bg-white/20 text-white"
                            : "bg-gray-700/50 text-gray-400 group-hover:bg-white/10 group-hover:text-white"
                        }`}
                      >
                        {category.count}
                      </span>
                    </span>

                    {/* Hover border effect */}
                    {activeFilter !== category.id && (
                      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group transform transition-all duration-1000 hover:scale-105 ${
                    isVisible.projects
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-3xl border border-gray-700/40 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 relative">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        <span className="mr-1">
                          {getStatusIcon(project.status)}
                        </span>
                        {project.status.charAt(0).toUpperCase() +
                          project.status.slice(1)}
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <Image
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={project.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image indicators */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                          {project.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                (currentImageIndex[project.id] || 0) ===
                                imgIndex
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Quick Action Buttons */}
                      <div className="absolute top-4 left-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors duration-300"
                        >
                          🔗
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
                        >
                          🔧
                        </a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                        <div className="text-center p-2 bg-black/30 rounded-lg">
                          <div className="text-cyan-400 font-semibold">
                            {project.duration}
                          </div>
                          <div className="text-gray-400">Duration</div>
                        </div>
                        <div className="text-center p-2 bg-black/30 rounded-lg">
                          <div className="text-green-400 font-semibold">
                            {project.teamSize}
                          </div>
                          <div className="text-gray-400">Team</div>
                        </div>
                        <div className="text-center p-2 bg-black/30 rounded-lg">
                          <div className="text-yellow-400 font-semibold">
                            {project.role}
                          </div>
                          <div className="text-gray-400">Role</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40"
                        >
                          Live Demo
                        </a>
                        {/* <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-700/50 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-gray-600/50 transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                        >
                          View Code
                        </a> */}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search term or filter to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("all");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.cta
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
                  <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative">
                    Let's Create Something Amazing
                    <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-purple-400/20 to-cyan-400/20 bg-clip-text text-transparent blur-xl"></div>
                  </h2>
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Have a project in mind? Let's collaborate and bring your
                    ideas to life with cutting-edge technology and innovative
                    solutions.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/services">
                      <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/40 overflow-hidden">
                        <span className="relative flex items-center gap-3">
                          <span>Start a Project</span>
                          <span className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">
                            🚀
                          </span>
                        </span>
                      </button>
                    </Link>
                    <Link href="/about">
                      <button className="group relative px-10 py-5 border-2 border-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/40">
                        <span className="relative flex items-center gap-3">
                          <span>Learn More</span>
                          <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                            💡
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}
