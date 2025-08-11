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
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FAQSection from "../components/FAQSection";

export default function ServicesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleServices, setVisibleServices] = useState(new Set());
  const [flippedCards, setFlippedCards] = useState(new Set());
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

  const services = [
    {
      id: 1,
      title: "Wall Prints",
      category: "signage",
      description: "High-quality wall prints and graphics for businesses",
      features: [
        "Weather Resistant",
        "Custom Sizes",
        "High Resolution",
        "Easy Installation",
      ],
      longDescription:
        "Transform your walls with professional-grade prints and graphics that make a lasting impression on customers and visitors.",
      technologies: [
        "Large Format Printing",
        "Vinyl Application",
        "UV Resistant Inks",
        "Lamination",
      ],
      deliveryTime: "3-5 days",
      image: "🖼️",
      bannerImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      color: "from-blue-600 to-cyan-600",
      stats: {
        projects: "500+",
        satisfaction: "98%",
      },
    },
    {
      id: 2,
      title: "Vinyl Prints",
      category: "signage",
      description:
        "Custom vinyl prints and decals for windows, vehicles, and surfaces",
      features: [
        "Waterproof",
        "UV Protected",
        "Removable Options",
        "Custom Shapes",
      ],
      longDescription:
        "Professional vinyl printing services for branding, decoration, and promotional purposes with long-lasting durability.",
      technologies: [
        "Digital Cutting",
        "Premium Vinyl",
        "Transfer Tape",
        "Contour Cutting",
      ],
      deliveryTime: "2-4 days",
      image: "📋",
      bannerImage:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      color: "from-green-600 to-teal-600",
      stats: {
        projects: "750+",
        satisfaction: "99%",
      },
    },
    {
      id: 3,
      title: "Wall Collage",
      category: "interior",
      description: "Creative wall collages and artistic displays",
      features: [
        "Custom Design",
        "Multiple Formats",
        "Gallery Style",
        "Easy Installation",
      ],
      longDescription:
        "Artistic wall collages that combine multiple elements to create stunning visual displays for offices and retail spaces.",
      technologies: [
        "Digital Collaging",
        "Frame Systems",
        "Mounting Hardware",
        "Color Matching",
      ],
      deliveryTime: "5-7 days",
      image: "🎨",
      bannerImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
      color: "from-purple-600 to-pink-600",
      stats: {
        projects: "200+",
        satisfaction: "96%",
      },
    },
    {
      id: 4,
      title: "Totems",
      category: "signage",
      description: "Freestanding totem displays for outdoor and indoor use",
      features: [
        "Weather Resistant",
        "LED Illumination",
        "Double Sided",
        "Custom Height",
      ],
      longDescription:
        "Professional totem signage solutions for directional guidance, branding, and information display.",
      technologies: [
        "Aluminum Frame",
        "LED Lighting",
        "Digital Printing",
        "Weatherproof Sealing",
      ],
      deliveryTime: "1-2 weeks",
      image: "🗿",
      bannerImage:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      color: "from-orange-600 to-red-600",
      stats: {
        projects: "150+",
        satisfaction: "97%",
      },
    },
    {
      id: 5,
      title: "3D Signage",
      category: "signage",
      description: "Three-dimensional signs and letters for premium branding",
      features: [
        "LED Backlighting",
        "Acrylic Materials",
        "Custom Fonts",
        "Professional Finish",
      ],
      longDescription:
        "Premium 3D signage solutions that create depth and visual impact for your brand identity.",
      technologies: [
        "CNC Cutting",
        "LED Integration",
        "Acrylic Fabrication",
        "Mounting Systems",
      ],
      deliveryTime: "1-2 weeks",
      image: "🔤",
      bannerImage:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop",
      color: "from-indigo-600 to-purple-600",
      stats: {
        projects: "200+",
        satisfaction: "98%",
      },
    },
    {
      id: 6,
      title: "Scrollers & Standees",
      category: "events",
      description: "Portable scrollers and standee displays for events",
      features: [
        "Lightweight",
        "Easy Setup",
        "Durable Frame",
        "Replaceable Graphics",
      ],
      longDescription:
        "Professional portable display solutions perfect for trade shows, events, retail displays, and presentations.",
      technologies: [
        "Retractable Mechanism",
        "Anti-Curl Film",
        "Aluminum Base",
        "Quick Setup",
      ],
      deliveryTime: "3-5 days",
      image: "🎌",
      bannerImage:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      color: "from-blue-600 to-teal-600",
      stats: {
        projects: "300+",
        satisfaction: "97%",
      },
    },
    {
      id: 7,
      title: "Satin Flags",
      category: "events",
      description: "Premium satin flags for events and promotions",
      features: [
        "Satin Finish",
        "Vibrant Colors",
        "Wind Resistant",
        "Custom Sizes",
      ],
      longDescription:
        "High-quality satin flags that provide elegant branding solutions for outdoor events and ceremonies.",
      technologies: [
        "Satin Fabric",
        "Digital Dye Sublimation",
        "Reinforced Edges",
        "Flag Poles",
      ],
      deliveryTime: "3-5 days",
      image: "🏳️",
      bannerImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      color: "from-pink-600 to-purple-600",
      stats: {
        projects: "180+",
        satisfaction: "95%",
      },
    },
    {
      id: 8,
      title: "Roll-up Standees",
      category: "events",
      description: "Retractable roll-up banner stands with professional finish",
      features: [
        "Retractable",
        "Premium Base",
        "Easy Transport",
        "Quick Setup",
      ],
      longDescription:
        "Professional roll-up banner systems with premium bases and easy-change graphic systems for maximum convenience.",
      technologies: [
        "Retractable Base",
        "Snap Rail",
        "Carrying Case",
        "Adjustable Height",
      ],
      deliveryTime: "3-5 days",
      image: "📢",
      bannerImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      color: "from-green-600 to-emerald-600",
      stats: {
        projects: "400+",
        satisfaction: "98%",
      },
    },
    {
      id: 9,
      title: "Retro Signage",
      category: "vintage",
      description: "Vintage and retro-style signage with classic appeal",
      features: [
        "Vintage Design",
        "LED Neon",
        "Metal Frames",
        "Custom Typography",
      ],
      longDescription:
        "Nostalgic retro signage that brings classic charm to modern spaces with authentic vintage aesthetics.",
      technologies: [
        "LED Neon",
        "Distressed Finishes",
        "Metal Working",
        "Custom Fonts",
      ],
      deliveryTime: "1-2 weeks",
      image: "🕰️",
      bannerImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      color: "from-yellow-600 to-orange-600",
      stats: {
        projects: "120+",
        satisfaction: "96%",
      },
    },
    {
      id: 10,
      title: "Photo Panels",
      category: "interior",
      description: "High-quality photo panels for interior decoration",
      features: [
        "High Resolution",
        "UV Resistant",
        "Multiple Sizes",
        "Easy Mounting",
      ],
      longDescription:
        "Professional photo panels that transform your favorite images into stunning wall art for any space.",
      technologies: [
        "UV Printing",
        "Rigid Substrates",
        "Mounting Systems",
        "Color Calibration",
      ],
      deliveryTime: "3-5 days",
      image: "📸",
      bannerImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
      color: "from-purple-600 to-indigo-600",
      stats: {
        projects: "350+",
        satisfaction: "97%",
      },
    },
    {
      id: 11,
      title: "Portable Backdrops",
      category: "events",
      description: "Portable backdrop systems for events and photography",
      features: [
        "Lightweight",
        "Easy Assembly",
        "Custom Graphics",
        "Professional Finish",
      ],
      longDescription:
        "Versatile portable backdrop solutions perfect for events, photography, and presentations with professional results.",
      technologies: [
        "Modular Frame",
        "Fabric Graphics",
        "Quick Assembly",
        "Carrying Cases",
      ],
      deliveryTime: "5-7 days",
      image: "🎭",
      bannerImage:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
      color: "from-teal-600 to-cyan-600",
      stats: {
        projects: "250+",
        satisfaction: "96%",
      },
    },
    {
      id: 12,
      title: "Paper Flags",
      category: "events",
      description: "Cost-effective paper flags for mass events and promotions",
      features: [
        "Affordable",
        "Quick Delivery",
        "Custom Print",
        "Eco-Friendly",
      ],
      longDescription:
        "Budget-friendly paper flag solutions ideal for large events, promotions, and temporary branding needs.",
      technologies: [
        "Digital Printing",
        "Eco Paper",
        "Fast Production",
        "Bulk Processing",
      ],
      deliveryTime: "1-2 days",
      image: "📄",
      bannerImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      color: "from-lime-600 to-green-600",
      stats: {
        projects: "800+",
        satisfaction: "94%",
      },
    },
    {
      id: 13,
      title: "Outdoor Monitoring",
      category: "digital",
      description: "Outdoor digital displays with monitoring systems",
      features: [
        "Weather Resistant",
        "Remote Monitoring",
        "High Brightness",
        "24/7 Operation",
      ],
      longDescription:
        "Advanced outdoor monitoring displays with real-time content management and weather-resistant construction.",
      technologies: [
        "Digital Displays",
        "Monitoring Software",
        "Weather Sensors",
        "Remote Control",
      ],
      deliveryTime: "2-3 weeks",
      image: "📺",
      bannerImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      color: "from-red-600 to-pink-600",
      stats: {
        projects: "80+",
        satisfaction: "98%",
      },
    },
    {
      id: 14,
      title: "Outdoor Displays",
      category: "outdoor",
      description: "Weather-resistant outdoor display systems",
      features: [
        "UV Protection",
        "Rust Resistant",
        "High Durability",
        "Professional Mounting",
      ],
      longDescription:
        "Robust outdoor display solutions designed to withstand harsh weather conditions while maintaining visual appeal.",
      technologies: [
        "Marine Grade Materials",
        "UV Stabilizers",
        "Stainless Hardware",
        "Drainage Systems",
      ],
      deliveryTime: "1-2 weeks",
      image: "🌤️",
      bannerImage:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      color: "from-blue-600 to-teal-600",
      stats: {
        projects: "200+",
        satisfaction: "97%",
      },
    },
    {
      id: 15,
      title: "Outdoor Boards",
      category: "outdoor",
      description: "Large format outdoor advertising boards",
      features: [
        "Large Format",
        "Weather Proof",
        "LED Illumination",
        "Easy Updates",
      ],
      longDescription:
        "Professional outdoor advertising boards designed for maximum visibility and impact in all weather conditions.",
      technologies: [
        "Large Format Printing",
        "LED Lighting",
        "Weather Sealing",
        "Mounting Systems",
      ],
      deliveryTime: "1-2 weeks",
      image: "📋",
      bannerImage:
        "https://images.unsplash.com/photo-1541522647651-91aeb4768ee4?w=800&h=400&fit=crop",
      color: "from-orange-600 to-yellow-600",
      stats: {
        projects: "150+",
        satisfaction: "96%",
      },
    },
    {
      id: 16,
      title: "Office Receptions",
      category: "interior",
      description: "Reception area signage and branding solutions",
      features: [
        "Professional Look",
        "Brand Integration",
        "LED Lighting",
        "Premium Materials",
      ],
      longDescription:
        "Sophisticated reception signage that creates a professional first impression and reinforces your brand identity.",
      technologies: [
        "3D Letters",
        "LED Backlighting",
        "Acrylic Panels",
        "Brushed Metal",
      ],
      deliveryTime: "1-2 weeks",
      image: "🏢",
      bannerImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
      color: "from-purple-600 to-indigo-600",
      stats: {
        projects: "150+",
        satisfaction: "99%",
      },
    },
    {
      id: 17,
      title: "LED Signage",
      category: "digital",
      description: "Energy-efficient LED signage solutions",
      features: [
        "Energy Efficient",
        "Long Lasting",
        "Bright Display",
        "Remote Control",
      ],
      longDescription:
        "Modern LED signage systems that provide brilliant illumination with energy efficiency and long-term reliability.",
      technologies: [
        "LED Technology",
        "Control Systems",
        "Power Management",
        "Wireless Control",
      ],
      deliveryTime: "1-2 weeks",
      image: "💡",
      bannerImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      color: "from-cyan-600 to-blue-600",
      stats: {
        projects: "300+",
        satisfaction: "98%",
      },
    },
    {
      id: 18,
      title: "Indoor Signage",
      category: "interior",
      description: "Professional indoor signage for businesses",
      features: [
        "Clean Design",
        "Easy Installation",
        "Durable Materials",
        "Custom Branding",
      ],
      longDescription:
        "Professional indoor signage solutions that enhance your interior space while effectively communicating your brand message.",
      technologies: [
        "Acrylic Fabrication",
        "Vinyl Graphics",
        "LED Backlighting",
        "Mounting Hardware",
      ],
      deliveryTime: "5-7 days",
      image: "🏪",
      bannerImage:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      color: "from-emerald-600 to-green-600",
      stats: {
        projects: "400+",
        satisfaction: "97%",
      },
    },
    {
      id: 19,
      title: "Indoor Displays",
      category: "interior",
      description:
        "Interior display systems for retail and corporate environments",
      features: [
        "Modular Design",
        "Easy Updates",
        "Professional Finish",
        "Space Efficient",
      ],
      longDescription:
        "Versatile indoor display solutions that enhance your interior space while effectively communicating your message.",
      technologies: [
        "Modular Frames",
        "Magnetic Systems",
        "LED Lighting",
        "Easy-Change Graphics",
      ],
      deliveryTime: "5-7 days",
      image: "📺",
      bannerImage:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      color: "from-green-600 to-teal-600",
      stats: {
        projects: "350+",
        satisfaction: "97%",
      },
    },
    {
      id: 20,
      title: "Graphic Designing",
      category: "design",
      description:
        "Professional graphic design services for all your branding needs",
      features: [
        "Creative Design",
        "Brand Identity",
        "Multiple Formats",
        "Fast Turnaround",
      ],
      longDescription:
        "Complete graphic design solutions from logo creation to marketing materials, ensuring consistent brand identity across all platforms.",
      technologies: [
        "Adobe Creative Suite",
        "Vector Graphics",
        "Brand Guidelines",
        "Print Ready Files",
      ],
      deliveryTime: "3-7 days",
      image: "🎨",
      bannerImage:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
      color: "from-pink-600 to-rose-600",
      stats: {
        projects: "1000+",
        satisfaction: "99%",
      },
    },
    {
      id: 21,
      title: "Frosted Films",
      category: "window",
      description: "Privacy and decorative frosted window films",
      features: [
        "Privacy Protection",
        "UV Blocking",
        "Easy Application",
        "Removable",
      ],
      longDescription:
        "High-quality frosted films that provide privacy while maintaining natural light, perfect for offices and commercial spaces.",
      technologies: [
        "Vinyl Films",
        "Precision Cutting",
        "Application Tools",
        "UV Protection",
      ],
      deliveryTime: "2-3 days",
      image: "🪟",
      bannerImage:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=400&fit=crop",
      color: "from-gray-600 to-slate-600",
      stats: {
        projects: "250+",
        satisfaction: "96%",
      },
    },
    {
      id: 22,
      title: "Easel Stands",
      category: "events",
      description: "Portable easel stands for presentations and displays",
      features: ["Portable", "Adjustable Height", "Stable Base", "Easy Setup"],
      longDescription:
        "Professional easel stands perfect for presentations, art displays, and temporary signage solutions.",
      technologies: [
        "Aluminum Frame",
        "Adjustable Legs",
        "Stability Features",
        "Compact Design",
      ],
      deliveryTime: "1-2 days",
      image: "🖼️",
      bannerImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      color: "from-brown-600 to-amber-600",
      stats: {
        projects: "200+",
        satisfaction: "95%",
      },
    },
    {
      id: 23,
      title: "Cutout Standees",
      category: "events",
      description: "Life-size cutout standees for events and promotions",
      features: [
        "Life Size",
        "High Quality Print",
        "Sturdy Base",
        "Custom Shapes",
      ],
      longDescription:
        "Eye-catching life-size cutout standees that create memorable photo opportunities and promotional displays.",
      technologies: [
        "Cardboard/Foam Core",
        "UV Printing",
        "Die Cutting",
        "Support Stands",
      ],
      deliveryTime: "3-5 days",
      image: "👤",
      bannerImage:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
      color: "from-violet-600 to-purple-600",
      stats: {
        projects: "180+",
        satisfaction: "96%",
      },
    },
    {
      id: 24,
      title: "Corporate Gifts",
      category: "promotional",
      description: "Customized corporate gifts and promotional items",
      features: [
        "Custom Branding",
        "Quality Materials",
        "Bulk Orders",
        "Professional Packaging",
      ],
      longDescription:
        "Premium corporate gifts that strengthen business relationships and promote your brand with style and quality.",
      technologies: [
        "Laser Engraving",
        "Screen Printing",
        "Embossing",
        "Custom Packaging",
      ],
      deliveryTime: "1-2 weeks",
      image: "🎁",
      bannerImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
      color: "from-gold-600 to-yellow-600",
      stats: {
        projects: "500+",
        satisfaction: "98%",
      },
    },
    {
      id: 25,
      title: "Stickers",
      category: "promotional",
      description: "Custom stickers for branding and promotional use",
      features: [
        "Weather Resistant",
        "Custom Shapes",
        "Various Sizes",
        "Bulk Available",
      ],
      longDescription:
        "High-quality custom stickers perfect for branding, promotions, and product labeling with durable materials.",
      technologies: [
        "Digital Printing",
        "Die Cutting",
        "Vinyl Materials",
        "Adhesive Selection",
      ],
      deliveryTime: "2-3 days",
      image: "🏷️",
      bannerImage:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      color: "from-rose-600 to-pink-600",
      stats: {
        projects: "2000+",
        satisfaction: "97%",
      },
    },
    {
      id: 26,
      title: "ID Activities",
      category: "security",
      description: "ID cards and security badges for organizations",
      features: [
        "Security Features",
        "Photo Quality",
        "Durable Cards",
        "Quick Turnaround",
      ],
      longDescription:
        "Professional ID card solutions with security features and high-quality printing for organizational identification needs.",
      technologies: [
        "PVC Cards",
        "Thermal Printing",
        "Security Features",
        "Lanyards",
      ],
      deliveryTime: "1-2 days",
      image: "🆔",
      bannerImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      color: "from-blue-600 to-indigo-600",
      stats: {
        projects: "1500+",
        satisfaction: "98%",
      },
    },
    {
      id: 27,
      title: "Menu Activities",
      category: "hospitality",
      description: "Restaurant and cafe menu design and printing",
      features: [
        "Food Photography",
        "Creative Design",
        "Durable Materials",
        "Easy Updates",
      ],
      longDescription:
        "Professional menu design and printing services that enhance the dining experience and showcase your culinary offerings.",
      technologies: [
        "Menu Design",
        "Food Photography",
        "Lamination",
        "Binding Options",
      ],
      deliveryTime: "3-5 days",
      image: "📋",
      bannerImage:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
      color: "from-amber-600 to-orange-600",
      stats: {
        projects: "300+",
        satisfaction: "96%",
      },
    },
    {
      id: 28,
      title: "Acrylic Shapes",
      category: "fabrication",
      description: "Custom acrylic fabrication and shapes",
      features: [
        "Precision Cutting",
        "Various Thicknesses",
        "Clear/Colored Options",
        "Custom Shapes",
      ],
      longDescription:
        "Precision acrylic fabrication services for displays, signage, and architectural elements with professional finishing.",
      technologies: [
        "Laser Cutting",
        "CNC Machining",
        "Flame Polishing",
        "Adhesive Bonding",
      ],
      deliveryTime: "5-7 days",
      image: "🔷",
      bannerImage:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop",
      color: "from-cyan-600 to-blue-600",
      stats: {
        projects: "400+",
        satisfaction: "97%",
      },
    },
    {
      id: 29,
      title: "Acrylic Letters",
      category: "fabrication",
      description: "Custom acrylic letters and dimensional signage",
      features: [
        "3D Letters",
        "LED Backlighting",
        "Custom Fonts",
        "Professional Mounting",
      ],
      longDescription:
        "Premium acrylic letter solutions that create stunning dimensional signage with optional LED backlighting for maximum impact.",
      technologies: [
        "CNC Cutting",
        "LED Integration",
        "Mounting Systems",
        "Acrylic Fabrication",
      ],
      deliveryTime: "1-2 weeks",
      image: "🔤",
      bannerImage:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop",
      color: "from-clear-600 to-blue-600",
      stats: {
        projects: "250+",
        satisfaction: "98%",
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "signage", name: "Signage" },
    { id: "digital", name: "Digital" },
    { id: "outdoor", name: "Outdoor" },
    { id: "interior", name: "Interior" },
    { id: "events", name: "Events" },
    { id: "promotional", name: "Promotional" },
    { id: "window", name: "Window Films" },
    { id: "fabrication", name: "Fabrication" },
    { id: "vintage", name: "Vintage" },
    { id: "design", name: "Design" },
    { id: "security", name: "Security" },
    { id: "hospitality", name: "Hospitality" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleContactRedirect = () => {
    router.push('/contact');
  };

  const handleCardClick = (categoryId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: "advertising",
      name: "ADVERTISING",
      icon: "👤",
      description: "",
      services: [
        "News Papers & Magazines",
        "TV News Channels",
        "FM Radio, Movie Hall",
        "Delhi Metro Rail",
        "Outdoor Hoardings",
      ],
    },
    {
      id: "production",
      name: "PRODUCTION",
      icon: "▶️",
      description: "",
      services: [
        "Designing & Printing",
        "Ad Films",
        "2D / 3D Animation",
        "Business Documentary",
        "Corporate Presentations",
      ],
    },
    {
      id: "branding",
      name: "BRANDING",
      icon: "🔖",
      description: "",
      services: [
        "In house Branding",
        "Product Branding",
        "Interior Fabrication",
        "Signages & Kiosks",
      ],
    },
    {
      id: "promotion",
      name: "PROMOTION",
      icon: "🛩️",
      description: "",
      services: [
        "Designing & Printing",
        "Ad Films, 2D / 3D Animation",
        "Business Documentary",
        "Corporate Presentations",
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
                    Our Services
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Our Services
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
                    Professional Solutions
                  </span>{" "}
                  & Creative Excellence
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Crafted with passion, built with precision
                </p>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
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
                  Discover our specialized service categories designed to meet
                  your unique business needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flip-card cursor-pointer ${
                      flippedCards.has(category.id) ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(category.id)}
                  >
                    <div className="flip-card-inner">
                      {/* Front of card */}
                      <div className="flip-card-front p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
                        <motion.div
                          className="text-6xl mb-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {category.icon}
                        </motion.div>
                        <motion.h3
                          className="text-xl font-bold text-white mb-2"
                          whileHover={{ color: "#a855f7" }}
                        >
                          {category.name}
                        </motion.h3>
                        {category.id === "advertising" && (
                          <motion.p
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            An advertising campaign is a series of themed
                            messages across various media, designed to deliver a
                            unified marketing message within a set timeframe.
                          </motion.p>
                        )}
                        {category.id === "production" && (
                          <motion.p
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            Communication design blends design and information
                            development to craft messages that effectively
                            connect with people through print, digital, or
                            visual media.
                          </motion.p>
                        )}
                        {category.id === "branding" && (
                          <motion.p
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            Sales promotions boost sales and capture customer
                            insights through contests, giveaways, coupons, and
                            discounts.
                          </motion.p>
                        )}
                        {category.id === "promotion" && (
                          <motion.p
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            Gifting is a powerful way to express gratitude and
                            build lasting business relationships. Winning Ways
                            offers trendy gifts perfect for every occasion and
                            connection.
                          </motion.p>
                        )}
                      </div>

                      {/* Back of card */}
                      <div className="flip-card-back p-6 flex flex-col justify-center items-center text-center">
                        <h3 className="text-lg font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {category.name}
                        </h3>
                        <ul className="space-y-2 mb-4">
                          {category.services.map((service, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-300 flex items-center group hover:text-pink-400 transition-colors duration-300 justify-center"
                            >
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-pink-400 transition-colors duration-300" />
                              {service}
                            </li>
                          ))}
                        </ul>
                        <div className="text-center">
                          <span
                            className="text-purple-400 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(category.id);
                            }}
                          >
                            <span>←</span>
                            Click to flip back
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative px-6 py-3 rounded-full border transition-all duration-500 overflow-hidden group ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600 text-white shadow-lg shadow-purple-500/30"
                        : "border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 font-semibold">
                      {category.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredServices.map((service, index) => (
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
                        {/* Banner Image */}
                        {service.bannerImage && (
                          <div className="relative h-32 overflow-hidden rounded-t-xl">
                            <Image
                              src={service.bannerImage}
                              alt={service.title}
                              width={400}
                              height={128}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute top-2 right-2 text-2xl backdrop-blur-sm bg-white/10 p-1 rounded-lg">
                              {service.image}
                            </div>
                          </div>
                        )}

                        {/* Fallback for services without banner image */}
                        {!service.bannerImage && (
                          <div
                            className={`relative h-32 overflow-hidden rounded-t-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                          >
                            <div className="text-6xl opacity-30">
                              {service.image}
                            </div>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-2 right-2 text-2xl backdrop-blur-sm bg-white/10 p-1 rounded-lg">
                              {service.image}
                            </div>
                          </div>
                        )}

                        <div className="relative z-10 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <motion.h3
                              className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              {service.title}
                            </motion.h3>
                          </div>

                          <motion.p
                            className="text-gray-300 mb-6 line-clamp-2"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {service.description}
                          </motion.p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.features
                              .slice(0, 3)
                              .map((feature, idx) => (
                                <motion.span
                                  key={idx}
                                  className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                                  whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                                    borderColor: "rgba(168, 85, 247, 0.6)",
                                  }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1 * idx }}
                                >
                                  {feature}
                                </motion.span>
                              ))}
                          </div>

                          <div className="flex justify-between items-center">
                            <motion.span
                              className="text-sm text-gray-400"
                              whileHover={{ color: "#a855f7" }}
                            >
                              {service.deliveryTime}
                            </motion.span>

                            <motion.button
                              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                              whileHover={{
                                scale: 1.05,
                                boxShadow:
                                  "0 10px 25px rgba(168, 85, 247, 0.4)",
                              }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open("tel:+91 9315153552", "_self");
                              }}
                            >
                              Get Quote
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <motion.section
            className="py-12 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Project?
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's discuss your requirements and create a custom solution
                that fits your budget and timeline perfectly.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40 flex items-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("tel:+91 9315153552", "_self")}
                >
                  <span>📞</span>
                  Call for Custom Quote
                </motion.button>

                <motion.button
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#e879f9",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("mailto:vinaybeluga@gmail.com", "_self")
                  }
                >
                  <span>✉️</span>
                  Send Email
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* Testimonials */}
          <TestimonialsCarousel />

          {/* FAQ */}
          <FAQSection />
        </main>

        <Footer />
        <FloatingActionButton />

      </div>
    </PageWrapper>
  );
}

