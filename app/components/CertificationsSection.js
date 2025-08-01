"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CertificationsSection() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      id: 1,
      name: "Geodata Processing using Python and Machine Learning",
      issuer: "Geospatial Institute",
      category: "data-science",
      date: "2024-12",
      credentialId: "GI-GDPML-2024-VK",
      level: "Professional",
      skills: ["Python", "Machine Learning", "Geodata Processing", "GIS", "Data Analysis", "Spatial Analytics"],
      description: "Advanced certification in geodata processing techniques using Python and machine learning algorithms",
      badge: "🌍",
      color: "from-green-600 to-teal-600",
      verified: true,
      expiry: "Never",
      projects: 2,
      link: "/certificates/Geodata-Processing-using-Python-and-Machine-Learning.pdf"
    },
    {
      id: 2,
      name: "Space Technology for Disaster Risk Reduction",
      issuer: "Space Technology Institute",
      category: "technology",
      date: "2024-12",
      credentialId: "STI-DRR-2024-VK",
      level: "Professional",
      skills: ["Space Technology", "Disaster Management", "Risk Assessment", "Satellite Systems", "Emergency Response"],
      description: "Advanced certification in space technology applications for disaster risk reduction and emergency management",
      badge: "🛰️",
      color: "from-purple-600 to-blue-600",
      verified: true,
      expiry: "Never",
      projects: 1,
      link: "/certificates/Space-Technology-for-Disaster-Risk-Reduction.pdf"
    },
    {
      id: 3,
      name: "HP Life Business Email Certificate",
      issuer: "HP Life",
      category: "business",
      date: "2024-12",
      credentialId: "HP-LIFE-EMAIL-2024-VK",
      level: "Professional",
      skills: ["Business Communication", "Email Management", "Professional Writing", "Digital Etiquette", "Productivity"],
      description: "Professional certification in business email communication and digital workplace skills",
      badge: "📧",
      color: "from-blue-600 to-indigo-600",
      verified: true,
      expiry: "Never",
      projects: 2,
      link: "/certificates/VINAY-HP-Life-Business-Email-certificate.pdf"
    },
    {
      id: 4,
      name: "PWC Power BI Certificate",
      issuer: "PricewaterhouseCoopers (PWC)",
      category: "data-science",
      date: "2024-12",
      credentialId: "PWC-PBI-2024-VK",
      level: "Professional",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "DAX", "Data Modeling", "Analytics"],
      description: "Professional certification in Microsoft Power BI for business intelligence and data visualization",
      badge: "📊",
      color: "from-yellow-600 to-orange-600",
      verified: true,
      expiry: "Never",
      projects: 3,
      link: "/certificates/PWC-PWER-BI-CERTIFICATE-VINAY.pdf"
    },
    {
      id: 5,
      name: "JAL Jeevan Mission Certificate",
      issuer: "Government of India",
      category: "technology",
      date: "2024-12",
      credentialId: "JAL-JM-2024-VK",
      level: "Professional",
      skills: ["Water Management", "Rural Development", "Project Management", "Government Schemes", "Public Policy"],
      description: "Certificate in JAL Jeevan Mission for water supply and rural development initiatives",
      badge: "💧",
      color: "from-blue-600 to-cyan-600",
      verified: true,
      expiry: "Never",
      projects: 1,
      link: "/certificates/JAL-JEEVAN-MISSION_VINAY.pdf"
    },
    {
      id: 6,
      name: "DUCAT Certificate",
      issuer: "DUCAT Institute",
      category: "technology",
      date: "2024-12",
      credentialId: "DUCAT-2024-VK",
      level: "Professional",
      skills: ["Software Development", "Programming", "Technical Training", "IT Skills", "Computer Applications"],
      description: "Professional certificate from DUCAT Institute for software development and technical skills",
      badge: "💻",
      color: "from-indigo-600 to-purple-600",
      verified: true,
      expiry: "Never",
      projects: 2,
      link: "/certificates/DUCAT-VINAY.pdf"
    },
    {
      id: 7,
      name: "Youth Empowerment for Sustainable Social and Educational Development",
      issuer: "Educational Development Institute",
      category: "business",
      date: "2024-12",
      credentialId: "YESED-2024-VK",
      level: "Professional",
      skills: ["Youth Development", "Social Impact", "Educational Leadership", "Sustainability", "Community Development"],
      description: "Certificate in youth empowerment focusing on sustainable social and educational development initiatives",
      badge: "🌱",
      color: "from-green-600 to-emerald-600",
      verified: true,
      expiry: "Never",
      projects: 1,
      link: "/certificates/Youth-Empowerment-for-sustainable-Social-and-Educational-Development.pdf"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Professional": return "text-blue-400";
      case "Associate": return "text-green-400";
      case "Foundational": return "text-yellow-400";
      default: return "text-gray-400";
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case "Professional": return "🏆";
      case "Associate": return "🥈";
      case "Foundational": return "🥉";
      default: return "📜";
    }
  };

  const isExpiringSoon = (expiry) => {
    if (expiry === "Never") return false;
    const expiryDate = new Date(expiry);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiryDate < sixMonthsFromNow;
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
            Certifications &
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${cert.color} p-[1px] rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="bg-gray-900/95 rounded-2xl p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="text-3xl"
                        animate={hoveredCert === cert.id ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {cert.badge}
                      </motion.div>
                      <div>
                        <div className={`flex items-center gap-2 mb-1`}>
                          <span className={`text-sm ${getLevelColor(cert.level)}`}>
                            {getLevelIcon(cert.level)} {cert.level}
                          </span>
                          {cert.verified && (
                            <span className="text-green-400 text-sm">✓</span>
                          )}
                        </div>
                        {isExpiringSoon(cert.expiry) && (
                          <div className="text-yellow-400 text-xs mb-1">⚠️ Expires Soon</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title and Issuer */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4 flex-1">
                    <div className="text-xs text-gray-400 mb-2">Skills Covered</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 4).map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700/30 text-xs text-gray-400 rounded-md">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="space-y-3">
                    {/* Stats */}
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{cert.projects}</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-400">
                          {new Date(cert.date).getFullYear()}
                        </div>
                        <div className="text-xs text-gray-400">Obtained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-green-400">
                          {cert.expiry === "Never" ? "∞" : new Date(cert.expiry).getFullYear()}
                        </div>
                        <div className="text-xs text-gray-400">Expires</div>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Credential ID</div>
                      <div className="text-xs font-mono text-gray-300">{cert.credentialId}</div>
                    </div>

                    {/* View Certificate Button */}
                    <motion.button
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-r ${cert.color} text-white hover:shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (cert.link && cert.link !== "#") {
                          window.open(cert.link, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      disabled={!cert.link || cert.link === "#"}
                    >
                      {cert.link && cert.link !== "#" ? "View Certificate" : "Certificate Coming Soon"}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-20 -z-10`}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certification Overview</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{certifications.length}</div>
              <div className="text-gray-400">Total Certs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {certifications.filter(c => c.level === "Professional").length}
              </div>
              <div className="text-gray-400">Professional</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {certifications.filter(c => c.verified).length}
              </div>
              <div className="text-gray-400">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {new Date().getFullYear() - Math.min(...certifications.map(c => new Date(c.date).getFullYear()))}
              </div>
              <div className="text-gray-400">Years Active</div>
            </div>
          </div>

          {/* Certification Timeline */}
          <div className="relative">
            <div className="text-lg font-semibold text-white mb-4">Recent Achievements</div>
            <div className="space-y-3">
              {certifications
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 4)
                .map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-lg"
                  >
                    <div className="text-2xl">{cert.badge}</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{cert.name}</div>
                      <div className="text-gray-400 text-sm">{cert.issuer}</div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

