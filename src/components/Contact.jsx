import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section_header } from "./Section_header";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [activeField, setActiveField] = useState(null);

    const contactMethods = [
        {
            icon: "💌",
            title: "Email",
            value: "hello@creative.dev",
            link: "mailto:hello@creative.dev",
            color: "from-rose-400 to-pink-500",
            description: "Drop me a line anytime"
        },
        {
            icon: "📞",
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
            color: "from-blue-400 to-cyan-500",
            description: "Mon-Fri, 9AM-6PM EST"
        },
    ];

    const socialLinks = [
        { name: "Dribbble", icon: "🎨", url: "#", color: "hover:bg-pink-500" },
        { name: "GitHub", icon: "⚡", url: "#", color: "hover:bg-gray-800" },
        { name: "LinkedIn", icon: "💼", url: "#", color: "hover:bg-blue-600" },
        { name: "Twitter", icon: "🐦", url: "#", color: "hover:bg-sky-500" },
        { name: "Instagram", icon: "📸", url: "#", color: "hover:bg-gradient-to-r from-purple-500 to-pink-500" },
    ];

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden text-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-rose-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <Section_header
                    section_title="Contact Me"
                    title="Let's Connect"
                    desc="Have a project, idea, or just want to say hello? Reach out and let’s start a conversation. I’m always open to collaborating on exciting web development projects."
                />


                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Contact Methods - Left Side */}
                    <motion.div
                        className="xl:col-span-1 space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                className="group block p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/80 hover:border-blue-500/50 shadow-sm hover:shadow-lg transition-all duration-500"
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {method.title}
                                        </h4>
                                        <p className="text-blue-600 font-semibold text-lg mt-1">{method.value}</p>
                                        <p className="text-slate-500 text-sm mt-2">{method.description}</p>
                                    </div>
                                    <div className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:translate-x-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <div className="pt-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-center">Connect With Me</h4>
                            <div className="flex justify-center gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className={`w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg text-slate-500 border border-slate-200/80 transition-all duration-300 ${social.color} hover:text-white hover:shadow-md`}
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        className="xl:col-span-2 bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/80 shadow-md"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Form Header */}
                            <div className="lg:col-span-2">
                                <h3 className="text-4xl font-black text-slate-900 mb-3">
                                    Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project</span>
                                </h3>
                                <p className="text-slate-600 text-lg">
                                    Tell me about your idea and let's make it happen together.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <input
                                            type="text" name="name" value={formData.name} onChange={handleChange}
                                            onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)}
                                            placeholder="Your Name" required
                                            className="w-full px-6 py-4 bg-slate-100/50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-500 transition-all duration-300"
                                        />
                                        {activeField === 'name' && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                                                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email" name="email" value={formData.email} onChange={handleChange}
                                            onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)}
                                            placeholder="Email Address" required
                                            className="w-full px-6 py-4 bg-slate-100/50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-500 transition-all duration-300"
                                        />
                                        {activeField === 'email' && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                                                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text" name="subject" value={formData.subject} onChange={handleChange}
                                        onFocus={() => setActiveField('subject')} onBlur={() => setActiveField(null)}
                                        placeholder="Project Type" required
                                        className="w-full px-6 py-4 bg-slate-100/50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-500 transition-all duration-300"
                                    />
                                    {activeField === 'subject' && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"
                                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="message" value={formData.message} onChange={handleChange}
                                        onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)}
                                        placeholder="Tell me about your project vision, timeline, and any specific requirements..."
                                        rows="6" required
                                        className="w-full px-6 py-4 bg-slate-100/50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-500 transition-all duration-300 resize-none"
                                    />
                                    {activeField === 'message' && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>

                                <motion.button
                                    type="submit" disabled={isSubmitting}
                                    className="w-full py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span className="text-lg">Crafting Your Message...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-lg">Launch Project</span>
                                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                {success && (
                                    <motion.div
                                        className="mt-6 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-700 text-center backdrop-blur-sm"
                                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold">Message Sent! I'll get back to you within 24 hours.</span>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Quick Stats */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {[
                        { number: "24h", label: "Response Time", emoji: "⚡" },
                        { number: "50+", label: "Projects", emoji: "🚀" },
                        { number: "100%", label: "Satisfaction", emoji: "⭐" },
                        { number: "3+", label: "Years", emoji: "🎯" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/80 hover:border-blue-500/50 shadow-sm hover:shadow-lg transition-all duration-300"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="text-2xl mb-2">{stat.emoji}</div>
                            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </div>
                            <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
