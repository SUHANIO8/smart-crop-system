// src/components/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
