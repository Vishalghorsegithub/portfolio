import React from 'react';
import { motion } from 'framer-motion';

function AnimatedButtonFramer() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }} // Animation on hover
      whileTap={{ scale: 0.9 }} // Animation on click/tap
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Click Me (Framer Motion)
    </motion.button>
  );
}

export default AnimatedButtonFramer;