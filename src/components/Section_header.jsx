import React from 'react';
import { motion } from "framer-motion";

export const Section_header = ({ section_title, title, desc }) => {
    return (
        <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-blue-500 font-semibold tracking-wider">{section_title}</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-blue-600 mb-6">
                {title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
};
