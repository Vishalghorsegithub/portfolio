import React from "react";
import { motion } from "framer-motion";
import { Section_header } from "./Section_header";

const projects = [
    {
        title: "Portfolio Website",
        description: "Responsive portfolio website built with React and Tailwind CSS.",
        image: "https://marketplace.canva.com/EAFuW7og53c/3/0/1600w/canva-white-and-orange-simple-portfolio-presentation-iDFcwvk0wOs.jpg",
        live: "#",
        github: "#",
        tags: ["React", "Tailwind CSS", "Responsive"],
    },
    {
        title: "E-commerce App",
        description: "Full-stack e-commerce app using React, Node.js, Express & MongoDB.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/009/009/154/small_2x/woman-online-shopping-on-smartphone-with-shopping-bag-and-carton-box-template-banner-poster-for-promotion-in-online-store-e-commerce-isolated-in-orange-background-vector.jpg",
        live: "#",
        github: "#",
        tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    },
    {
        title: "Task Manager App",
        description: "Productivity app to manage tasks with React and localStorage.",
        image: "https://www.shutterstock.com/image-vector/landing-page-task-manager-vector-260nw-1455326177.jpg",
        live: "#",
        github: "#",
        tags: ["React", "Productivity", "LocalStorage"],
    },
    {
        title: "Blog Platform",
        description: "A blogging platform with rich text editor, React & Firebase.",
        image: "https://dynamic.design.com/template/preview/design/dc13f4cf-90c5-4603-ac32-3aa7fa620e4c/fc3c0eca-016f-4f8a-b5dc-128ca11f7a6a?v=4&designTemplateVersion=1&logoTemplateVersion=6&size=design-preview-tall-2x",
        live: "#",
        github: "#",
        tags: ["React", "Firebase", "Blog"],
    },
    {
        title: "Weather App",
        description: "Weather forecasting app using React & OpenWeather API.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        live: "#",
        github: "#",
        tags: ["React", "API", "Weather"],
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-first fitness tracking application with workout analytics.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        live: "#",
        github: "#",
        tags: ["React Native", "Health", "Analytics"],
    },
];

const Projects = () => {
    return (
        <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
            <div className="container mx-auto px-6">
                {/* Section Heading */}

                <Section_header
                    section_title="PROJECTS"
                    title="My Projects"
                    desc="A curated collection of my recent work, demonstrating my expertise in modern web development technologies, responsive design, and user-centric interfaces."
                />




                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Tags */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-slate-800 text-white text-center rounded-lg font-medium hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </motion.a>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-600 mb-6">Interested in working together?</p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Get In Touch</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;