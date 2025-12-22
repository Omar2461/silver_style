"use client";

import { motion } from "framer-motion";

function ScrollAnimation({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
