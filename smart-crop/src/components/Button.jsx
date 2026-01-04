import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, onClick, type = 'button', className = '', disabled = false, ...props }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
