// src/components/Button.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        w-full
        px-8
        py-4
        bg-[#2d8a5b]
        hover:bg-[#24704a]
        text-white
        rounded-full
        text-lg
        font-semibold
        flex
        items-center
        justify-center
        gap-2
        shadow-md
        hover:shadow-lg
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2
        focus:ring-[#2d8a5b]/50
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
