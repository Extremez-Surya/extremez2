"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import BackgroundEffects from "../components/BackgroundEffects";
import FloatingActionButton from "../components/FloatingActionButton";

export default function DigitalServices() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleServices, setVisibleServices] = useState(new Set());
  const [hoveredService, setHoveredService] = useState(null);
  const observerRef = useRef();

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleServices(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
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

  const handleContactRedirect = () => {
    router.push("/contact");
  };

  const digitalServices = [
    {
      id: 1,
      title: "Custom Web Development",
      category: "Development",
      description: "Modern, responsive websites and web applications",
      detailedDescription:
        "Transform your digital presence with cutting-edge web solutions. From corporate websites to complex web applications, I create stunning, responsive, and high-performance digital experiences that engage your audience and drive results.",
      icon: "💻",
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      features: [
        "Responsive Design for All Devices",
        "Lightning-Fast Performance",
        "SEO-Optimized Structure",
        "Modern UI/UX Design",
        "Cross-Browser Compatibility",
        "Content Management Systems",
        "E-commerce Integration",
        "Third-party API Integration",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      pricing: "₹1,500 - ₹15,000",
      timeline: "2-8 weeks",
      portfolio: [
        {
          name: "E-commerce Platform",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        },
        {
          name: "Corporate Website",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
        {
          name: "SaaS Dashboard",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Requirement Analysis & Planning",
        "UI/UX Design & Prototyping",
        "Frontend & Backend Development",
        "Testing & Quality Assurance",
        "Deployment & Launch",
        "Ongoing Support & Maintenance",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      category: "Mobile",
      description: "Native and cross-platform mobile applications",
      detailedDescription:
        "Reach your customers on the go with powerful mobile applications. I develop both native and cross-platform mobile apps that provide seamless user experiences across iOS and Android devices.",
      icon: "📱",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "In-App Purchases",
        "Social Media Integration",
        "Analytics & Tracking",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Firebase",
        "Redux",
        "Expo",
        "Native APIs",
      ],
      pricing: "₹5,000 - ₹30,000",
      timeline: "3-12 weeks",
      portfolio: [
        {
          name: "Food Delivery App",
          image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
        },
        {
          name: "Fitness Tracker",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
        },
        {
          name: "E-commerce App",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Market Research & Planning",
        "UI/UX Design & Wireframing",
        "Development & Integration",
        "Testing & Debugging",
        "App Store Submission",
        "Post-Launch Support",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      category: "Marketing",
      description: "Comprehensive digital marketing strategies",
      detailedDescription:
        "Boost your online presence with data-driven digital marketing strategies. From social media management to SEO optimization, I help businesses reach their target audience and achieve measurable growth.",
      icon: "📈",
      gradient: "from-green-600 via-teal-600 to-blue-600",
      features: [
        "Social Media Management",
        "SEO & Content Marketing",
        "PPC Campaign Management",
        "Analytics & Reporting",
        "Brand Strategy Development",
        "Email Marketing Campaigns",
        "Influencer Partnerships",
        "Conversion Optimization",
      ],
      technologies: [
        "Google Analytics",
        "Facebook Ads",
        "Google Ads",
        "Hootsuite",
        "Mailchimp",
        "SEMrush",
      ],
      pricing: "₹8,000 - ₹40,000/month",
      timeline: "Ongoing",
      portfolio: [
        {
          name: "E-commerce Growth",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
        {
          name: "Brand Awareness Campaign",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        },
        {
          name: "Lead Generation",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Market Analysis & Research",
        "Strategy Development",
        "Campaign Creation & Launch",
        "Performance Monitoring",
        "Optimization & A/B Testing",
        "Reporting & Analysis",
      ],
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      category: "E-commerce",
      description: "Complete online store development and management",
      detailedDescription:
        "Launch and scale your online business with powerful e-commerce solutions. From custom online stores to marketplace integrations, I provide comprehensive e-commerce development and optimization services.",
      icon: "🛒",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      features: [
        "Custom Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Multi-vendor Marketplace",
        "Mobile-Responsive Design",
        "SEO-Optimized Product Pages",
        "Analytics & Reporting",
        "Third-party Integrations",
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Stripe",
        "PayPal",
        "AWS",
      ],
      pricing: "₹20,000 - ₹90,000",
      timeline: "4-12 weeks",
      portfolio: [
        {
          name: "Fashion Store",
          image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
        },
        {
          name: "Electronics Marketplace",
          image:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
        },
        {
          name: "Food Delivery Platform",
          image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Business Requirements Analysis",
        "Platform Selection & Setup",
        "Design & Development",
        "Payment & Shipping Integration",
        "Testing & Launch",
        "Ongoing Maintenance & Support",
      ],
    },
    {
      id: 5,
      title: "UI/UX Design",
      category: "Design",
      description: "User-centered design for digital products",
      detailedDescription:
        "Create exceptional user experiences with thoughtful design. I specialize in UI/UX design that combines aesthetics with functionality, ensuring your digital products are both beautiful and user-friendly.",
      icon: "🎨",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Responsive Design Systems",
        "Design System Creation",
        "Accessibility Compliance",
        "Conversion Optimization",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Zeplin",
      ],
      pricing: "₹12,000 - ₹1,00,000",
      timeline: "2-6 weeks",
      portfolio: [
        {
          name: "SaaS Dashboard",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
        {
          name: "Mobile App Design",
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        },
        {
          name: "Website Redesign",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Discovery & Research",
        "User Journey Mapping",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Handoff",
      ],
    },
    {
      id: 6,
      title: "API Development",
      category: "Backend",
      description: "Robust API development and integration services",
      detailedDescription:
        "Power your applications with robust and scalable APIs. I develop custom APIs and integrate third-party services to create seamless data flow and functionality for your digital products.",
      icon: "⚡",
      gradient: "from-teal-600 via-cyan-600 to-blue-600",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Database Design & Optimization",
        "Authentication & Security",
        "Third-party Integrations",
        "API Documentation",
        "Performance Optimization",
        "Microservices Architecture",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      pricing: "₹18,000 - ₹1,80,000",
      timeline: "3-8 weeks",
      portfolio: [
        {
          name: "E-commerce API",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
        {
          name: "Social Media API",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        },
        {
          name: "Payment Gateway Integration",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Requirements Analysis",
        "Database Design",
        "API Development",
        "Security Implementation",
        "Testing & Documentation",
        "Deployment & Monitoring",
      ],
    },
    {
      id: 7,
      title: "Cloud Solutions",
      category: "Cloud",
      description: "Scalable cloud infrastructure and deployment",
      detailedDescription:
        "Scale your applications with powerful cloud solutions. I provide cloud architecture, deployment, and management services to ensure your applications are fast, secure, and highly available.",
      icon: "☁️",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      features: [
        "Cloud Architecture Design",
        "AWS/Azure/GCP Deployment",
        "Auto-scaling Configuration",
        "Load Balancing",
        "Database Migration",
        "Security & Compliance",
        "Monitoring & Logging",
        "Cost Optimization",
      ],
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Nginx",
      ],
      pricing: "₹25,000 - ₹2,50,000",
      timeline: "2-8 weeks",
      portfolio: [
        {
          name: "Microservices Deployment",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        },
        {
          name: "Auto-scaling Infrastructure",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
        {
          name: "Multi-region Deployment",
          image:
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Infrastructure Assessment",
        "Architecture Design",
        "Migration Planning",
        "Deployment & Configuration",
        "Testing & Optimization",
        "Monitoring Setup",
      ],
    },
    {
      id: 8,
      title: "DevOps & Automation",
      category: "DevOps",
      description: "CI/CD pipelines and automation solutions",
      detailedDescription:
        "Streamline your development workflow with DevOps practices and automation. I implement CI/CD pipelines, automated testing, and deployment strategies to accelerate your development process.",
      icon: "🔧",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      features: [
        "CI/CD Pipeline Setup",
        "Automated Testing",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Alerting",
        "Performance Optimization",
        "Security Automation",
        "Backup & Recovery",
      ],
      technologies: [
        "Jenkins",
        "GitLab CI",
        "Docker",
        "Kubernetes",
        "Ansible",
        "Terraform",
      ],
      pricing: "₹20,000 - ₹2,00,000",
      timeline: "2-6 weeks",
      portfolio: [
        {
          name: "Automated Deployment Pipeline",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
        {
          name: "Monitoring Dashboard",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
        {
          name: "Container Orchestration",
          image:
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Current Workflow Analysis",
        "Pipeline Design",
        "Tool Setup & Configuration",
        "Automation Implementation",
        "Testing & Optimization",
        "Training & Documentation",
      ],
    },
    {
      id: 9,
      title: "Data Analytics & Business Intelligence",
      category: "Analytics",
      description: "Transform your data into actionable business insights",
      detailedDescription:
        "Unlock the power of your data with comprehensive analytics and business intelligence solutions. I help businesses make data-driven decisions through advanced analytics, visualizations, and reporting systems.",
      icon: "📊",
      gradient: "from-orange-600 via-yellow-600 to-red-600",
      features: [
        "Power BI Dashboard Development",
        "Data Visualization & Reporting",
        "ETL Pipeline Creation",
        "Statistical Analysis",
        "Predictive Analytics",
        "KPI Monitoring Systems",
        "Real-time Data Processing",
        "Custom Analytics Solutions",
      ],
      technologies: [
        "Power BI",
        "Python",
        "Pandas",
        "SQL",
        "Excel",
        "Tableau",
      ],
      pricing: "₹12,000 - ₹80,000",
      timeline: "2-6 weeks",
      portfolio: [
        {
          name: "Sales Analytics Dashboard",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
        {
          name: "Financial Reporting System",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
        {
          name: "Customer Behavior Analysis",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Data Source Analysis",
        "ETL Pipeline Design",
        "Dashboard Development",
        "Testing & Validation",
        "User Training",
        "Ongoing Support",
      ],
    },
    {
      id: 10,
      title: "Machine Learning & AI Solutions",
      category: "AI/ML",
      description: "Intelligent automation and predictive analytics",
      detailedDescription:
        "Harness the power of artificial intelligence and machine learning to automate processes, predict trends, and gain competitive advantages. I develop custom ML models and AI solutions tailored to your business needs.",
      icon: "🤖",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      features: [
        "Predictive Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Automated Decision Systems",
        "Data Mining & Pattern Recognition",
        "Custom AI Chatbots",
        "Recommendation Engines",
        "Anomaly Detection Systems",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
      ],
      pricing: "₹25,000 - ₹2,00,000",
      timeline: "4-12 weeks",
      portfolio: [
        {
          name: "Customer Churn Prediction",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        },
        {
          name: "Image Recognition System",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        },
        {
          name: "Sentiment Analysis Tool",
          image:
            "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Problem Definition & Data Collection",
        "Data Preprocessing & Feature Engineering",
        "Model Development & Training",
        "Model Evaluation & Optimization",
        "Deployment & Integration",
        "Monitoring & Maintenance",
      ],
    },
    {
      id: 11,
      title: "Geospatial Data Processing",
      category: "GIS",
      description: "Advanced geospatial analysis and mapping solutions",
      detailedDescription:
        "Leverage geospatial technology for location-based insights and mapping solutions. I provide comprehensive GIS services for urban planning, environmental monitoring, and business intelligence.",
      icon: "🌍",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      features: [
        "Satellite Data Processing",
        "GIS Mapping & Visualization",
        "Spatial Data Analysis",
        "Remote Sensing Applications",
        "Location Intelligence",
        "Environmental Monitoring",
        "Urban Planning Solutions",
        "Disaster Risk Assessment",
      ],
      technologies: [
        "Python",
        "QGIS",
        "ArcGIS",
        "GDAL",
        "Geopandas",
        "PostGIS",
      ],
      pricing: "₹20,000 - ₹1,50,000",
      timeline: "3-10 weeks",
      portfolio: [
        {
          name: "Urban Development Analysis",
          image:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop",
        },
        {
          name: "Environmental Impact Study",
          image:
            "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=250&fit=crop",
        },
        {
          name: "Disaster Risk Mapping",
          image:
            "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Data Acquisition & Preprocessing",
        "Spatial Analysis & Modeling",
        "Visualization & Mapping",
        "Validation & Quality Check",
        "Report Generation",
        "Knowledge Transfer",
      ],
    },
    {
      id: 12,
      title: "Database Design & Management",
      category: "Database",
      description: "Robust database solutions and optimization",
      detailedDescription:
        "Design and manage scalable database systems that power your applications. From database architecture to performance optimization, I ensure your data is secure, accessible, and efficiently organized.",
      icon: "🗄️",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
      features: [
        "Database Architecture Design",
        "Performance Optimization",
        "Data Migration Services",
        "Backup & Recovery Systems",
        "Security Implementation",
        "Query Optimization",
        "Data Modeling",
        "Database Monitoring",
      ],
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "SQL Server",
        "SQLite",
      ],
      pricing: "₹15,000 - ₹1,00,000",
      timeline: "2-8 weeks",
      portfolio: [
        {
          name: "E-commerce Database",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
        },
        {
          name: "Analytics Data Warehouse",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
        {
          name: "Real-time Logging System",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Requirements Analysis",
        "Database Design & Modeling",
        "Implementation & Configuration",
        "Testing & Optimization",
        "Migration & Deployment",
        "Maintenance & Support",
      ],
    },
    {
      id: 13,
      title: "Python Automation & Scripting",
      category: "Automation",
      description: "Automate repetitive tasks and streamline workflows",
      detailedDescription:
        "Increase efficiency and reduce manual work with custom Python automation solutions. I develop scripts and tools that automate data processing, web scraping, file management, and business processes.",
      icon: "🐍",
      gradient: "from-amber-600 via-yellow-600 to-orange-600",
      features: [
        "Process Automation Scripts",
        "Web Scraping Solutions",
        "Data Processing Pipelines",
        "File Management Automation",
        "Email Automation",
        "Report Generation",
        "API Integration Scripts",
        "Scheduled Task Management",
      ],
      technologies: [
        "Python",
        "Selenium",
        "Beautiful Soup",
        "Pandas",
        "Requests",
        "Schedule",
      ],
      pricing: "₹8,000 - ₹60,000",
      timeline: "1-6 weeks",
      portfolio: [
        {
          name: "Data Processing Pipeline",
          image:
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
        },
        {
          name: "Web Scraping Tool",
          image:
            "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=250&fit=crop",
        },
        {
          name: "Automated Reporting System",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Process Analysis & Documentation",
        "Script Development & Testing",
        "Integration & Configuration",
        "Error Handling & Logging",
        "Deployment & Scheduling",
        "Monitoring & Maintenance",
      ],
    },
    {
      id: 14,
      title: "Technical Consulting & Training",
      category: "Consulting",
      description: "Expert guidance and knowledge transfer services",
      detailedDescription:
        "Get expert technical guidance and empower your team with comprehensive training programs. I provide strategic consulting, code reviews, architecture guidance, and hands-on training sessions.",
      icon: "🎓",
      gradient: "from-indigo-600 via-blue-600 to-cyan-600",
      features: [
        "Technical Architecture Review",
        "Code Quality Assessment",
        "Technology Stack Consultation",
        "Performance Optimization Audit",
        "Best Practices Training",
        "Team Mentoring",
        "Documentation Creation",
        "Knowledge Transfer Sessions",
      ],
      technologies: [
        "Various Technologies",
        "Architecture Patterns",
        "Development Best Practices",
        "Code Review Tools",
        "Documentation Tools",
        "Training Materials",
      ],
      pricing: "₹5,000 - ₹50,000",
      timeline: "1-4 weeks",
      portfolio: [
        {
          name: "Development Team Training",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        },
        {
          name: "Architecture Assessment",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
        {
          name: "Code Quality Improvement",
          image:
            "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=250&fit=crop",
        },
      ],
      process: [
        "Current State Assessment",
        "Gap Analysis & Recommendations",
        "Training Program Design",
        "Knowledge Transfer Sessions",
        "Documentation & Resources",
        "Follow-up Support",
      ],
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white">
        <BackgroundEffects />
        <Header />

        <main className="relative z-10 pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              {/* Main Title with 3D Effect */}
              <div className="relative mb-6">
                <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent blur-sm">
                    Digital Services
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital Services
                  </span>
                </h1>

                {/* Animated underline */}
                <div className="relative mx-auto w-48 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-pulse blur-sm"></div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="relative mb-8">
                <p className="text-xl md:text-2xl font-bold text-gray-300 mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Digital Solutions
                  </span>{" "}
                  & Tech Excellence
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Transforming businesses with cutting-edge technology
                </p>
              </div>
            </div>
          </section>

          {/* Digital Services Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent blur-sm">
                    Core Services
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Core Services
                  </span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Discover our comprehensive digital solutions designed to
                  elevate your business to the next level
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {digitalServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    data-index={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={handleContactRedirect}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <motion.div
                      className="relative h-full bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-blue-900/20 rounded-xl border border-gray-700/50 transition-all duration-500 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm group overflow-hidden"
                      whileHover={{
                        scale: 1.03,
                        rotateY: 5,
                        rotateX: 2,
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Service Content */}
                      <div className="p-8">
                        {/* Icon and Category */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-5xl">{service.icon}</div>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-400/30">
                            {service.category}
                          </span>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features Grid */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm text-gray-300 leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          {service.features.length > 4 && (
                            <p className="text-xs text-gray-400 mt-2">
                              +{service.features.length - 4} more features
                            </p>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wider">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 rounded text-purple-300 text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {service.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-gray-400 text-xs">
                                +{service.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Pricing and Timeline */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                              Investment
                            </div>
                            <div className="text-lg font-bold text-cyan-400">
                              {service.pricing}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                              Timeline
                            </div>
                            <div className="text-lg font-semibold text-green-400">
                              {service.timeline}
                            </div>
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20" />
            <div className="relative max-w-4xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent blur-sm">
                    Ready to Transform?
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Ready to Transform?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your digital vision and create something
                  extraordinary together
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.button
                    className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open("tel:+919315153552", "_self")}
                  >
                    <span className="relative z-10">📞 Call Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  </motion.button>

                  <motion.button
                    className="relative px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(
                        "https://wa.me/919315153552?text=Hi%20Vinay%2C%20I'm%20interested%20in%20your%20digital%20services",
                        "_blank"
                      )
                    }
                  >
                    <span className="relative z-10">💬 WhatsApp</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  </motion.button>

                  <motion.button
                    className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open("mailto:vinaybansal3552@gmail.com", "_self")
                    }
                  >
                    <span className="relative z-10">✉️ Email</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  </motion.button>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-400">
                    💡 Free consultation • Custom solutions • No hidden costs
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <FloatingActionButton />
        <Footer />
      </div>
    </PageWrapper>
  );
}
