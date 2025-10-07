import React from "react";
import { motion } from "framer-motion";
import { Section_header } from "./Section_header";

const experiences = [
  {
    role: "Software Developer",
    company: "G-Infosoft Technology",
    duration: "2024 - Present",
    description:
      "Worked on full-stack web development using Node.js, React, and Tailwind CSS. Implemented APIs, managed databases, and enhanced UI/UX.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    type: "Full-time",
    location: "Remote",
    icon: "💻",
    achievements: ["Built 10+ REST APIs", "Improved performance by 40%", "Led a team of 3 developers"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Aculance IT Solutions",
    duration: "2023 - 2024",
    description:
      "Developed responsive web pages with React and Tailwind CSS. Focused on interactive UI components and smooth animations.",
    technologies: ["React", "JavaScript", "CSS3", "Framer Motion"],
    type: "Internship",
    location: "Hybrid",
    icon: "🎨",
    achievements: ["Created 15+ responsive components", "Reduced load time by 30%", "Implemented dark mode feature"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2022 - 2023",
    description:
      "Built portfolio websites, landing pages, and small web applications for clients using modern web technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "WordPress"],
    type: "Freelance",
    location: "Remote",
    icon: "🚀",
    achievements: ["Delivered 20+ projects", "Maintained 100% client satisfaction", "Built 5+ e-commerce sites"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-white via-slate-50 to-white text-slate-800 relative">
      <div className="container mx-auto px-6">

        <Section_header section_title="CAREER JOURNEY"  title="Professional Path" desc="Tracing my growth through innovative companies and challenging projects that shaped my expertise in modern web technologies." />

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200 p-8 h-full shadow-md hover:shadow-lg transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-500 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full border border-slate-200">
                    {exp.type}
                  </span>
                </div>

                {/* Duration & Location */}
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-500 mb-3">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center gap-3 text-slate-700 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-500 mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
