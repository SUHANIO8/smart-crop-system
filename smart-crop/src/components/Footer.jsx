// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#dcfce7] text-[#1a4d2e] pt-20 pb-10 border-t border-[#c6f0d6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            {/* Leaf Icon matching screenshot */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#1a4d2e]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#1a4d2e]">SmartCrop</span>
          </Link>
          <p className="text-[#2f5e4e] text-sm leading-relaxed max-w-xs">
            Revolutionizing agriculture through intelligent soil monitoring and data-driven insights for sustainable farming.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-lg font-medium mb-6 text-[#1a4d2e]">Navigation</h4>
          <ul className="space-y-4 text-[#2f5e4e] text-sm font-medium">
            <li><Link to="/" className="hover:text-[#1a4d2e] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#1a4d2e] transition-colors">About</Link></li>
            <li><Link to="/technology" className="hover:text-[#1a4d2e] transition-colors">Technology</Link></li>
            {/* <li><Link to="/forum" className="hover:text-[#1a4d2e] transition-colors">Forum</Link></li> */}
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="text-lg font-medium mb-6 text-[#1a4d2e]">Resources</h4>
          <ul className="space-y-4 text-[#2f5e4e] text-sm font-medium">
            <li><a href="#" className="hover:text-[#1a4d2e] transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-[#1a4d2e] transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-[#1a4d2e] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-lg font-medium mb-6 text-[#1a4d2e]">Contact</h4>
          <ul className="space-y-4 text-[#2f5e4e] text-sm font-medium">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2d8a5b]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>info@smartcrop.tech</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2d8a5b]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </li>
            {/* <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2d8a5b]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg> */}
              {/* <span>Silicon Valley, CA</span> */}
            {/* </li> */}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#bbf7d0] text-center">
        <p className="text-[#4b7a68] text-sm">
          &copy; 2025 SmartCrop Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;