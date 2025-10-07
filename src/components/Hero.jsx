import React from "react";
import { motion } from "framer-motion";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import AnimatedButtonWithIcon from "./AnimatedButtonFramer";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900"
        >
            {/* --- Navbar --- */}
            <nav className="w-full  py-4 pt-10 bg-gradient-to-br from-slate-50 to-slate-100 fixed top-0 left-0 z-50">
                <div className="container mx-auto flex justify-between items-center px-6">

                    <ul className="hidden md:flex gap-6 font-medium text-slate-700 list-none p-0 m-0">
                        {[
                            { name: "Home", href: "#home" },
                            { name: "About", href: "#about" },
                            { name: "Projects", href: "#portfolio" },
                            { name: "Skills", href: "#skills" },
                            { name: "Contact", href: "#contact" },
                        ].map((item, index) => (
                            <li key={index} className="relative group list-none">
                                <a
                                    href={item.href}
                                    className="no-underline"
                                >
                                    {item.name}
                                </a>
                                {/* Animated underline */}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>



                </div>
            </nav>

            {/* --- Hero Content --- */}
            <div className="flex-grow flex items-center justify-center pt-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Left Side - Text */}
                        <div className="space-y-6">
                            <h4 className="text-lg sm:text-xl text-blue-500">Hello, I'm</h4>

                            <TypingText
                                text={["Vishal Ghorse"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={false}
                                cursorCharacter="|"
                                className="text-4xl sm:text-5xl font-extrabold"
                                textColors={["#0ea5e9"]}
                                variableSpeed={{ min: 50, max: 120 }}
                            />

                            <br />
                            <TypingText
                                text={[
                                    "Full Stack Developer",
                                    "UI/UX Enthusiast",
                                    "Creative Coder",
                                ]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className="text-xl sm:text-2xl font-semibold text-slate-600"
                                textColors={["#2563eb", "#8b5cf6", "#06b6d4"]}
                                variableSpeed={{ min: 50, max: 120 }}
                            />

                            <p className="text-slate-700 leading-relaxed max-w-lg">
                                I create beautiful and functional websites with modern
                                technologies. Passionate about clean code, responsive design,
                                and seamless user experiences.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#portfolio"
                                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-2xl shadow-md transition-all duration-300"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 border border-slate-400 hover:bg-slate-200 text-slate-700 font-medium rounded-2xl transition-all duration-300"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            <img
                                src="https://placehold.co/400x400/e2e8f0/667eea?text=VG"
                                alt="Vishal Ghorse"
                                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
