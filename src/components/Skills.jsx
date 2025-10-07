import React from "react";
import { motion } from "framer-motion";
import { Section_header } from "./Section_header";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Database Design", icon: <FaDatabase /> },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center py-20 text-slate-800 bg-white"
        >
            <div className="container mx-auto px-6 text-center">
                {/* Section Heading */}





                <Section_header
                    section_title="MY EXPERTISE"
                    title="Technical Skills"
                    desc="Here are the technologies and tools I work with to build modern, responsive, and high-performance web applications. I continuously learn and adapt to stay ahead in the ever-evolving web development landscape."
                />






              

                {/* Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            {/* Background Image + Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                                style={{
                                    backgroundImage:
                                        "url('https://static.vecteezy.com/system/resources/thumbnails/038/957/231/small_2x/ai-generated-elegant-pink-balloon-and-ribbon-happy-birthday-celebration-card-banner-template-background-photo.jpg')",
                                    opacity: 0.7,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-50/30 to-purple-50/40 rounded-2xl"></div>

                            {/* Content */}
                            <div className="relative flex flex-col items-center justify-center z-10">
                                {/* Animated Icon */}
                                <motion.div
                                    className="text-5xl mb-3"
                                    animate={{
                                        color: [
                                            "#f87171", // red
                                            "#fbbf24", // yellow
                                            "#34d399", // green
                                            "#60a5fa", // blue
                                            "#a78bfa", // purple
                                        ],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "linear",
                                    }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
