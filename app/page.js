"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);
    // Generate particle positions only on client side
    setParticles([...Array(4)].map((_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      animationDelay: i * 1.5,
      animationDuration: 4 + Math.random() * 2,
    })));
  }, []);

  return (
    <PageWrapper>
      <div
        className="relative min-h-screen bg-black overflow-hidden select-none photo-hover-parent"
        style={{
          userSelect: "none",
          webkitUserSelect: "none",
          mozUserSelect: "none",
          msUserSelect: "none",
          webkitTouchCallout: "none",
          webkitTapHighlightColor: "transparent",
        }}
      >
        <BackgroundEffects variant="default" />

        {/* Advanced Aesthetic Header with Logo and Navigation */}
        {isClient && (
          <div className="blur-target">
            <Header />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1 blur-target">
                {/* Main content with enhanced layout */}
                <div className="max-w-4xl mx-auto lg:mx-0 relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float hidden lg:block"></div>
                  <div
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Greeting with enhanced styling */}
                  <div
                    className="mb-8 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full">
                      <span className="text-green-400 font-mono">
                        &lt;/&gt;
                      </span>
                      <span className="text-blue-400 text-lg lg:text-xl font-mono">
                        Hey there!
                      </span>
                      <span className="inline-block animate-wave text-2xl">
                        👋
                      </span>
                    </div>
                  </div>

                  {/* Main introduction with enhanced typography */}
                  <div className="mb-8">
                    <h1
                      className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      I am{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] block lg:inline">
                        Vinay Kumar
                      </span>
                    </h1>

                    {/* Professional subtitle */}
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <p className="text-xl lg:text-2xl text-gray-300 font-light mb-6 leading-relaxed">
                        Crafting digital experiences with{" "}
                        <span className="text-blue-400 font-semibold">
                          passion
                        </span>{" "}
                        and{" "}
                        <span className="text-purple-400 font-semibold">
                          precision
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Enhanced skill boxes with better styling */}
                  <div
                    className="mb-12 animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <span
                        className="group px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-fade-in-up animate-glow-pulse"
                        style={{ animationDelay: "0.9s" }}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                          Full Stack
                        </span>
                      </span>
                      <span
                        className="group px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-300 font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 animate-fade-in-up"
                        style={{ animationDelay: "1.1s" }}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></span>
                          Developer
                        </span>
                      </span>
                      <span
                        className="group px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-fade-in-up"
                        style={{ animationDelay: "1.3s" }}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></span>
                          Content Creator
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Professional CTA section */}
                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                      <Link
                        href="/projects"
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-2 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">Explore My Work</span>
                        <svg
                          className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>

                      <Link
                        href="/services"
                        className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/40 flex items-center justify-center gap-2 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">Hire Me</span>
                        <svg
                          className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <a
                        href="https://www.linkedin.com/in/the-extremez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>

                      <a
                        href="https://github.com/Extremez-Surya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-gray-600/20 hover:border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>

                      <a
                        href="https://discord.gg/k4HCMSHSea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-400/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                        </svg>
                      </a>

                      <a
                        href="https://wa.me/9315153552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-green-600/20 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                        </svg>
                      </a>

                      <a
                        href="https://www.youtube.com/@theextremez2.0?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-red-600/20 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.instagram.com/vinni_ily_143/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/25"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Photo with VFX */}
              <div
                className="relative order-1 lg:order-2 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                  {/* Subtle Background Grid */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  {/* Photo Container with Professional Styling */}
                  <div className="relative group hover-photo-container">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    {/* Main photo container */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-1 group-hover:scale-125 group-hover:z-50 transition-all duration-700 ease-out">
                      <Image
                        src="/assets/mypic.png"
                        alt="Vinay Kumar"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-xl transition-all duration-700"
                        style={{ filter: "brightness(0.85)" }}
                      />

                      {/* Subtle inner border */}
                      <div className="absolute inset-1 rounded-xl border border-white/10 pointer-events-none"></div>
                    </div>

                    {/* Compact Speech Bubble */}
                    <div className="absolute -top-16 -left-12 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform group-hover:translate-y-2 z-50">
                      <div className="relative bg-gradient-to-br from-white/95 to-gray-100/95 backdrop-blur-md rounded-xl px-4 py-2 shadow-xl border border-gray-200/50 min-w-max">
                        <div className="text-center">
                          <p className="text-gray-800 font-bold text-sm mb-0">
                            Hey! It's{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              Vinay
                            </span>{" "}
                            ✨
                          </p>
                        </div>

                        {/* Speech bubble tail */}
                        <div className="absolute bottom-0 left-6 transform translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-white/95 drop-shadow-sm"></div>
                        </div>

                        {/* Glowing effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-lg -z-10"></div>
                      </div>
                    </div>

                    {/* Corner accent lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-500/60 rounded-tl-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-500/60 rounded-tr-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500/60 rounded-bl-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-500/60 rounded-br-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>

                  {/* Subtle Particle Effect */}
                  <div className="absolute inset-0 pointer-events-none group-hover:opacity-30 transition-all duration-500">
                    {isClient && particles.map((particle) => (
                      <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-particle-float"
                        style={{
                          left: `${particle.left}%`,
                          top: `${particle.top}%`,
                          animationDelay: `${particle.animationDelay}s`,
                          animationDuration: `${particle.animationDuration}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Status indicator */}
                  {/* Clearer Online Status */}
                  <div className="absolute top-4 left-4 z-40">
                    <div className="flex items-center bg-green-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border border-green-400/50">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </PageWrapper>
  );
}

