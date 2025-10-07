import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
    };

    const socialLinks = [
        { icon: "💻", url: "#" },
        { icon: "🐦", url: "#" },
        { icon: "🎨", url: "#" },
        { icon: "📸", url: "#" },
    ];

    const quickLinks = [
        { label: "Home", url: "#" },
        { label: "About", url: "#" },
        { label: "Projects", url: "#" },
        { label: "Experience", url: "#" },
        { label: "Contact", url: "#" },
    ];

    return (
        <footer className="relative bg-slate-900 text-white pt-16 pb-8 overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Description */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        MyPortfolio
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        Crafting modern web experiences with React, Node.js, and Tailwind CSS. Follow my work and stay connected.
                    </p>
                    <div className="flex gap-4 mt-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                                whileHover={{ scale: 1.2 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Subscribe</h3>
                    <p className="text-slate-400 text-sm">
                        Get updates about my latest projects and articles.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-black"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:brightness-110 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                    {subscribed && (
                        <motion.div
                            className="mt-2 text-green-400 text-sm"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            ✅ Successfully subscribed!
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-5 h-5 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
        </footer>
    );
};

export default Footer;
