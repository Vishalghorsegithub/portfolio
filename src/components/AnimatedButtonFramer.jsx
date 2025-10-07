import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function AnimatedButtonWithIcon({ name }) {
  const iconVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        borderRadius: "37px", // custom rounded corners
        backgroundColor: "hwb(210deg 95.69% 1.96%)", // custom HWB background
        color: "dark", // text color
      }}
      className="flex items-center gap-3 px-6 py-3 shadow-lg overflow-hidden relative"
    >
      <span>{name}</span>
      <motion.div
        className="flex items-center"
        variants={iconVariants}
        initial="hidden"
        whileHover="visible"
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <FaArrowRight />
      </motion.div>
    </motion.button>
  );
}

export default AnimatedButtonWithIcon;
