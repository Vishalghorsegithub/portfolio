import React from "react";
import { motion } from "framer-motion";
import { Section_header } from "./Section_header";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 text-slate-900 "
        >




            <div className="container ">

                <Section_header
                    section_title="ABOUT ME"
                    title="Who I Am"
                    desc="Passionate web developer with a focus on building modern, responsive, and user-friendly web applications. I combine creativity and technical expertise to turn ideas into reality, delivering high-quality solutions that solve real-world problems."
                />


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex justify-start"
                    >
                        <img
                            src="https://placehold.co/400x400/93c5fd/1e40af?text=About+Me"
                            alt="About Vishal Ghorse"
                            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        />
                    </motion.div>

                    {/* Right Side - Text */}
                    <div>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            I'm <span className="font-semibold text-blue-500">Vishal Ghorse</span>,
                            a passionate <strong>Full Stack Developer</strong> who loves building
                            creative and scalable web applications.
                        </p>

                        <p className="text-slate-700 leading-relaxed mb-6">
                            I enjoy solving real-world problems with clean, efficient code and
                            bringing ideas to life through interactive and user-friendly designs.
                            My goal is to continuously learn and contribute to impactful projects.
                        </p>

                        <ul className="grid grid-cols-2 gap-y-2 mb-8 text-slate-700">
                            <li>⚡ JavaScript / Node.js</li>
                            <li>⚡ React / Vite</li>
                            <li>⚡ Tailwind / Shadcn UI</li>
                            <li>⚡ MySQL / MongoDB</li>
                            <li>⚡ CodeIgniter / Express.js</li>
                            <li>⚡ REST APIs / JWT Auth</li>
                        </ul>

                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-2xl shadow-md transition-all duration-300"
                        >
                            Let's Connect
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
