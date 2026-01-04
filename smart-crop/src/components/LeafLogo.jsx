import React from 'react'

const LeafLogo = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20.2 3.8C20.2 3.8 18.5 11 11 16C8 18.5 5 19 5 19S5.5 16 8 13C12.5 7.5 19 3.8 19 3.8Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M5 19C7.5 16.5 10.5 13.5 14 10.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LeafLogo